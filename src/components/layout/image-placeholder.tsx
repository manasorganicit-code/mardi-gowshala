import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
  aspect?: "square" | "video" | "portrait";
};

const ASPECT_CLASSES: Record<NonNullable<ImagePlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
};

/**
 * Temporary placeholder for section imagery, used site-wide. Swap the
 * parent's usage for a real <Image> once photos are available — this
 * component is meant to be deleted, not extended.
 */
export function ImagePlaceholder({ label, className, aspect = "video" }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 border border-dashed border-border bg-muted/40 text-muted-foreground",
        ASPECT_CLASSES[aspect],
        className
      )}
      role="img"
      aria-label={label}
    >
      <ImageIcon className="size-6" strokeWidth={1.5} />
      <span className="px-4 text-center text-xs">{label}</span>
    </div>
  );
}