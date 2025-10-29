---
title: "0x0F: Place"
nav_order: 16
layout: home
parent: Packets
---

# Place

| Packet ID | Direction |
| --------- | --------- |
| `0x0F`    | Serverbound |

## Serverbound
Sent to the server when the player attempts to place a block or item

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| X         | Integer | The X position of the block                      |
| Y         | Byte | The Y position of the block                      |
| Z         | Integer | The Z position of the block                      |
| Face | Byte | The face of the block that's being placed against |
| Block/Item ID | Short | The block or item to be placed |
| (Amount) | Byte | The amount of the item in the players hand |
| (Damage) | Short | The Metadata of the item |

The face can be one of six values, representing the face the block is placed on.

| Value | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| Face | -Y | +Y | -Z | +Z | -X | +X |

## Example Packet

### Serverbound

| Field     | Value    |
| --------- | -------- |
| X | -6231 |
| Y | 53 |
| Z | 563 |
| Face | 3 |
| Block/Item ID | 3 (Dirt) |
| (Amount) | 64 |
| (Damage) | 0 |