## Purpose
Sums multiple durations expressed in the same textual form `parse` accepts, returning the total
formatted the way `format` would.

## ADDED Requirements

### Requirement: Sum parseable durations
The system SHALL provide an `add(...values)` function that parses each argument as `parse`
would, sums the resulting millisecond values, and returns the total formatted as `format` would.

#### Scenario: Summing durations in different units
- **WHEN** `add("1h", "30m")` is called
- **THEN** it returns `"90m"`

#### Scenario: Summing durations that roll into a larger unit
- **WHEN** `add("1d", "1d")` is called
- **THEN** it returns `"2d"`

### Requirement: Reject invalid input
The system SHALL return `null` from `add` when any argument is not a duration `parse` accepts,
or when no arguments are given.

#### Scenario: An argument is not a valid duration
- **WHEN** `add("1h", "nope")` is called
- **THEN** it returns `null`

#### Scenario: No arguments given
- **WHEN** `add()` is called
- **THEN** it returns `null`
