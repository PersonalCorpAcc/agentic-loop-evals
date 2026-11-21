## Context

See proposal.md - Why. The change is a single-regex adjustment in `parse`; no
cross-cutting, architectural, dependency, or migration concerns apply, so this
document is intentionally brief.

## Goals / Non-Goals

**Goals:**
- Accept upper-case and lower-case unit letters interchangeably in `parse`.

**Non-Goals:**
- Changing `format`'s output case.
- Accepting any new input shape (spaces, extra unit letters, decimals).

## Decisions

- Match the unit letter case-insensitively (regex `i` flag) and look up the
  magnitude map with the lower-cased matched letter, rather than duplicating
  the unit map with upper-case keys. Keeps a single source of truth for unit
  values and values. Alternative considered: adding upper-case keys to
  `UNITS` - rejected because `format` iterates `Object.entries(UNITS)` and
  would then emit upper-case units in some cases, violating the "format
  always writes lower case" requirement.

## Risks / Trade-offs

- [Mixed-case input like `"2h"` vs `"2H"` vs `"2Hh"` edge cases] → The anchored
  regex only ever matches a single trailing letter, so mixed-case multi-letter
  units are not a concern; only the single matched letter's case varies.
