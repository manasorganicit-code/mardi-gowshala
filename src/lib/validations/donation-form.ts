import { z } from "zod";

export const PURPOSE_OPTIONS = [
  { value: "GENERAL", label: "General Support" },
  { value: "FEED", label: "Feed & Fodder" },
  { value: "SPECIAL_OCCASION", label: "Special Occasion" },
  { value: "MEMORIAL", label: "In Memory Of" },
  { value: "MAINTENANCE", label: "Shelter Maintenance" },
  { value: "OTHER", label: "Other" },
] as const;

export const PRESET_AMOUNTS = [101, 501, 1001, 2501, 5001, 7501] as const;
export type PresetAmount = (typeof PRESET_AMOUNTS)[number];

export const donationFormSchema = z.object({
  purpose: z.enum(["GENERAL", "FEED", "SPECIAL_OCCASION", "MEMORIAL", "MAINTENANCE", "OTHER"]),
  amount: z
    .number({ error: "Please select a donation amount" })
    .refine((val) => PRESET_AMOUNTS.includes(val as PresetAmount), {
      message: "Please select a donation amount",
    }),
  type: z.enum(["ONE_TIME", "RECURRING"]),
  donorName: z.string().min(2, "Name is too short").max(100),
  email: z.email("Enter a valid email address"),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Enter a valid phone number"),
  agreedToTerms: z.literal(true, {
    error: "Please agree to the Terms, Privacy Policy, and Refund Policy to continue",
  }),
});

export type DonationFormValues = z.infer<typeof donationFormSchema>;