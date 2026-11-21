## 1. Implementation

- [x] 1.1 Change the guard in `format` (`src/duration.mjs`) so `0` is accepted and returns `"0s"`, while negative numbers, non-integers, and non-numbers still throw <!-- agent: , depends_on: [], touches: [src/duration.mjs] -->

## 2. Tests

- [x] 2.1 Add a test asserting `format(0)` returns `"0s"` <!-- agent: , depends_on: [1.1], touches: [test/duration.test.mjs] -->
- [x] 2.2 Add tests asserting `format` still throws for `-1`, `1.5`, and a non-number such as `"5m"` <!-- agent: , depends_on: [1.1], touches: [test/duration.test.mjs] -->
- [x] 2.3 Add a test asserting `parse("0s")` still returns `null` (unchanged) <!-- agent: , depends_on: [], touches: [test/duration.test.mjs] -->

## 3. Verification

- [x] 3.1 Run lint, build, and test and fix any failures <!-- agent: , depends_on: [1.1,2.1,2.2,2.3], touches: [] -->
