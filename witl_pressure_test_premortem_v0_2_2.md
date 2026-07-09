# Warehousing in the Loop Digital v0.2.2
## Pressure Test and Premortem

## BLUF

v0.2.2 corrects the actionable defects found in Claude's correct console assessment while preserving the facilitator-console branch.

The immediate goal is not expansion. The immediate goal is a clean side-by-side test with the v0.2.2 tabletop packet.

## Pressure Test

### 1. It becomes a warehouse game

Risk: realistic warehouse framing and virtual containers pull attention toward simulation fidelity.

Control: copy and UI state this is a facilitator console, not a video game, WMS, logistics platform, or load planner.

### 2. The console replaces facilitator authority

Risk: app appears to decide truth, scoring, or right answer.

Control: reveals are manual. Track changes are manual. Insight pressure mitigation is facilitator-adjudicated and logged. No AI advice.

### 3. Processing Pause becomes a fake checkbox

Risk: users click through without processing.

Control: Insight cannot be earned until the timer completes. Resolution requires completed pause, skipped/rushed marking, or Safety Carve-Out.

### 4. Insight spend becomes confusing

Risk: token is spent but nothing visible happens.

Control: v0.2.2 states which spends are facilitator-adjudicated and queues the Validate boost effect.

### 5. Version identity breaks again

Risk: reviewers assess the wrong branch.

Control: package name, folder name, README, Manifest, guidebook, and UI all say v0.2.2 Digital Facilitator Console.

### 6. Embark/containerization becomes a load planner

Risk: container hooks invite cube/weight/math drift.

Control: every container hook is non-scoring and explicitly says no load/cube/weight math in this build.

## Premortem

Assume WITL Digital v0.2.2 fails after first use. Why?

1. Facilitator lets the UI drive conversation instead of using it as a table aid.
2. Processing Pause still feels procedural rather than useful.
3. Insight is either too weak or too fiddly.
4. Virtual containers distract from the diagnostic loop.
5. AAR captures activity but not enough reasoning.
6. Players treat validated/provisional as scoring math rather than evidence discipline.
7. The package is handed off without the branch identity note.

## Fixes Applied in v0.2.2

1. Promoted package to one clean version identity: v0.2.2.
2. Added manifest and branch identity protocol.
3. Clarified Insight spend effects.
4. Queued +1 Validate effect when Insight option 3 is used.
5. Kept pressure mitigation facilitator-adjudicated and logged.
6. Added bounded round/final-phase handling.
7. Preserved facilitator-controlled Ground Truth reveals.
8. Removed stale branch docs from the clean package.

## Deferred

Not used in v0.2.2:

- AI advice.
- Generated facts.
- Load/cube/weight math.
- Real unit data.
- Player-facing videogame mode.
- Random scenario generation.
- Additional faults, pressures, tracks, or actions.

## First Test Question

Does the console improve human processing, evidence capture, and facilitator control without turning the session into click-through software?
