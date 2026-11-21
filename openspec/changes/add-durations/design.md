## Context

See proposal.md - Why. `src/duration.mjs` already exposes `parse(value) -> milliseconds|null`
and `format(milliseconds) -> string` (throws on non-positive-integer input). `add` is a thin
composition of the two.

## Goals / Non-Goals

**Goals:**
- Sum any number of `parse`-accepted values and return the `format` of the total.

**Non-Goals:**
- Changing `parse` or `format` behavior or signatures.

## Decisions

- Implement `add` as `parse` each argument, reduce with `+`, then `format` the sum. Returning
  `null` on any unparseable argument or on zero arguments is handled before the reduce, so
  `format`'s own exception (thrown on non-positive input) is never reached for `add`'s
  documented inputs - considered and rejected: letting `format`'s exception propagate, which
  would make `add` throw instead of returning `null` as the issue specifies.

## Risks / Trade-offs

- None beyond the existing `parse`/`format` behavior, which `add` reuses unchanged.
