import { Home, Warehouse, Milk, Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const INFRASTRUCTURE = [
  {
    icon: Home,
    title: "Cattle Shed (Tabela)",
    description:
      "Purpose-built sheds designed for proper airflow and drainage, giving the herd a clean, comfortable space to rest and shelter through every season.",
  },
  {
    icon: Warehouse,
    title: "Feed Storage Unit",
    description:
      "A dedicated storage facility that keeps fodder and feed dry, hygienic, and ready to use, ensuring a steady supply for the herd through the year.",
  },
  {
    icon: Milk,
    title: "Ghee-Making & Storage Room",
    description:
      "A separate, dedicated facility where ghee is prepared and stored under clean, controlled conditions, keeping every batch true to traditional standards.",
  },
  {
    icon: Sprout,
    title: "Hydroponic Green Fodder Unit",
    description:
      "A dedicated setup that grows fresh, nutrient-rich green fodder year-round, giving our cows consistent, high-quality nourishment regardless of season.",
  },
] as const;

export function InfrastructureSection() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Facilities
      </p>
      <h2 className="mb-4 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        Infrastructure
      </h2>
      <p className="mb-10 max-w-2xl leading-relaxed text-muted-foreground">
        The farm is equipped to support both cow welfare and organic
        production at scale — monitored round the clock through CCTV
        surveillance across the premises.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {INFRASTRUCTURE.map((item) => (
          <Card key={item.title} className="rounded-xl">
            <CardContent className="flex flex-col gap-4">
              <item.icon
                className="size-8 shrink-0 text-gold"
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-lg text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}