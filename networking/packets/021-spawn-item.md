---
title: "0x15: Spawn Item Entity"
nav_order: 22
layout: home
parent: Packets
---

# Spawn Item Entity

| Packet ID | Direction   |
| --------- | ----------- |
| `0x15`    | Clientbound |

Sent to the client when an item entity should be spawned. All coordinates and angles are in [entity space](../terminology#entity-space).

## Serverbound

| Field     | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| Entity ID | Integer | The ID of the entity that will refer to this item |
| Item id  | Short | The item id |
| Count  | Byte | The number of items |
| Metadata/Damage  | Short | The metadata/damage value |
| X      | Byte | The X position of the item (Quantized) |
| Y      | Byte | The Y position of the item (Quantized) |
| Z      | Byte | The Z position of the item (Quantized) |
| Yaw | Byte | Rotation on the X Axis (Quantized) |
| Pitch | Byte | Rotation on the Y Axis (Quantized) |
| Roll | Byte | Rotation on the Z Axis (Quantized) |

## Example Packet

| Field     | Value | 
| --------- | ----- |
| Entity ID | 1298  |
| Item id  | `17` Log |
| Count  | 1 |
| Metadata/Damage  | `0` |
| X      | 5669.064 |
| Y      | 68.4     |
| Z      | -5325.32 |
| Yaw       | 22.4     |
| Pitch     | 12.68    |
| Roll     | 0.0    |