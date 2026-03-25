---
title: "0x20: Entity Rotation"
order: 33
---

# Entity Rotation

| Packet ID | Direction   | Mojang Name            | MCP Name             |
| --------- | ----------- | ---------------------- | -------------------- |
| `0x20`    | Clientbound | `MoveEntityPacket.Rot` | `Packet32EntityLook` |

## Clientbound

Sent to the client to set an entity's view angles. As the rotation data is in [entity space](../terminology#entity-space) it is quantized.

| Field     | Type    | Description                                            |
| --------- | ------- | ------------------------------------------------------ |
| Entity ID | Integer | The ID of the entity that should have its rotation set |
| Yaw       | Byte    | Rotation on the X Axis (Quantized)                     |
| Pitch     | Byte    | Rotation on the Y Axis (Quantized)                     |

## Example Packets

### Clientbound

| Field     | Value          |
| --------- | -------------- |
| Entity ID | `1298`         |
| Yaw       | `16` (`22.58`) |
| Pitch     | `9` (`12.70`)  |
