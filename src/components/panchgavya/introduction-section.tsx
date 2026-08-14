export function IntroductionSection() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Origin &amp; Meaning
      </p>
      <h2 className="mb-6 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        More Than Milk
      </h2>

      <div className="flex flex-col gap-5 text-muted-foreground">
        <p className="leading-relaxed">
          The cow has never been just a source of milk in India. For
          generations, one animal has provided fuel through its dung,
          draught power for ploughing fields, fertilizer for soil, and a
          central place in ritual and daily life — meeting needs across
          farming, fuel, medicine, and worship at once.
        </p>

        <p className="leading-relaxed">
          Out of this range of uses, Ayurvedic tradition identified five
          products as carrying particular significance — milk, curd, ghee,
          urine (gomutra), and dung (gobar) — together known as{" "}
          <span className="font-medium text-foreground">Panchgavya</span>{" "}
          (<em>Pancha</em> = five, <em>Gavya</em> = derived from the cow).
          Classical texts including the{" "}
          <em>Charak Samhita</em> and <em>Sushrut Samhita</em> describe
          these five as possessing purifying, nourishing, and medicinal
          properties, applied across agriculture, ritual, and daily life.
        </p>

        <p className="leading-relaxed">
          At Manas Goshala, we don&apos;t treat this as history to
          reference — it&apos;s the basis of how we actually work. Every
          application on this page, from the ghee we make to the compost
          that goes back into our soil, comes from these five products,
          produced 100% organically, exactly as MARDI&apos;s founding
          principle demands.
        </p>
      </div>
    </div>
  );
}