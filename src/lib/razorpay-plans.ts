import type { PresetAmount } from "@/lib/validations/donation-form";

const PLAN_ID_BY_AMOUNT: Record<PresetAmount, string | undefined> = {
  101: process.env.RAZORPAY_PLAN_101_ID,
  501: process.env.RAZORPAY_PLAN_501_ID,
  1001: process.env.RAZORPAY_PLAN_1001_ID,
  2501: process.env.RAZORPAY_PLAN_2501_ID,
  5001: process.env.RAZORPAY_PLAN_5001_ID,
  7501: process.env.RAZORPAY_PLAN_7501_ID,
};

export function getPlanIdForAmount(amount: PresetAmount): string {
  const planId = PLAN_ID_BY_AMOUNT[amount];
  if (!planId) {
    throw new Error(`No Razorpay plan configured for amount ₹${amount}`);
  }
  return planId;
}

// 5 years of monthly billing cycles
export const SUBSCRIPTION_TOTAL_COUNT = 60;