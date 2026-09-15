export type Risk = {
  title: string;
  description: string;
};

export const risks: Risk[] = [
  {
    title: "Hardware complexity",
    description:
      "Miniaturized devices that combine GNSS, cellular, sensors and battery management are difficult and slow to get right; timelines can slip.",
  },
  {
    title: "Battery limitations",
    description:
      "Continuous location tracking is power-intensive. Battery life and size are a real engineering trade-off, not yet finalized.",
  },
  {
    title: "Cellular and GPS coverage",
    description:
      "Location accuracy and connectivity depend on carrier networks and satellite visibility, and will vary by environment.",
  },
  {
    title: "Regulatory requirements",
    description:
      "Radio equipment certification and product safety approvals take time and money and are not yet obtained.",
  },
  {
    title: "Privacy obligations",
    description:
      "Handling children's location data carries real legal and reputational risk if privacy commitments are not upheld.",
  },
  {
    title: "Cybersecurity",
    description:
      "A safety product that is compromised could cause real harm. Security must be built in, tested, and maintained continuously.",
  },
  {
    title: "Manufacturing",
    description:
      "Moving from prototype to reliable, quality-controlled production at volume is a common failure point for hardware startups.",
  },
  {
    title: "Customer acquisition",
    description:
      "Parents are a skeptical, safety-conscious audience; acquiring customers cost-effectively is unproven.",
  },
  {
    title: "Subscription retention",
    description:
      "Recurring revenue depends on families continuing to see ongoing value as children grow older.",
  },
  {
    title: "False alerts",
    description:
      "Overly sensitive or poorly tuned alerts could erode trust; under-sensitive alerts could miss real events. Both carry risk.",
  },
  {
    title: "Emergency workflow liability",
    description:
      "A product involved in emergency response carries liability exposure if the system fails or is misunderstood by users.",
  },
  {
    title: "Competition",
    description:
      "Established players (smartwatch makers, GPS tracker companies, Apple's Find My ecosystem) have distribution and brand advantages.",
  },
  {
    title: "Capital requirements",
    description:
      "Hardware development, certification, tooling and inventory require meaningful capital ahead of revenue.",
  },
];
