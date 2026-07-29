import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export async function verifyOneTimePayment(input: {
  donationId: string;
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}) {
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(`${input.razorpayOrderId}|${input.razorpayPaymentId}`)
    .digest("hex");

  const isValid = expectedSignature === input.razorpaySignature;

  const donation = await prisma.donation.update({
    where: { id: input.donationId },
    data: isValid
      ? {
          status: "SUCCESS",
          razorpayPaymentId: input.razorpayPaymentId,
          razorpaySignature: input.razorpaySignature,
        }
      : { status: "FAILED" },
  });

  return { isValid, donation };
}