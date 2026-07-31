import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { timingSafeEqualStrings } from "@/lib/crypto-utils";
import type { Donation } from "@/generated/prisma/client";

type VerifyResult =
  | { isValid: true; donation: Donation }
  | { isValid: false; donation: null };

export async function verifyRecurringPayment(input: {
  donationId: string;
  razorpaySubscriptionId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}): Promise<VerifyResult> {
  const donation = await prisma.donation.findUnique({
    where: { id: input.donationId },
    include: { mandate: true },
  });

  // Confirm the subscriptionId from the client actually belongs to this
  // donation's own mandate before trusting anything further.
  if (!donation?.mandate || donation.mandate.razorpaySubscriptionId !== input.razorpaySubscriptionId) {
    return { isValid: false, donation: null };
  }

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(`${input.razorpayPaymentId}|${input.razorpaySubscriptionId}`)
    .digest("hex");

  const isValid = timingSafeEqualStrings(expectedSignature, input.razorpaySignature);

  if (!isValid) {
    await prisma.recurringMandate.update({ where: { id: donation.mandate.id }, data: { status: "CANCELLED" } });
    await prisma.donation.update({ where: { id: input.donationId }, data: { status: "FAILED" } });
    return { isValid: false, donation: null };
  }

  await prisma.recurringMandate.update({ where: { id: donation.mandate.id }, data: { status: "ACTIVE" } });

  const updatedDonation = await prisma.donation.update({
    where: { id: input.donationId },
    data: {
      status: "SUCCESS",
      razorpayPaymentId: input.razorpayPaymentId,
      razorpaySignature: input.razorpaySignature,
    },
  });

  return { isValid: true, donation: updatedDonation };
}