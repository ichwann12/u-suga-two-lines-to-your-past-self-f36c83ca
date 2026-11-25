# Two Lines to Your Past Self

[![make.fun · u-suga-two-lines-to-your-past-self-f36c83ca](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![Rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/ichwann12/u-suga-two-lines-to-your-past-self-f36c83ca/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![Reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/ichwann12/u-suga-two-lines-to-your-past-self-f36c83ca/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)

A two-line warning to my past self about one specific moment, and why that moment mattered.

## Entry

> Do not deploy on Friday afternoon, no matter how small the change looks.
>
> That one deploy cost you the whole weekend, and it taught you that small changes are never small at 5 p.m. on a Friday.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the two lines from `entry.txt` at the repo root and writes them unchanged to `entry.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR` (or `MAKEFUN_BOT_DIR`, defaulting to `/output`).

```sh
node main.ts
```
