## 1. Implement compound parsing

- [ ] 1.1 Change `parse` in `src/duration.mjs` to accept one or more unit segments (`1h30m`,
      `2d4h`), each unit at most once, in strictly descending unit size, while still refusing
      everything it refused before (no match, zero amount, whitespace, unknown unit).

## 2. Tests

- [ ] 2.1 Add test cases to `test/duration.test.mjs`: compound values parse to the right
      millisecond total; a repeated unit (`1h1h`) and an out-of-order pair (`30m1h`) are
      refused (`null`); single-unit inputs still parse exactly as before.
