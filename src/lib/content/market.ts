// Figures sourced from /docs/research/market.md and investor-market.md.
// Third-party report ranges are attributed to the named firm, never
// presented as Project Guardian's own estimate. Household counts are
// from StatCan (2021 Census) and US Census (2024 CPS) as cited in the
// research file.

export const householdBaselines = [
  {
    label: "Canadian census families with children",
    value: "≈6.0 million",
    detail: "58% of 10.3 million census families",
    source: "Statistics Canada, 2021 Census",
  },
  {
    label: "US families with children under 18",
    value: "≈33.3 million",
    detail: "39% of US family households",
    source: "US Census Bureau, 2024 Current Population Survey",
  },
];

export const thirdPartyMarketEstimates = [
  {
    firm: "Fortune Business Insights",
    figure: "Cited in the multi-billion-dollar range for the global kids' GPS tracker / smartwatch market",
    note: "Figures vary widely by firm and methodology — treat as directional, not a settled number.",
  },
  {
    firm: "Grand View Research",
    figure: "Publishes an overlapping but differently-scoped estimate for kids' smartwatches",
    note: "Report scope (trackers vs. smartwatches vs. wearables generally) differs by firm, which is the main driver of the wide range.",
  },
  {
    firm: "GM Insights and others",
    figure: "Additional third-party estimates exist with their own scope and base year",
    note: "No single authoritative TAM exists for this specific niche; see docs/research/market.md for the full range and caveats.",
  },
];

export const comparableFundingEvents = [
  {
    event: "Life360 acquires Jiobit",
    detail: "Reported acquisition value in the tens of millions (~$37–54.5M across sources)",
    year: "2021",
  },
  {
    event: "Bark Technologies Series C",
    detail: "$30M raised",
    year: "2022",
  },
  {
    event: "AngelQ seed funding",
    detail: "~$5.85M raised",
    year: "2025",
  },
];
