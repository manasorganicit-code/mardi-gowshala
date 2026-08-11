import { BrushCleaning, Droplet, Stethoscope, Syringe, type LucideIcon } from "lucide-react";

type HygieneItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const HYGIENE_ITEMS: HygieneItem[] = [
  {
    icon: Stethoscope,
    title: "Weekly Doctor Visit",
    description: "Regular vaccination schedules and health check-ups by a visiting veterinarian.",
  },
  {
    icon: Syringe,
    title: "Artificial Insemination",
    description: "Used to maintain pure Gir bloodlines and support consistently better milk yield.",
  },
  {
    icon: Droplet,
    title: "Regular Bathing",
    description: "Cows are bathed every few days to support skin health and overall hygiene.",
  },
  {
    icon: BrushCleaning,
    title: "Shed Cleaning",
    description: "Sheds are cleaned twice daily, morning and afternoon, to maintain a healthy living environment.",
  },
];

export function HygieneMedicationSection() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Care Standards
      </p>
      <h2 className="mb-10 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        Hygiene &amp; Medication
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {HYGIENE_ITEMS.map(({ icon: Icon, title, description }) => (
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