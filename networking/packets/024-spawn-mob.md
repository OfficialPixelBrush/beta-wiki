---
title: "0x18: Spawn Mob"
order: 25
---

# Spawn Mob

| Packet ID | Direction   | Mojang Name    | MCP Name           |
| --------- | ----------- | -------------- | ------------------ |
| `0x18`    | Clientbound | `AddMobPacket` | `Packet24MobSpawn` |

Sent to the client when a mob entity should be spawned. The position and rotation are in [entity space](../terminology#entity-space).

## Clientbound

| Field     | Type    | Description                                      |
| --------- | ------- | ------------------------------------------------ |
| Entity ID | Integer | The ID of the entity that will refer to this mob |
| Mob Type  | Byte    | [The type of the mob](../../entities/mobs)       |
| X         | Integer | The X position of the item entity (Quantized)    |
| Y         | Integer | The Y position of the item entity (Quantized)    |
| Z         | Integer | The Z position of the item entity (Quantized)    |
| Yaw       | Byte    | Rotation on the X Axis (Quantized)               |
| Pitch     | Byte    | Rotation on the Y Axis (Quantized)               |
| Metadata  | -       | [Additional entity metadata](../entity-metadata) |

## Example Packet

| Field     | Value               |
| --------- | ------------------- |
| Entity ID | `1298`              |
| Mob Type  | `90`                |
| X         | `5669` (`177.15`)   |
| Y         | `2176` (`68.0`)     |
| Z         | `-5325` (`-166.40`) |
| Yaw       | `16` (`22.58`)      |
| Pitch     | `9` (`12.70`)       |
| Metadata  | `0x00 0x01 0x7F`    |
