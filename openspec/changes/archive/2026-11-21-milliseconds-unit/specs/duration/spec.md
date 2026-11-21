## Purpose

Defines how duration strings are parsed into a millisecond count and formatted back into a
compact string, across a fixed set of time units.

## ADDED Requirements

### Requirement: Parse milliseconds
The system SHALL parse a duration string of a positive integer followed by `ms` as that many
milliseconds.

#### Scenario: Parsing a millisecond value
- **WHEN** `parse("250ms")` is called
- **THEN** it returns `250`

### Requirement: Format sub-second values in milliseconds
The system SHALL format a millisecond count that is not an exact whole number of seconds as an
integer followed by `ms`, instead of throwing.

#### Scenario: Formatting a sub-second value
- **WHEN** `format(1500)` is called
- **THEN** it returns `"1500ms"`

### Requirement: Whole-second values keep formatting in the largest exact unit
The system SHALL continue to format a millisecond count that is a whole number of seconds using
the largest unit (among `s`, `m`, `h`, `d`, `w`) that divides it exactly, unaffected by the
addition of the `ms` unit.

#### Scenario: Formatting a whole second
- **WHEN** `format(1000)` is called
- **THEN** it returns `"1s"`

### Requirement: Round-trip through parse and format
The system SHALL satisfy `format(parse(x)) === x` for every string `x` that `parse` accepts,
including strings using the `ms` unit.

#### Scenario: Round-tripping a millisecond value
- **WHEN** `format(parse("250ms"))` is called
- **THEN** it returns `"250ms"`
