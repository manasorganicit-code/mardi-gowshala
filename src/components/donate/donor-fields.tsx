"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { DonationFormValues } from "@/lib/validations/donation-form";

export function DonorFields({
  register,
  errors,
}: {
  register: UseFormRegister<DonationFormValues>;
  errors: FieldErrors<DonationFormValues>;
}) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Label htmlFor="donorName">Full Name</Label>
        <Input id="donorName" placeholder="Your name" {...register("donorName")} />
        {errors.donorName && (
          <p className="text-xs text-destructive">{errors.donorName.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" placeholder="+91" {...register("phone")} />
        {errors.phone && (
          <p className="text-xs text-destructive">{errors.phone.message}</p>
        )}
      </div>
    </>
  );
}