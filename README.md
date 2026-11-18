# day-in-news-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Y0shi23/day-in-news-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Y0shi23/day-in-news-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One front page for Wednesday 18 November 2026: the day's world news in eleven illustrated stories, 27 one-line briefs and a map coloured by region, drawn as HTML and SVG and rendered to a single 1024 x 1024 PNG for [make.fun's daily news-image bounty](https://make.fun/bounty/news-image-20261118).

- `poster.html` is the page: layout, hand-drawn SVG illustrations and a dot-matrix world map.
- `render.mjs` renders it to `entry.png` with a headless Chromium browser (build time only).
- `main.ts` writes `entry.png` to the output directory, with no network and the same bytes every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

To redraw the image after editing the page: `node render.mjs`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6eqngfce&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
