## 1. Implementation

- [ ] 1.1 Widen `parse`'s unit character class in `src/duration.mjs` to accept upper-case
      unit letters and lower-case the captured unit before the `UNITS` lookup.

## 2. Tests

- [ ] 2.1 Add test coverage in `test/duration.test.mjs` for upper-case unit suffixes
      (e.g. `"2H"`, `"30S"`) matching their lower-case equivalents.
- [ ] 2.2 Add test coverage confirming spaces, unknown units, and zero quantities are still
      refused regardless of case.
