---
title: "0x1F: Entity Position"
order: 32
---

# Entity Position

| Packet ID | Direction   | Mojang Name            | MCP Name                |
| --------- | ----------- | ---------------------- | ----------------------- |
| `0x1F`    | Clientbound | `MoveEntityPacket.Pos` | `Packet31RelEntityMove` |

## Clientbound

Sent to the client to set an entity's position relative to the clients previous position. Usually sent when an entity has moved less than 4 blocks. As the position data is in [entity space](../terminology#entity-space) it is quantized.

| Field     | Type    | Description                               |
| --------- | ------- | ----------------------------------------- |
| Entity ID | Integer | The ID of the entity that should be moved |
| X         | Byte    | The X position of the player (Quantized)  |
| Y         | Byte    | The Y position of the player (Quantized)  |
| Z         | Byte    | The Z position of the player (Quantized)  |

## Example Packets

### Clientbound

| Field     | Value         |
| --------- | ------------- |
| Entity ID | `1298`        |
| X         | `5` (`0.15`)  |
| Y         | `2` (`0.06`)  |
| Z         | `15` (`0.46`) |
