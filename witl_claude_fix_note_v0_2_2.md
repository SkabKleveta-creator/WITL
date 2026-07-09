# Claude Fix Note — WITL Digital Facilitator Console v0.2.2

## BLUF

Claude confirmed the correct branch and found two actionable issues:

1. Insight spend was confusing because the token spent but the console did not make clear which effects were manual vs. queued.
2. Version identity was still messy because the requested artifact and package labels did not all agree.

Both issues are fixed in v0.2.2.

## Fix 1 — Insight Spend

The console now treats Insight spends as follows:

1. **Validated/provisional answer:** facilitator must state the answer; no automatic track change.
2. **Pressure mitigation:** facilitator may reduce one active pressure-card track penalty by 1 and apply the reduced penalty through normal resolution controls.
3. **Validate boost:** console queues +1 Validate effect; next Validate upgrade locks one additional provisional gain if available.

This keeps facilitator authority while avoiding a no-op token.

## Fix 2 — Version Identity

The clean artifact is now:

**WITL Digital Facilitator Console v0.2.2**

The ZIP contains a manifest and one consistent package identity.

## Branch Status

Use this branch for the first side-by-side test.

Do not use the Animated Warehouse Sim branch as the console.

## Stop Rule

No expansion before the first side-by-side run unless a literal run-blocking defect is found.
