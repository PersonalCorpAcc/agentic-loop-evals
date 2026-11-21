## 1. Implementation

- [x] 1.1 Add the `ms` unit to `UNITS` in `src/duration.mjs` so `parse` accepts strings like `250ms`.
- [x] 1.2 Update `format` to emit `ms` when the value is not a whole number of seconds, instead of throwing.
- [x] 1.3 Keep `format` formatting whole-second values in the largest exact unit, unchanged.

## 2. Tests

- [x] 2.1 Add a test asserting `parse("250ms")` returns `250`.
- [x] 2.2 Add a test asserting `format(1500)` returns `"1500ms"` and `format(1000)` returns `"1s"`.
- [x] 2.3 Extend the round-trip test to include an `ms` value.
