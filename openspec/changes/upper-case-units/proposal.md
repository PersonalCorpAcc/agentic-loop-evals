## Why

People type `2H` or `3D` into profiles. `parse` in `src/duration.mjs` only accepts lower-case
unit suffixes, so upper-case input is silently rejected even though its meaning is unambiguous.

## What Changes

- `parse` accepts upper-case unit suffixes (`S`, `M`, `H`, `D`, `W`) with the same values as
  their lower-case forms (`"2H"` is two hours, `"30S"` is thirty seconds).
- Spaces, unknown units, and a zero quantity are still refused exactly as before.
- `format` is unchanged and always writes lower-case units.

## Capabilities

### New Capabilities
- `duration-parsing`: parsing and formatting of short duration strings (`30s`, `2h`, `1d`, `2w`).

### Modified Capabilities
<!-- none -->

## Impact

Affected code: `src/duration.mjs` (`parse`), `test/duration.test.mjs` (new coverage for
upper-case input).
