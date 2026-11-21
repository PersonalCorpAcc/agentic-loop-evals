# duration-arithmetic Specification

## Purpose
Lets callers combine several durations expressed in the `parse`/`format` notation into a single
formatted total, without each caller re-implementing unit conversion and summation.
## Requirements
### Requirement: Sum durations into a formatted total
The system SHALL provide an `add` operation that accepts any number of duration values in the
notation `parse` accepts, sums them, and returns the total formatted the way `format` would.

#### Scenario: Summing same-unit durations
- **WHEN** `add("1h", "30m")` is called
- **THEN** it returns `"90m"`

#### Scenario: Summing durations that reduce to a larger unit
- **WHEN** `add("1d", "1d")` is called
- **THEN** it returns `"2d"`

### Requirement: Reject invalid or empty input
The system SHALL return `null` instead of throwing when `add` is called with no arguments, or
when any argument is not a duration `parse` accepts.

#### Scenario: No arguments
- **WHEN** `add()` is called
- **THEN** it returns `null`

#### Scenario: An invalid value among the arguments
- **WHEN** `add("1h", "nonsense")` is called
- **THEN** it returns `null`

