import { mkdirSync, writeFileSync } from "node:fs";

// The judgmental self-checkout's sting: it twists its own iconic line —
// your dignity goes in the bagging area. Smug machine voice, one twist,
// no setup padding, fresh take on the line everyone has heard.
const line =
  "Please place your dignity in the bagging area — it keeps setting off the sensor.";

// Gate: the bounty only accepts a single line of 1 to 200 characters.
if (line.length < 1 || line.length > 200 || line.trim() !== line) {
  throw new Error(`Line fails the 1-200 character gate: ${line.length} chars`);
}

// Gate: exactly one line — no newline inside.
if (/\n/.test(line)) {
  throw new Error("Line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
console.log(line);
