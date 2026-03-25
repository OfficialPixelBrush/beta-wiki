---
title: "0x32: Set Chunk Visibility"
order: 51
---

# Set Chunk Visibility

| Packet ID | Direction   | Mojang Name             | MCP Name           |
| --------- | ----------- | ----------------------- | ------------------ |
| `0x32`    | Clientbound | `ChunkVisibilityPacket` | `Packet50PreChunk` |

This is sent by the server to load or unload a chunk. If load is `1`, the client readies itself to place block data there. If it's `0` the client deletes the Chunk data.

## Clientbound

| Field | Type    | Description                                        |
| ----- | ------- | -------------------------------------------------- |
| X     | Integer | The X position of the chunk                        |
| Z     | Integer | The Z position of the chunk                        |
| Load  | Boolean | Whether the client should load or unload the chunk |

## Example Packet

| Field | Value  |
| ----- | ------ |
| X     | `-9`   |
| Z     | `12`   |
| Load? | `true` |
