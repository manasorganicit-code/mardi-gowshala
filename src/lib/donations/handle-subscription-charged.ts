import { prisma } from "@/lib/prisma";

interface SubscriptionChargedPayload {
  payload: {
    subscription: { entity: { id: string } };
    payment: { entity: { id: string; amount: number } };
  };
}

export async function handleSubscriptionCharged(payload: SubscriptionChargedPayload) {
  const subscriptionId = payload.payload.subscription.entity.id;
  const paymentId = payload.payload.payment.entity.id;
  const amountInPaise = payload.payload.payment.entity.amount;

  const mandate = await prisma.recurringMandate.findUnique({
    where: { razorpaySubscriptionId: subscriptionId },
  });

  if (!mandate) {
    console.error(`No mandate found for subscription ${subscriptionId}`);
    return;
  }

  try {
    await prisma.donation.create({
      data: {
        donorName: mandate.donorName,
        email: mandate.email,
        phone: mandate.phone,
        amount: amountInPaise / 100,
        purpose: mandate.purpose,
        type: "RECURRING",
        status: "SUCCESS",
        razorpayPaymentId: paymentId,
        mandateId: mandate.id,
      },
    });
  } catch (error: unknown) {
    // Unique constraint on razorpayPaymentId — Razorpay retries webhook delivery
    // on non-2xx responses, so this charge may already be recorded. Safe to ignore.
    if (error && typeof error === "object" && "code" in error && error.code === "P2002") {
      console.log(`Charge ${paymentId} already recorded, skipping`);
      return;
    }
    throw error;
  }
}