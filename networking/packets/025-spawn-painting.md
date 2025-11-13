---
title: "0x19: Spawn Painting"
nav_order: 26
layout: home
parent: Packets
---

# Spawn Painting

| Packet ID | Direction   |
| --------- | ----------- |
| `0x19`    | Clientbound |

Sent to the client when a painting entity should be spawned. All coordinates are in [entity space](../terminology#entity-space).

## Serverbound

| Field     | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| Entity ID | Integer | The ID of the entity that will refer to this mob |
| Title  | String16 | [The name of the painting](../../general/paintings) (Max 13 Characters). |
| X      | Integer | The X position of the mob (Quantized) |
| Y      | Integer | The Y position of the mob (Quantized) |
| Z      | Integer | The Z position of the mob (Quantized) |
| Direction | Byte | Rotation on the X Axis (Quantized) |

The coordinates refer to the center of the painting. Given a set width and height, the center is determined to be at
```c
// Horizontal Center
int h = max(0, width / 2 - 1);
// Vertical Center
int v = height / 2;
```

## Example Packet

| Field     | Value | 
| --------- | ----- |
| Entity ID | 1298  |
| X      | 5 |
| Y      | 2     |
| Z      | 15 |
| Yaw       | 22.4     |
| Pitch     | 12.68    |
| Held item | `256` (Iron Shovel) |