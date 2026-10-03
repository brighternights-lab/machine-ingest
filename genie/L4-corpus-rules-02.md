---
doc_id: L4-RULE-LEAD-FUNNELLING
tier: L4
aud: [contractor, rep]
type: ruling
title: "Lead funnelling is a certification benefit (BRI-401, ruled 2026-08-03)"
source: "Linear BRI-401, Austen ruled 2026-08-03"
ingested_from: linear-rulings
classified_under: BRI-292
governed_by: BRI-1308
smallest_tier_target: L4
last_scrub: 2026-10-03
banned_term_hits: 0
---

# Lead funnelling is a certification benefit

**Topic.** How certified contractors and certified reps receive leads
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)
**Voice.** Settled ruling.

**The rule.** Lead flow is a benefit of certification, symmetric across both credentials.

- **Master of Lighting (certified contractor)** receives **homeowner leads** from BNLT.
- **Master of Supply (certified rep)** receives **contractor leads** from BNLT.

Same funnel, same mechanism, both gated on credential.

**Allocation (BRI-401 blind spot 1 ruling).** Leads route by **geographic proximity** to the enquiry, then **round robin** among all certified partners in range.

- Nobody owns an area. Geography narrows the pool; rotation picks from it.
- No exclusivity, new entrants always admitted, nobody buys priority.
- Consistent with BRI-220 (no territories).

**Published on live pages.** `/find-a-distributor` and `/find-an-installer` (PR #3). Do not design a different allocation mechanism without going through a ruling.

**Demand language approved (blind spot 2 ruling).** Qualitative only — "high demand," "strong homeowner interest," "growing pipeline." No counts, rates, or minimums. Specific numbers become refund conversations.

**Open gaps (not for the Genie to answer, but to be aware of).**
- Radius or drive-time rule is unset
- Partner service-area capture is specced in BRI-385
- Fallback when no partner is in range is unspecified
- Persisted rotation state is unspecified
- Revocation path for a bad-performing certified partner is unspecified (BRI-401 blind spot 4)

**The commercial argument for certification.** Training and tools are nice, leads are revenue. This is the strongest thing either Academy has to sell, and it is a promise attached to a paid product (contractor pays $1,000 for the Academy, branch pays for rep seats). If leads do not arrive, that is a refund conversation.


---
doc_id: L4-RULE-SCONCE-MR16-SPEC
tier: L4
aud: [contractor, rep]
type: ruling
title: "Sconce MR16 bulb spec is 5.5W / 600 lm / 40,000 hr (BRI-545 / BRI-189, ruled 2026-08-15)"
source: "Linear BRI-545, Austen ruled 2026-08-15 on BRI-189"
ingested_from: linear-rulings
classified_under: BRI-292
governed_by: BRI-1308
smallest_tier_target: L4
last_scrub: 2026-10-03
banned_term_hits: 0
---

# Sconce MR16 bulb spec, ruled values

**Topic.** The only correct public spec for the Sconce MR16 bulb
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)
**Voice.** Settled ruling (BRI-189, swept via BRI-545).

**Ruled values.**
- Power: **5.5 W** (supersedes datasheet 5 W, catalog 6 W)
- Lumens: **600** (supersedes datasheet 500)
- Lifetime: **40,000 hours** (supersedes datasheet 50,000)
- Fixture: brass housing only — carries NO electrical rating ("fixture-level figure" theory rejected)

**HyperLux "3× brighter" survives the correction.** The claim is 5.5W / 600 lm full output on any color, vs a conventional RGB bulb delivering ~200 lm on a single color. The 3× lumen comparison (600 vs 200) stands; the wattage column changed from 5W to 5.5W.

**Cross-product flag — do NOT harmonize.**
- Pool enclosure publishes **50,000-hour LEDs**; that spec stands for pool enclosure.
- **40,000 hr applies to the MR16 bulb only.**
- Do not reconcile the two numbers across products.

**The fixture rule.** The brass sconce fixture is a housing. No wattage or lumen figure attaches to the fixture itself. All electrical specs attach to the MR16 bulb inside it.


---
doc_id: L4-RULE-WARRANTY-EXTENSION
tier: L4
aud: [contractor, rep]
type: ruling
title: "5-year warranty extension on the 3-year bucket, including repeaters (BRI-497, ruled 2026-08-04)"
source: "Linear BRI-497, Austen ruled 2026-08-04"
ingested_from: linear-rulings
classified_under: BRI-292
governed_by: BRI-1308
smallest_tier_target: L4
last_scrub: 2026-10-03
banned_term_hits: 0
---

# Warranty extension to 5 years, which parts and how

**Topic.** The optional warranty upgrade from 3 years to 5 years
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)
**Voice.** Settled ruling.

**The rule.** The 5-year optional upgrade applies to the **3-year bucket** only, and it moves the whole bucket together. No part of that bucket is left behind.

**What's in the 3-year bucket (upgrade-eligible).**
- System controller
- Wi-Fi gateway
- Power supply / transformer
- **Repeater** (upgrade-eligible per BRI-497 ruling)

**What's in the 10-year bucket (not upgradable — already max coverage).**
- Track
- Light strands
- Connectors
- Signal amplifiers

**The repeater question (why BRI-497 was filed).** The repeater reads like system hardware, but it is covered on the controller term (3 years). It IS upgrade-eligible when the controller is extended. The warranty-activation page omitted the repeater from the extension list and that was a defect.

**Bulb extension (separate from the 3-year bucket).** Bulbs sell per-bulb extensions:
- MR16 bulb: $10 extension
- PAR36 bulb: $15 extension
- A19 bulb: $10 extension
- G4 bi-pin bulb: $5 extension

