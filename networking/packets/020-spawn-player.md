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

Sent to the client when a player entity should be spawned.  The position is in [block space](../terminology#block-space), while the angles are quantized.

## Clientbound

| Field     | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| Entity ID | Integer | The ID of the entity that will refer to this player |
| Username  | String16 | The username. Maximum of 16 characters! |
| X      | Integer | The X block position of the player  |
| Y      | Integer | The Y block position of the player  |
| Z      | Integer | The Z block position of the player  |
| Yaw | Byte | Rotation on the X Axis (Quantized) |
| Pitch | Byte | Rotation on the Y Axis (Quantized) |
| Held item | Short | Held item/block of the player |

{: .warning }
> Even though "Held item" can be [`-1` to represent an empty slot](103-set-inventory-slot), the client doesn't know how to render held item `-1` on other players when they spawn in. As a result, this value must never be lower than `0`! This only applies to if this packet is sent in isolation and not immediately followed up by an [entity equipment](005-entity-equipment) packet. Read up on proper usage of this packet on the [relevant behavior page](../behavior/player-join)!

## Example Packet

| Field     | Value | 
| --------- | ----- |
| Entity ID | `1298`  |
| Username | `PixelBrushArt` |
| X      | `5` |
| Y      | `2` |
| Z      | `15` |
| Yaw       | `16` (`22.58`) |
| Pitch     | `9` (`12.70`) |
| Held item | `256` (Iron Shovel) |