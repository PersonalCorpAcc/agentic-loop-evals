# milliseconds-unit

Add a `ms` unit to `src/duration.mjs`: `parse("250ms")` is `250`, and `format` uses `ms`
when a value is not a whole number of seconds (`format(1500)` is `"1500ms"`). A whole
number of seconds still formats in the largest unit that divides it exactly, as today
(`format(1000)` is `"1s"`), and `format(parse(x))` gives back `x` for everything `parse`
accepts.

Pre-refined issue (#23): acceptance criteria are the examples above, taken directly from
the issue body. No separate specs; `tasks.md` only.
