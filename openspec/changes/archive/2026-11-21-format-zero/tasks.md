## 1. Implementation

- [x] 1.1 In `src/duration.mjs`, change `format`'s guard so `0` is accepted (only negative
      numbers and non-integers are rejected) and add an explicit `0` -> `"0s"` return before the
      unit loop.

## 2. Tests

- [x] 2.1 In `test/duration.test.mjs`, add a test that `format(0)` returns `"0s"`.
- [x] 2.2 Add tests that `format` still throws for a negative number, a fraction, and a
      non-number input.
- [x] 2.3 Add a test that `parse("0s")` still returns `null`.
