import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/donations/verify-webhook-signature";
import { handleSubscriptionCharged } from "@/lib/donations/handle-subscription-charged";
import { handleSubscriptionStatusUpdate } from "@/lib/donations/handle-subscription-status-update";

const STATUS_EVENTS = [
  "subscription.activated",
  "subscription.resumed",
  "subscription.paused",
  "subscription.cancelled",
  "subscription.halted",
];

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-razorpay-signature");

  if (!signature || !verifyWebhookSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const body = JSON.parse(rawBody);
  const event = body.event as string;

  try {
    if (event === "subscription.charged") {
      await handleSubscriptionCharged(body);
    } else if (STATUS_EVENTS.includes(event)) {
      await handleSubscriptionStatusUpdate(event, body);
    }
    // Unrecognized events are acknowledged but ignored — Razorpay only retries on non-2xx
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error processing Razorpay webhook:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}