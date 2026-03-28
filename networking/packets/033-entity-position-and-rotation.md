---
title: "0x21: Entity Position and Rotation"
order: 34
---

# Entity Position and Rotation

| Packet ID | Direction   | Mojang Name               | MCP Name                    |
| --------- | ----------- | ------------------------- | --------------------------- |
| `0x21`    | Clientbound | `MoveEntityPacket.PosRot` | `Packet33RelEntityMoveLook` |

## Clientbound

Sent to the client to set an entity's position relative to the clients previous position. Usually sent when an entity has moved less than 4 blocks. Position and rotation data is in [entity space](../terminology#entity-space) and thus quantized. 

More specifically:

$$ \Delta p = (p_{new} - p_{old}) \cdot 32 $$

where $p_{new}$ and $p_{old}$ refer to the `X`, `Y` and `Z` positions received by [Player Position](./011-player-position.md) and [Player Position and Rotation](./013-player-position-and-rotation.md) packets. You should set $\Delta p$ in Entity Position and Rotation as well as [Entity Position](./031-entity-position.md) packets.

For `Yaw` and `Pitch`:

$$ r' = r \cdot 256 / 360 $$

Where $r$ refers to `Yaw` or `Pitch` received by [Player Rotation](./012-player-rotation.md) and [Player Position and Rotation](./013-player-position-and-rotation.md) packets. $r'$ should be set in Entity Position and Rotation as well as [Entity Rotation](./032-entity-rotation.md) packets.

| Field     | Type    | Description                               |
| --------- | ------- | ----------------------------------------- |
| Entity ID | Integer | The ID of the entity that should be moved |
| X         | Byte    | The X position of the player (Quantized)  |
| Y         | Byte    | The Y position of the player (Quantized)  |
| Z         | Byte    | The Z position of the player (Quantized)  |
| Yaw       | Byte    | Rotation on the X Axis (Quantized)        |
| Pitch     | Byte    | Rotation on the Y Axis (Quantized)        |

## Example Packets

### Clientbound

| Field     | Value          |
| --------- | -------------- |
| Entity ID | `1298`         |
| X         | `5` (`0.15`)   |
| Y         | `2` (`0.06`)   |
| Z         | `15` (`0.46`)  |
| Yaw       | `16` (`22.58`) |
| Pitch     | `9` (`12.70`)  |
