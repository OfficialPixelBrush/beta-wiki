---
title: "0x34: Set Multiple Blocks"
nav_order: 53
layout: home
parent: Packets
---

# Set Multiple Blocks

| Packet ID | Direction   |
| --------- | ----------- |
| `0x34`    | Clientbound |

This is used to update multiple blocks in one go.

The format for the coordinates is slightly obtuse but boils down to using one 16-Bit Short to store the 4-Bit X, 4-Bit Z and 8-Bit Y value of the block coordinate within the chunk.

| Bit 15 - 12 | Bit 11 - 8 | Bit 7 -  0 |
| --- | --- | --- |
| X | Z | Y |

## Clientbound

| Field | Type    | Description |
| ----- | ------- | --- |
| X     | Integer | The X position of the chunk |
| Z     | Integer | The Z position of the chunk |
| Number of Blocks  | Short | The number of changed blocks |
| Block Coordinates | Short Array | Array of Block coordinates in the format described above |
| Blocktypes | Byte Array | Array of Block types those coordinates change to |
| Metadata | Byte Array | Array of Block metadata those coordinates change to |

## Example Packet

| Field | Value | 
| --- | --- |
| X | `-9` |
| Z | `12` |
| Number of Blocks | `1` |
| Block Coordinates | `0101 0111 01111111`\* (x: 5, z: 7, y: 127) |
| Blocktypes | `1` (Stone) |
| Metadata | `0` |

<sub>\* Binary value is spaced out to be more readable.</sub>