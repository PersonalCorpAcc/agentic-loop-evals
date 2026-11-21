## Why

`duration.parse` currently accepts exactly one number and one unit (`5m`, `2h`). Soak values
written by people are often compound (`1h30m`, `2d4h`), and today those are refused outright
even though they are unambiguous.

## What Changes

- `parse` accepts compound durations: a sequence of `<number><unit>` segments, each unit used
  at most once, written largest unit first (`w`, `d`, `h`, `m`, `s`).
- Segments out of order (`30m1h`) or with a repeated unit (`1h1h`) are refused, same as any
  other input `parse` doesn't recognize.
- Anything `parse` refused before (non-integer counts, zero, unknown units, extra whitespace)
  is still refused.
- `format` is unchanged: it still emits a single largest-exact-unit token.

## Capabilities

### New Capabilities
- `duration-parsing`: parsing of duration strings into milliseconds, including single-unit and
  compound forms.

### Modified Capabilities
- (none — no prior capability spec exists for this behavior)

## Impact

- `src/duration.mjs`: `parse` implementation.
- `test/duration.test.mjs`: new test cases for compound parsing.
