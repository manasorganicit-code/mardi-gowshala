import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifyOneTimePayment } from "@/lib/donations/verify-one-time-payment";
import { verifyRecurringPayment } from "@/lib/donations/verify-recurring-payment";
import { sendDonationConfirmationEmail } from "@/lib/email/send-donation-confirmation";

const verifySchema = z.object({
  donationId: z.string().min(1),
  razorpayPaymentId: z.string().min(1),
  razorpaySignature: z.string().min(1),
  razorpayOrderId: z.string().optional(),
  razorpaySubscriptionId: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = verifySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: z.treeifyError(parsed.error) },
        { status: 400 }
      );
    }

    const { donationId, razorpayPaymentId, razorpaySignature, razorpayOrderId, razorpaySubscriptionId } =
      parsed.data;

    const result = razorpaySubscriptionId
      ? await verifyRecurringPayment({ donationId, razorpaySubscriptionId, razorpayPaymentId, razorpaySignature })
      : razorpayOrderId
        ? await verifyOneTimePayment({ donationId, razorpayOrderId, razorpayPaymentId, razorpaySignature })
        : null;

    if (!result) {
      return NextResponse.json({ error: "Missing order or subscription reference" }, { status: 400 });
    }

    if (!result.isValid) {
      return NextResponse.json({ error: "Payment verification failed" }, { status: 400 });
    }

    await sendDonationConfirmationEmail(result.donation);

    return NextResponse.json({ success: true, donation: result.donation });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json({ error: "Failed to verify payment" }, { status: 500 });
  }
}