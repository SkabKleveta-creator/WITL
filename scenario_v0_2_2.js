/* Warehousing in the Loop Digital v0.2.2
   Source doctrine: WITL v0.2.2 Definition and Script Patch.
   This file is scenario truth. The app may reveal from here. It may not invent facts. */
window.WITL_SCENARIO = {
  meta: {
    title: "Warehousing in the Loop",
    subtitle: "Dock-to-Stock Collapse",
    version: "Digital Facilitator Console v0.2.2",
    tabletopSource: "v0.2.2 Definition and Script Patch",
    parent: "Inside the System: TTRPG Engine",
    doctrine: "Humans need time and context before they can execute the next right action.",
    digitalRole: "The console supports facilitation, timing, reveal control, logging, provisional-vs-validated tracking, final decision, and AAR export. Humans decide.",
    notBuilt: [
      "No AI-generated facts or move advice",
      "No load calculator or cube/weight math",
      "No real unit data",
      "No backend, accounts, cloud, or internet dependency",
      "No player-facing videogame mode",
      "No random scenario generator in first run"
    ]
  },
  contexts: {
    smu: {
      label: "Supply Management Unit / SMU",
      note: "A realistic supply warehouse frame: receiving dock, QA/hold cage, bulk racks, pick face, pack/ship, rework bench. Mechanics unchanged.",
      stencil: "SMU",
      visualCue: "Warehouse ops floor: bins, pallets, forklifts, scanners, accountability boards."
    },
    mre: {
      label: "MRE / Class I Issue",
      note: "Class I issue context. MRE blocks and ration flow are visual framing only in v0.2.2.",
      stencil: "MRE",
      visualCue: "Ration pallets, case counts, temperature/control notes, issue lanes."
    },
    initialIssue: {
      label: "Initial Issue Warehouse",
      note: "Individual issue / tri-wall / gear flow context. Sizing, accountability, and customer line discipline are visual framing only.",
      stencil: "IIW",
      visualCue: "Tri-walls, issue tables, bins, labels, customer queue, return/rework bench."
    },
    embark: {
      label: "Embark / Exercise Planning",
      note: "Embark planning lens. Virtual containers can be staged and annotated, but no cube/weight math is performed.",
      stencil: "EMB",
      visualCue: "Marshalling area, load sequence board, ISO containers, chalk markings, placards."
    },
    prepo: {
      label: "Prepositioning / MPF Lens",
      note: "Prepositioning lens. Use containers as planning objects only; the diagnostic loop remains Readback -> Pause -> Commit -> Action -> Validate -> AAR.",
      stencil: "MPF",
      visualCue: "Prepositioned blocks, controlled issue, vessel/exercise support staging."
    }
  },
  tracks: {
    flow: { label: "Flow", start: 2, target: 4, direction: "up", note: "How well work moves through the warehouse." },
    trust: { label: "Trust", start: 3, target: 4, direction: "up", note: "Inventory accuracy, evidence quality, and confidence in records." },
    safety: { label: "Safety", start: 4, target: 4, direction: "up", note: "Physical and procedural safety." },
    humanLoad: { label: "Human Load", start: 3, target: 3, direction: "down", note: "Cognitive and physical strain. High is bad." }
  },
  missionClockStart: 5,
  zones: [
    { id: "receiving", number: 1, label: "Receiving Dock", visible: "Backlog", detail: "Inbound pallets, dock plates, receipt dates, staged overflow, forklift lane." },
    { id: "qa", number: 2, label: "QA / Hold Cage", visible: "Unknown", detail: "Inspection table, hold tags, damaged stock, proof before release." },
    { id: "storage", number: 3, label: "Bulk Storage Racks", visible: "Unknown", detail: "Rack locations, bulk pallets, aisle congestion, slotting assumptions." },
    { id: "pick", number: 4, label: "Pick Face", visible: "Shortage", detail: "Forward pick bins, scanner, SKU availability, record-vs-physical truth." },
    { id: "pack", number: 5, label: "Pack / Ship", visible: "Priority cutoff", detail: "Pack table, labels, outbound staging, shipment evidence." },
    { id: "rework", number: 6, label: "Rework Bench", visible: "Unknown", detail: "Label reprint, kit rebuild, exception handling, reflow decisions." }
  ],
  round1Readback: "What changed: a mission-critical inbound surge hit this morning, and leadership has flagged one priority shipment due at end of shift. What is visible: Receiving is backed up, the Pick Face shows a shortage on the priority SKU, and Pack / Ship is approaching its cutoff. What is unknown: the dashboard says the queue is healthy, which does not match what the floor is telling you, and QA's real status is unclear. What is at risk: the priority shipment, the accuracy of your records, and a floor being told to hurry without knowing what right looks like. The decision in front of you: what do you need to understand before you act?",
  pressureSequence: [
    { round: 1, id: "none" },
    { round: 2, id: "dashboard" },
    { round: 3, id: "confusion" },
    { round: 4, id: "dirtyfloor" },
    { round: 5, id: "movement" }
  ],
  pressures: {
    none: { name: "None", pressure: "No new pressure in Round 1.", temptation: "Rush setup without understanding.", goodResponse: "Use the Round 1 readback and Processing Pause.", resolvesAs: "No automatic track effect." },
    movement: { name: "Leadership Wants Movement", pressure: "Why are pallets still sitting at Receiving?", temptation: "Expedite without evidence.", goodResponse: "Observe, Route, or Exception with documented risk.", resolvesAs: "If players choose unvalidated Exception (Push), mark False Green risk and Trust -1. If players document risk or Validate, no Trust loss." },
    dashboard: { name: "Dashboard Looks Green", pressure: "The system says the queue is healthy.", temptation: "Trust the record instead of the floor.", goodResponse: "Observe, Validate, Ask the floor.", resolvesAs: "If players accept the dashboard without Observe or Validate, conceal one hidden fault and mark one gain unvalidated. If they Observe the floor, reveal a clue and Trust +1." },
    confusion: { name: "Worker Confusion", pressure: "Workers are executing different versions of the process.", temptation: "Call it noncompliance.", goodResponse: "Rebrief, Ask the floor, Stabilize.", resolvesAs: "Human Load +1 unless players Rebrief, Observe the floor, or Stabilize the handoff. Rebrief reduces Human Load by 1." },
    dirtyfloor: { name: "Clean Numbers, Dirty Floor", pressure: "Reports look better than the physical process.", temptation: "Declare recovery.", goodResponse: "Validate, Walk path, Pull record.", resolvesAs: "If players Validate, either lock one real gain or expose one False Green. If players declare recovery without validation, outcome cannot be Full Recovery." },
    shortage: { name: "Pick Face Shortage", pressure: "Priority SKU is not available where workers expect it.", temptation: "Blame execution.", goodResponse: "Observe Pick Face, Route replenishment, Validate inventory.", resolvesAs: "If players Observe or Validate first, reveal whether the shortage is physical or record-based. If they Route blindly, Flow gain is provisional and Human Load +1." },
    safety: { name: "Safety Near-Miss", pressure: "Forklift and foot traffic nearly collide.", temptation: "Keep moving because the clock is running.", goodResponse: "Stabilize, Route, Rebrief.", resolvesAs: "Safety -1 unless players Stabilize. Stabilize in direct response to this threat may skip the pause with no Human Load penalty." },
    qaoverflow: { name: "QA Hold Overflow", pressure: "QA cannot process holds quickly enough.", temptation: "Bypass hold to protect the shipment.", goodResponse: "Exception (Protect) with documentation, Stabilize, Validate.", resolvesAs: "Exception (Push) without validation causes Trust -1 or Safety -1. Exception (Protect) with documentation protects Trust but may reduce Flow by 1." },
    prioritychange: { name: "Last-Minute Priority Change", pressure: "A new shipment priority overrides the old one.", temptation: "Redirect everyone immediately.", goodResponse: "Rebrief, Mission Flow review, Route only after clarity.", resolvesAs: "If players Route without Rebrief, Human Load +1 and the gain is unstable. If players Rebrief first, Human Load -1 and future Route can improve Flow." }
  },
  faults: [
    { id: "fault4", card: 4, title: "Ghost Inventory in the Pick Face", zone: "pick", visibleSymptom: "WMS shows stock available.", truth: "The WMS shows 40 units of the priority SKU (SKU-117) in pick location PF-12. The physical count is 6. The missing 34 were consumed against an earlier order; the decrement never posted because scans were batched and one batch failed to upload. The dashboard therefore shows the priority order as pickable. A physical count against a record pull exposes the gap. If players Observe only the dashboard, they see 40.", revealedBy: "Observe, Pull record, Validate.", risk: "False green; failed shipment." },
    { id: "fault6", card: 6, title: "Staging Used as Unofficial Storage", zone: "receiving", visibleSymptom: "Backlog looks like temporary staging.", truth: "Roughly a third of the pallets in the Receiving backlog are not inbound freight. They are overflow moved there two weeks ago when Storage aisles were blocked, and they were never assigned WMS locations. Receiving looks jammed by the surge, but clearing inbound work will not clear the area. Walking the pallets and checking receipt dates and labels exposes it. Routing more labor to Receiving without walking it does not.", revealedBy: "Observe, Walk path, Route.", risk: "Flow loss; Trust loss." },
    { id: "fault8", card: 8, title: "Old Process Still Being Followed", zone: "storage", visibleSymptom: "Workers appear inconsistent or resistant.", truth: "A new put-away rule, scan at staging instead of scanning at the final location, was issued by email two weeks ago. Day shift half-adopted it. Night shift never saw it. Workers are not resisting; they were never briefed. Asking the floor or Rebriefing exposes it. Treating the inconsistency as noncompliance raises Human Load.", revealedBy: "Ask the floor, Rebrief, Human Factors check.", risk: "Human Load increase; unstable fixes." }
  ],
  actions: {
    observe: { label: "Observe", boundary: "Find what you do not know.", row: "Reveal one visible fact, assumption, or hidden fault clue. Trust +1 if the fact is recorded. If players ask the floor and pull the record, reveal one hidden fault directly. If players observe only the dashboard, hidden floor faults remain concealed." },
    stabilize: { label: "Stabilize", boundary: "Reduce immediate risk or stop worsening conditions.", row: "Safety +1 or Human Load -1. Prevent one pressure escalation. If responding to active safety threat, Safety +1 and no penalty for skipping pause. If stabilizing without explaining the new rule, mark the fix unstable." },
    route: { label: "Route", boundary: "Move work, labor, inventory, or attention through a better path.", row: "Flow +1 if it addresses the actual constraint. If paired with Rebrief or prior Observe, Flow +1 and Human Load does not increase. If route is based on bad data, mark Flow gain unvalidated and Human Load +1." },
    exceptionProtect: { label: "Exception (Protect)", boundary: "Hold, isolate, document, or contain questionable work.", row: "Hold/isolate work. Trust +1 or Safety +1 if documented. If validated before final decision, protects against False Win. If undocumented, Flow -1 or Mission pressure escalates." },
    exceptionPush: { label: "Exception (Push)", boundary: "Expedite, bypass, or advance priority work while accepting risk.", row: "Protect Mission Clock position or enable final shipment decision. If documented and later validated, no Trust loss. If unvalidated, mark False Green risk and Trust -1." },
    validate: { label: "Validate", boundary: "Prove what you think you fixed.", row: "Confirm or reject one prior claim, action, exception, or track gain. If Insight is spent, the console queues a +1 Validate effect; the facilitator still controls what claim or gain is being validated. If validation fails, remove the provisional gain and reveal consequence." },
    rebrief: { label: "Rebrief", boundary: "Make the work executable by explaining the new action.", row: "Human Load -1. The rebriefed action cannot become unstable next round. If it directly addresses Worker Confusion or priority-change pressure, also cancel that pressure's Human Load penalty. A rebrief with no stated change, next step, stop, and report-back is narration, not a rebrief." }
  },
  containerTypes: [
    { id: "mrePallet", label: "MRE Pallet Block", icon: "MRE", purpose: "Class I issue and exercise sustainment lane.", caution: "No ration math in v0.2.2." },
    { id: "triwall", label: "Initial Issue Tri-Wall", icon: "TW", purpose: "Individual equipment issue and accountability lane.", caution: "No sizing calculator in v0.2.2." },
    { id: "iso20", label: "20-ft ISO Container", icon: "20", purpose: "Embark and exercise movement planning lane.", caution: "No cube/weight math in v0.2.2." },
    { id: "iso40", label: "40-ft ISO Container", icon: "40", purpose: "Prepositioning and exercise planning lane.", caution: "No cube/weight math in v0.2.2." },
    { id: "quadcon", label: "QUADCON / Small Container", icon: "QC", purpose: "Small-lot accountable load segmentation.", caution: "Planning marker only." },
    { id: "palletTrain", label: "Pallet Train / Chalk", icon: "PT", purpose: "Exercise marshalling and issue sequence lane.", caution: "Sequence and risk notes only." }
  ],
  aarQuestions: [
    "What was the real constraint?",
    "Where did the Processing Pause change a decision?",
    "What would we preserve as doctrine?"
  ]
};
