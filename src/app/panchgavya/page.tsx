import type { Metadata } from "next";
import { HeroBanner } from "@/components/layout/hero-banner";
import { CtaStrip } from "@/components/layout/cta-strip";
import { IntroductionSection } from "@/components/panchgavya/introduction-section";
import { FiveComponentsSection } from "@/components/panchgavya/five-components-section";
import { ApplicationsSection } from "@/components/panchgavya/applications-section";
import { OrganicCommitmentSection } from "@/components/panchgavya/organic-commitment-section";

export const metadata: Metadata = {
  title: "Panchgavya | Mardi Goshala",
  description:
    "Panchgavya — the five gifts of the cow at the heart of Ayurveda and organic farming, practiced daily at Manas Goshala.",
};

export default function PanchgavyaPage() {
  return (
    <div className="flex flex-col">
      <HeroBanner
        eyebrow="Ancient Science"
        title="Panchgavya"
        description="Five gifts of the cow, rooted in Ayurveda and applied every day at Manas Goshala — 100% organic, nothing else."
        imageLabel="Panchgavya — hero photograph"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-20 md:px-12">
        <IntroductionSection />
        <FiveComponentsSection />
        <ApplicationsSection />
        <OrganicCommitmentSection />

        <CtaStrip
          secondaryCta={{ label: "Explore Gir Cow", href: "/gir-cow" }}
          primaryCta={{ label: "Contact Us", href: "/contact" }}
        />
      </div>
    </div>
  );
}