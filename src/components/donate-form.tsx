"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PurposeField } from "@/components/donate/purpose-field";
import { AmountField } from "@/components/donate/amount-field";
import { DonationTypeField } from "@/components/donate/donation-type-field";
import { DonorFields } from "@/components/donate/donor-fields";
import { TermsAgreementField } from "@/components/donate/terms-agreement-field";
import { DonationSuccess } from "@/components/donate/donation-success";
import { useDonationCheckout } from "@/hooks/use-donation-checkout";
import { donationFormSchema, type DonationFormValues } from "@/lib/validations/donation-form";

export function DonateForm() {
  const { startCheckout, status, errorMessage, resetStatus, isProcessing } = useDonationCheckout();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: { purpose: "GENERAL", type: "ONE_TIME", agreedToTerms: false as unknown as true },
  });

  function handleDismissSuccess() {
    resetStatus();
    reset();
  }

  if (status === "success") return <DonationSuccess onDismiss={handleDismissSuccess} />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(startCheckout)} method="post" className="flex flex-col gap-6">
          <PurposeField control={control} />
          <AmountField control={control} errors={errors} />
          <DonationTypeField control={control} />
          <DonorFields register={register} errors={errors} />
          <TermsAgreementField register={register} errors={errors} />

          {status === "error" && (
            <div className="flex items-start gap-2 bg-destructive/10 p-3 text-sm text-destructive">
              <AlertCircle className="mt-0.5 size-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || isProcessing}
            className="w-full bg-gold text-white hover:bg-gold/90"
          >
            {isSubmitting || isProcessing ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Processing
              </>
            ) : (
              "Donate Now"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}