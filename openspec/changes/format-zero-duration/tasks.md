## 1. Implementation

- [x] 1.1 Change the `format` guard in `src/duration.mjs` so it rejects negative numbers, fractions, and non-numbers but accepts `0`, and special-case `0` to return `"0s"` before the unit-selection loop runs <!-- agent: , depends_on: [], touches: [src/duration.mjs] -->
- [x] 1.2 Add test coverage in `test/duration.test.mjs` for `format(0)` returning `"0s"` and for `format` still throwing on negative numbers, fractions, and non-numeric values <!-- agent: , depends_on: [1.1], touches: [test/duration.test.mjs] -->
