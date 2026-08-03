"use client";

import Link from "next/link";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import type { DonationFormValues } from "@/lib/validations/donation-form";

export function TermsAgreementField({
  register,
  errors,
}: {
  register: UseFormRegister<DonationFormValues>;
  errors: FieldErrors<DonationFormValues>;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-start gap-2 text-sm text-muted-foreground">
        <input
          type="checkbox"
          className="mt-0.5 size-4 shrink-0"
          {...register("agreedToTerms")}
        />
        <span>
          I agree to the{" "}
          <Link href="/terms" target="_blank" className="text-primary underline underline-offset-4">
            Terms &amp; Conditions
          </Link>
          ,{" "}
          <Link href="/privacy-policy" target="_blank" className="text-primary underline underline-offset-4">
            Privacy Policy
          </Link>
          , and{" "}
          <Link href="/refund-policy" target="_blank" className="text-primary underline underline-offset-4">
            Refund Policy
          </Link>
        </span>
      </label>
      {errors.agreedToTerms && (
        <p className="text-xs text-destructive">{errors.agreedToTerms.message}</p>
      )}
    </div>
  );
}