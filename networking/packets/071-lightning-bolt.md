---
title: "0x47: Lightning Bolt"
nav_order: 72
layout: home
parent: Packets
---

# Lightning Bolt

| Packet ID | Direction |
| --------- | --------- |
| `0x47`    | Clientbound      |

Spawns a lightning bolt at the specified position.

## Clientbound

| Field | Type    | Description |
| ----- | ------- | --- |
| Entity ID | Integer | The ID of the lightning bolt |
| Spawn Lightning | Boolean | Needs to be `true` to spawn a lightning bolt |
| X      | Integer | The X block position of the lightning bolt  |
| Y      | Integer | The Y block position of the lightning bolt  |
| Z      | Integer | The Z block position of the lightning bolt  |

## Example Packet

| Field | Value | 
| --- | --- |
| Entity ID | 2 |
| Spawn Lightning | 1 |
| X | 0 |
| Y | 76 |
| Z | 5 |