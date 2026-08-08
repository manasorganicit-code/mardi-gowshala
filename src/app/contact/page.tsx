import type { Metadata } from "next";
import { ContactInfoCard } from "@/components/contact/contact-info-card";
import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/contact/faq-section";

export const metadata: Metadata = {
  title: "Contact Us | Mardi Gowshala",
  description:
    "Reach out for Ghee orders, goshala visits, donation queries, or general enquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-20 md:px-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <ContactInfoCard />
        <ContactForm />
      </div>

      <FaqSection />
    </div>
  );
}