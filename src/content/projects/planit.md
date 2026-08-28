---
order: 1
title: PlanIt
year: "2026"
role: Solo — technical test, reworked
shot: attraction browse + admin dashboard
repo: https://github.com/HappyNaCl/PlanIt
cover: ./planit-cover.png
coverAlt: Schedule + Attraciton page
stack:
  - .NET
  - PostgreSQL
  - Redis
  - RabbitMQ
  - SignalR
  - SvelteKit
---

An attraction registration platform for company outings. The booking path is
hardened against double-booking three ways: RabbitMQ serialises concurrent
joins so capacity is consumed one at a time without database locks, Redis holds
an idempotency key per attempt, and a unique constraint backstops both. SignalR
pushes live capacity to every open dashboard.
