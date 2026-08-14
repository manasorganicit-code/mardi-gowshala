import type { ReactNode } from "react";

export type Application = {
  slug: string;
  title: string;
  what: ReactNode;
  benefits: ReactNode;
  cowRole: ReactNode;
  process: ReactNode;
  cta?: {
    label: string;
    href: string;
  };
};

export const APPLICATIONS: Application[] = [
  {
    slug: "ghee",
    title: "Organic A2 Gir Cow Ghee",
    what: (
      <>
        Bilona ghee is made using a traditional hand-churning method
        instead of the mechanical cream-separation used in most
        commercial ghee. Milk is first turned into curd overnight, the
        curd is hand-churned to separate butter, and that butter is
        slow-cooked on low heat until it becomes ghee.
      </>
    ),
    benefits: (
      <>
        Fermenting the milk into curd before churning matters more than
        it might seem — during that overnight fermentation, beneficial
        bacteria convert part of the milk fat into Conjugated Linoleic
        Acid (CLA), a compound linked to anti-inflammatory effects.
        Comparative lab analysis has found cow ghee carries meaningfully
        higher CLA levels than ghee made from other milk sources (
        <a
          href="https://scialert.net/fulltext/?doi=pjn.2019.1107.1114"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          Nutritional Aspects of Ghee Based on Lipid Composition
        </a>
        ). Bilona ghee also retains fat-soluble vitamins A, D, E, and K,
        since the slow, low-heat process doesn&apos;t destroy them the
        way high-temperature industrial processing can.
      </>
    ),
    cowRole: (
      <>
        Only A2-type milk from indigenous breeds like the Gir cow is
        used. The starting milk&apos;s fat and protein composition is
        what determines the ghee&apos;s final quality — this isn&apos;t a
        step you can substitute with any milk and get the same result.
      </>
    ),
    process: (
      <>
        Fresh cow milk is boiled, cooled, and cultured into curd
        overnight. The curd is then churned as per traditional Bilona
        method to separate butter (makhan) from buttermilk (chaas). The
        butter is slowly heated over a low flame until pure golden ghee
        separates naturally. It is then carefully strained, cooled, and
        bottled without any additives or preservatives.
      </>
    ),
    cta: { label: "Buy Ghee", href: "/contact?subject=GHEE_PURCHASE" },
  },
  {
    slug: "soil-organic-carbon",
    title: "Soil Organic Carbon",
    what: (
      <>
        Soil organic carbon is the carbon held in organic matter within
        soil — one of the clearest indicators of how fertile and healthy
        a piece of farmland actually is. Soil with more of it holds water
        better, resists erosion better, and supports more microbial
        life.
      </>
    ),
    benefits: (
      <>
        Cow dung and urine are dense natural sources of organic carbon
        and nutrients. Building up soil organic carbon over time
        improves water retention, reduces dependence on chemical
        fertilizer, and supports the kind of long-term soil fertility
        that chemical farming tends to erode season after season.
      </>
    ),
    cowRole: (
      <>
        Regular application of dung- and urine-based compost is what
        actually rebuilds organic carbon in soil — there&apos;s no
        shortcut to this without cattle-based inputs.
      </>
    ),
    process: (
      <>
        Dung and urine collected from our herd are processed into
        compost and slurry, applied directly to soil restoration on our
        own land at Manas Goshala.
      </>
    ),
  },
  {
    slug: "bio-pesticides",
    title: "Bio-Pesticides",
    what: (
      <>
        A pest-control spray made entirely from cow-based and plant
        ingredients, with no synthetic chemicals. The traditional
        formulation combines cow urine (gomutra), buttermilk (chaas),
        neem leaves, aakde (calotropis), and nilgiri (eucalyptus).
      </>
    ),
    benefits: (
      <>
        Neem is the main active ingredient here, and its pest-control
        effect comes from a compound called azadirachtin, which
        interferes with an insect&apos;s molting process — the insect
        can&apos;t grow into an adult that reproduces, so the pest
        population declines over a few spray cycles rather than dying
        instantly the way chemical pesticides act (
        <a
          href="https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/azadirachtin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          Azadirachtin — ScienceDirect Topics overview
        </a>
        ). Because it works this way, azadirachtin doesn&apos;t harm
        bees, ladybugs, and other beneficial insects the way
        broad-spectrum chemical pesticides typically do.
      </>
    ),
    cowRole: (
      <>
        Gomutra provides antimicrobial properties that add to the
        spray&apos;s effectiveness, and buttermilk helps the mixture
        stick to plant leaves so it stays active longer after spraying.
      </>
    ),
    process: (
      <>
        Neem, aakde, and nilgiri leaves are crushed and steeped, then
        combined with cow urine and buttermilk in set proportions, left
        to ferment for a set period, strained, diluted with water, and
        sprayed on crops.
      </>
    ),
  },
  {
    slug: "vermicompost",
    title: "Vermicompost",
    what: (
      <>
        An organic fertilizer produced when earthworms process cow dung
        and organic waste into nutrient-dense castings — a fine, dark,
        soil-like material.
      </>
    ),
    benefits: (
      <>
        Multiple studies comparing vermicompost to raw cow dung and
        standard compost have found significantly higher levels of
        available nitrogen, phosphorus, and potassium in finished
        vermicompost, along with better structure for plant root uptake
        (
        <a
          href="https://www.intechopen.com/chapters/67957"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          Efficacy of Different Substrates on Vermicompost Production
        </a>
        ). In practical terms, that means a given quantity of
        vermicompost feeds soil more effectively than the same quantity
        of raw dung.
      </>
    ),
    cowRole: (
      <>
        Cow dung is the primary feedstock earthworms consume — without a
        steady dung supply, there&apos;s no vermicompost.
      </>
    ),
    process: (
      <>
        Dung is layered in a shaded pit or bed → earthworms (commonly
        Eisenia fetida) are introduced → the bed is kept moist → the
        worms process the material over roughly 30–45 days → the
        resulting castings are harvested, dried, and sieved for use.
      </>
    ),
  },
  {
    slug: "jivamrut",
    title: "Jivamrut / Bio-Digestor Slurry",
    what: (
      <>
        A fermented microbial culture used as a soil input — made from
        cow dung, cow urine, jaggery, and pulse or gram flour, sometimes
        with a handful of native soil added as a starter culture.
      </>
    ),
    benefits: (
      <>
        The fermentation process cultivates large populations of
        nitrogen-fixing and phosphate-solubilizing bacteria, which
        directly improve how efficiently soil nutrients become available
        to plant roots. Because the core ingredients come from the farm
        itself, the cost per application is a fraction of what a
        comparable chemical fertilizer treatment would run.
      </>
    ),
    cowRole: (
      <>
        Dung supplies the nutrient base and microbial starter; urine
        adds nitrogen and antimicrobial compounds. Without cattle,
        there&apos;s no Jivamrut.
      </>
    ),
    process: (
      <>
        Cow dung, cow urine, jaggery (dissolved in water), and pulse
        flour are mixed thoroughly with water in a large non-metal
        container → a handful of native soil is added as a microbial
        starter → the mixture is stirred twice daily → left to ferment
        in shade for 4–7 days → diluted and applied to soil or used as a
        foliar spray.
      </>
    ),
  },
  {
    slug: "agnihotra",
    title: "Homa Therapy + Agnihotra",
    what: (
      <>
        A Vedic fire ritual performed at precise sunrise and sunset
        times, using dried cow dung cakes, ghee, and rice as offerings
        in a copper pyramid-shaped vessel, along with mantras timed to
        the exact moment of sunrise or sunset.
      </>
    ),
    benefits: (
      <>
        A 2007 peer-reviewed study on havan smoke — made from a mix of
        dung, ghee, and medicinal wood/herbs — found it measurably
        reduced airborne bacteria in an enclosed test space (
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/17913417/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          Nautiyal et al., 2007, Journal of Ethnopharmacology
        </a>
        ). This gives a real scientific basis to a practice that&apos;s
        been part of Indian ritual life for centuries. The ash produced
        (bhasma) is traditionally used as a soil additive as well.
      </>
    ),
    cowRole: (
      <>
        Dried dung cakes and cow ghee are the essential fuel and offering
        for Agnihotra — it can&apos;t be performed in its traditional
        form without them.
      </>
    ),
    process: (
      <>
        We practice this daily at Manas Goshala, using dung and ghee
        produced on-site.
      </>
    ),
  },
];