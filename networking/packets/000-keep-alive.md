---
title: 0x00: Keep Alive
description: Sent once a second by the server and client
order: 1
---

# Keep Alive

| Packet ID | Direction | Mojang Name       |
| --------- | --------- | ----------------- |
| `0x00`    | Both      | `KeepAlivePacket` |

This packet was presumably originally used to keep the connection alive, but is now completely unused. Strangely, this packet is sent serverbound every second when the client is on the "downloading terrain" screen.
