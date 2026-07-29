"use client";

import { Control, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PURPOSE_OPTIONS, type DonationFormValues } from "@/lib/validations/donation-form";

export function PurposeField({ control }: { control: Control<DonationFormValues> }) {
  return (
    <div className="flex flex-col gap-2">
      <Label>Purpose</Label>
      <Controller
        control={control}
        name="purpose"
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a purpose" />
            </SelectTrigger>
            <SelectContent>
              {PURPOSE_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
}