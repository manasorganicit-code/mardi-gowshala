import { Heart, Sprout, Flame, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PILLARS = [
  {
    icon: Heart,
    title: "Indigenous Breed",
    description:
      "We work to protect and promote the Gir cow — a resilient indigenous breed suited to India's climate and farming heritage — through responsible care, breeding, and welfare.",
  },
  {
    icon: Sprout,
    title: "Organic Farming",
    description:
      "Our farming practices avoid all chemical inputs, relying instead on traditional, sustainable methods passed down through generations that keep the land and its produce genuinely organic.",
  },
  {
    icon: Flame,
    title: "Traditional Wisdom",
    description:
      "We keep alive practices passed down through generations — from Homa (fire rituals) to Panchgavya, the cow's five-fold offering — using them daily to guide how we farm and live.",
  },
  {
    icon: Users,
    title: "Rural Development",
    description:
      "Beyond the farm, we work with local farmers through training, cow distribution, & knowledge-sharing extending the benefits of cow-centric organic agriculture to the wider community.",
  },
] as const;

export function MaksadValuesSection() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Our Values
      </p>
      <h2 className="mb-4 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        Mission &amp; Values
      </h2>
      <p className="mb-10 max-w-2xl leading-relaxed text-muted-foreground">
        Everything we do is guided by four commitments — to the cow, to the
        land, to self-sufficiency, and to the community.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((pillar) => (
          <Card key={pillar.title} className="rounded-xl">
            <CardContent className="flex flex-col gap-4">
              <pillar.icon
                className="size-8 shrink-0 text-gold"
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-lg text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}