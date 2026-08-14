export function OrganicCommitmentSection() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Our Commitment
      </p>
      <h2 className="mb-6 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        No Shortcuts, No Compromises
      </h2>

      <div className="flex flex-col gap-5 text-muted-foreground">
        <p className="leading-relaxed">
          Every application on this page — the ghee we sell, the compost
          that goes back into our own soil, the bio-pesticide sprayed on
          our fields — is produced without a single synthetic input. No
          chemical fertilizer, no synthetic pesticide, no shortcuts.
        </p>

        <p className="leading-relaxed">
          This isn&apos;t a farming trend we&apos;re following. It&apos;s
          MARDI&apos;s founding principle, and Manas Goshala exists to
          prove it works — not as a small-scale experiment, but as a
          complete, repeatable system: one that starts with the cow and
          ends with everything from the soil under our feet to the ghee
          on your table.
        </p>

        <p className="leading-relaxed">
          Every product described on this page is something we practice
          ourselves, season after season, on our own land — not a set of
          ideas we&apos;re asking others to try first.
        </p>
      </div>
    </div>
  );
}