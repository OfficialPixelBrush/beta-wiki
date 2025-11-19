---
title: "0x11: Use Bed"
nav_order: 18
layout: home
parent: Packets
---

# Use Bed

| Packet ID | Direction |
| --------- | --------- |
| `0x11`    | Clientbound |

## Clientbound

Supposedly this packet is sent when there are at least 2 more more players on a server, and at least one player uses the bed.

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| Entity ID | Integer | The ID of the entity that did the action |
| In Bed | Byte | ? |
| X      | Integer | The X position of beds headboard |
| Y      | Byte | The Y position of beds headboard |
| Z      | Integer | The Z position of beds headboard |

## Example Packet
TODO

### Clientbound

| Field     | Value    |
| --------- | -------- |
| | |