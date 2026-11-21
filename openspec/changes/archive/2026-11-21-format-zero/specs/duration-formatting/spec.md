## Purpose

Formats a count of milliseconds as a compact duration string (`5m`, `2h`, `1d`) and parses that
string back into milliseconds, so profile and soak durations have one round-trippable textual form.

## ADDED Requirements

### Requirement: Formatting zero milliseconds
The system SHALL format `0` milliseconds as `"0s"` instead of throwing, since a soak of nothing
is a real duration value.

#### Scenario: Zero milliseconds formats as zero seconds
- **WHEN** `format(0)` is called
- **THEN** it returns `"0s"`

### Requirement: Formatting rejects invalid magnitudes
The system SHALL throw when `format` is given a value that is not a non-negative integer: a
negative number, a fraction, or anything that is not a number.

#### Scenario: Negative milliseconds still throws
- **WHEN** `format(-1)` is called
- **THEN** it throws an error

#### Scenario: Fractional milliseconds still throws
- **WHEN** `format(1.5)` is called
- **THEN** it throws an error

#### Scenario: Non-number input still throws
- **WHEN** `format("5m")` is called
- **THEN** it throws an error

### Requirement: Parsing zero-duration strings is unchanged
The system SHALL continue to reject `"0s"` (and any other all-zero duration string) when parsing,
so `parse` and `format` are not required to round-trip at zero.

#### Scenario: Parsing "0s" still returns null
- **WHEN** `parse("0s")` is called
- **THEN** it returns `null`
