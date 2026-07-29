"use client";

import { Control, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { DonationFormValues } from "@/lib/validations/donation-form";

export function DonationTypeField({ control }: { control: Control<DonationFormValues> }) {
  return (
    <div className="flex flex-col gap-2">
      <Label>Frequency</Label>
      <div className="flex gap-2">
        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <>
              <Button
                type="button"
                variant={field.value === "ONE_TIME" ? "default" : "outline"}
                className="flex-1"
                onClick={() => field.onChange("ONE_TIME")}
              >
                One-time
              </Button>
              <Button
                type="button"
                variant={field.value === "RECURRING" ? "default" : "outline"}
                className="flex-1"
                onClick={() => field.onChange("RECURRING")}
              >
                Recurring (Monthly)
              </Button>
            </>
          )}
        />
      </div>
    </div>
  );
}