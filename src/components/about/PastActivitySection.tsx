"use client";

import { Fragment, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Milestone = {
  year: string;
  description: string;
};

const MILESTONES: Milestone[] = [
  {
    year: "2004–2005",
    description:
      "Provided milk from Gir cows to 70 underprivileged children; distributed indigenous cows to farmers for sustainable farming.",
  },
  {
    year: "2005–2006",
    description:
      "Provided daily milk from the goshala to balwadi and pre-primary students.",
  },
  {
    year: "2007–2008",
    description:
      "Ran organic farming training, including cow distribution and holistic farming support.",
  },
  {
    year: "2009–2010",
    description:
      "Organized farmer meets in Rajkot and Bhuj (Gujarat) promoting cow-centric organic farming; published manuals on Homa organic farming and Gir cow promotion.",
  },
  {
    year: "2013–2014",
    description:
      "Developed an integrated organic farm model across 100+ acres, including a Gir cow dairy unit.",
  },
  {
    year: "2014–2015",
    description: "Published Marathi books and manuals on Gir cow care.",
  },
  {
    year: "2015–2016",
    description:
      "Launched educational tours at Manas Krushi Farm covering organic farming, floriculture, dairy, composting, and Homa practices; trained organic food marketing teams on Gir cow-based farming.",
  },
  {
    year: "2017–2018",
    description:
      "Expanded to 100+ acres under organic crops with a dairy unit of 102 Gir cows, bee-keeping, composting, and eco-tourism.",
  },
  {
    year: "2020–2021",
    description:
      "Established a Gir cow dairy unit producing organic milk and by-products for organic farming.",
  },
  {
    year: "2022–2023",
    description:
      "Distributed Gir cows at subsidized rates and trained farmers in traditional Indian methods; began village-level dairy plant operations (milk, ghee, curd, buttermilk).",
  },
];

const ITEM_WIDTH = 288; // matches auto-cols value below

export function PastActivitySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByStep = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -ITEM_WIDTH * 2 : ITEM_WIDTH * 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col">
      <div className="mb-6 h-px w-16 bg-gold" />
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Our Journey
      </p>
      <h2 className="mb-4 font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        Past Activity &amp; Impact
      </h2>
      <p className="mb-10 max-w-2xl leading-relaxed text-muted-foreground">
        Nearly two decades of work — from small local initiatives to a full
        working goshala and organic farm.
      </p>

      <div className="flex items-center gap-2 md:gap-4">
        <button
          type="button"
          aria-label="Scroll timeline left"
          onClick={() => scrollByStep("left")}
          className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="size-4" strokeWidth={1.5} />
        </button>

        <div
          ref={scrollRef}
          className="flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
                    {/* Row heights are NOT hardcoded. Each milestone's text is rendered
              in BOTH the "above" and "below" row -- the side it doesn't
              belong to is rendered `invisible` (still takes up space, just
              not painted). This means the grid's auto row-sizing sees every
              description in both rows, so row 1 and row 3 always end up the
              same height automatically -- keeping the line/arrows centered
              no matter how the content changes later. No manual height
              tuning ever needed. */}
          <div className="grid w-max grid-flow-col grid-rows-[auto_auto_auto] auto-cols-[16rem] md:auto-cols-[18rem]">
            {MILESTONES.map((milestone, index) => {
              const isAbove = index % 2 === 0;
              const textBlock = (
                <div>
                  <p className="mb-2 font-heading text-base text-foreground">
                    {milestone.year}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              );

              return (
                <Fragment key={milestone.year}>
                  <div
                    className={cn(
                      "flex items-end justify-center px-3 pb-4 text-center",
                      !isAbove && "invisible"
                    )}
                  >
                    {textBlock}
                  </div>

                  <div className="flex items-center">
                    <div
                      className={cn(
                        "h-px flex-1",
                        index === 0 ? "bg-transparent" : "bg-border"
                      )}
                    />
                    <div className="size-3 shrink-0 rounded-full border-2 border-gold bg-background" />
                    <div
                      className={cn(
                        "h-px flex-1",
                        index === MILESTONES.length - 1
                          ? "bg-transparent"
                          : "bg-border"
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      "flex items-start justify-center px-3 pt-4 text-center",
                      isAbove && "invisible"
                    )}
                  >
                    {textBlock}
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          aria-label="Scroll timeline right"
          onClick={() => scrollByStep("right")}
          className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight className="size-4" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}