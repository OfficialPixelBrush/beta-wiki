---
title: "0x35: Block Update"
order: 54
---

# Block Update

| Packet ID | Direction   | Mojang Name        | MCP Name              |
| --------- | ----------- | ------------------ | --------------------- |
| `0x35`    | Clientbound | `TileUpdatePacket` | `Packet53BlockChange` |

This is sent by the server when a block is changed or updated in any way. If a lot of blocks are being updated, consider using the [Multi-Block Update packet](./052-multi-block-update).

## Clientbound

| Field    | Type    | Description                           |
| -------- | ------- | ------------------------------------- |
| X        | Integer | The X position of where the block is. |
| Y        | Byte    | The Y position of where the block is. |
| Z        | Integer | The Z position of where the block is. |
| Type     | Byte    | The new type of the block.            |
| Metadata | Byte    | The new metadata value of the block.  |

## Example Packet

| Field    | Value                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------- |
| X        | `32`                                                                                              |
| Y        | `76`                                                                                              |
| Z        | `-543`                                                                                            |
| Type     | `17` (<TextureSwatch texture_name="../../images/blocks/log_top.png" label="Log" />)               |
| Metadata | `1` (<TextureSwatch texture_name="../../images/blocks/spruce_log_side.png" label="Spruce Log" />) |
