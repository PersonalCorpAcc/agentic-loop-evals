## Why

People type `2H` or `3D` into profiles, but `parse` only recognizes lower-case unit
letters and refuses otherwise-valid input.

## What Changes

- `parse` accepts upper-case unit letters (`S`, `M`, `H`, `D`, `W`) with the same
  values as their lower-case forms, e.g. `"2H"` parses the same as `"2h"`.
- Spaces, unknown units, and a zero magnitude are still refused exactly as today.
- `format` is unchanged: it always writes the unit in lower case.

## Capabilities

### New Capabilities
- `duration-parsing`: parsing and formatting of short duration strings (`5m`, `2h`, `1d`, ...)

### Modified Capabilities
(none - `duration-parsing` has no prior spec on disk; this change establishes its baseline)

## Impact

- `src/duration.mjs`: `parse`'s matching regex.
- `test/duration.test.mjs`: new cases for upper-case and mixed-case unit input.
