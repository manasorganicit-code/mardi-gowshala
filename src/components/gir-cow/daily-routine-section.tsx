import { Milk, Moon, Sprout, Sun, Wheat, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type RoutineStep = {
  time: string;
  title: string;
  icon: LucideIcon;
};

const ROUTINE_STEPS: RoutineStep[] = [
  { time: "6:00 AM", title: "Morning Milking", icon: Milk },
  { time: "7:00 AM", title: "Morning Feed", icon: Wheat },
  { time: "11:00 AM", title: "Grazing", icon: Sprout },
  { time: "2:00 PM", title: "Afternoon Rest", icon: Sun },
  { time: "5:00 PM", title: "Evening Milking", icon: Milk },
  { time: "6:00 PM", title: "Evening Feed", icon: Wheat },
  { time: "8:00 PM", title: "Night Rest", icon: Moon },
];

export function DailyRoutineSection() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        A Day at the Goshala
      </p>
      <h2 className="mb-10 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        Daily Routine
      </h2>

      {/* Mobile: vertical timeline */}
      <div className="flex flex-col gap-6 md:hidden">
        {ROUTINE_STEPS.map((step, index) => (
          <div key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="size-4" strokeWidth={1.5} />
              </div>
              {index !== ROUTINE_STEPS.length - 1 && (
                <div className="mt-1 w-px flex-1 bg-border" />
              )}
            </div>
            <div className="pb-2">
              <p className="text-xs font-medium text-muted-foreground">{step.time}</p>
              <p className="text-sm font-medium text-foreground">{step.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:grid md:grid-cols-7">
        {ROUTINE_STEPS.map((step, index) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <span className="mb-2 text-xs font-medium text-muted-foreground">
              {step.time}
            </span>
            <div className="flex w-full items-center">
              <div
                className={cn("h-px flex-1", index === 0 ? "bg-transparent" : "bg-border")}
              />
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="size-4" strokeWidth={1.5} />
              </div>
              <div
                className={cn(
                  "h-px flex-1",
                  index === ROUTINE_STEPS.length - 1 ? "bg-transparent" : "bg-border"
                )}
              />
            </div>
            <span className="mt-3 px-2 text-sm font-medium text-foreground">
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}