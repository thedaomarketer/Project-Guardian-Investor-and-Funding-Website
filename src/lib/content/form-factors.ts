import type { BuildStatus } from "@/components/ui/status-tag";

export type FormFactor = {
  name: string;
  description: string;
  status: BuildStatus;
};

export const formFactors: FormFactor[] = [
  {
    name: "Guardian Band",
    description: "A wrist-worn bracelet housing the SafeCore module — the primary concept form factor.",
    status: "concept",
  },
  {
    name: "Guardian Pendant",
    description: "A necklace-style housing for children or caregivers who prefer not to wear a wristband.",
    status: "concept",
  },
  {
    name: "Guardian Backpack Clip",
    description: "A clip-on module for a backpack or bag, designed for less conspicuous everyday carry.",
    status: "concept",
  },
  {
    name: "Guardian Clothing Attachment",
    description: "An attachment point designed to integrate with clothing, explored for younger children.",
    status: "concept",
  },
  {
    name: "Guardian Toy Integration",
    description: "Exploratory concept for embedding SafeCore into a soft toy or comfort object.",
    status: "future",
  },
  {
    name: "Guardian Jewelry / Earring",
    description: "Future research direction only. Not a committed product and not represented as one.",
    status: "future",
  },
];
