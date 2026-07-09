# Warehousing in the Loop Digital v0.2.5

## BLUF

This repository now opens directly to **WITL Digital v0.2.5 — Guided Warehouse Activity Review**.

It is a single-file offline HTML facilitator console that combines:

- guided tabletop run flow
- clickable warehouse zones
- event-history capture
- activity heat / status visualization
- plain-language Supply Marine framing
- AAR export

This is not a WMS, warehouse simulator, load planner, AI adviser, or blame tool.

## Current Active File

Open:

```text
index.html
```

No server, build step, account, database, cloud service, or internet is required.

## Current Version

**v0.2.5 — Event History + Warehouse Activity Visualization**

This version borrows the correct lesson from warehouse simulator references:

> action/event history first, visualization second, AAR third.

The warehouse board shows what the table touched, what it believed, what it validated, and where risk accumulated. It does not simulate machine movement or calculate operational feasibility.

## Doctrine Lock

Humans need time and context before the next right action.

The console preserves the run rhythm:

```text
Readback → Processing Pause → Commit → Action → Resolve → Record/Validate → Final Decision → AAR
```

## Supply Marine Framing

The interface explicitly states:

> This is not a blame tool. The point is to show where the process, data, timing, and handoffs make good Marines work harder than they should.

## Guardrails

The active HTML does not:

- generate facts
- recommend moves
- use AI decision advice
- use real unit data
- calculate load, cube, or weight
- simulate warehouse physics
- include avatar movement or player-facing game loops
- replace facilitator judgment

## What v0.2.5 Adds

- Stepper-based guided run flow.
- Clickable warehouse zones.
- Event history as the source of activity visualization.
- Zone heat based on recorded events.
- Status badges for provisional, validated, risk, and reveal events.
- Controlled Ground Truth drawer.
- Activity summary by zone.
- AAR copy/download.

## Branch Discipline

This repo should be treated as the **WITL Digital Facilitator Console / Guided Activity View** branch.

Do not confuse it with:

- the tabletop packet source of truth
- the earlier full-control split-file console
- the animated warehouse sim proof slice
- future 3D / digital-twin / simulator lanes

## Next Review Question

Does the warehouse activity layer help the facilitator and players see process friction, evidence gaps, and false-green risk without making Supply Marines feel blamed or turning the session into software-clicking?
