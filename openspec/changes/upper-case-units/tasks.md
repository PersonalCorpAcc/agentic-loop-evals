## 1. Implementation

- [ ] 1.1 Make `parse`'s regex match unit letters case-insensitively and look up `UNITS` with the lower-cased matched letter.

## 2. Tests

- [ ] 2.1 Add test cases for upper-case and mixed-case unit input in `parse`.
- [ ] 2.2 Add test cases confirming spaces, unknown units, and zero magnitude are still refused with upper-case letters.
- [ ] 2.3 Add a round-trip test: `format(parse("3D"))` equals `"3d"`.
