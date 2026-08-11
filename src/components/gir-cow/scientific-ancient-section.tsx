import { FlaskConical, ScrollText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ScientificAncientSection() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Significance
      </p>
      <h2 className="mb-10 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        Scientific &amp; Traditional Value
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="rounded-xl">
          <CardHeader>
            <FlaskConical className="mb-2 size-6 text-primary" strokeWidth={1.5} />
            <CardTitle className="normal-case tracking-normal">
              Scientific Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-muted-foreground">
              Gir cows produce A2-type beta-casein milk, are naturally heat
              and disease resistant, and adapt well to tropical conditions —
              traits that have made the breed a subject of ongoing research
              in animal husbandry and genetics, both in India and abroad.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardHeader>
            <ScrollText className="mb-2 size-6 text-primary" strokeWidth={1.5} />
            <CardTitle className="normal-case tracking-normal">
              Ancient &amp; Cultural Significance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-muted-foreground">
              Indigenous cows like the Gir hold deep spiritual and cultural
              significance in India, referenced in ancient texts and revered
              in tradition. Their by-products form the basis of Panchagavya —
              five sacred derivatives central to Ayurveda and traditional
              rituals.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}