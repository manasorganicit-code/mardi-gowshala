import { LeafyGreen, Package, Sprout, Wheat, type LucideIcon } from "lucide-react";

type FodderItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FODDER_ITEMS: FodderItem[] = [
  {
    icon: Wheat,
    title: "Corn Silage",
    description: "Fermented, high-energy feed that supports steady weight and milk production.",
  },
  {
    icon: Package,
    title: "Concentrated Feed",
    description: "Balanced pellet feed supplementing daily nutrition with essential vitamins and minerals.",
  },
  {
    icon: LeafyGreen,
    title: "Dry Grass",
    description: "Roughage that aids digestion and provides essential fibre in the daily diet.",
  },
  {
    icon: Sprout,
    title: "Napier Grass",
    description: "Fast-growing, nutrient-rich green fodder grown to support consistent feed supply.",
  },
];

export function FodderSection() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Nourishment
      </p>
      <h2 className="mb-10 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        Fodder
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FODDER_ITEMS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col gap-3 border border-border bg-card p-5">
            <Icon className="size-6 text-primary" strokeWidth={1.5} />
            <p className="font-heading text-base text-foreground">{title}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}