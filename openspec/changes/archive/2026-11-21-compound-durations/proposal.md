## Why

`parse` only accepts a single number and unit (`5m`, `2h`). Soak values written by people are
often compound (`1h30m`, `2d4h`), and `parse` currently refuses them, forcing callers to
normalize durations by hand.

## What Changes

`parse` accepts a compound duration: one or more unit segments, each unit used at most once,
written largest-to-smallest (`1h30m` is 90 minutes). A segment that repeats a unit (`1h1h`) or
is out of descending order (`30m1h`) is refused, exactly like every other input `parse` already
refused. `format` is unchanged.

## Capabilities

No capability specs exist in this repository (`openspec/specs/` is empty by design --
see `ARCHITECTURE.md`); this change is implementation-only and sets `skip_specs: true`.

## Impact

- `src/duration.mjs`: `parse` gains compound-segment support.
- `test/duration.test.mjs`: new cases for compound parsing and refusal of repeated/misordered
  units.
