import Link from "next/link";
import { Bug, Recycle, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/layout/image-placeholder";
import { APPLICATIONS, type Application } from "@/components/panchgavya/applications-data";

function findApp(slug: string): Application {
  const app = APPLICATIONS.find((a) => a.slug === slug);
  if (!app) throw new Error(`Application not found: ${slug}`);
  return app;
}

function ApplicationContent({
  app,
  icon: Icon,
  showTitle = true,
}: {
  app: Application;
  icon?: LucideIcon;
  showTitle?: boolean;
}) {
  return (
    <div className="flex flex-col gap-5">
      {showTitle && (
        <h3 className="flex items-center gap-2 font-heading text-2xl text-foreground">
          {Icon && <Icon className="size-5 shrink-0 text-gold" strokeWidth={1.5} />}
          {app.title}
        </h3>
      )}

      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-semibold text-foreground">What it is</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{app.what}</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-semibold text-foreground">Benefits</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{app.benefits}</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-semibold text-foreground">The Cow&apos;s Role in This</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{app.cowRole}</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-semibold text-foreground">Process</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{app.process}</p>
      </div>

      {app.cta && (
        <Button
          nativeButton={false}
          size="lg"
          className="w-fit rounded-xl bg-gold text-white hover:bg-gold/90"
          render={<Link href={app.cta.href} />}
        >
          {app.cta.label}
        </Button>
      )}
    </div>
  );
}

function ZigzagRow({ slug, imageSide }: { slug: string; imageSide: "left" | "right" }) {
  const app = findApp(slug);
  const image = (
    <ImagePlaceholder
      label={`${app.title} — photograph`}
      aspect="square"
      className="rounded-xl"
    />
  );
  const content = <ApplicationContent app={app} />;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
      {imageSide === "left" ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          <div className="md:order-2">{image}</div>
          <div className="md:order-1">{content}</div>
        </>
      )}
    </div>
  );
}

const SIDE_BY_SIDE_ICONS: Record<string, LucideIcon> = {
  "bio-pesticides": Bug,
  vermicompost: Recycle,
};

function SideBySideRow({ slugs }: { slugs: [string, string] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {slugs.map((slug) => {
        const app = findApp(slug);
        const Icon = SIDE_BY_SIDE_ICONS[slug];
        return (
          <div key={slug} className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 font-heading text-2xl text-foreground">
              {Icon && <Icon className="size-5 shrink-0 text-gold" strokeWidth={1.5} />}
              {app.title}
            </h3>
            <Card className="rounded-xl [--card-spacing:--spacing(7)]">
              <CardContent>
                <ApplicationContent app={app} showTitle={false} />
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export function ApplicationsSection() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Six Applications
      </p>
      <h2 className="mb-14 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        Panchgavya in Practice
      </h2>

      <div className="flex flex-col gap-20">
        <ZigzagRow slug="ghee" imageSide="right" />
        <ZigzagRow slug="soil-organic-carbon" imageSide="left" />
        <SideBySideRow slugs={["bio-pesticides", "vermicompost"]} />
        <ZigzagRow slug="jivamrut" imageSide="right" />
        <ZigzagRow slug="agnihotra" imageSide="left" />
      </div>
    </div>
  );
}

