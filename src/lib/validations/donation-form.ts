import { z } from "zod";

export const PURPOSE_OPTIONS = [
  { value: "GENERAL", label: "General Support" },
  { value: "FEED", label: "Feed & Fodder" },
  { value: "SPECIAL_OCCASION", label: "Special Occasion" },
  { value: "MEMORIAL", label: "In Memory Of" },
  { value: "MAINTENANCE", label: "Shelter Maintenance" },
  { value: "OTHER", label: "Other" },
] as const;

// export const FREQUENCY_OPTIONS = [
//   { value: "MONTHLY", label: "Monthly" },
//   { value: "QUARTERLY", label: "Quarterly" },
//   { value: "YEARLY", label: "Yearly" },
// ] as const;

export const PRESET_AMOUNTS = [101, 501, 1001, 2501, 5001, 7501] as const;
export type PresetAmount = (typeof PRESET_AMOUNTS)[number];

export const donationFormSchema = z.object({
  purpose: z.enum([
    "GENERAL",
    "FEED",
    "SPECIAL_OCCASION",
    "MEMORIAL",
    "MAINTENANCE",
    "OTHER",
  ]),
  // amount: z.number().positive("Enter an amount greater than 0"), -- replaced with preset amounts validation
  amount: z.number().refine(
    (val): val is PresetAmount => PRESET_AMOUNTS.includes(val as PresetAmount),
    { message: "Select a valid donation amount" }
  ),
  type: z.enum(["ONE_TIME", "RECURRING"]),
  frequency: z.enum(["MONTHLY", "QUARTERLY", "YEARLY"]),
  donorName: z.string().min(2, "Name is too short").max(100),
  email: z.email("Enter a valid email address"),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Enter a valid phone number"),
  message: z.string().max(300, "Keep it under 300 characters").optional(),
});

export type DonationFormValues = z.infer<typeof donationFormSchema>;