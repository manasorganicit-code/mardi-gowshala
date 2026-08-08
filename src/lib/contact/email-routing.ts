import type { ContactSubject } from "@/lib/validations/contact-form";

const CONTACT_EMAIL_ROUTES: Record<ContactSubject, string> = {
  GHEE_PURCHASE: "ghee@goshala.mardi.co.in",
  DONATION_RELATED: "donation@goshala.mardi.co.in",
  GENERAL_INQUIRY: "contact@goshala.mardi.co.in",
  CALLBACK_REQUEST: "contact@goshala.mardi.co.in",
  GOSHALA_VISIT: "contact@goshala.mardi.co.in",
  OTHER: "contact@goshala.mardi.co.in",
};

export function getContactRecipient(subject: ContactSubject): string {
  return CONTACT_EMAIL_ROUTES[subject];
}