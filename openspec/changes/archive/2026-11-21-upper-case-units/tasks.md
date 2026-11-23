## 1. Accept upper-case units in parse()

- [x] 1.1 Update the regex and unit lookup in `src/duration.mjs` so `parse()` accepts
      upper-case and mixed-case unit letters with the same values as lower-case,
      while still refusing spaces, unknown units, and zero magnitude.
- [x] 1.2 Add test cases in `test/duration.test.mjs` covering upper-case units
      (`2H`, `30S`), confirming `format()` still always emits lower-case, and
      confirming the existing refusal cases still hold.
