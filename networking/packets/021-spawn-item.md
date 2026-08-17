---
title: "0x15: Spawn Item"
order: 22
---

# Spawn Item

| Packet ID | Direction   | Mojang Name           | MCP Name              |
| --------- | ----------- | --------------------- | --------------------- |
| `0x15`    | Clientbound | `AddItemEntityPacket` | `Packet21PickupSpawn` |

Sent to the client when an item entity should be spawned. The position and rotation are in [entity space](../terminology#entity-space).

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
| Pitch         | Byte    | Quantized Velocity in the X axis                  |
| Yaw           | Byte    | Quantized Velocity in the Y axis                  |
| Roll          | Byte    | Quantized Velocity in the Z axis                  |

> [!NOTE]
> This is not a typo. Notch indeed used the Pitch, Yaw and Roll fields of the SpawnItem packet to carry the initial velocity. For quantization, multiply the velocity by 128, cast to int8 and then cast to byte.

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
| Yaw           | `16` (`22.58`)                                                             |
| Pitch         | `9` (`12.70`)                                                              |
| Roll          | `0` (`0.0`)                                                                |
