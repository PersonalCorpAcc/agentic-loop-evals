## Why

`format(0)` currently throws "not a positive whole number of milliseconds" because of its
`milliseconds <= 0` guard. A soak of zero duration is a real value a profile can report, so
`format(0)` should return `"0s"` instead of throwing.

## What Changes

- `format(0)` returns `"0s"` instead of throwing.
- `format` still throws for negative numbers, non-integers, and anything that is not a number.
- `parse` is unchanged: `parse("0s")` still returns `null` (the regex requires a leading digit
  1-9, so `"0s"` never matches).

## Capabilities

### New Capabilities

- `duration-format`: no spec exists yet for `src/duration.mjs`'s `format` function; this change
  introduces its spec, including the new zero-duration behavior.

### Modified Capabilities

(none)

## Impact

- `src/duration.mjs`: relax the guard in `format` to allow `0` as a special case.
- `test/duration.test.mjs`: add coverage for `format(0)` and for the inputs that must still throw.
