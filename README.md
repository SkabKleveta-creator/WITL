# Warehousing in the Loop Digital Facilitator Console v0.2.2

## BLUF

This is the doctrine-aligned offline HTML facilitator console for the Warehousing in the Loop v0.2.2 tabletop packet.

It is not a standalone warehouse game, logistics platform, embark load planner, animated sim, or AI decision tool.

## Branch Identity

This ZIP is the **Digital Facilitator Console** branch.

It is distinct from:

- **Warehousing in the Loop v0.2.2 tabletop packet** — doctrine/source method.
- **WITL Animated Warehouse Sim v0.1** — parallel proof slice only.

Use this package for side-by-side tabletop + digital facilitator-console testing.

## How to Run

1. Unzip the package.
2. Open `index.html` in a modern browser.
3. Use the scripted first run.
4. Run the v0.2.2 tabletop packet side-by-side with the console.
5. Export the AAR at the end.

No server, account, database, cloud dependency, install, or internet is required.

## Files

- `index.html` — main console UI.
- `styles.css` — professional/cartoon warehouse visual layer.
- `app.js` — console logic and local session state.
- `scenario_v0_2_2.js` — locked scenario data and ground truth.
- `README.md` — package use and branch identity.
- `MANIFEST.md` — file manifest and assessment protocol.
- `witl_digital_guidebook_v0_2_2.md` — digital doctrine and use guide.
- `witl_pressure_test_premortem_v0_2_2.md` — pressure test, premortem, assessed risks, fixes, deferred items.
- `witl_build_aar_v0_2_2.md` — build AAR.
- `witl_claude_fix_note_v0_2_2.md` — response to Claude's correct console assessment.

## v0.2.2 Fixes

- Promotes the corrected console to one clear version identity: **v0.2.2**.
- Resolves Insight spend ambiguity by making spend effects either facilitator-adjudicated or explicitly queued.
- Queues +1 Validate effect when Insight option 3 is spent.
- Keeps pressure mitigation facilitator-controlled and logged, rather than pretending the console can infer which track penalty applies.
- Adds round bounds and final-phase guardrails for Back/End Round edge cases.
- Keeps facilitator-controlled Ground Truth reveals.
- Keeps provisional and validated gains separate.
- Keeps Processing Pause timer enforcement before Insight can be earned.

## Guardrails

- The v0.2.2 tabletop packet remains the doctrine source.
- Humans decide.
- The console supports timing, readback, ground-truth reveal, validated/provisional tracking, final decision, and AAR export.
- The app does not generate facts.
- The app does not recommend moves.
- The app does not calculate load, cube, or weight.
- The app does not use real unit data.
- The app does not provide player-facing videogame mode.

## First Test Question

Does the console improve human processing, evidence capture, and facilitator control without turning the session into click-through software?
