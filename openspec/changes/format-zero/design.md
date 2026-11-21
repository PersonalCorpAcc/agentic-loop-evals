## Context

See proposal.md - Why. `format` in `src/duration.mjs` currently rejects any value `<= 0`. The
unit loop it falls through to (`Object.entries(UNITS).reverse()`, largest unit first: `w`, `d`,
`h`, `m`, `s`) would pick `"0w"` for a zero input, since every unit divides zero exactly, not
the `"0s"` the proposal requires.

## Goals / Non-Goals

**Goals:**
- `format(0)` returns `"0s"`.
- Every other current rejection (`negative`, non-integer, non-number) still throws.

**Non-Goals:**
- Changing `parse`, which keeps rejecting `"0s"` and every other all-zero string.

## Decisions

- Guard `0` as a special case before the unit loop, returning the literal `"0s"`, rather than
  changing the loop's unit order or the loop itself. Letting zero fall into the loop would format
  it in the largest unit (`"0w"`), which is correct arithmetically but not the `"0s"` the issue
  asks for, and reordering the loop to handle zero would make every other magnitude pick the
  smallest divisor instead of the largest, which is the opposite of the existing contract.
- Change the validation condition from "not an integer or `<= 0`" to "not an integer or `< 0`",
  so `0` reaches the new special case and every negative or non-integer value still throws from
  the same guard it always has.

## Risks / Trade-offs

- [None of `format`'s existing non-zero behavior changes] -> covered by the existing round-trip
  and unit-preference tests, which still pass unmodified.
