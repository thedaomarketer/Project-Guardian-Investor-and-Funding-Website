// Sourced from /docs/research/competitors.md. "co" = the company's own claim
// (marketing/spec sheet), not independently verified. "n/a" = not publicly
// stated / not applicable. Project Guardian's own row uses build-status
// labels, never a checkmark, because nothing is shipped yet.

export type ComparisonValue = { value: string; note?: "co" | "verified" | "n/a" };

export type CompetitorRow = {
  name: string;
  summary: string;
  values: Record<string, ComparisonValue>;
};

export const comparisonDimensions = [
  "gnssCellular",
  "cellularIndependent",
  "sos",
  "geofencing",
  "locationHistory",
  "emergencySharing",
  "caregiverPermissions",
  "modularFormFactor",
  "safetyTimeline",
  "aiAnomalyDetection",
] as const;

export const dimensionLabels: Record<(typeof comparisonDimensions)[number], string> = {
  gnssCellular: "GNSS + cellular location",
  cellularIndependent: "Works without a paired phone nearby",
  sos: "Dedicated SOS / emergency button",
  geofencing: "Geofencing / safe zones",
  locationHistory: "Location history",
  emergencySharing: "Time-limited emergency sharing",
  caregiverPermissions: "Multi-caregiver permissions",
  modularFormFactor: "One core across multiple form factors",
  safetyTimeline: "Structured emergency event timeline",
  aiAnomalyDetection: "Explainable anomaly detection",
};

export const competitors: CompetitorRow[] = [
  {
    name: "AngelSense",
    summary:
      "GPS tracker built for children with special needs; 4G + GPS + Wi-Fi + Bluetooth, two-way speakerphone, fall detection.",
    values: {
      gnssCellular: { value: "Yes", note: "co" },
      cellularIndependent: { value: "Yes", note: "co" },
      sos: { value: "Yes", note: "co" },
      geofencing: { value: "Yes", note: "co" },
      locationHistory: { value: "Yes", note: "co" },
      emergencySharing: { value: "Not publicly stated", note: "n/a" },
      caregiverPermissions: { value: "Not publicly stated", note: "n/a" },
      modularFormFactor: { value: "No — single clip-on device", note: "verified" },
      safetyTimeline: { value: "Not publicly stated", note: "n/a" },
      aiAnomalyDetection: { value: "Markets \"AI Risk Alerts\"", note: "co" },
    },
  },
  {
    name: "Jiobit (Life360)",
    summary:
      "Small multi-carrier cellular + GPS + Wi-Fi + Bluetooth tag, ~18g, acquired by Life360 in 2021. SOS routes through a Noonlight dispatch partnership.",
    values: {
      gnssCellular: { value: "Yes", note: "co" },
      cellularIndependent: { value: "Yes", note: "co" },
      sos: { value: "Yes, via Noonlight", note: "co" },
      geofencing: { value: "Yes", note: "co" },
      locationHistory: { value: "Yes", note: "co" },
      emergencySharing: { value: "Not publicly stated", note: "n/a" },
      caregiverPermissions: { value: "Yes, within Life360 app", note: "co" },
      modularFormFactor: { value: "No — single tag form factor", note: "verified" },
      safetyTimeline: { value: "Not publicly stated", note: "n/a" },
      aiAnomalyDetection: { value: "Not publicly stated", note: "n/a" },
    },
  },
  {
    name: "Xplora",
    summary:
      "Kids' 4G GPS smartwatch sold via retail (Target, Walmart) in several markets.",
    values: {
      gnssCellular: { value: "Yes", note: "co" },
      cellularIndependent: { value: "Yes", note: "co" },
      sos: { value: "Yes", note: "co" },
      geofencing: { value: "Yes", note: "co" },
      locationHistory: { value: "Yes", note: "co" },
      emergencySharing: { value: "Not publicly stated", note: "n/a" },
      caregiverPermissions: { value: "Not publicly stated", note: "n/a" },
      modularFormFactor: { value: "No — smartwatch only", note: "verified" },
      safetyTimeline: { value: "Not publicly stated", note: "n/a" },
      aiAnomalyDetection: { value: "Not publicly stated", note: "n/a" },
    },
  },
  {
    name: "Apple Find My / AirTag",
    summary:
      "General-purpose Bluetooth item tracker using Apple's crowd-sourced Find My network. Not designed as a child-safety product.",
    values: {
      gnssCellular: { value: "No GPS chip, no cellular", note: "verified" },
      cellularIndependent: { value: "No — depends on nearby Apple devices", note: "verified" },
      sos: { value: "No dedicated SOS", note: "verified" },
      geofencing: { value: "Limited (via Find My app zones)", note: "verified" },
      locationHistory: { value: "Last-known location only", note: "verified" },
      emergencySharing: { value: "No purpose-built flow", note: "verified" },
      caregiverPermissions: { value: "Apple Family Sharing only", note: "verified" },
      modularFormFactor: { value: "No — single tag form factor", note: "verified" },
      safetyTimeline: { value: "No", note: "verified" },
      aiAnomalyDetection: { value: "No", note: "verified" },
    },
  },
  {
    name: "Project Guardian (proposed)",
    summary:
      "Modular SafeCore module concept, designed across multiple form factors. Nothing below is shipped — every claim is a design intent.",
    values: {
      gnssCellular: { value: "Planned target design" },
      cellularIndependent: { value: "Planned target design" },
      sos: { value: "Planned — core interaction being designed" },
      geofencing: { value: "Planned" },
      locationHistory: { value: "Planned" },
      emergencySharing: { value: "Planned — a named differentiator" },
      caregiverPermissions: { value: "Planned" },
      modularFormFactor: { value: "Planned — the core design premise" },
      safetyTimeline: { value: "Planned — a named differentiator" },
      aiAnomalyDetection: { value: "Planned, explainable-only by design" },
    },
  },
];
