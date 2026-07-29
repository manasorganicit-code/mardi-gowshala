"use client";

import { Control, Controller, FieldErrors } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PRESET_AMOUNTS, type DonationFormValues } from "@/lib/validations/donation-form";

export function AmountField({
  control,
  errors,
}: {
  control: Control<DonationFormValues>;
  errors: FieldErrors<DonationFormValues>;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label>Amount</Label>
      <Controller
        control={control}
        name="amount"
        render={({ field }) => (
          <div className="grid grid-cols-3 gap-2">
            {PRESET_AMOUNTS.map((amount) => (
              <Button
                key={amount}
                type="button"
                variant={field.value === amount ? "default" : "outline"}
                onClick={() => field.onChange(amount)}
              >
                ₹{amount}
              </Button>
            ))}
          </div>
        )}
      />
      {errors.amount && <p className="text-xs text-destructive">{errors.amount.message}</p>}
    </div>
  );
}