---
title: "0x1F: Entity Relative Position"
nav_order: 32
layout: home
parent: Packets
---
# Entity Relative Position

| Packet ID | Direction |
| --------- | --------- |
| `0x1F`    | Clientbound      |


## Clientbound
Sent to the client to set an entity's position relative to the clients previous position. Usually sent when an entity has moved less than 4 blocks. As the position data is in [entity space](../terminology#entity-space) it is quantized.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Entity ID | Integer | The ID of the entity that should be moved |
| X      | Byte | The X position of the player (Quantized) |
| Y      | Byte | The Y position of the player (Quantized) |
| Z      | Byte | The Z position of the player (Quantized) |

## Example Packets

### Clientbound

| Field  | Value    |
| ------ | -------- |
| Entity ID | 1298  |
| X      | 5 |
| Y      | 2     |
| Z      | 15 |