# Tasks

- [ ] 1.1 Add `add(...values)` to `src/duration.mjs`, exported beside `parse` and `format`.
- [ ] 1.2 `add` sums parsed values and returns the total via `format` (e.g. `add("1h", "30m")` -> `"90m"`, `add("1d", "1d")` -> `"2d"`).
- [ ] 1.3 `add` returns `null` if any value fails `parse`, and returns `null` when called with no values.
- [ ] 1.4 Add tests in `test/duration.test.mjs` covering summation, an invalid value, and the no-argument case.
