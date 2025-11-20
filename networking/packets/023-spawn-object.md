---
title: "0x17: Spawn Object Entity"
nav_order: 24
layout: home
parent: Packets
---

# Spawn Object Entity

| Packet ID | Direction   |
| --------- | ----------- |
| `0x17`    | Clientbound |

Sent to the client when an [object entity](../../general/objects) should be spawned. The position is in [block space](../terminology#block-space).

## Serverbound

| Field     | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| Entity ID | Integer | The ID of the entity that will refer to this object |
| Object Type  | Byte | The type of object |
| X      | Integer | The X block position of the player  |
| Y      | Integer | The Y block position of the player  |
| Z      | Integer | The Z block position of the player  |

## Example Packet

| Field     | Value | 
| --------- | ----- |
| Entity ID | 1298  |
| Object Type  | `1` (Boat) |
| X      | 5669.064 |
| Y      | 68.4     |
| Z      | -5325.32 |