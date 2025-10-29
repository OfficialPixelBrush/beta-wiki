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

Sent to the client when a mob entity should be spawned. All coordinates and angles are in [entity space](../terminology#entity-space).

## Serverbound

| Field     | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| Entity ID | Integer | The ID of the entity that will refer to this mob |
| Mob Type  | Byte | The username. Maximum of 16 characters! |
| X      | Integer | The X position of the mob (Quantized) |
| Y      | Integer | The Y position of the mob (Quantized) |
| Z      | Integer | The Z position of the mob (Quantized) |
| Yaw | Byte | Rotation on the X Axis (Quantized) |
| Pitch | Byte | Rotation on the Y Axis (Quantized) |
| Metadata | - | [Additional entity metadata](../../general/mobs#metadata) |

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