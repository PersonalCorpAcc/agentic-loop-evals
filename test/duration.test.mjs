import assert from "node:assert/strict";
import { test } from "node:test";

import { format, parse } from "../src/duration.mjs";

test("parses each unit", () => {
  assert.equal(parse("30s"), 30_000);
  assert.equal(parse("5m"), 300_000);
  assert.equal(parse("2h"), 7_200_000);
  assert.equal(parse("1d"), 86_400_000);
  assert.equal(parse("2w"), 1_209_600_000);
});

test("refuses anything else", () => {
  assert.equal(parse("5"), null);
  assert.equal(parse("0m"), null);
  assert.equal(parse("5 m"), null);
  assert.equal(parse("1x"), null);
});

test("accepts upper-case and mixed-case units with the same value as lower-case", () => {
  assert.equal(parse("2H"), parse("2h"));
  assert.equal(parse("30S"), parse("30s"));
  assert.equal(parse("5M"), parse("5m"));
  assert.equal(parse("1D"), parse("1d"));
  assert.equal(parse("2W"), parse("2w"));
});

test("still refuses spaces, unknown units and zero with upper-case input", () => {
  assert.equal(parse("0M"), null);
  assert.equal(parse("5 M"), null);
  assert.equal(parse("1X"), null);
});

test("format always writes lower-case regardless of parse's input case", () => {
  assert.equal(format(parse("2H")), "2h");
  assert.equal(format(parse("30S")), "30s");
});

test("formats in the largest unit that divides exactly", () => {
  assert.equal(format(300_000), "5m");
  assert.equal(format(90_000), "90s");
  assert.equal(format(86_400_000), "1d");
  assert.equal(format(1_209_600_000), "2w");
});

test("prefers weeks over days when a value divides exactly", () => {
  assert.equal(format(parse("14d")), "2w");
  assert.equal(format(parse("10d")), "10d");
});

test("round-trips everything it parses", () => {
  for (const value of ["45s", "5m", "90m", "2h", "3d", "2w"]) assert.equal(format(parse(value)), value);
});
