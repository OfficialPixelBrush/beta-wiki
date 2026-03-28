---
title: "0x69: Container Data"
order: 106
---

# Container Data

| Packet ID | Direction   | Mojang Name              | MCP Name                     |
| --------- | ----------- | ------------------------ | ---------------------------- |
| `0x69`    | Clientbound | `ContainerSetDataPacket` | `Packet105UpdateProgressbar` |

This is sent by the server to update the furnace GUI's progress bars.

## Clientbound

| Field     | Type                                                | Description                                           |
| --------- | --------------------------------------------------- | ----------------------------------------------------- |
| Window ID | Byte                                                | The incremental ID of the window. Ranges from 0 to 99 |
| Type      | Short [(Container Data Type)](#container-data-type) | The type of data.                                     |
| Value     | Short                                               | The value of the data.                                |

## Type

| ID  | Name              | Range                  | Description                                                               |
| --- | ----------------- | ---------------------- | ------------------------------------------------------------------------- |
| `0` | Smelting Progress | `0` to `200`           | The progress of the current item being smelted.                           |
| `1` | Fuel Remaining    | `0` to (fuel duration) | A higher value means more fuel remaining.                                 |
| `2` | Fuel Duration     | `0` to `20000`         | The burning time of the current fuel item (defaults to `200` if not sent) |

## Fuel

| Name                  | Duration |
| --------------------- | -------- |
| Planks                | `300`    |
| Log                   | `300`    |
| Note Block            | `300`    |
| Chest                 | `300`    |
| Locked Chest          | `300`    |
| Crafting Table        | `300`    |
| Bookshelf             | `300`    |
| Jukebox               | `300`    |
| Wooden Door           | `300`    |
| Wooden Pressure Plate | `300`    |
| Trapdoor              | `300`    |
| Fence                 | `300`    |
| Sign                  | `300`    |
| Stick                 | `100`    |
| Sapling               | `100`    |
| Coal                  | `1600`   |
| Lava Bucket           | `20000`  |

Any block or item not mentioned above cannot be placed into the fuel slot.

## Example Packet

| Field     | Value |
| --------- | ----- |
| Window ID | `49`  |
| Type      | `0`   |
| Value     | `50`  |