## Why

`format(0)` throws "not a positive whole number of milliseconds" today. A soak of
nothing is a real value in a profile, so `format(0)` should return `"0s"` instead of
rejecting a legitimate zero-duration value.

## What Changes

- `format` accepts `0` and returns `"0s"`.
- `format` still throws for negative numbers, fractions, and any non-integer input.
- `parse` is unchanged: it still refuses `"0s"` (and any other zero-magnitude input),
  since the unit-match pattern already requires a non-zero leading digit.

## Capabilities

### New Capabilities
- `duration-formatting`: formatting a millisecond count back into a compact unit
  string (e.g. `5m`, `2h`), including the zero case.

### Modified Capabilities
(none — this is the first spec for this behavior)

## Impact

- `src/duration.mjs`: `format` function's validation guard.
- `test/duration.test.mjs`: new assertions for `format(0)` and for rejected negative/
  fractional/non-numeric inputs.
