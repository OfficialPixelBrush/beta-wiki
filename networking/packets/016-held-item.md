---
title: "0x10: Holding Change"
nav_order: 17
layout: home
parent: Packets
---

# Holding Change

| Packet ID | Direction |
| --------- | --------- |
| `0x10`    | Serverbound |

## Serverbound

Sent when the player changes the slot selection 

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| Slot         | Short | The slot which the player has selected (0-8) |

## Example Packet

### Serverbound

| Field     | Value    |
| --------- | -------- |
| Slot | `3` |