import { ImagePlaceholder } from "@/components/layout/image-placeholder";

type HeroBannerProps = {
  eyebrow: string;
  title: string;
  description?: string;
  imageLabel: string;
};

/**
 * Full-bleed page hero — used at the top of content pages (Gir Cow,
 * and eventually About / Panchgavya / Donate / Contact). Renders
 * outside any max-width container so it spans the full viewport.
 */
export function HeroBanner({ eyebrow, title, description, imageLabel }: HeroBannerProps) {
  return (
    <div className="relative w-full">
      <ImagePlaceholder
        label={imageLabel}
        aspect="video"
        className="h-[380px] w-full md:h-[480px] lg:h-[420px]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-12 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 h-px w-16 bg-gold" />
          <p className="mb-3 text-xs font-semibold tracking-widest text-primary-foreground/80 uppercase">
            {eyebrow}
          </p>
          <h1 className="mb-4 max-w-2xl font-heading text-4xl leading-tight tracking-tight text-primary-foreground md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-xl leading-relaxed text-primary-foreground/85">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}