import Razorpay from "razorpay";
import { prisma } from "@/lib/prisma";
import type { DonationFormValues } from "@/lib/validations/donation-form";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function createOneTimeOrder(data: DonationFormValues, ipAddress: string) {
  const amountInPaise = Math.round(data.amount * 100);

  const razorpayOrder = await razorpay.orders.create({
    amount: amountInPaise,
    currency: "INR",
    notes: { purpose: data.purpose, type: data.type, donorEmail: data.email },
  });

  const donation = await prisma.donation.create({
    data: {
      donorName: data.donorName,
      email: data.email,
      phone: data.phone,
      ipAddress,
      amount: data.amount,
      purpose: data.purpose,
      type: "ONE_TIME",
      status: "PENDING",
      razorpayOrderId: razorpayOrder.id,
    },
  });

  return {
    donationId: donation.id,
    razorpayOrderId: razorpayOrder.id,
    razorpayKeyId: process.env.RAZORPAY_KEY_ID,
    amount: amountInPaise,
    currency: "INR",
  };
}