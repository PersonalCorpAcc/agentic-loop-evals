## Context

See proposal.md - Why. `format` in `src/duration.mjs` currently guards with
`!Number.isInteger(milliseconds) || milliseconds <= 0`, which rejects `0` along with
every other invalid input.

## Goals / Non-Goals

**Goals:**
- Let `format(0)` return `"0s"`.
- Keep rejecting negative numbers, fractions, and non-numbers.

**Non-Goals:**
- Changing `parse` behavior (it continues to reject `"0s"` via its existing
  `[1-9]\d*` pattern, unchanged).
- Changing the unit-selection loop for positive values.

## Decisions

- Change the guard from `milliseconds <= 0` to `milliseconds < 0`, so `0` passes
  validation while negative numbers still throw. `Number.isInteger` already excludes
  fractions and non-numeric values (`Number.isInteger("5")` and
  `Number.isInteger(NaN)` are both `false`), so no further change to the guard is
  needed.
- Special-case `0` to return `"0s"` directly rather than relying on the unit loop:
  the loop computes `milliseconds % size === 0` for every unit, and `0 % size` is
  always `0`, so the loop would pick the largest unit (`w`) and return `"0w"` instead
  of the expected `"0s"`.

## Risks / Trade-offs

- [Risk: the unit loop silently also "works" for `0` via `%` but picks the wrong
  unit] → Mitigated by the explicit `0` special case returning `"0s"` before the
  loop runs.
