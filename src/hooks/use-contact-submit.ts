"use client";

import { useState, useRef } from "react";
import type { ContactFormValues } from "@/lib/validations/contact-form";

type SubmitStatus = "idle" | "success" | "error";

export function useContactSubmit() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmittingRef = useRef(false);

  async function submitContactRequest(data: ContactFormValues) {
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.error ?? "Could not send your message");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      isSubmittingRef.current = false;
    }
  }

  function resetStatus() {
    setStatus("idle");
    setErrorMessage("");
  }

  return { submitContactRequest, status, errorMessage, resetStatus };
}