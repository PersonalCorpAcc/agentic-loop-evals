## Why

People type `2H` or `3D` into profiles. `parse()` in `src/duration.mjs` only matches
lower-case unit letters (`s`, `m`, `h`, `d`, `w`), so an otherwise valid upper-case
value is refused today.

## What Changes

- `parse()` accepts upper-case unit letters (`S`, `M`, `H`, `D`, `W`) with the same
  values as their lower-case forms, in addition to the existing lower-case forms.
- Internal spaces, unknown units, and a zero magnitude are still refused exactly as
  today.
- `format()` is unchanged: it always writes lower-case unit letters.

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

(none — this is an implementation-only fix to existing parsing behavior; no
capability spec exists for this repository. `skip_specs: true` is set in
`.openspec.yaml`.)

## Impact

- `src/duration.mjs`: `parse()` regex and unit lookup.
- `test/duration.test.mjs`: new coverage for upper-case and mixed-case input.
