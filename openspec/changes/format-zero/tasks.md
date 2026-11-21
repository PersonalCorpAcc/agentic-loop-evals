# Tasks

- [ ] Update `format` in `src/duration.mjs` so `0` is accepted and returns `"0s"`,
      while negative numbers, non-integers, and non-numbers still throw.
- [ ] Add tests in `test/duration.test.mjs` covering: `format(0)` returns `"0s"`;
      `format(-1)`, `format(0.5)`, and non-numeric input still throw; `parse("0s")`
      still returns `null`.
