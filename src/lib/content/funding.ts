export type AllocationCategory = {
  label: string;
  percent: number;
};

// Illustrative planning assumption only — not a finalized budget.
export const fundingAllocation: AllocationCategory[] = [
  { label: "Hardware engineering", percent: 28 },
  { label: "Software development", percent: 18 },
  { label: "Prototype manufacturing", percent: 12 },
  { label: "Testing", percent: 8 },
  { label: "Certification & compliance", percent: 8 },
  { label: "Security", percent: 6 },
  { label: "Cloud infrastructure", percent: 5 },
  { label: "Pilot program", percent: 6 },
  { label: "Legal & IP", percent: 4 },
  { label: "Operations", percent: 3 },
  { label: "Customer validation", percent: 2 },
];

export const investorThesisPoints = [
  {
    title: "A large, emotionally important problem",
    description:
      "Caregiver awareness of a child's location and wellbeing is a persistent, high-stakes need that doesn't go away.",
  },
  {
    title: "Hardware plus recurring software revenue",
    description:
      "A device sale paired with a subscription is a well-understood model in connected hardware, with revenue that can compound per customer.",
  },
  {
    title: "Multiple form factors from one core",
    description:
      "A modular SafeCore module is designed to extend across form factors without re-engineering the core platform each time.",
  },
  {
    title: "An expandable software platform",
    description:
      "The safety event engine, dashboard and emergency workflow are designed to generalize beyond the first hardware product.",
  },
  {
    title: "Data-informed safety intelligence",
    description:
      "Location and device-status data create the foundation for explainable pattern detection as the platform matures.",
  },
  {
    title: "A potential institutional market",
    description:
      "Schools, camps and youth organizations are a plausible future customer segment beyond individual families.",
  },
  {
    title: "Founder-level understanding of the unknowns",
    description:
      "The plan is built around validating hardware, regulatory and go-to-market assumptions in sequence, not skipping them.",
  },
];
