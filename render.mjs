// Build step (run on the author's machine, never by the grader): renders poster.html to entry.png at
// 1024 x 1024 with a headless Chromium browser, then checks the PNG against the contest's gate.
//
//   node render.mjs            (BROWSER=/path/to/chromium overrides the browser it finds)

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = (name) => fileURLToPath(new URL(name, import.meta.url));
const candidates = [
  process.env.BROWSER,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/chromium',
  '/usr/bin/google-chrome',
].filter(Boolean);
const browser = candidates.find((p) => existsSync(p));
if (!browser) throw new Error('no Chromium-based browser found: set BROWSER');

const out = here('./entry.png');
execFileSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1024,1024',
  '--virtual-time-budget=3000',
  `--screenshot=${out}`,
  pathToFileURL(here('./poster.html')).href,
], { stdio: 'inherit' });

// The gate: a whole PNG, at most 1 MiB and 1024 x 1024 pixels.
const png = readFileSync(out);
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
const bytes = statSync(out).size;
console.log(`entry.png: ${width} x ${height}, ${bytes} bytes`);
if (width > 1024 || height > 1024) throw new Error('image is larger than 1024 x 1024');
if (bytes > 1024 * 1024) throw new Error('image is larger than 1 MiB');
