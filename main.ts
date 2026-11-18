// Day in News, Wednesday 18 November 2026: writes the front page to entry.png in the output directory.
// The page is drawn from poster.html (render.mjs turns it into entry.png at build time); this program
// only publishes those bytes, so both runs write the very same file. Node 22, standard library only.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const page = readFileSync(new URL('./entry.png', import.meta.url));

// Refuse to publish anything the gate would reject: a PNG over 1 MiB.
const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47];
if (!PNG_MAGIC.every((b, i) => page[i] === b)) throw new Error('entry.png is not a PNG');
if (page.length > 1024 * 1024) throw new Error(`entry.png is ${page.length} bytes, over 1 MiB`);

writeFileSync(join(outDir, 'entry.png'), page);
