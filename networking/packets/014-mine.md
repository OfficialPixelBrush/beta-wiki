---
title: "0x0E: Mining"
nav_order: 15
layout: home
parent: Packets
---

# Mining

| Packet ID | Direction |
| --------- | --------- |
| `0x0E`    | Serverbound |

## Serverbound
Sent to the server when the player attempts to mine a block

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| Status | Byte | The action the player is taking against the block |
| X         | Integer | The X position of the block                      |
| Y         | Byte | The Y position of the block                      |
| Z         | Integer | The Z position of the block                      |
| Face | Byte | The face of the block that's being mined |

The status can represent one of three values.

| Status | Value |
| --- | --- |
| Started digging | `0` |
| Finished digging | `2` |
| Drop item | `4` |

The face can be one of six values, representing the face being hit.

| Value | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| Face | -Y | +Y | -Z | +Z | -X | +X |

## Example Packet

### Serverbound

| Field     | Value    |
| --------- | -------- |
| Status | `0` |
| X | -6231 |
| Y | 53 |
| Z | 563 |
| Face | 3 |