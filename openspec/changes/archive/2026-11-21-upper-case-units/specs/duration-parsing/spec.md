## Purpose

Parses short duration strings such as `30s`, `2h`, `1d`, and `2w` into a count of milliseconds,
and formats a count of milliseconds back into the shortest exact duration string.

## ADDED Requirements

### Requirement: Parse accepts upper-case unit suffixes
The system SHALL parse a duration string whose unit suffix is upper-case (`S`, `M`, `H`, `D`,
`W`) to the same value as the equivalent lower-case suffix.

#### Scenario: Upper-case hours
- **WHEN** `parse` is called with `"2H"`
- **THEN** it returns the same value as `parse("2h")`

#### Scenario: Upper-case seconds
- **WHEN** `parse` is called with `"30S"`
- **THEN** it returns the same value as `parse("30s")`

### Requirement: Parse still refuses invalid input
The system SHALL continue to reject a duration string that contains internal whitespace, an
unrecognized unit suffix, or a zero quantity, regardless of the case of its unit suffix.

#### Scenario: Internal space is refused
- **WHEN** `parse` is called with `"5 M"`
- **THEN** it returns `null`

#### Scenario: Unknown unit is refused
- **WHEN** `parse` is called with `"1X"`
- **THEN** it returns `null`

#### Scenario: Zero quantity is refused
- **WHEN** `parse` is called with `"0M"`
- **THEN** it returns `null`

### Requirement: Format always writes lower-case units
The system SHALL format a duration using only lower-case unit suffixes.

#### Scenario: Format output is lower-case
- **WHEN** `format` is called with a value produced by parsing an upper-case duration string
- **THEN** the returned string's unit suffix is lower-case
