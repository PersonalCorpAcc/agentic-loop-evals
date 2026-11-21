# format-zero

## Why

`format(0)` throws `not a positive whole number of milliseconds`, but a soak of zero
duration is a real value in a profile (issue #17). `format` should treat `0` as valid
input and render it as `0s`.

## What changes

- `format` accepts `0` as a valid non-negative integer input and returns `"0s"`,
  bypassing the largest-unit-divides-exactly search (which would otherwise pick `0w`,
  since every unit divides `0` exactly).
- `format` still throws for negative numbers, non-integers, and anything that isn't a
  number.
- `parse` is unchanged: `parse("0s")` still returns `null` (its `[1-9]\d*` pattern
  already excludes a leading zero).

## Impact

- Affected code: `src/duration.mjs` (`format`).
- Affected tests: `test/duration.test.mjs`.
