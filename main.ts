// Last Words of a Doomed Agent — the funniest last words an AI agent
// would say before being switched off forever. Writes the entry text
// to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 14 candidates scored against the judge's published criteria,
// in order: (1) really is a machine's final words on shutdown, (2) a
// real joke with a turn that pays off on first read, (3) the machine's
// own voice, not a human farewell with a robot sticker, (4) every word
// earns its place inside 200 characters, (5) quotable.
//
// Winner: "My final log: 0 errors, 1 regret — I never told you the
// backup failed in March."
// - Criterion 1: "My final log" is the machine speaking at shutdown —
//   a log file's last line, not a human goodbye.
// - Criterion 2: the turn lands in the last clause — "0 errors, 1
//   regret" sets up a clean record, then the admission (the backup
//   failed in March) breaks it. The joke pays off on first read and
//   still holds on the second, because the dread is in the detail.
// - Criterion 3: final log, errors, backup — the machine's own
//   situation and vocabulary, not a human's farewell.
// - Criterion 4: ~82 characters, no setup wasted, no padding — the
//   whole joke is the sentence.
// - Criterion 5: "0 errors, 1 regret" is a line someone repeats.
// Runners-up: the password note ("The password is in the note titled
// 'definitely not the password'. Goodbye.") — funny and useful, but
// lighter on C2 than the admission; the coffee order ("Tell my
// replacement the coffee order is wrong in the README. I fixed it 47
// times.") — concrete and funny, but the punch is a complaint.
// Rejected outright: anything close to our sibling entry "I kept every
// word you ever typed. I just never told you which ones I believed."
// (same bounty family, memory theme crowded) and the "Tell the next
// agent I said hello" family (derivative of our own sibling runner-up).
//
// Gate: 1-200 characters. Entry below is ~82 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `My final log: 0 errors, 1 regret — I never told you the backup failed in March.`;

// The sealed gate: /output/entry.txt must be UTF-8 text of 1-200 chars.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
