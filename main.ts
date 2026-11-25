// One-Line Office Jokes — make.fun entry (program/v1, Node 22).
// Writes a single original one-line office joke to /output/entry.txt.
// The joke: skipping a meeting to do the work for that meeting only
// earns another meeting about the skipping — the bureaucracy loop
// closes on itself, and the laugh lands in the last few words.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I skipped a meeting to do the work for that meeting, and they booked another meeting to ask why I skipped it.";

// The gate allows 1–199 characters; refuse to emit an over-long line
// rather than hand the judge an invalid entry.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.includes("\n")) {
  throw new Error(`joke is ${JOKE.length} chars; must be 1–199 on one line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
