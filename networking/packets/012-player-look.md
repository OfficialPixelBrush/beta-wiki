---
title: "0x0C: Player Look"
nav_order: 13
layout: home
parent: Packets
---

# Player Look

| Packet ID | Direction |
| --------- | --------- |
| `0x0C`    | Both(?)   |


## Clientbound
Sent to the client when the players their view-direction must be forced in a certain direction.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Yaw | Float | Absolute rotation on the X Axis, in degrees |
| Pitch | Float | Absolute rotation on the Y Axis, in degrees |
| On Ground | Boolean   | [See note on On Ground Packet page](./010-player-on-ground#clientbound) |

## Serverbound
Sent to the server when the player hasn't moved in a while, but is changing their viewing direction.

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| Yaw | Float | Absolute rotation on the X Axis, in degrees |
| Pitch | Float | Absolute rotation on the Y Axis, in degrees |
| On Ground | Boolean   | [See note on On Ground Packet page](./010-player-on-ground#clientbound) |


## Example Packet

| Field     | Value    |
| --------- | -------- |
| Yaw       | `22.4f`     |
| Pitch     | `12.68f`    |
| On Ground | `true`        |