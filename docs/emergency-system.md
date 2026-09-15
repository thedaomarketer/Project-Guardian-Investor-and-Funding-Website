# Emergency System (Concept)

This describes the **proposed** emergency response flow demonstrated
interactively at `/product`. Nothing here is a built or certified system —
it is a concept, demonstrated with synthetic data, to communicate design
intent to investors and early testers.

## Flow

```
NORMAL
  → UNUSUAL MOVEMENT (pattern deviates from configured schedule/routes)
  → ALERT (caregiver notified, reason stated explicitly)
  → SOS (child-initiated emergency interaction)
  → EMERGENCY MODE (increased location-update frequency, timeline starts)
  → EMERGENCY TIMELINE (structured record of every event and action)
  → TEMPORARY SHARING (time-limited, revocable location sharing with chosen contacts)
```

## Information shown to a caregiver (design intent)

- Current location **or** last confirmed location — always labelled which
  one it is; stale data is never presented as live.
- Timestamp of the last update.
- Location confidence / connectivity status.
- Device status (battery, connectivity).
- Recent route (where available).
- The specific reason an alert fired (never a black-box "risk score").
- Emergency contacts and their current sharing status (not shared /
  invited / viewing).

## What the demo actually is

`src/components/demo/product-demo.tsx` implements a nine-state client-side
state machine (`src/lib/content/demo-scenarios.ts`): normal, safe-zone
arrival, safe-zone departure, unusual movement, device offline, low
battery, SOS, emergency mode, emergency sharing. All names ("Demo Child",
"Demo Guardian"), locations and timestamps are fictional and labelled
"DEMO MODE — simulated data" throughout. It does not connect to any real
device, telemetry feed, or third-party mapping API.

## Explicitly out of scope / not claimed

- No automatic contact with police or emergency services.
- No autonomous decision-making that overrides a caregiver.
- No claim that this system prevents or detects kidnapping, trafficking,
  or abuse — see `docs/ai-safety.md` and `CLAUDE.md` for the same rule
  applied to AI-specific claims.

## What real engineering this would require (not started)

Device-side event detection, a cloud safety-event engine, push
notification infrastructure, a real mapping/geocoding integration, carrier
SMS/voice fallback for offline scenarios, and a tested, on-call-monitored
incident response process. See `docs/hardware-roadmap.md` and the roadmap
phases on `/roadmap` for sequencing.
