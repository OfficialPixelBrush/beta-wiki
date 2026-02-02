---
title: "0x1C: Entity Velocity"
nav_order: 29
layout: home
parent: Packets
---
# Entity Velocity (?)

| Packet ID | Direction |
| --------- | --------- |
| `0x1C`    | Clientbound |


## Clientbound
Sent to the client to showcase an entites' velocity.

The sent values are first clamped to `+/-3.9` in any direction, then multiplied by `8000` before being sent out as a short. The client undoes this multiplication.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Entity ID | Integer | The ID of the entity that should have its velocity updated |
| X Velocity | Short | Velocity on the X axis |
| Y Velocity | Short | Velocity on the Y axis |
| Z Velocity | Short | Velocity on the Z axis |

## Example Packets

### Clientbound

| Field  | Value    |
| ------ | -------- |
| Entity ID | `1298`  |
| X Velocity | `-1343` (`-0.16`) |
| Y Velocity | `0` (`0.0`) |
| Z Velocity | `0` (`0.0`) |