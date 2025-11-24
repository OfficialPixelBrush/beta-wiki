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

Sent to the client when an [object entity](../../entities/objects) should be spawned. The position is in [block space](../terminology#block-space).

## Clientbound

| Field     | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| Entity ID | Integer | The ID of the entity that will refer to this object |
| Object Type  | Byte | [The type of the object](../../entities/objects) |
| X      | Integer | The X block position of the object  |
| Y      | Integer | The Y block position of the object  |
| Z      | Integer | The Z block position of the object  |

## Example Packet

| Field     | Value | 
| --------- | ----- |
| Entity ID | 1298  |
| Object Type  | `1` (Boat) |
| X      | 5669.064 |
| Y      | 68.4     |
| Z      | -5325.32 |