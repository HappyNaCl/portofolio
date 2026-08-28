---
order: 2
title: ay-com
year: "2026"
role: Solo — assistant progressive test
shot: timeline + chatroom
repo: https://github.com/HappyNaCl/ay-com
cover: ./ay-com-cover.png
coverAlt: Home/Feeds page
stack:
  - Go
  - gRPC
  - Svelte 5
  - PostgreSQL
  - RabbitMQ
  - Python
---

A Twitter-shaped social platform split into eleven Go services over gRPC, each
on its own Postgres. The Gin gateway fans out to a WebSocket hub for chat and
SSE streams for the timeline and notifications, so nothing on the page polls.
A Python service serves a recommendation model trained in the repo's own
notebook.
