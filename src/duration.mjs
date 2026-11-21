// The smallest thing a chain of stages can be about: a duration written the way the loop's
// own soak values are written -- `5m`, `2h`, `1d` -- and a way back again. Enough for a change
// to be a real one-line edit on a real file, promoted through three branches.
const UNITS = { s: 1_000, m: 60_000, h: 3_600_000, d: 86_400_000, w: 604_800_000 };

// One optional `<count>` group per unit, largest first -- order and uniqueness both fall
// straight out of the regex shape, so there's no separate bookkeeping to keep in sync.
const COMPOUND = /^(?:([1-9]\d*)w)?(?:([1-9]\d*)d)?(?:([1-9]\d*)h)?(?:([1-9]\d*)m)?(?:([1-9]\d*)s)?$/;

export function parse(value) {
  const match = COMPOUND.exec(String(value ?? "").trim());
  if (match === null) return null;
  const groups = match.slice(1);
  if (groups.every((group) => group === undefined)) return null;
  const sizes = Object.values(UNITS).reverse();
  return groups.reduce((total, group, index) => total + (group === undefined ? 0 : Number(group) * sizes[index]), 0);
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
