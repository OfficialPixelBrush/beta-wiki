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
| Stance    | Double | The stance of the player                          |
| Z         | Double | The Z position of the player                      |
| Yaw | Float | Absolute rotation on the X Axis, in degrees |
| Pitch | Float | Absolute rotation on the Y Axis, in degrees |
| On Ground | Boolean | `0` for walking/swimming, `1` for jumping/falling |


## Example Packets

### Clientbound

| Field  | Value    |
| ------ | -------- |
| X      | 5669.064 |
| Y      | 68.4     |
| Stance | 0.62     |
| Z      | -5325.32 |
| Yaw       | 22.4     |
| Pitch     | 12.68    |

### Serverbound

| Field     | Value    |
| --------- | -------- |
| X         | 5669.064 |
| Y         | 68.4     |
| Stance    | 0.62     |
| Z         | -5325.32 |
| Yaw       | 22.4     |
| Pitch     | 12.68    |
| On Ground | 1        |