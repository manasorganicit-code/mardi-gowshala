import Razorpay from "razorpay";
import { prisma } from "@/lib/prisma";
import { getPlanIdForAmount, SUBSCRIPTION_TOTAL_COUNT } from "@/lib/razorpay-plans";
import type { DonationFormValues, PresetAmount } from "@/lib/validations/donation-form";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function createRecurringSubscription(data: DonationFormValues) {
  const planId = getPlanIdForAmount(data.amount as PresetAmount);

  const subscription = await razorpay.subscriptions.create({
    plan_id: planId,
    total_count: SUBSCRIPTION_TOTAL_COUNT,
    quantity: 1,
    customer_notify: 1,
    notes: { purpose: data.purpose, donorEmail: data.email },
  });

  const mandate = await prisma.recurringMandate.create({
    data: {
      razorpaySubscriptionId: subscription.id,
      donorName: data.donorName,
      email: data.email,
      phone: data.phone,
      frequency: "MONTHLY",
      status: "PENDING",
    },
  });

  const donation = await prisma.donation.create({
    data: {
      donorName: data.donorName,
      email: data.email,
      phone: data.phone,
      amount: data.amount,
      purpose: data.purpose,
      type: "RECURRING",
      status: "PENDING",
      message: data.message,
      mandateId: mandate.id,
    },
  });

  return {
    donationId: donation.id,
    razorpaySubscriptionId: subscription.id,
    razorpayKeyId: process.env.RAZORPAY_KEY_ID,
  };
}