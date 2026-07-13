---
title: "0x19: Spawn Painting"
order: 26
---

# Spawn Painting

| Packet ID | Direction   | Mojang Name         | MCP Name                 |
| --------- | ----------- | ------------------- | ------------------------ |
| `0x19`    | Clientbound | `AddPaintingPacket` | `Packet25EntityPainting` |

Sent to the client when a painting entity should be spawned. The position is (probably) in [entity space](../terminology#entity-space).

## Clientbound

| Field     | Type     | Description                                                               |
| --------- | -------- | ------------------------------------------------------------------------- |
| Entity ID | Integer  | The ID of the entity that will refer to this mob                          |
| Title     | String16 | [The name of the painting](../../entities/paintings) (Max 13 Characters). |
| X         | Integer  | The X position of the item entity (Quantized)                             |
| Y         | Integer  | The Y position of the item entity (Quantized)                             |
| Z         | Integer  | The Z position of the item entity (Quantized)                             |
| Direction | Byte     | The direction of the painting                                             |

The coordinates refer to the center of the painting. Given a set width and height, the center is determined to be at

```c
// Horizontal Center
int h = max(0, width / 2 - 1);
// Vertical Center
int v = height / 2;
```

The direction can be figured out via this table.

| Value | Direction |
| ----- | --------- |
| `0`   | `-Z`      |
| `1`   | `-X`      |
| `2`   | `+Z`      |
| `3`   | `+X`      |

## Example Packet

| Field     | Value               |
| --------- | ------------------- |
| Entity ID | `532`               |
| X         | `5669` (`177.15`)   |
| Y         | `2176` (`68.0`)     |
| Z         | `-5325` (`-166.40`) |
| Direction | `2` (+Z)            |
