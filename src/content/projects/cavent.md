---
order: 3
title: Cavent
year: "2025"
role: Lead — 5-person team
shot: event feed + campus filters
repo: https://github.com/HappyNaCl/cavent
cover: ./cavent-cover.webp
coverAlt: Event Search page
stack:
  - Go
  - React
  - TypeScript
  - PostgreSQL
  - Redis
  - Asynq
---

A campus events platform that connects university students through the events
their own university hosts. Go backend on a domain-driven split, with Asynq
running everything that should not block a request — reminders, mail, scheduled
sweeps — on a Redis-backed queue with its own monitoring UI, and OAuth sign-in
so nobody manages another password.
