import { HeartHandshake, Milk, Sprout, Flame, type LucideIcon } from "lucide-react";

type Activity = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const ACTIVITIES: Activity[] = [
  {
    icon: HeartHandshake,
    title: "Cow Care & Shelter",
    description:
      "We provide daily care, feed, and shelter to indigenous Gir cows — ensuring their welfare through every stage of life.",
  },
  {
    icon: Milk,
    title: "Dairy & Ghee Production",
    description:
      "We process milk from our Gir cows into organic ghee, curd, and buttermilk — made using traditional methods on the farm itself.",
  },
  {
    icon: Sprout,
    title: "Organic Farming",
    description:
      "Across our farmland, we grow crops using composting, natural inputs, and chemical-free practices that keep the soil and produce genuinely organic.",
  },
  {
    icon: Flame,
    title: "Panchgavya Production",
    description:
      "We turn milk, curd, ghee, dung, and urine into Panchgavya-based preparations, rooted in traditional practices and used across the farm.",
  },
];

export function WhatWeDoSection() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Our Work
      </p>
      <h2 className="mb-10 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        What We Do
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {ACTIVITIES.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent">
              <Icon className="size-5 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <p className="mb-1 font-heading text-base text-foreground">{title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}