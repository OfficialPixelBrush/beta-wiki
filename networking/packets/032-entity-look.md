---
title: "0x20: Entity Look"
nav_order: 33
layout: home
parent: Packets
---
# Entity Look

| Packet ID | Direction |
| --------- | --------- |
| `0x20`    | Clientbound      |


## Clientbound
Sent to the client to set an entity's view angles. As the rotation data is in [entity space](../terminology#entity-space) it is quantized.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Entity ID | Integer | The ID of the entity that should be moved |
| Yaw | Byte | Rotation on the X Axis (Quantized) |
| Pitch | Byte | Rotation on the Y Axis (Quantized) |

## Example Packets

### Clientbound

| Field  | Value    |
| ------ | -------- |
| Entity ID | `1298`  |
| Yaw       | `16` (`22.58`) |
| Pitch     | `9` (`12.70`) |
