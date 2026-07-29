"use client";

import { UseFormRegister } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { DonationFormValues } from "@/lib/validations/donation-form";

export function MessageField({
  register,
  value,
}: {
  register: UseFormRegister<DonationFormValues>;
  value?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="message">Message (optional)</Label>
        <span className="text-xs text-muted-foreground">{value?.length ?? 0}/300</span>
      </div>
      <Textarea
        id="message"
        placeholder="Add a note or dedication"
        maxLength={300}
        {...register("message")}
      />
    </div>
  );
}