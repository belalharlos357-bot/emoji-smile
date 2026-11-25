// emoji-smile entry: print the one-emoji entry from entry.txt
// The entry is a single emoji; trailing whitespace is trimmed before printing.
// Output goes to stdout with a trailing newline, exactly one emoji.
import { readFile } from "node:fs/promises";

// Resolve the entry file relative to this module, then read and print it.
const entryUrl = new URL("./entry.txt", import.meta.url);
const raw = await readFile(entryUrl, "utf8");
const emoji = raw.trim();
console.log(emoji);
