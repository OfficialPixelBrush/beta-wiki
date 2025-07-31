---
title: "0x00: Keep Alive"
nav_order: 1
layout: home
parent: Packets
---

# Keep Alive

| Packet ID | Direction |
| --------- | --------- |
| `0x00`    | Both      |

This packet was presumably originally used to keep the connection alive, but is now completely unused. Strangely, this packet is sent serverbound every second when the client is on the "downloading terrain" screen.