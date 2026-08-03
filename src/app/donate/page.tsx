import type { Metadata } from "next";
import Link from "next/link";
import { DonateForm } from "@/components/donate-form";

export const metadata: Metadata = {
  title: "Donate | Mardi Gowshala",
  description:
    "Support the care and upkeep of our indigenous Gir cows through your contribution.",
};

export default function DonatePage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 py-20 md:px-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
      {/* Left: narrative panel */}
      <div className="flex flex-col">
        <div className="mb-6 h-px w-16 bg-gold" />
        <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Seva &middot; Donation
        </p>
        <h1 className="mb-6 font-heading text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
          Every Contribution Feeds a Life
        </h1>
        <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
          Our shelter is home to indigenous Gir cows, cared for with
          traditional practices and modern welfare standards. Your
          contribution goes directly toward their feed, medical care, and
          the upkeep of the shelter itself.
        </p>

        <ul className="mb-10 flex flex-col gap-3">
          {[
            "Daily feed and fodder for every cow in our care",
            "Veterinary care and medical support",
            "Maintenance of shelter infrastructure",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted-foreground">
          Looking to volunteer, visit the shelter, or order Ghee?{" "}
          <Link href="/contact" className="font-medium text-primary underline underline-offset-4">
            Get in touch with us
          </Link>
          .
        </p>
      </div>

      {/* Right: donation form */}
      <div className="lg:sticky lg:top-20 lg:self-start">
        <DonateForm />
      </div>
    </div>
  );
}