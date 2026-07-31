import crypto from "crypto";
import { timingSafeEqualStrings } from "@/lib/crypto-utils";

export function verifyWebhookSignature(rawBody: string, signature: string): boolean {
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(rawBody)
    .digest("hex");

  return timingSafeEqualStrings(expectedSignature, signature);
}