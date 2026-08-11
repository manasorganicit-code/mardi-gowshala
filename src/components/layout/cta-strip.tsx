import Link from "next/link";
import { Button } from "@/components/ui/button";

type CtaLink = {
  label: string;
  href: string;
};

type CtaStripProps = {
  secondaryCta: CtaLink;
  primaryCta: CtaLink;
};

/**
 * Reusable end-of-page CTA strip — two side-by-side buttons (outline +
 * gold-filled). Used across content pages (Gir Cow, About, Panchgavya)
 * with page-specific links passed in as props.
 */
export function CtaStrip({ secondaryCta, primaryCta }: CtaStripProps) {
  return (
    <div className="flex flex-col items-center gap-8 border-t border-border pt-16 sm:flex-row sm:justify-between sm:gap-6">
      <Button
        nativeButton={false}
        size="lg"
        className="w-full rounded-xl bg-gold/90 hover:bg-gold sm:w-auto"
        render={<Link href={secondaryCta.href} />}
      >
        {secondaryCta.label}
      </Button>

      <Button
        nativeButton={false}
        size="lg"
        className="w-full rounded-xl bg-gold/90 hover:bg-gold sm:w-auto"
        render={<Link href={primaryCta.href} />}
      >
        {primaryCta.label}
      </Button>
    </div>
  );
}