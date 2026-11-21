## Why

`format(0)` throws "not a positive whole number of milliseconds". A soak of nothing is a real
value in a profile, so `format(0)` should return `0s` instead of throwing.

## What Changes

- `format(0)` returns `"0s"` instead of throwing.
- `format` still throws for negative numbers, fractions, and any non-number input.
- `parse` is unchanged: `parse("0s")` still returns `null`.

## Capabilities

### New Capabilities
- `duration-formatting`: formatting a millisecond count as a duration string (`format`) and
  parsing a duration string back into milliseconds (`parse`).

### Modified Capabilities

## Impact

- `src/duration.mjs`: `format` accepts `0` as a valid input.
- `test/duration.test.mjs`: new coverage for `format(0)` and for the inputs that must still throw.
