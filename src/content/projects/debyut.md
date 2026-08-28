---
order: 5
title: DebYUt
year: "2026"
role: Side project, solo
shot: event page + organizer console
# repo: https://github.com/HappyNaCl/REPO-NAME   # uncomment + set to show the Repo button

stack:
  - Go
  - gRPC
  - HLS
  - PostgreSQL
  - RabbitMQ
  - Svelte
---

An event ticketing platform: five Go services on separate databases, talking
gRPC behind a Gin gateway. Checkout clears through a payment gateway with
webhook reconciliation, and queue-backed workers keep the request path fast when
a launch goes concurrent. Ticket holders watch the event live over HLS,
transcoded to an adaptive ladder and served from object storage behind signed,
per-ticket playlist URLs.
