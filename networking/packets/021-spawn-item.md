---
title: "0x15: Spawn Item"
order: 22
---

# Spawn Item

| Packet ID | Direction   | Mojang Name           | MCP Name              |
| --------- | ----------- | --------------------- | --------------------- |
| `0x15`    | Clientbound | `AddItemEntityPacket` | `Packet21PickupSpawn` |

Sent to the client when an item entity should be spawned. The position and rotation are in [entity space](../terminology#entity-space).

The sent velocity values are multiplied by `128` before being sent out. The client undoes this multiplication.

The velocity values are capped between `-1.00` (`-128/128`) and `+0.99` (`+127/128`), as they're sent as signed bytes.

## Clientbound

| Field         | Type    | Description                                       |
| ------------- | :------ | ------------------------------------------------- |
| Entity ID     | Integer | The ID of the entity that will refer to this item |
| Item ID       | Short   | [The ID of the item](../../general/items)         |
| Item Amount   | Byte    | The quantity of items                             |
| Item Metadata | Short   | The metadata value                                |
| X             | Integer | The X position of the item entity (Quantized)     |
| Y             | Integer | The Y position of the item entity (Quantized)     |
| Z             | Integer | The Z position of the item entity (Quantized)     |
| X Velocity    | Byte    | Velocity on the X axis (Quantized)                |
| Y Velocity    | Byte    | Velocity on the Y axis (Quantized)                |
| Z Velocity    | Byte    | Velocity on the Z axis (Quantized)                |

## Example Packet

| Field         | Value                                                                      |
| ------------- | :------------------------------------------------------------------------- |
| Entity ID     | 1298                                                                       |
| Item ID       | `17` (<TextureSwatch texture_name="blocks/log_top" label="Log" />)         |
| Item Quantity | `1`                                                                        |
| Item Metadata | `0` (<TextureSwatch texture_name="blocks/oak_log_side" label="Oak Log" />) |
| X             | `5669` (`177.15`)                                                          |
| Y             | `2176` (`68.0`)                                                            |
| Z             | `-5325` (`-166.40`)                                                        |
| X Velocity    | `-9` (`-0.07`)                                                             |
| Y Velocity    | `25` (`0.19`)                                                              |
| Z Velocity    | `-1` (`-0.00`)                                                             |
