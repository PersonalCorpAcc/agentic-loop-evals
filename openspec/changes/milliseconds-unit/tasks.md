# Tasks

- [ ] 1.1 Add `ms` to the units `parse` accepts, so `parse("250ms")` is `250` <!-- depends_on: [], touches: [src/duration.mjs] -->
- [ ] 1.2 Make `format` emit `ms` for any value that is not a whole number of seconds, while a whole number of seconds still formats in the largest exact unit <!-- depends_on: [1.1], touches: [src/duration.mjs] -->
- [ ] 2.1 Add tests covering `parse`/`format` of millisecond values and the sub-second/whole-second boundary, and extend the round-trip test to include an `ms` value <!-- depends_on: [1.1, 1.2], touches: [test/duration.test.mjs] -->
