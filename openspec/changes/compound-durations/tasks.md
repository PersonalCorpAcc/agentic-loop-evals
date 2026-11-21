## 1. Implement compound duration parsing

- [ ] 1.1 Update `parse` in `src/duration.mjs` to accept a sequence of number+unit
      pairs, each unit at most once, largest unit first, summing their milliseconds.
- [ ] 1.2 Keep refusing anything `parse` refused before (malformed input, zero
      magnitude, unknown unit, wrong order, repeated unit).

## 2. Tests

- [ ] 2.1 Add tests in `test/duration.test.mjs` covering compound parsing (`1h30m`,
      `2d4h`), order enforcement (`30m1h` refused), and repeated-unit refusal
      (`1h1h` refused).
