export type DemoSeverity = "normal" | "info" | "warning" | "critical";

export type TimelineEntry = {
  time: string;
  label: string;
  detail: string;
};

export type EmergencyContact = {
  name: string;
  relation: string;
  sharing: "not shared" | "invited" | "viewing";
};

export type DemoScenario = {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  severity: DemoSeverity;
  battery: number;
  connectivity: "online" | "offline";
  lastUpdateLabel: string;
  locationConfidence: "current" | "last-confirmed";
  locationLabel: string;
  alertReason: string | null;
  mapPin: { x: number; y: number };
  showSafeZone: boolean;
  safeZoneCenter: { x: number; y: number };
  safeZoneRadius: number;
  showRoute: boolean;
  routePoints: { x: number; y: number }[];
  timeline: TimelineEntry[];
  contacts: EmergencyContact[];
};

// All names, locations and events below are synthetic demo data.
export const demoChildName = "Demo Child";
export const demoGuardianName = "Demo Guardian";

export const demoScenarios: DemoScenario[] = [
  {
    id: "normal",
    label: "Normal state",
    shortLabel: "Normal",
    description:
      "Demo Child is at school, inside the configured safe zone. Everything is reporting normally.",
    severity: "normal",
    battery: 82,
    connectivity: "online",
    lastUpdateLabel: "Updated 1 minute ago",
    locationConfidence: "current",
    locationLabel: "Lincoln Elementary — inside Safe Zone",
    alertReason: null,
    mapPin: { x: 48, y: 46 },
    showSafeZone: true,
    safeZoneCenter: { x: 48, y: 46 },
    safeZoneRadius: 16,
    showRoute: false,
    routePoints: [],
    timeline: [
      { time: "8:02 AM", label: "Arrived at Lincoln Elementary", detail: "Entered configured safe zone \"School\"." },
      { time: "7:41 AM", label: "Device online", detail: "Connected to cellular network." },
    ],
    contacts: [{ name: "Demo Guardian", relation: "Parent", sharing: "not shared" }],
  },
  {
    id: "safe-zone-arrival",
    label: "Safe zone arrival",
    shortLabel: "Zone arrival",
    description:
      "Demo Child's device has just entered the \"Home\" safe zone. Demo Guardian receives a routine arrival notice.",
    severity: "info",
    battery: 64,
    connectivity: "online",
    lastUpdateLabel: "Updated just now",
    locationConfidence: "current",
    locationLabel: "Home — entered Safe Zone",
    alertReason: "Entered configured safe zone \"Home\"",
    mapPin: { x: 30, y: 62 },
    showSafeZone: true,
    safeZoneCenter: { x: 30, y: 62 },
    safeZoneRadius: 14,
    showRoute: true,
    routePoints: [
      { x: 48, y: 46 },
      { x: 40, y: 54 },
      { x: 30, y: 62 },
    ],
    timeline: [
      { time: "3:31 PM", label: "Entered \"Home\" safe zone", detail: "Routine notification sent to Demo Guardian." },
      { time: "3:12 PM", label: "Left \"School\" safe zone", detail: "Expected — matches configured schedule." },
    ],
    contacts: [{ name: "Demo Guardian", relation: "Parent", sharing: "not shared" }],
  },
  {
    id: "safe-zone-departure",
    label: "Safe zone departure",
    shortLabel: "Zone departure",
    description:
      "Demo Child's device has left the \"School\" safe zone during school hours — outside the expected schedule.",
    severity: "warning",
    battery: 58,
    connectivity: "online",
    lastUpdateLabel: "Updated 2 minutes ago",
    locationConfidence: "current",
    locationLabel: "Maple Street — outside Safe Zone",
    alertReason: "Left \"School\" safe zone outside the configured schedule",
    mapPin: { x: 58, y: 40 },
    showSafeZone: true,
    safeZoneCenter: { x: 48, y: 46 },
    safeZoneRadius: 16,
    showRoute: true,
    routePoints: [
      { x: 48, y: 46 },
      { x: 53, y: 43 },
      { x: 58, y: 40 },
    ],
    timeline: [
      { time: "1:47 PM", label: "Unscheduled zone departure", detail: "Alert sent — left \"School\" during school hours." },
      { time: "8:02 AM", label: "Arrived at Lincoln Elementary", detail: "Entered configured safe zone \"School\"." },
    ],
    contacts: [{ name: "Demo Guardian", relation: "Parent", sharing: "not shared" }],
  },
  {
    id: "unusual-movement",
    label: "Unexpected movement",
    shortLabel: "Unusual movement",
    description:
      "The device is moving along a route it has never taken at this time, at a speed consistent with being in a vehicle.",
    severity: "warning",
    battery: 55,
    connectivity: "online",
    lastUpdateLabel: "Updated 30 seconds ago",
    locationConfidence: "current",
    locationLabel: "Route 9, northbound — unrecognized route",
    alertReason: "Unrecognized route detected outside the configured schedule",
    mapPin: { x: 66, y: 30 },
    showSafeZone: true,
    safeZoneCenter: { x: 48, y: 46 },
    safeZoneRadius: 16,
    showRoute: true,
    routePoints: [
      { x: 58, y: 40 },
      { x: 62, y: 35 },
      { x: 66, y: 30 },
    ],
    timeline: [
      { time: "1:52 PM", label: "Unrecognized route detected", detail: "Movement pattern does not match Demo Child's usual routes." },
      { time: "1:47 PM", label: "Unscheduled zone departure", detail: "Alert sent — left \"School\" during school hours." },
    ],
    contacts: [{ name: "Demo Guardian", relation: "Parent", sharing: "not shared" }],
  },
  {
    id: "device-offline",
    label: "Device offline",
    shortLabel: "Offline",
    description:
      "The device has lost connectivity. The app shows the last confirmed location — not a live position.",
    severity: "warning",
    battery: 55,
    connectivity: "offline",
    lastUpdateLabel: "Last seen 14 minutes ago",
    locationConfidence: "last-confirmed",
    locationLabel: "Route 9, northbound (last confirmed)",
    alertReason: "Device has not reported in longer than expected",
    mapPin: { x: 66, y: 30 },
    showSafeZone: false,
    safeZoneCenter: { x: 48, y: 46 },
    safeZoneRadius: 16,
    showRoute: true,
    routePoints: [
      { x: 58, y: 40 },
      { x: 62, y: 35 },
      { x: 66, y: 30 },
    ],
    timeline: [
      { time: "2:06 PM", label: "Connectivity lost", detail: "No signal received for over 10 minutes." },
      { time: "1:52 PM", label: "Unrecognized route detected", detail: "Movement pattern does not match Demo Child's usual routes." },
    ],
    contacts: [{ name: "Demo Guardian", relation: "Parent", sharing: "not shared" }],
  },
  {
    id: "low-battery",
    label: "Low battery",
    shortLabel: "Low battery",
    description:
      "The device battery is critically low. Demo Guardian is notified so they can plan for a possible loss of connectivity.",
    severity: "warning",
    battery: 8,
    connectivity: "online",
    lastUpdateLabel: "Updated 1 minute ago",
    locationConfidence: "current",
    locationLabel: "Maple Street Park",
    alertReason: "Battery below 10% — device may go offline soon",
    mapPin: { x: 52, y: 50 },
    showSafeZone: true,
    safeZoneCenter: { x: 48, y: 46 },
    safeZoneRadius: 16,
    showRoute: false,
    routePoints: [],
    timeline: [
      { time: "4:15 PM", label: "Low battery warning", detail: "Battery at 8% — charge device soon." },
      { time: "3:31 PM", label: "Entered \"Home\" safe zone", detail: "Routine notification sent to Demo Guardian." },
    ],
    contacts: [{ name: "Demo Guardian", relation: "Parent", sharing: "not shared" }],
  },
  {
    id: "sos",
    label: "SOS activated",
    shortLabel: "SOS",
    description:
      "Demo Child has pressed the SOS interaction on the device. Demo Guardian receives an immediate, high-priority alert.",
    severity: "critical",
    battery: 52,
    connectivity: "online",
    lastUpdateLabel: "Updated just now",
    locationConfidence: "current",
    locationLabel: "Route 9, northbound",
    alertReason: "SOS activated by device",
    mapPin: { x: 66, y: 30 },
    showSafeZone: false,
    safeZoneCenter: { x: 48, y: 46 },
    safeZoneRadius: 16,
    showRoute: true,
    routePoints: [
      { x: 58, y: 40 },
      { x: 62, y: 35 },
      { x: 66, y: 30 },
    ],
    timeline: [
      { time: "2:11 PM", label: "SOS activated", detail: "Demo Child triggered the device's emergency interaction." },
      { time: "2:06 PM", label: "Connectivity lost", detail: "No signal received for over 10 minutes." },
    ],
    contacts: [{ name: "Demo Guardian", relation: "Parent", sharing: "invited" }],
  },
  {
    id: "emergency-mode",
    label: "Emergency mode",
    shortLabel: "Emergency mode",
    description:
      "The system has entered emergency mode: location updates more frequently, and the emergency timeline begins recording every event.",
    severity: "critical",
    battery: 49,
    connectivity: "online",
    lastUpdateLabel: "Updated 10 seconds ago",
    locationConfidence: "current",
    locationLabel: "Route 9, northbound",
    alertReason: "Emergency mode active since SOS activation",
    mapPin: { x: 68, y: 27 },
    showSafeZone: false,
    safeZoneCenter: { x: 48, y: 46 },
    safeZoneRadius: 16,
    showRoute: true,
    routePoints: [
      { x: 58, y: 40 },
      { x: 62, y: 35 },
      { x: 66, y: 30 },
      { x: 68, y: 27 },
    ],
    timeline: [
      { time: "2:12 PM", label: "Emergency mode activated", detail: "Location update frequency increased; emergency timeline started." },
      { time: "2:11 PM", label: "SOS activated", detail: "Demo Child triggered the device's emergency interaction." },
      { time: "2:06 PM", label: "Connectivity lost", detail: "No signal received for over 10 minutes." },
    ],
    contacts: [{ name: "Demo Guardian", relation: "Parent", sharing: "invited" }],
  },
  {
    id: "emergency-sharing",
    label: "Emergency sharing",
    shortLabel: "Emergency sharing",
    description:
      "Demo Guardian has started time-limited location sharing with a trusted contact. Sharing automatically expires and can be revoked at any time.",
    severity: "critical",
    battery: 47,
    connectivity: "online",
    lastUpdateLabel: "Updated 5 seconds ago",
    locationConfidence: "current",
    locationLabel: "Route 9, northbound",
    alertReason: "Emergency mode active — temporary sharing in progress",
    mapPin: { x: 70, y: 25 },
    showSafeZone: false,
    safeZoneCenter: { x: 48, y: 46 },
    safeZoneRadius: 16,
    showRoute: true,
    routePoints: [
      { x: 58, y: 40 },
      { x: 62, y: 35 },
      { x: 66, y: 30 },
      { x: 68, y: 27 },
      { x: 70, y: 25 },
    ],
    timeline: [
      { time: "2:14 PM", label: "Temporary sharing started", detail: "Shared with Uncle James for 60 minutes. Revocable at any time." },
      { time: "2:12 PM", label: "Emergency mode activated", detail: "Location update frequency increased; emergency timeline started." },
      { time: "2:11 PM", label: "SOS activated", detail: "Demo Child triggered the device's emergency interaction." },
    ],
    contacts: [
      { name: "Demo Guardian", relation: "Parent", sharing: "viewing" },
      { name: "Uncle James (demo contact)", relation: "Trusted contact", sharing: "viewing" },
    ],
  },
];

export function getScenario(id: string): DemoScenario {
  return demoScenarios.find((s) => s.id === id) ?? demoScenarios[0];
}
