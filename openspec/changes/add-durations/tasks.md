## 1. Implement `add`

- [x] 1.1 Add `add(...values)` to `src/duration.mjs` that sums durations accepted by `parse` and returns the sum formatted via `format` (e.g. `add("1h", "30m")` -> `"90m"`, `add("1d", "1d")` -> `"2d"`).
- [x] 1.2 Return `null` if any value is not a duration `parse` accepts, or if no values are given.
- [x] 1.3 Export `add` alongside `parse` and `format`.
- [x] 1.4 Add tests for `add` covering summation, unit formatting, invalid input, and the no-argument case.
