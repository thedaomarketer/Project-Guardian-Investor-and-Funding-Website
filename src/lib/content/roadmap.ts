export type RoadmapPhase = {
  phase: number;
  name: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
};

export const roadmapPhases: RoadmapPhase[] = [
  {
    phase: 1,
    name: "Research & Requirements",
    description:
      "Problem validation, competitor and regulatory research, product requirements definition.",
    status: "in-progress",
  },
  {
    phase: 2,
    name: "Software MVP",
    description:
      "Parent application, safety event engine, and cloud platform built and validated against simulated device data.",
    status: "planned",
  },
  {
    phase: 3,
    name: "Development Hardware",
    description:
      "First development hardware iteration for engineering bring-up: GNSS, cellular and sensor validation on the bench.",
    status: "planned",
  },
  {
    phase: 4,
    name: "Integrated Prototype",
    description:
      "Hardware and software integrated into a single wearable prototype for internal testing.",
    status: "planned",
  },
  {
    phase: 5,
    name: "Engineering Validation",
    description:
      "Battery life, durability, connectivity and location-accuracy testing under real-world conditions.",
    status: "planned",
  },
  {
    phase: 6,
    name: "Regulatory Testing",
    description:
      "Radio equipment certification (e.g., ISED in Canada), applicable product-safety and battery-safety testing.",
    status: "planned",
  },
  {
    phase: 7,
    name: "Pilot Program",
    description:
      "Limited pilot with a small group of families to validate the end-to-end experience before wider release.",
    status: "planned",
  },
  {
    phase: 8,
    name: "Manufacturing",
    description:
      "Production-line setup and quality processes with a contract manufacturer, informed by pilot learnings.",
    status: "planned",
  },
  {
    phase: 9,
    name: "Commercial Launch",
    description:
      "Initial commercial availability of the first form factor and parent application.",
    status: "planned",
  },
  {
    phase: 10,
    name: "Additional Form Factors",
    description:
      "Expansion of the SafeCore module into additional form factors based on demand and validation.",
    status: "planned",
  },
];
