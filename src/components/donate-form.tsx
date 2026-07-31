"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PurposeField } from "@/components/donate/purpose-field";
import { AmountField } from "@/components/donate/amount-field";
import { DonationTypeField } from "@/components/donate/donation-type-field";
import { DonorFields } from "@/components/donate/donor-fields";
import { MessageField } from "@/components/donate/message-field";
import { DonationSuccess } from "@/components/donate/donation-success";
import { useDonationCheckout } from "@/hooks/use-donation-checkout";
import { donationFormSchema, type DonationFormValues } from "@/lib/validations/donation-form";

export function DonateForm() {
  const { startCheckout, status, errorMessage, resetStatus } = useDonationCheckout();

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: { purpose: "GENERAL", type: "ONE_TIME" },
  });

  const message = watch("message");

  function handleDismissSuccess() {
    resetStatus();
    reset();
  }

  if (status === "success") return <DonationSuccess onDismiss={handleDismissSuccess} />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
        <CardDescription>All amounts are in Indian Rupees (INR)</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(startCheckout)} method="post" className="flex flex-col gap-6">
          <PurposeField control={control} />
          <AmountField control={control} errors={errors} />
          <DonationTypeField control={control} />
          <DonorFields register={register} errors={errors} />
          <MessageField register={register} value={message} />

          {status === "error" && (
            <div className="flex items-start gap-2 bg-destructive/10 p-3 text-sm text-destructive">
              <AlertCircle className="mt-0.5 size-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-gold text-white hover:bg-gold/90"
          >
            {isSubmitting ? (
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