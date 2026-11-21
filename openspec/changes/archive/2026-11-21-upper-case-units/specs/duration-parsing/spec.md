## Purpose

Parsing and formatting of short duration strings such as `5m`, `2h`, and `1d`, used
wherever the loop reads or writes a duration value (e.g. soak profile settings).

## ADDED Requirements

### Requirement: Parse accepts case-insensitive unit letters
The system SHALL parse a duration string whose unit letter is upper-case or
lower-case (`s`/`S`, `m`/`M`, `h`/`H`, `d`/`D`, `w`/`W`) to the same number of
milliseconds as the lower-case form.

#### Scenario: Upper-case hours
- **WHEN** `parse` is called with `"2H"`
- **THEN** it returns the same value as `parse("2h")`

#### Scenario: Upper-case seconds
- **WHEN** `parse` is called with `"30S"`
- **THEN** it returns the same value as `parse("30s")`

### Requirement: Parse still refuses invalid input
The system SHALL continue to refuse (return `null` for) input containing spaces,
an unrecognized unit letter, or a zero magnitude, regardless of the case of the
unit letter.

#### Scenario: Internal space refused
- **WHEN** `parse` is called with `"5 M"`
- **THEN** it returns `null`

#### Scenario: Unknown unit refused
- **WHEN** `parse` is called with `"1X"`
- **THEN** it returns `null`

#### Scenario: Zero magnitude refused
- **WHEN** `parse` is called with `"0M"`
- **THEN** it returns `null`

### Requirement: Format always writes lower-case units
The system SHALL always render the unit letter in lower case when formatting a
number of milliseconds back into a duration string, independent of the case of
any string previously parsed to produce that value.

#### Scenario: Round-trip through upper-case input yields lower-case output
- **WHEN** `format(parse("3D"))` is called
- **THEN** it returns `"3d"`
