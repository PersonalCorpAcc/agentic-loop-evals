# Add a helper that sums durations

Refs #5

## Why

`src/duration.mjs` exports `parse` and `format` but has no way to total several durations.
Callers that need a sum must parse, add, and format manually.

## What changes

Add `add(...values)` to `src/duration.mjs`, exported beside `parse` and `format`:

- Parses each value with `parse`, sums the resulting milliseconds, and returns the total
  formatted with `format` (e.g. `add("1h", "30m")` is `"90m"`, `add("1d", "1d")` is `"2d"`).
- Returns `null` if any value is not a duration `parse` accepts.
- Returns `null` when called with no values.

## Impact

- `src/duration.mjs`: new `add` export.
- `test/duration.test.mjs`: coverage for summation, invalid values, and the empty case.
