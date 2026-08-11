import { ImagePlaceholder } from "@/components/layout/image-placeholder";

const BREED_TRAITS = [
  "Distinctive bulging, dome-shaped forehead",
  "Long, pendulous ears that hang close to the face",
  "Backward-curving horns",
  "Large dewlap and loose, heat-tolerant skin",
  "Coat in shades of red, white, or a red-and-white mix",
];

export function AboutBreedSection() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <ImagePlaceholder
        label="Gir cow — breed characteristics"
        aspect="square"
        className="order-2 lg:order-1"
      />

      <div className="order-1 flex flex-col lg:order-2">
        <div className="mb-6 h-px w-16 bg-gold" />
        <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Origin &amp; Identity
        </p>
        <h2 className="mb-6 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
          About the Gir Breed
        </h2>
        <p className="mb-8 leading-relaxed text-muted-foreground">
          The breed takes its name from the Gir forest and hills of the
          Kathiawar region in Gujarat, where it has been raised for centuries.
          It is one of the principal indigenous zebu breeds of India, prized
          for its hardiness, calm temperament, and adaptability to hot,
          semi-arid climates.
        </p>

        <ul className="flex flex-col gap-3">
          {BREED_TRAITS.map((trait) => (
            <li key={trait} className="flex items-start gap-3 text-sm text-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
              {trait}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}