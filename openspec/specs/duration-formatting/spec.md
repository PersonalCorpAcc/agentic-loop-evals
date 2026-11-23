# duration-formatting Specification

## Purpose
Formats a millisecond count back into the compact unit string the loop uses for
soak values (e.g. `5m`, `2h`, `1d`), including the zero-duration case.
## Requirements
### Requirement: Format a non-negative integer duration
The system SHALL format a millisecond count that is a non-negative integer into a
string using the largest unit that divides the value exactly, preferring `s`
(seconds) when the value is `0`.

#### Scenario: Zero milliseconds formats as zero seconds
- **WHEN** `format` is called with `0`
- **THEN** it returns `"0s"`

#### Scenario: Positive duration formats in the largest exact unit
- **WHEN** `format` is called with `300000`
- **THEN** it returns `"5m"`

### Requirement: Reject invalid duration values
The system SHALL throw an error when the input is not a non-negative integer,
including negative numbers, fractional numbers, and non-numeric values.

#### Scenario: Negative number is rejected
- **WHEN** `format` is called with `-1`
- **THEN** it throws an error

#### Scenario: Fractional number is rejected
- **WHEN** `format` is called with `1.5`
- **THEN** it throws an error

#### Scenario: Non-numeric value is rejected
- **WHEN** `format` is called with a value that is not a number (e.g. a string or `NaN`)
- **THEN** it throws an error

