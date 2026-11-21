## Purpose

Defines how duration strings are parsed into a whole number of milliseconds, including both
single-unit (`5m`) and compound (`1h30m`) forms.

## ADDED Requirements

### Requirement: Compound duration parsing
`parse` SHALL accept a string composed of one or more `<count><unit>` segments, where `unit` is
one of `w`, `d`, `h`, `m`, `s`, `count` is a positive integer with no leading zero, each unit
appears at most once, and the segments appear in strictly decreasing unit size (`w` > `d` > `h`
> `m` > `s`). The result is the sum of each segment's value. Any string that does not match this
shape — including a single `<count><unit>` segment, which remains valid — returns `null`.

#### Scenario: Two units, largest first
- **WHEN** `parse("1h30m")` is called
- **THEN** it returns `5400000` (90 minutes)

#### Scenario: Three units, largest first
- **WHEN** `parse("2d4h")` is called
- **THEN** it returns `187200000`

#### Scenario: Units out of order are refused
- **WHEN** `parse("30m1h")` is called
- **THEN** it returns `null`

#### Scenario: Repeated unit is refused
- **WHEN** `parse("1h1h")` is called
- **THEN** it returns `null`

#### Scenario: Single-unit form still works
- **WHEN** `parse("5m")` is called
- **THEN** it returns `300000`

#### Scenario: Previously-refused input stays refused
- **WHEN** `parse("0m")`, `parse("5 m")`, or `parse("1x")` is called
- **THEN** each returns `null`
