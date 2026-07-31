import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { timingSafeEqualStrings } from "@/lib/crypto-utils";
import type { Donation } from "@/generated/prisma/client";

type VerifyResult =
  | { isValid: true; donation: Donation }
  | { isValid: false; donation: null };

export async function verifyOneTimePayment(input: {
  donationId: string;
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}): Promise<VerifyResult> {
  const donation = await prisma.donation.findUnique({ where: { id: input.donationId } });

  // donationId and razorpayOrderId both come from the client — confirm they
  // actually belong together before trusting anything further.
  if (!donation || donation.razorpayOrderId !== input.razorpayOrderId) {
    return { isValid: false, donation: null };
  }

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(`${input.razorpayOrderId}|${input.razorpayPaymentId}`)
    .digest("hex");

  const isValid = timingSafeEqualStrings(expectedSignature, input.razorpaySignature);

  if (!isValid) {
    await prisma.donation.update({ where: { id: input.donationId }, data: { status: "FAILED" } });
    return { isValid: false, donation: null };
  }

  const updated = await prisma.donation.update({
    where: { id: input.donationId },
    data: {
      status: "SUCCESS",
      razorpayPaymentId: input.razorpayPaymentId,
      razorpaySignature: input.razorpaySignature,
    },
  });

  return { isValid: true, donation: updated };
}