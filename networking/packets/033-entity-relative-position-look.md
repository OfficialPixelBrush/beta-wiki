---
title: "0x22: Entity Relative Position and Look"
nav_order: 34
layout: home
parent: Packets
---
# Entity Relative Position and Look

| Packet ID | Direction |
| --------- | --------- |
| `0x22`    | Clientbound      |


## Clientbound
Sent to the client to set an entity's position relative to the clients previous position. Usually sent when an entity has moved less than 4 blocks. Rotation data is also sent quantized.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Entity ID | Integer | The ID of the entity that should be moved |
| X      | Byte | The X position of the player (Quantized) |
| Y      | Byte | The Y position of the player (Quantized) |
| Z      | Byte | The Z position of the player (Quantized) |
| Yaw | Byte | Rotation on the X Axis (Quantized) |
| Pitch | Byte | Rotation on the Y Axis (Quantized) |

## Example Packets

### Clientbound

| Field  | Value    |
| ------ | -------- |
| Entity ID | 1298  |
| X      | 5 |
| Y      | 2     |
| Z      | 15 |
| Yaw       | 22.4     |
| Pitch     | 12.68    |