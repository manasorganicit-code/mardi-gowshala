"use client";

import { Control, Controller, UseFormSetValue } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SUBJECT_OPTIONS,
  GHEE_MESSAGE_TEMPLATE,
  type ContactFormValues,
  type ContactSubject,
} from "@/lib/validations/contact-form";

export function SubjectField({
  control,
  setValue,
}: {
  control: Control<ContactFormValues>;
  setValue: UseFormSetValue<ContactFormValues>;
}) {
  function handleSubjectChange(value: ContactSubject, onChange: (value: ContactSubject) => void) {
    onChange(value);
    setValue("message", value === "GHEE_PURCHASE" ? GHEE_MESSAGE_TEMPLATE : "", {
      shouldValidate: false,
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <Label>Subject</Label>
      <Controller
        control={control}
        name="subject"
        render={({ field }) => (
          <Select
            items={SUBJECT_OPTIONS}
            value={field.value}
            onValueChange={(value) => handleSubjectChange(value as ContactSubject, field.onChange)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              {SUBJECT_OPTIONS.map((opt) => (
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