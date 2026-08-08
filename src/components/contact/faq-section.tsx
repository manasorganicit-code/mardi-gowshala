"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "How do I order Ghee?",
    answer:
      'Select "Ghee Purchase" as the subject below. The message field will pre-fill with a quantity and address template — fill it in and we\'ll follow up on availability and pricing.',
  },
  {
    question: "Can I get a donation receipt?",
    answer:
      "Yes, a receipt is sent automatically after a successful donation. If you need help with an older donation, reach out with the payment details and we'll assist.",
  },
  {
    question: "Can I visit the goshala?",
    answer:
      'Select "Goshala Visit" as the subject and let us know your preferred date. We\'ll confirm timing and any visiting guidelines with you.',
  },
  {
    question: "How soon will I get a response?",
    answer:
      "We typically respond within 2-3 working days. For urgent matters, select \"Request a Callback\" and share a good time to reach you.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      <div className="mx-auto mb-3 h-px w-10 bg-gold" />
      <h2 className="mb-8 text-center font-heading text-2xl text-foreground">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col divide-y divide-border">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 text-muted-foreground transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              {isOpen && (
                <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}