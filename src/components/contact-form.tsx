"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactFields } from "@/components/contact/contact-fields";
import { SubjectField } from "@/components/contact/subject-field";
import { MessageField } from "@/components/contact/message-field";
import { ContactSuccess } from "@/components/contact/contact-success";
import { useContactSubmit } from "@/hooks/use-contact-submit";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact-form";

export function ContactForm() {
  const { submitContactRequest, status, errorMessage, resetStatus } = useContactSubmit();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { subject: "GENERAL_INQUIRY", message: "" },
  });

  function handleDismissSuccess() {
    resetStatus();
    reset();
  }

  if (status === "success") return <ContactSuccess onDismiss={handleDismissSuccess} />;

  return (
    <Card className="rounded-xl">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(submitContactRequest)} method="post" className="flex flex-col gap-6">
          <ContactFields register={register} errors={errors} />
          <SubjectField control={control} setValue={setValue} />
          <MessageField register={register} errors={errors} />

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
            className="w-full rounded-xl bg-gold text-white hover:bg-gold/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}