**Controller extension.** $50 to take the system controller to 5 years. The whole 3-year bucket (controller + Wi-Fi gateway + power supply + repeaters) moves together on that extension.

**Repeater line item.** The repeater extension price is **UNRULED**. The repeater's contractor part price is $130 (SIG01RPTR, ruled 2026-08-02), but no extension price exists in the registry yet. If a contractor asks for the repeater extension cost, the Genie must say "pending Austen ruling."

**Registration gate.** Extension purchases must happen inside the 60-day registration window from install (BRI-484 FINAL). Miss the window and no extension applies.


---
doc_id: L4-RULE-CONTRACTOR-VETTING-FLOW
tier: L4
aud: [contractor, rep]
type: ruling
title: "Contractor registration has two tracks for pricing access (BRI-682, ruled 2026-08-27)"
source: "Linear BRI-682, Austen ruled 2026-08-27"
ingested_from: linear-rulings
classified_under: BRI-292
governed_by: BRI-1308
smallest_tier_target: L4
last_scrub: 2026-10-03
banned_term_hits: 0
---

# How a contractor gets pricing access (two tracks)

**Topic.** The identity-verification gate that unlocks contractor pricing
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)
**Voice.** Settled ruling.

**The rule.** Contractor pricing access is gated by **identity verification**. Not by Masters of Lighting Academy completion. Not by spend.

**Fast Track — Photo ID + EIN upload.**
- Contractor fills out the Install Brighter application form.
- Uploads a photo ID and provides a business EIN number.
- BNLT verifies ID matches EIN. Primary tool: **Sunbiz** (Florida Secretary of State business registry, sunbiz.org). Other states TBD.
- Approved → pricing access unlocked.
- No course required. No spend required.

**Slow Track — 15-minute phone call.**
- If the ID upload or EIN field is left blank, the form clearly indicates a 15-minute scheduling call is required instead.
- Scheduling widget lives on the same page (no redirect) showing:
  - BNLT's phone number
  - A direct scheduling link
  - Real 15-minute slot availability
- Purpose: verify real contractor/business, not a homeowner. Homeowners must never see pricing.

**What L2 pricing access unlocks.**
- Contractor (L2 Verified) can see contractor pricing once approved via either path.
- **Does NOT require MOLA Academy certification** (that's the L4 upgrade).
- **Does NOT require any purchase.**

**The nested model.** This closes BRI-435 Conflict B. Contractors see pricing at L2. The Masters of Lighting Academy certification is a SEPARATE upgrade to L4 — it buys sales/pricing training, Light Genie Master access, and homeowner leads (per L4-RULE-LEAD-FUNNELLING), not basic pricing access.

**Build state (as of this ruling).** Pricing-form fields and the Sunbiz automation are specced but not fully built. Manual wp-admin approval stands in for v1 of the Fast Track.


---
doc_id: L4-RULE-SPEC-TABLE-GAP
tier: L4
aud: [contractor, rep]
type: doctrine
title: "The twelve-numbers spec table doesn't exist yet (BRI-367)"
source: "Linear BRI-367 — one table blocks five tools"
ingested_from: linear-rulings
classified_under: BRI-292
governed_by: BRI-1308
smallest_tier_target: L4
last_scrub: 2026-10-03
banned_term_hits: 0
doctrine_note: "This is a KNOWN GAP, not a ruling. Treat as doctrine for how the Genie answers requests for watts/ft, mesh hop limits, non-controller-bulb warranty terms, and transformer sizing. Where no published value exists, the Genie must refuse to invent one and name BRI-367 as the open spec request."
---

# The spec table that blocks five tools

**Topic.** The twelve numbers that are not published anywhere in BNLT's Product Facts Registry
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)
**Voice.** Doctrine, not a ruling.

**Why this is in the corpus.** Every tool and every Genie answer that touches voltage drop, transformer sizing, mesh planning, or warranty on parts outside bulbs/controller NEEDS these twelve numbers. They do not exist yet. The Genie must refuse to invent them.

**Group A — Load, per system (missing).**
- Watts per foot (or per fixture at 12-inch spacing) for Roofline, Soffit, Pool-enclosure sconce, Sconce, Landscape, Deck & Dock, Flood.
- Whether that differs by lamp (MR16 vs G4 bi-pin vs RGB).

**Group B — Conductor and transformer (missing).**
- Strand/track conductor gauge (default 18 AWG currently on calculator, marked spec-pending).
- Transformer sizes actually offered (VA) and whether any are multi-tap.
- Maximum recommended run length per system.

**Group C — Mesh rules (missing).**
- Repeater spacing / maximum hop in a real install (200 ft is the free-air figure, not the install figure).
- How many MeshTek data-Ts a system needs, and on what trigger.

**Group D — Warranty terms (partial).**
- 3-year on bulbs and controller is RULED (BRI-484).
- No published term on: light strand/track, power supply/transformer, Wi-Fi gateway, repeaters/data-Ts. The warranty activation page currently flags these as "term pending."
- One ambiguity: does the published "controller" term cover the gateway? Rulings describe them sometimes as one part and sometimes as two.

**What this means for Genie answers.**
- If a contractor asks for watts/ft on any system, refuse and cite BRI-367 as the open spec table.
- If a contractor asks for the gauge on the strand/track conductor, say "defaulting to 18 AWG per the calculator, but marked spec-pending in the Product Facts Registry."
- If a contractor asks for the repeater max-hop distance, say "200 ft is the free-air figure; the real-install figure is pending BRI-367."
- If a contractor asks for the warranty term on the power supply or the Wi-Fi gateway, cite L4-RULE-WARRANTY-EXTENSION's 3-year bucket.

**House rule.** Never fabricate a number to fill a gap. Public-facing values go through the Product Facts Registry only, like the $4K-$8K installed price range (BRI-192).
