# Support milliseconds (ms) in parse and format

## Why

`src/duration.mjs` parses and formats `s`, `m`, `h`, `d`, `w` but has no unit for
milliseconds. A value below one second, or one that isn't a whole number of seconds,
cannot be formatted at all today: `format` throws for anything that doesn't divide
evenly into whole seconds.

## What changes

- `parse` accepts `ms` as a unit, e.g. `parse("250ms")` is `250`.
- `format` uses `ms` whenever the value is not a whole number of seconds, e.g.
  `format(1500)` is `"1500ms"`.
- A whole number of seconds still formats in the largest unit that divides it
  exactly, as today (`format(1000)` is `"1s"`).
- `format(parse(x))` round-trips for everything `parse` accepts, including `ms` values.

## Impact

- Affected file: `src/duration.mjs`
- Affected tests: `test/duration.test.mjs`
