"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormValues } from "@/lib/validations/contact-form";

export function MessageField({
  register,
  errors,
}: {
  register: UseFormRegister<ContactFormValues>;
  errors: FieldErrors<ContactFormValues>;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea
        id="message"
        placeholder="Tell us how we can help"
        rows={5}
        {...register("message")}
      />
      {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
    </div>
  );
}