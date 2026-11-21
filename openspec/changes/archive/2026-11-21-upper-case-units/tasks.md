## 1. Implementation

- [x] 1.1 Make `parse`'s regex match unit letters case-insensitively and look up `UNITS` with the lower-cased matched letter.

## 2. Tests

- [x] 2.1 Add test cases for upper-case and mixed-case unit input in `parse`.
- [x] 2.2 Add test cases confirming spaces, unknown units, and zero magnitude are still refused with upper-case letters.
- [x] 2.3 Add a round-trip test: `format(parse("3D"))` equals `"3d"`.
