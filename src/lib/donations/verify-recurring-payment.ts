import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export async function verifyRecurringPayment(input: {
  donationId: string;
  razorpaySubscriptionId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}) {
  // Note: order is payment_id first, then subscription_id — opposite of order-based verification
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(`${input.razorpayPaymentId}|${input.razorpaySubscriptionId}`)
    .digest("hex");

  const isValid = expectedSignature === input.razorpaySignature;

  const donation = await prisma.donation.findUnique({ where: { id: input.donationId } });
  if (!donation?.mandateId) {
    throw new Error("Donation has no associated recurring mandate");
  }

  await prisma.recurringMandate.update({
    where: { id: donation.mandateId },
    data: { status: isValid ? "ACTIVE" : "CANCELLED" },
  });

  const updatedDonation = await prisma.donation.update({
    where: { id: input.donationId },
    data: isValid
      ? {
          status: "SUCCESS",
          razorpayPaymentId: input.razorpayPaymentId,
          razorpaySignature: input.razorpaySignature,
        }
      : { status: "FAILED" },
  });

  return { isValid, donation: updatedDonation };
}