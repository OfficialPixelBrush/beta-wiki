---
title: "0x15: Spawn Item"
order: 22
---

# Spawn Item

| Packet ID | Direction   | Mojang Name           | MCP Name              |
| --------:
 | ----------- | --------------------- | --------------------- |
| `0x15`    | Clientbound | `AddItemEntityPacket` | `Packet21PickupSpawn` |

Sent to the client when an item entity should be spawned. The position is in [block space](../terminology#block-space), while the angles are quantized.

## Clientbound

|         Field | Type    | Description                                       |
| ------------: | :------ | ------------------------------------------------- |
|     Entity ID | Integer | The ID of the entity that will refer to this item |
|       Item ID | Short   | [The ID of the item](../../general/items)         |
|   Item Amount | Byte    | The quantity of items                             |
| Item Metadata | Short   | The metadata value                                |
|             X | Integer | The X block position of the item                  |
|             Y | Integer | The Y block position of the item                  |
|             Z | Integer | The Z block position of the item                  |
|           Yaw | Byte    | Rotation on the X Axis (Quantized)                |
|         Pitch | Byte    | Rotation on the Y Axis (Quantized)                |
|          Roll | Byte    | Rotation on the Z Axis (Quantized)                |

## Example Packet

|         Field | Value                                                                      |
| ------------: | :------------------------------------------------------------------------- |
|     Entity ID | 1298                                                                       |
|       Item ID | `17` (<TextureSwatch texture_name="blocks/log_top" label="Log" />)         |
| Item Quantity | `1`                                                                        |
| Item Metadata | `0` (<TextureSwatch texture_name="blocks/oak_log_side" label="Oak Log" />) |
|             X | `5669`                                                                     |
|             Y | `68`                                                                       |
|             Z | `-5325`                                                                    |
|           Yaw | `16` (`22.58`)                                                             |
|         Pitch | `9` (`12.70`)                                                              |
|          Roll | `0` (`0.0`)                                                                |
