"use client";

import { useState } from "react";
import { loadRazorpayScript } from "@/lib/razorpay-checkout";
import type { DonationFormValues } from "@/lib/validations/donation-form";

type CheckoutStatus = "idle" | "success" | "error";

interface RazorpayHandlerResponse {
  razorpay_order_id?: string;
  razorpay_subscription_id?: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export function useDonationCheckout() {
  const [status, setStatus] = useState<CheckoutStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function startCheckout(data: DonationFormValues) {
    setStatus("idle");
    setErrorMessage("");

    try {
      const orderRes = await fetch("/api/donations/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const orderData = await orderRes.json();

      if (!orderRes.ok) {
        throw new Error(orderData.error ?? "Could not start the donation");
      }

      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error("Could not load the payment gateway. Check your connection.");
      }

      const razorpay = new window.Razorpay({
        key: orderData.razorpayKeyId,
        name: "Mardi Gowshala",
        description: data.type === "RECURRING" ? "Monthly Donation" : "Donation",
        ...(orderData.razorpaySubscriptionId
          ? { subscription_id: orderData.razorpaySubscriptionId }
          : { order_id: orderData.razorpayOrderId, amount: orderData.amount, currency: orderData.currency }),
        prefill: { name: data.donorName, email: data.email, contact: data.phone },
        theme: { color: "#D4A017" },
        handler: async (response: RazorpayHandlerResponse) => {
          const verifyRes = await fetch("/api/donations/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              donationId: orderData.donationId,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySubscriptionId: response.razorpay_subscription_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            }),
          });

          if (verifyRes.ok) {
            setStatus("success");
          } else {
            setStatus("error");
            setErrorMessage(
              "Payment was received but could not be verified. Please contact us with your payment ID."
            );
          }
        },
        modal: { ondismiss: () => {} },
      });

      razorpay.open();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  function resetStatus() {
    setStatus("idle");
    setErrorMessage("");
  }

  return { startCheckout, status, errorMessage, resetStatus };
}