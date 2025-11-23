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

Sent to the client when a painting entity should be spawned. The position is in [block space](../terminology#block-space).

## Clientbound

| Field     | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| Entity ID | Integer | The ID of the entity that will refer to this mob |
| Title  | String16 | [The name of the painting](../../general/paintings) (Max 13 Characters). |
| X      | Integer | The X block position of the painting  |
| Y      | Integer | The Y block position of the painting  |
| Z      | Integer | The Z block position of the painting  |
| Direction | Byte | The direction of the painting |

The coordinates refer to the center of the painting. Given a set width and height, the center is determined to be at
```c
// Horizontal Center
int h = max(0, width / 2 - 1);
// Vertical Center
int v = height / 2;
```

The direction can be figured out via this table.

| Value | Direction |
| --- | --- |
| `0` | `-Z` |
| `1` | `-X` |
| `2` | `+Z` |
| `3` | `+X` |

## Example Packet

| Field     | Value | 
| --------- | ----- |
| Entity ID | 532  |
| X      | 5 |
| Y      | 2     |
| Z      | 15 |
| Direction | `2` |