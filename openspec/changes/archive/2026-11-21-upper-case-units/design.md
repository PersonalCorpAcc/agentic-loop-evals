## Context

See proposal.md - Why. `parse` in `src/duration.mjs` matches a single-char unit suffix with
`/^([1-9]\d*)([smhdw])$/` and looks up `UNITS[match[2]]` directly, so an upper-case suffix never
matches the character class and falls through to `null`.

## Goals / Non-Goals

**Goals:**
- Accept upper-case unit suffixes in `parse` with the same values as their lower-case forms.

**Non-Goals:**
- Changing `format`'s output casing.
- Accepting mixed-case or locale-specific casing beyond ASCII upper/lower.

## Decisions

- Widen the regex's unit character class to also match upper-case letters, then lower-case the
  captured unit before the `UNITS` lookup. Alternative considered: lower-casing the whole input
  before matching - rejected because it would also need to re-validate that the digit group is
  untouched, for no benefit over lower-casing just the captured unit.

## Risks / Trade-offs

- [Widening the character class could accidentally admit a unit letter that isn't a valid key]
  → Mitigation: the lookup table `UNITS` is unchanged, so an admitted-but-unmapped letter is
  structurally impossible; the five accepted units are exactly `UNITS`'s keys in both cases.
