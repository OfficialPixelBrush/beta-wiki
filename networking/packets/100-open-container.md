---
title: "0x64: Open Container"
order: 101
---

# Open Container

| Packet ID | Direction   | Mojang Name           | MCP Name              |
| --------- | ----------- | --------------------- | --------------------- |
| `0x64`    | Clientbound | `ContainerOpenPacket` | `Packet100OpenWindow` |

This packet is sent by the server when a block with an inventory is opened.

## Clientbound

| Field     | Type                 | Description                                                            |
| --------- | -------------------- | ---------------------------------------------------------------------- |
| Window ID | Byte                 | The incremental ID of the window. Ranges from 0 to 99                  |
| Type      | Byte [(Type)](#type) | The type of the inventory.                                             |
| Title     | String8              | The name of the window. Ignored for anything other than chests.        |
| Size      | Byte                 | The amount of inventory slots. Must be positive or the client crashes. |

## Type

| ID  | Name           | Size                                                                                                                                   |
| --- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `0` | Chest          | `27` for a normal chest, `54` for a large chest. Other sizes are rounded down to a multiple of `9` and work fine, but appear glitched. |
| `1` | Crafting Table | `9` (other sizes are ignored)                                                                                                          |
| `2` | Furnace        | `3` (other sizes are ignored)                                                                                                          |
| `3` | Dispenser      | `9` (other sizes are ignored)                                                                                                          |

## Example Packet

| Field     | Value   |
| --------- | ------- |
| Window ID | `49`    |
| Type      | `0`     |
| Title     | `Chest` |
| Size      | `27`    |
