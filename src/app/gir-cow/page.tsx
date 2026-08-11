import type { Metadata } from "next";
import { HeroBanner } from "@/components/layout/hero-banner";
import { CtaStrip } from "@/components/layout/cta-strip";
import { AboutBreedSection } from "@/components/gir-cow/about-breed-section";
import { ScientificAncientSection } from "@/components/gir-cow/scientific-ancient-section";
import { A2MilkSection } from "@/components/gir-cow/a2-milk-section";
import { DailyRoutineSection } from "@/components/gir-cow/daily-routine-section";
import { HygieneMedicationSection } from "@/components/gir-cow/hygiene-medication-section";
import { FodderSection } from "@/components/gir-cow/fodder-section";

export const metadata: Metadata = {
  title: "The Gir Cow | Mardi Goshala",
  description:
    "Learn about the Gir cow — India's indigenous breed, its A2 milk, daily care routine, and how Manas Goshala nurtures the herd.",
};

export default function GirCowPage() {
  return (
    <div className="flex flex-col">
      <HeroBanner
        eyebrow="Indigenous Breed"
        title="The Gir Cow"
        description="India's oldest and most revered indigenous cattle breed, native to the Gir forest region of Gujarat."
        imageLabel="Gir cow — hero photograph"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-20 md:px-12">
        <AboutBreedSection />
        <ScientificAncientSection />
        <A2MilkSection />
        <DailyRoutineSection />
        <HygieneMedicationSection />
        <FodderSection />

        <CtaStrip
          secondaryCta={{ label: "Learn About Us", href: "/about" }}
          primaryCta={{ label: "Explore Panchgavya", href: "/panchgavya" }}
        />
      </div>
    </div>
  );
}