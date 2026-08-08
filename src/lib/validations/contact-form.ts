import { z } from "zod";

export const SUBJECT_OPTIONS = [
  { value: "GENERAL_INQUIRY", label: "General Inquiry" },
  { value: "CALLBACK_REQUEST", label: "Request a Callback" },
  { value: "GHEE_PURCHASE", label: "Ghee Purchase" },
  { value: "GOSHALA_VISIT", label: "Goshala Visit" },
  { value: "DONATION_RELATED", label: "Donation Related" },
  { value: "OTHER", label: "Other" },
] as const;

export type ContactSubject = (typeof SUBJECT_OPTIONS)[number]["value"];

export const GHEE_MESSAGE_TEMPLATE = "Quantity in Kg: \nDetailed Address: ";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is too short").max(100),
  email: z.email("Enter a valid email address"),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Enter a valid phone number"),
  subject: z.enum([
    "GENERAL_INQUIRY",
    "CALLBACK_REQUEST",
    "GHEE_PURCHASE",
    "GOSHALA_VISIT",
    "DONATION_RELATED",
    "OTHER",
  ]),
  message: z.string().min(5, "Please add a few more details").max(2000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;