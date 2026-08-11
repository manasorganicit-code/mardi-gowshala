import { Apple, HeartPulse, Milk, Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const A2_MILK_POINTS = [
  {
    icon: HeartPulse,
    title: "Easier Digestion",
    description:
      "A2 beta-casein protein is gentler on the digestive system than the A1 protein found in most cross-bred and exotic cattle milk, making it easier to tolerate for many people.",
  },
  {
    icon: Apple,
    title: "Rich in Nutrients",
    description:
      "Gir cow milk is naturally dense in essential fats, proteins, and minerals, and is widely regarded in Ayurveda as one of the most wholesome forms of dairy.",
  },
  {
    icon: Sprout,
    title: "Organic by Practice",
    description:
      "Our cows graze on natural fodder without hormones or synthetic additives, keeping the milk close to how it would occur in a traditional, chemical-free setting.",
  },
];

export function A2MilkSection() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Nutrition
      </p>
      <div className="mb-10 flex items-center gap-3">
        <Milk className="size-7 text-primary" strokeWidth={1.5} />
        <h2 className="font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
          A2 Milk
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {A2_MILK_POINTS.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="rounded-xl">
            <CardContent className="flex flex-col gap-3">
              <Icon className="size-6 text-primary" strokeWidth={1.5} />
              <p className="font-heading text-lg text-foreground">{title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}