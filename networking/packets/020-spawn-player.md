---
title: "0x14: Spawn Player Entity"
nav_order: 21
layout: home
parent: Packets
---

# Spawn Player Entity

| Packet ID | Direction   |
| --------- | ----------- |
| `0x14`    | Clientbound |

Sent to the client when a player entity should be spawned. All coordinates and angles are in [entity space](../terminology#entity-space).

## Serverbound

| Field     | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| Entity ID | Integer | The ID of the entity that will refer to this player |
| Username  | String16 | The username. Maximum of 16 characters! |
| X      | Byte | The X position of the player (Quantized) |
| Y      | Byte | The Y position of the player (Quantized) |
| Z      | Byte | The Z position of the player (Quantized) |
| Yaw | Byte | Rotation on the X Axis (Quantized) |
| Pitch | Byte | Rotation on the Y Axis (Quantized) |
| Held item | Short | Held item/block of the player |

## Example Packet

| Field     | Value | 
| --------- | ----- |
| Entity ID | 1298  |
| Username | `PixelBrushArt`
| X      | 5 |
| Y      | 2     |
| Z      | 15 |
| Yaw       | 22.4     |
| Pitch     | 12.68    |
| Held item | `256` (Iron Shovel) |