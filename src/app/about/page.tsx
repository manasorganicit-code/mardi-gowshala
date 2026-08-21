import type { Metadata } from "next";
import { HeroBanner } from "@/components/layout/hero-banner";
import { StoryOriginSection } from "@/components/about/story-origin-section";
import { MaksadValuesSection } from "@/components/about/mission-values-section";
import { RegistrationRecognitionSection } from "@/components/about/registration-recognition-section";
import { OrganicCertifiedSection } from "@/components/about/organic-certified-section";
import { WhatWeDoSection } from "@/components/about/what-we-do-section";
import { PastActivitySection } from "@/components/about/PastActivitySection";
import { InfrastructureSection } from "@/components/about/infrastructure-section";
import { CtaStrip } from "@/components/layout/cta-strip";

export const metadata: Metadata = {
  title: "About Us | Mardi Goshala",
  description:
    "Manas Goshala is an initiative of Manas Rural Development Institute (MARDI) — dedicated to indigenous Gir cow welfare and 100% organic farming.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <HeroBanner
        eyebrow="About Manas Goshala"
        title="Rooted in Organic Tradition"
        description="An initiative of Manas Rural Development Institute (MARDI), dedicated to indigenous Gir cow welfare with organic and sustainable farming."
        imageLabel="Manas Goshala — farm and cows, hero photograph"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-20 md:px-12">
        <StoryOriginSection/>
        <MaksadValuesSection/>
        <RegistrationRecognitionSection/>
        <OrganicCertifiedSection/>
        <WhatWeDoSection/>
        <PastActivitySection/>
        <InfrastructureSection/>
        <CtaStrip
          secondaryCta={{ label: "Back to Home", href: "/" }}
          primaryCta={{ label: "Explore Gir Cow", href: "/gir-cow" }}
        />
      </div>
    </div>
  );
}