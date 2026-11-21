## 1. Add `ms` unit

- [x] 1.1 Add `ms` to the `UNITS` map in `src/duration.mjs` as the base (size `1`) unit
- [x] 1.2 Extend the `parse` regex to accept `ms` alongside the existing single-letter units,
      disambiguated from `m` (minutes)
- [x] 1.3 Confirm `format` falls through to `ms` for any value that is not a whole number of
      seconds, while whole-second values still format in the largest exact-dividing unit

## 2. Tests

- [x] 2.1 Add `parse("250ms")` coverage alongside the existing per-unit parse tests
- [x] 2.2 Add a test asserting `format` uses `ms` only for non-whole-second values
      (`format(1500)` is `"1500ms"`, `format(1000)` is `"1s"`)
- [x] 2.3 Extend the round-trip test with `ms` values
