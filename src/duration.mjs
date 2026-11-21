// The smallest thing a chain of stages can be about: a duration written the way the loop's
// own soak values are written -- `5m`, `2h`, `1d` -- and a way back again. Enough for a change
// to be a real one-line edit on a real file, promoted through three branches.
const UNITS = { s: 1_000, m: 60_000, h: 3_600_000, d: 86_400_000, w: 604_800_000 };
// Largest first: the order compound durations must appear in, e.g. `1h30m`, never `30m1h`.
const UNIT_ORDER = ["w", "d", "h", "m", "s"];

export function parse(value) {
  const input = String(value ?? "").trim();
  const pairs = [...input.matchAll(/([1-9]\d*)([smhdw])/g)];
  if (pairs.length === 0 || pairs.map((pair) => pair[0]).join("") !== input) return null;

  let total = 0;
  let lastRank = -1;
  for (const [, amount, unit] of pairs) {
    const rank = UNIT_ORDER.indexOf(unit);
    if (rank <= lastRank) return null;
    lastRank = rank;
    total += Number(amount) * UNITS[unit];
  }
  return total;
}

// The largest unit that divides the value exactly, so `format(parse(x))` gives back `x` for
// anything `parse` accepts.
export function format(milliseconds) {
  if (!Number.isInteger(milliseconds) || milliseconds <= 0) {
    throw new Error(`not a positive whole number of milliseconds: ${JSON.stringify(milliseconds)}`);
  }
  for (const [unit, size] of Object.entries(UNITS).reverse()) {
    if (milliseconds % size === 0) return `${milliseconds / size}${unit}`;
  }
  throw new Error(`not a whole number of seconds: ${milliseconds}`);
}
