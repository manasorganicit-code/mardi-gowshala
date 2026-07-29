"use client";

import { Control, Controller, FieldErrors } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FREQUENCY_OPTIONS, type DonationFormValues } from "@/lib/validations/donation-form";

export function FrequencyField({
  control,
  type,
  errors,
}: {
  control: Control<DonationFormValues>;
  type: "ONE_TIME" | "RECURRING";
  errors: FieldErrors<DonationFormValues>;
}) {
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
                Recurring
              </Button>
            </>
          )}
        />
      </div>

      {type === "RECURRING" && (
        <Controller
          control={control}
          name="frequency"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 w-full">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                {FREQUENCY_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      )}
      {errors.frequency && (
        <p className="text-xs text-destructive">{errors.frequency.message}</p>
      )}
    </div>
  );
}