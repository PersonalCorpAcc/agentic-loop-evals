## Purpose

Defines how `format` turns a count of milliseconds into the compact duration string (`5m`,
`2h`, `1d`, ...) that the rest of the loop reads and writes, including the zero-duration case.

## ADDED Requirements

### Requirement: Format a positive whole number of milliseconds
The system SHALL convert a positive integer number of milliseconds into a string using the
largest unit (`w`, `d`, `h`, `m`, `s`) that divides the value exactly.

#### Scenario: Divides exactly into a larger unit
- **WHEN** `format` is called with `300000`
- **THEN** it returns `"5m"`

#### Scenario: No larger unit divides exactly
- **WHEN** `format` is called with `90000`
- **THEN** it returns `"90s"`

### Requirement: Format zero milliseconds
The system SHALL treat `0` as a valid duration and return `"0s"`, since a soak of zero duration
is a real value a profile can report.

#### Scenario: Zero milliseconds
- **WHEN** `format` is called with `0`
- **THEN** it returns `"0s"`

### Requirement: Reject invalid durations
The system SHALL throw an error when given a negative number, a non-integer, or a value that is
not a number.

#### Scenario: Negative number
- **WHEN** `format` is called with `-1`
- **THEN** it throws an error

#### Scenario: Fractional number
- **WHEN** `format` is called with `1.5`
- **THEN** it throws an error

#### Scenario: Not a number
- **WHEN** `format` is called with `"5m"`
- **THEN** it throws an error
