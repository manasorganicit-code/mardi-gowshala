import { ImagePlaceholder } from "@/components/layout/image-placeholder";

export function StoryOriginSection() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="flex flex-col">
        <div className="mb-6 h-px w-16 bg-gold" />
        <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Our Story
        </p>
        <h2 className="mb-6 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
          Origin &amp; Journey
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Manas Goshala grew out of the wider work of the Manas Rural
          Development Institute (MARDI), which has spent over two decades
          supporting rural communities in Shahapur, Thane, through indigenous
          cow welfare, organic farming, and hands-on farmer training.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          What began with small, local efforts — distributing milk to
          underprivileged children and indigenous cows to farmers — has grown
          into a full working goshala and organic farm at Manas Krushi Farm: a
          place where traditional values meet modern practices to promote
          indigenous cow welfare alongside organic and sustainable farming.
        </p>
      </div>

      <ImagePlaceholder
        label="Manas Krushi Farm — goshala and organic farm"
        aspect="square"
      />
    </div>
  );
}