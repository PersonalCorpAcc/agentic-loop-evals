## Why

`parse` in `src/duration.mjs` only accepts a single number+unit pair (`5m`, `2h`). Soak
values written by people are often compound (`1h30m`, `2d4h`), and `parse` currently
refuses them, forcing callers to write out a single large unit instead.

## What Changes

- `parse` accepts compound durations: a sequence of number+unit pairs where each unit
  (`s`, `m`, `h`, `d`, `w`) appears at most once and units must appear in decreasing
  size order (largest first). `1h30m` parses to 90 minutes in milliseconds. `30m1h`
  (wrong order) and `1h1h` (repeated unit) are refused.
- Everything `parse` refused before (bad format, zero magnitude, unknown unit, extra
  whitespace, etc.) continues to be refused.
- `format` is unchanged: it still emits a single unit.

## Capabilities

This is a pure code change to an existing helper function with no formal capability
spec yet (`openspec/specs/` is empty); see `skip_specs: true` in `.openspec.yaml`.

## Impact

- `src/duration.mjs`: `parse` gains compound-duration support.
- `test/duration.test.mjs`: new tests for compound parsing, ordering, and repeated-unit
  refusal.
