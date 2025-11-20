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
Sent to the client when the players their view-direction must be forced in a certain direction. (Unconfirmed)

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Yaw | Float | Absolute rotation on the X Axis, in degrees |
| Pitch | Float | Absolute rotation on the Y Axis, in degrees |
| On Ground | Boolean   | Unused (?) |

## Serverbound
Sent to the server when the player is moving, but hasn't changed their viewing direction in a while.

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| Yaw         | Float | Absolute rotation on the X Axis, in degrees |
| Pitch         | Float | Absolute rotation on the Y Axis, in degrees |
| On Ground | Boolean   | `0` for walking/swimming, `1` for jumping/falling |


## Example Packet

### Serverbound

| Field     | Value    |
| --------- | -------- |
| Yaw       | 22.4     |
| Pitch     | 12.68    |
| On Ground | 1        |