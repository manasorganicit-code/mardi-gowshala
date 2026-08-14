"use client";

import { useState } from "react";
import { Droplet, CookingPot, Flame, FlaskConical, Leaf } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type Component = {
  name: string;
  icon: ReactNode;
  description: ReactNode;
};

const COMPONENTS: Component[] = [
  {
    name: "Milk (Dudh)",
    icon: <Droplet className="size-5" strokeWidth={1.5} />,
    description: (
      <>
        Milk is where Panchgavya starts — the primary produce of the cow,
        and the raw material for two other components on this list: curd
        and ghee. Milk from indigenous breeds like the Gir cow carries the
        A2 beta-casein protein, which most people digest more easily than
        the A1 protein found in common crossbred or exotic-breed milk.
      </>
    ),
  },
  {
    name: "Curd (Dahi)",
    icon: <CookingPot className="size-5" strokeWidth={1.5} />,
    description: (
      <>
        Curd is milk that has been fermented using live bacterial
        cultures — the same basic process used to make yogurt anywhere in
        the world. This fermentation is what gives curd its probiotic
        value: it introduces beneficial gut bacteria when eaten, which is
        why it&apos;s long been considered a digestive aid in Indian
        households, not just in Ayurveda specifically.
      </>
    ),
  },
  {
    name: "Ghee",
    icon: <Flame className="size-5" strokeWidth={1.5} />,
    description: (
      <>
        Ghee is clarified butter, but the traditional method matters:
        it&apos;s made from cultured curd that&apos;s hand-churned to
        extract butter, then slow-cooked — not spun out of raw cream the
        way most commercial ghee is produced today. This slower method
        keeps more of the natural fat-soluble vitamins (A, D, E, K) and
        beneficial fatty acids intact.
      </>
    ),
  },
  {
    name: "Cow Urine (Gomutra)",
    icon: <FlaskConical className="size-5" strokeWidth={1.5} />,
    description: (
      <>
        Cow urine is the least intuitive of the five for most people, but
        it has a specific, practical role: research has found it to have
        antimicrobial and antifungal properties — meaning it can help
        control the growth of harmful bacteria and fungi (
        <Link
          href="https://www.sciencedirect.com/science/article/pii/S0975947621001947"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          Bajaj et al., 2022, Journal of Ayurveda and Integrative Medicine
        </Link>
        ). That&apos;s the reason it shows up as a base ingredient in
        bio-pesticide and soil treatments.
      </>
    ),
  },
  {
    name: "Cow Dung (Gobar)",
    icon: <Leaf className="size-5" strokeWidth={1.5} />,
    description: (
      <>
        Dung is the most widely used of the five on a working farm — as
        manure, as the base material for compost, and as fuel when dried.
        When dried dung is burned as part of a havan or fire ritual, the
        resulting smoke has been shown in a peer-reviewed study to
        measurably reduce airborne bacteria in an enclosed space (
        <Link
          href="https://pubmed.ncbi.nlm.nih.gov/17913417/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          Nautiyal et al., 2007, Journal of Ethnopharmacology
        </Link>
        ) — a scientific basis for a practice that&apos;s been part of
        Indian ritual life for centuries.
      </>
    ),
  },
];

export function FiveComponentsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = COMPONENTS[activeIndex];

  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        The Five Elements
      </p>
      <h2 className="mb-6 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        Understanding Panchgavya
      </h2>

      <p className="mb-10 leading-relaxed text-muted-foreground">
        Panchgavya isn&apos;t simply five separate cow products used side
        by side — in Ayurveda, it&apos;s treated as a system, where each
        part plays a distinct role. Before looking at how these five are
        combined into ghee, compost, or bio-pesticide, it helps to
        understand what each one actually is on its own.
      </p>

      {/* Tab row */}
      <div className="mb-8 grid grid-cols-3 gap-2 border-b border-border sm:grid-cols-5 sm:gap-0">
        {COMPONENTS.map((component, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={component.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col items-center gap-2 border-b-2 px-2 py-4 transition-colors ${
                isActive
                  ? "border-gold text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <div
                className={`flex size-10 items-center justify-center rounded-full border transition-colors ${
                  isActive ? "border-gold text-gold" : "border-border text-primary"
                }`}
              >
                {component.icon}
              </div>
              <span className="text-center text-xs">{component.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active tab content */}
      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-xl text-foreground">{active.name}</h3>
        <p className="leading-relaxed text-muted-foreground">{active.description}</p>
      </div>
    </div>
  );
}