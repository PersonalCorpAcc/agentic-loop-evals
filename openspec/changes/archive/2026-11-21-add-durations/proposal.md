## Why

`src/duration.mjs` exports `parse` and `format` for single durations, but callers have no way to
sum several durations together without manually converting to milliseconds and back. Issue #1
asks for an `add` helper that does this.

## What Changes

- Add an `add(...values)` function to `src/duration.mjs` that parses each value the way `parse`
  does, sums the resulting milliseconds, and formats the total the way `format` does.
- `add` returns `null` when called with no arguments or when any argument is not a duration that
  `parse` accepts.
- Export `add` alongside `parse` and `format`.

## Capabilities

### New Capabilities
- `duration-sum`: summing multiple parseable durations into one formatted duration

## Impact

- `src/duration.mjs`: new `add` export.
- `test/duration.test.mjs`: new tests covering summation and invalid input.
