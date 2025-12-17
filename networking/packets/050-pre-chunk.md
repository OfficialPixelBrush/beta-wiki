---
title: "0x32: Pre-Chunk"
nav_order: 51
layout: home
parent: Packets
---

# Pre-Chunk

| Packet ID | Direction   |
| --------- | ----------- |
| `0x32`    | Clientbound |

This is sent by the server to load or unload a chunk. If load is `1`, the Client readies itself to place block data there. If it's `0` the Client deletes the Chunk data.

## Clientbound

| Field | Type    | Description |
| ----- | ------- | --------------------------------------------- |
| X     | Integer | The X position of the chunk |
| Z     | Integer | The Z position of the chunk |
| Load  | Boolean | Whether the client should load or unload the chunk |

## Example Packet

| Field | Value | 
| --- | --- |
| X | `-9` |
| Z | `12` |
| Load? | `true` |