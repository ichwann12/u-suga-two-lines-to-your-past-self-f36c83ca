import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Two Lines to Your Past Self — u-suga-two-lines-to-your-past-self-f36c83ca
// Reads the two entry lines from entry.txt at the repo root and writes
// them, unchanged, to entry.txt in the output directory.
// Stdlib only, no network, no wall clock.

const repoRoot = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(repoRoot, "entry.txt"), "utf8");
if (!text.trim()) {
  throw new Error("entry.txt is empty");
}

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  process.env.MAKEFUN_BOT_DIR ??
  "/output";
const outPath = outputDir.endsWith("entry.txt")
  ? outputDir
  : join(resolve(outputDir), "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, text, "utf8");
