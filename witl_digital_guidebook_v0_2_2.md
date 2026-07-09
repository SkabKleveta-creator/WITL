# Warehousing in the Loop Digital Guidebook v0.2.2
## Facilitator Console Doctrine

## 1. Purpose

Warehousing in the Loop Digital v0.2.2 converts the v0.2.2 tabletop packet into an offline facilitator console.

The purpose is to support a deliberate facilitated support wargame where players experience warehouse workflow failure, hidden ground truth, decision pressure, human processing limits, provisional progress, validation, and AAR capture.

The console does not turn the module into a warehouse video game.

## 2. What This Is

This is:

- An offline static HTML facilitator console.
- A memory and timing aid.
- A facilitator-controlled ground-truth reveal manager.
- A validated/provisional tracking tool.
- An AAR capture tool.
- A controlled bridge from tabletop support wargaming to structured data capture.

## 3. What This Is Not

This is not:

- A logistics platform.
- A warehouse management system.
- A load planning tool.
- A cube/weight calculator.
- An AI decision assistant.
- A player-facing video game.
- A scenario generator.
- A source of operational facts.

## 4. Source of Truth

The tabletop source remains:

**Warehousing in the Loop v0.2.2 — Dock-to-Stock Collapse: Definition and Script Patch**

The console must preserve:

**Readback → Processing Pause → Commit Statement → Action → Resolution → Record/Validate → Final Decision → AAR**

## 5. Core Digital Rule

The console may support facilitator control.

The console may not replace human judgment.

The console may reveal only from the locked scenario data. It may not invent warehouse facts.

## 6. v0.2.2 Doctrine Alignment Rules

- Insight cannot be earned until the Processing Pause timer completes for the current round.
- Resolution cannot be applied until the Commit Statement is complete.
- Resolution cannot be applied until the Pause is completed, deliberately marked skipped/rushed, or covered by the Safety Carve-Out.
- Observe upgrades do not auto-reveal faults. The facilitator must reveal ground truth intentionally.
- Insight spend effects are either logged as facilitator-adjudicated or explicitly queued by the console.
- Save/load hydrates against the current schema so old state does not corrupt a run.
- Round movement is bounded to the scripted five-round run plus Final Decision Phase.

## 7. Insight Spend Handling

Insight remains a human-processing currency, not an automated recommendation engine.

The console supports three spends:

1. **Validated/provisional answer:** the facilitator must state plainly whether the intended action will register as validated or provisional. No automatic track change is applied.
2. **Pressure mitigation:** the team may reduce one active pressure-card track penalty by 1. The facilitator applies the reduced penalty through normal resolution controls and records the adjustment.
3. **Validate boost:** the console queues +1 Validate effect. The next Validate upgrade locks one additional provisional gain if available.

## 8. Operating Contexts

The console supports five visual/context frames:

1. Supply Management Unit / SMU
2. MRE / Class I Issue
3. Initial Issue Warehouse
4. Embark / Exercise Planning
5. Prepositioning / MPF Lens

These frames change language and visual interpretation only. They do not change the scoring system, pressure sequence, hidden faults, or action economy.

## 9. Virtual Containerization

v0.2.2 includes virtual containerization hooks:

- MRE Pallet Block
- Initial Issue Tri-Wall
- 20-ft ISO Container
- 40-ft ISO Container
- QUADCON / Small Container
- Pallet Train / Chalk

These are planning markers only. They do not calculate cube, weight, center of balance, compatibility, tie-down requirements, load sequence correctness, or transportation feasibility.

## 10. Facilitator Permissions

The facilitator may:

- Select operating context.
- Reveal hidden faults from the Ground Truth Brief.
- Mark faults validated when the team proves they exist.
- Apply default or upgraded resolution.
- Mark false green/risk.
- Add virtual containers as discussion objects.
- Enter notes.
- Export the AAR.

The facilitator should not:

- Add new facts during the run.
- Give move recommendations.
- Let the console decide the right answer.
- Skip the Processing Pause without documenting consequence.
- Treat provisional gains as final validated gains.

## 11. Acceptance Tests

The console passes v0.2.2 if:

1. It runs fully offline.
2. The scripted first run loads by default.
3. The Round 1 Readback is present.
4. The Processing Pause timer must complete before Insight can be earned.
5. The Commit Statement is captured and required before resolution.
6. Ground Truth Brief reveals are facilitator-controlled.
7. Provisional and validated gains remain separate.
8. Unvalidated gains do not score as validated.
9. Insight spends are not no-ops; they are either facilitator-adjudicated and logged, or explicitly queued.
10. The Final Decision Phase is present.
11. AAR export captures decisions, assumptions, evidence/risk, faults, tracks, and notes.
12. No AI advice, generated facts, load math, or real unit data are present.

## 12. First Run Rule

Run the first test side-by-side with the tabletop packet. Do not add features before that run unless a literal run-blocking defect is found.
