---
title: "0x35: Block Change"
nav_order: 53
layout: home
parent: Packets
---

# Block Change

| Packet ID | Direction   |
| --------- | ----------- |
| `0x35`    | Clientbound |

This is sent by the server when a block is changed in any way.

## Clientbound

| Field     | Type    | Description                                                        |
| --------- | ------- | ------------------------------------------------------------------ |
| X         | Integer | The X position of where the block is.                      |
| Y         | Byte    | The Y position of where the block is.                      |
| Z         | Integer | The Z position of where the block is.                      |
| Type      | Byte | The new type of the block.                                    |
| Meta      | Byte | The new metadata/damage value of the block. |

## Example Packet

| Field     | Value |
| --------- | ----- | 
| X         | 32   |
| Y         | 76    |
| Z         | -543   |
| Type      | 17 |
| Meta      | 1 |
