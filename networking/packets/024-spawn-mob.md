---
title: "0x18: Spawn Mob Entity"
nav_order: 25
layout: home
parent: Packets
---

# Spawn Mob Entity

| Packet ID | Direction   |
| --------- | ----------- |
| `0x18`    | Clientbound |

Sent to the client when a mob entity should be spawned. The position is in [block space](../terminology#block-space), while the angles are quantized.

## Clientbound

| Field     | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| Entity ID | Integer | The ID of the entity that will refer to this mob |
| Mob Type  | Byte | [The type of the mob](../../entities/mobs) |
| X      | Integer | The X block position of the mob  |
| Y      | Integer | The Y block position of the mob  |
| Z      | Integer | The Z block position of the mob  |
| Yaw | Byte | Rotation on the X Axis (Quantized) |
| Pitch | Byte | Rotation on the Y Axis (Quantized) |
| Metadata | - | [Additional entity metadata](../entity-metadata) |

## Example Packet

| Field     | Value | 
| --------- | ----- |
| Entity ID | `1298`  |
| X      | `5` |
| Y      | `2` |
| Z      | `15` |
| Yaw | `16` (`22.58`) |
| Pitch | `9` (`12.70`) |
| Metadata | `0x00 0x01 0x7F` |