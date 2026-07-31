import { prisma } from "@/lib/prisma";

const STATUS_MAP: Record<string, "ACTIVE" | "PAUSED" | "CANCELLED"> = {
  "subscription.activated": "ACTIVE",
  "subscription.resumed": "ACTIVE",
  "subscription.paused": "PAUSED",
  "subscription.cancelled": "CANCELLED",
  "subscription.halted": "CANCELLED",
};

export async function handleSubscriptionStatusUpdate(
  event: string,
  payload: { payload: { subscription: { entity: { id: string } } } }
) {
  const newStatus = STATUS_MAP[event];
  if (!newStatus) return;

  const subscriptionId = payload.payload.subscription.entity.id;

  await prisma.recurringMandate.updateMany({
    where: { razorpaySubscriptionId: subscriptionId },
    data: { status: newStatus },
  });
}