---
title: "0x35: Set Block"
order: 54
---

# Set Block

| Packet ID | Direction   | Mojang Name        | MCP Name              |
| --------- | ----------- | ------------------ | --------------------- |
| `0x35`    | Clientbound | `TileUpdatePacket` | `Packet53BlockChange` |

This is sent by the server when a block is changed or updated in any way. If a lot of blocks are being updated, consider using the [Set Multiple Blocks packet](./052-set-multiple-blocks).

## Clientbound

| Field    | Type    | Description                           |
| -------- | ------- | ------------------------------------- |
| X        | Integer | The X position of where the block is. |
| Y        | Byte    | The Y position of where the block is. |
| Z        | Integer | The Z position of where the block is. |
| Type     | Byte    | The new type of the block.            |
| Metadata | Byte    | The new metadata value of the block.  |

## Example Packet

| Field    | Value                                                                            |
| -------- | -------------------------------------------------------------------------------- |
| X        | `32`                                                                             |
| Y        | `76`                                                                             |
| Z        | `-543`                                                                           |
| Type     | `17` (<TextureSwatch texture_name="blocks/log_top" label="Log" />)               |
| Metadata | `1` (<TextureSwatch texture_name="blocks/spruce_log_side" label="Spruce Log" />) |
