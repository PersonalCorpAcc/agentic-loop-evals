## 1. Implement compound duration parsing

- [x] 1.1 Update `parse` in `src/duration.mjs` to accept compound durations (each unit at most
      once, largest unit first: `w`, `d`, `h`, `m`, `s`), summing matched segments, while
      preserving every currently-refused input as still refused. `format` stays unchanged.
- [x] 1.2 Add test cases to `test/duration.test.mjs` covering: compound parsing (`1h30m`,
      `2d4h`), refusal of out-of-order units (`30m1h`), and refusal of a repeated unit
      (`1h1h`).
