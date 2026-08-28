---
order: 4
title: keYworDs
year: "2026"
role: Solo — side project
shot: daily board + leaderboard
repo: https://github.com/HappyNaCl/keYworDs
cover: ./keywords-cover.png
coverAlt: Game page
stack:
  - NestJS
  - Prisma
  - MySQL
  - React
  - TypeScript
---

A Wordle clone with a word of the day and a leaderboard behind it. The answer
and every guess live server-side in NestJS and Prisma rather than in the
browser, so the board survives a refresh, a second tab cannot start the day
over, and the standings have something worth trusting.
