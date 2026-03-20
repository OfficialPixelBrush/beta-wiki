---
title: "0x66: Click Inventory Slot"
order: 103
---

# Click Inventory Slot

| Packet ID | Direction   | Mojang Name            | MCP Name               |
| --------- | ----------- | ---------------------- | ---------------------- |
| `0x66`    | Serverbound | `ContainerClickPacket` | `Packet102WindowClick` |

This packet is sent by the client when an inventory slot is clicked. See the [inventory page](../../general/inventory) for more information.

## Serverbound

|         Field | Type    | Description                                                                                     |
| ------------: | ------- | ----------------------------------------------------------------------------------------------- |
|     Window ID | Byte    | The incremental ID of the window. Ranges from 0 to 99                                           |
|          Slot | Short   | The ID of the clicked slot. See the [inventory page](../../general/inventory) for slot mapping. |
|   Right Click | Boolean | If client right-clicked                                                                         |
| Action number | Short   | The unique ID for this action [(See transaction packet)](./106-inventory-transaction)           |
|         Shift | Boolean | If client shift-clicked                                                                         |
|       Item ID | Short   | The ID of the clicked item (`-1` if empty slot)                                                 |
|   Item Amount | Byte    | The quantity of the clicked item (only sent if ID > 0)                                          |
| Item Metadata | Short   | The metadata of the clicked item (only sent if ID > 0)                                          |

## Example Packet

|            Field | Value |                                                                    |
| ---------------: | ----- | ------------------------------------------------------------------ |
|        Window ID | `2`   |                                                                    |
|             Slot | `22`  |                                                                    |
|      Right Click | Byte  | `0`                                                                |
|    Action number | Short | `1`                                                                |
|            Shift | Byte  | `1`                                                                |
|          Item ID | Short | `50` (<TextureSwatch texture_name="blocks/torch" label="Torch" />) |
|      Item Amount | Byte  | `63`                                                               |
| Item Meta/Damage | Short | `0`                                                                |
