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
Sent to the client to set an entity's view angles. As the position data is in [entity space](../terminology#entity-space), rotation data is quantized.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Entity ID | Integer | The ID of the entity that should be moved |
| Yaw | Byte | Rotation on the X Axis (Quantized) |
| Pitch | Byte | Rotation on the Y Axis (Quantized) |

## Example Packets

### Clientbound
TODO: Provide integer example for these numbers

| Field  | Value    |
| ------ | -------- |
| Entity ID | 1298  |
| Yaw       | 22.4     |
| Pitch     | 12.68    |
