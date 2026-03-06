---
title: 0x00 Keep Alive
description: Sent once a second by the Server and Client
order: 1
---

# Keep Alive

| Packet ID | Direction |
| --------- | --------- |
| `0x00`    | Both      |

This packet was presumably originally used to keep the connection alive, but is now completely unused. Strangely, this packet is sent serverbound every second when the client is on the "downloading terrain" screen.