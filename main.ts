import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Sunlight through my glass of water threw a tiny rainbow on the ceiling, and for one minute the kitchen had its own weather.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
