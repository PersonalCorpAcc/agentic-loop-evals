## Why

`src/duration.mjs` can parse and format a single duration, but callers who need a total across
several durations (e.g. `"1h"` + `"30m"`) have no supported way to combine them without
re-implementing unit math themselves.

## What Changes

- Add an `add(...values)` export to `src/duration.mjs` that sums durations expressed the way
  `parse` accepts them and returns the total formatted the way `format` would.
- `add` returns `null` when called with no arguments, or when any argument is not a duration
  `parse` accepts.

## Capabilities

### New Capabilities
- `duration-arithmetic`: summing multiple parsed durations into one formatted total.

### Modified Capabilities

## Impact

- `src/duration.mjs`: new `add` export, no change to `parse` or `format` behavior.
- `test/duration.test.mjs`: new coverage for `add`.
