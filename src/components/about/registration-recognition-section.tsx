import { Landmark, ShieldCheck, Award } from "lucide-react";
import { ImagePlaceholder } from "@/components/layout/image-placeholder";

const RECOGNITIONS = [
  {
    icon: Landmark,
    title: "Registered under the Maharashtra Goseva Aayog",
    description:
      "The state commission overseeing cow welfare and goshala operations across Maharashtra.",
  },
  {
    icon: ShieldCheck,
    title: "Registered with the Animal Welfare Department",
    description:
      "In accordance with statutory requirements for the care and shelter of cattle.",
  },
  {
    icon: Award,
    title: "Best Goshala Award — awarded twice",
    description:
      "In recognition of exemplary standards in cow care, shelter management, and welfare practices.",
  },
] as const;

export function RegistrationRecognitionSection() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="flex flex-col">
        <div className="mb-6 h-px w-16 bg-gold" />
        <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Recognition
        </p>
        <h2 className="mb-4 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
          Registration &amp; Recognition
        </h2>
        <p className="mb-10 leading-relaxed text-muted-foreground">
          Our work has been formally recognized by state bodies overseeing
          cow welfare and animal husbandry in Maharashtra.
        </p>

        <div className="flex flex-col gap-8">
          {RECOGNITIONS.map((item) => (
            <div key={item.title} className="flex gap-4">
              <item.icon
                className="size-6 shrink-0 text-gold"
                strokeWidth={1.5}
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <ImagePlaceholder
          label="Best Goshala Award — certificate 1"
          aspect="video"
        />
        <ImagePlaceholder
          label="Best Goshala Award — certificate 2"
          aspect="video"
        />
      </div>
    </div>
  );
}