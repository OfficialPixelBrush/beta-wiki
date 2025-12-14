---
title: "0x0B: Player Position"
nav_order: 12
layout: home
parent: Packets
---
# Player Position

| Packet ID | Direction |
| --------- | --------- |
| `0x0B`    | Both      |


## Clientbound
Sent to the client when the player is teleported, but their view-direction is irrelevant.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| X      | Double | The X position of the player |
| Y      | Double | The Y position of the player |
| Camera Y | Double | The Y position of the player camera |
| Z      | Double | The Z position of the player |
| On Ground | Boolean | [See note on On Ground Packet page](./010-player-on-ground#clientbound) |

## Serverbound
Sent to the server when the player is moving, but hasn't changed their viewing direction in a while.

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| X         | Double | The X position of the player                      |
| Y         | Double | The Y position of the player                      |
| Camera Y | Double | The Y position of the player camera |
| Z         | Double | The Z position of the player                      |
| On Ground | Boolean | [See note on On Ground Packet page](./010-player-on-ground#clientbound) |


## Example Packets

| Field     | Value    |
| --------- | -------- |
| X         | 5669.064 |
| Y         | 68.4     |
| Camera Y    | 70.02 |
| Z         | -5325.32 |
| On Ground | 1        |