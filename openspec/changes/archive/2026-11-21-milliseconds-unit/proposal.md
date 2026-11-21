## Why

`parse`/`format` in `src/duration.mjs` only recognize `s`, `m`, `h`, `d`, `w`. Callers that need
sub-second precision (e.g. `250ms`) have no way to express it, and `format` cannot represent a
duration that isn't a whole number of seconds at all — it throws.

## What Changes

- `parse` recognizes a new `ms` unit: `parse("250ms")` returns `250`.
- `format` emits `ms` when the value is not a whole number of seconds: `format(1500)` is
  `"1500ms"`.
- `format` keeps formatting whole-second values in the largest exact unit as before:
  `format(1000)` is still `"1s"`.
- `format(parse(x))` round-trips for every `x` that `parse` accepts, including `ms` values.

## Capabilities

### New Capabilities
- `duration`: parsing and formatting of duration strings with a fixed set of time units.

### Modified Capabilities
(none — this is the first spec for this code; see New Capabilities)

## Impact

- `src/duration.mjs`: `parse` gains the `ms` unit; `format` gains a sub-second branch.
- `test/duration.test.mjs`: new coverage for `ms` parsing, formatting, and round-tripping.
