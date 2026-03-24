---
title: "0x67: Set Inventory Slot"
order: 104
---

# Set Inventory Slot

| Packet ID | Direction   | Mojang Name              | MCP Name           |
| --------: | ----------- | ------------------------ | ------------------ |
|    `0x67` | Clientbound | `ContainerSetSlotPacket` | `Packet103SetSlot` |

This packet is sent by the client when an inventory slot is updated. See the [inventory page](../../general/inventory) for more information.

## Clientbound

|         Field | Type  | Description                                                                                     |
| ------------: | ----- | ----------------------------------------------------------------------------------------------- |
|     Window ID | Byte  | The incremental ID of the window. Ranges from 0 to 99                                           |
|          Slot | Short | The ID of the updated slot. See the [inventory page](../../general/inventory) for slot mapping. |
|       Item ID | Short | The ID of the new item (`-1` if empty slot)                                                     |
|   Item Amount | Byte  | The amount of the new item (only sent if ID > 0)                                                |
| Item Metadata | Short | The meta of the new item (only sent if ID > 0)                                                  |

If both the window ID and slot ID are `-1`, then the item that's currently held by the mouse is affected.

## Example Packet

|            Field | Value |                                                                    |
| ---------------: | ----- | ------------------------------------------------------------------ |
|        Window ID | `2`   |                                                                    |
|             Slot | `22`  |                                                                    |
|          Item ID | Short | `50` (<TextureSwatch texture_name="blocks/torch" label="Torch" />) |
|      Item Amount | Byte  | `63`                                                               |
| Item Meta/Damage | Short | `0`                                                                |
