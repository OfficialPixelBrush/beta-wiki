---
title: "0x22: Entity Position and Look"
nav_order: 35
layout: home
parent: Packets
---
# Entity Position and Look

| Packet ID | Direction |
| --------- | --------- |
| `0x22`    | Clientbound      |


## Clientbound
Sent to the client to set an entity's position absolutely. Usually sent when an entity moves more than 4 blocks, as the position data is in [entity space](../terminology#entity-space). Position and rotation data is in [entity space](../terminology#entity-space) and thus quantized.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Entity ID | Integer | The ID of the entity that should be moved |
| X      | Integer | The X position of the player (Quantized) |
| Y      | Integer | The Y position of the player (Quantized) |
| Z      | Integer | The Z position of the player (Quantized) |
| Yaw | Byte | Rotation on the X Axis (Quantized) |
| Pitch | Byte | Rotation on the Y Axis (Quantized) |

## Example Packets

### Clientbound

| Field  | Value    |
| ------ | -------- |
| Entity ID | `1298`  |
| X | `5669` (`177.15`) |
| Y | `68` (`2.12`) |
| Z | `-5325` (`-166.40`) |
| Yaw | `16` (`22.58`) |
| Pitch | `9` (`12.70`) |
