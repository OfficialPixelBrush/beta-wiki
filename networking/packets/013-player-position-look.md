---
title: "0x0D: Player Position and Look"
nav_order: 14
layout: home
parent: Packets
---
# Player Position and Look

| Packet ID | Direction |
| --------- | --------- |
| `0x0D`    | Both      |


## Clientbound
Sent to the client when the player is teleported and their view direction needs to be defined.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| X      | Double | The X position of the player |
| Y      | Double | The Y position of the player |
| Camera Y | Double | The Y position of the player camera |
| Z      | Double | The Z position of the player |
| Yaw | Float | Absolute rotation on the X Axis, in degrees |
| Pitch | Float | Absolute rotation on the Y Axis, in degrees |
| On Ground | Boolean | [See note on On Ground Packet page](./010-player-on-ground#clientbound) |

## Serverbound
Sent to the server when the player is moving and looking around.

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| X         | Double | The X position of the player                      |
| Y         | Double | The Y position of the player                      |
| Camera Y | Double | The Y position of the player camera |
| Z         | Double | The Z position of the player                      |
| Yaw | Float | Absolute rotation on the X Axis, in degrees |
| Pitch | Float | Absolute rotation on the Y Axis, in degrees |
| On Ground | Boolean | [See note on On Ground Packet page](./010-player-on-ground#clientbound) |


## Example Packets

| Field     | Value    |
| --------- | -------- |
| X         | `5669.06` |
| Y         | `68.4` |
| Camera Y  | `70.02` |
| Z         | `-5325.32` |
| Yaw       | `22.4f` |
| Pitch     | `12.68f` |
| On Ground | `true` |