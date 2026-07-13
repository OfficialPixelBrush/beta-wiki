---
title: "0x17: Spawn Object"
order: 24
---

# Spawn Object

| Packet ID | Direction   | Mojang Name       | MCP Name               |
| --------- | ----------- | ----------------- | ---------------------- |
| `0x17`    | Clientbound | `AddEntityPacket` | `Packet23VehicleSpawn` |

Sent to the client when an [object entity](../../entities/objects) should be spawned. The position is in [entity space](../terminology#entity-space). See the [Entity Velocity packet](./028-entity-velocity) for more info on how velocity is sent.

## Clientbound

| Field           | Type    | Description                                                               |
| --------------- | ------- | ------------------------------------------------------------------------- |
| Entity Id       | Integer | The ID of the entity that will refer to this object                       |
| Object Type     | Byte    | [The type of the object](../../entities/objects)                          |
| X               | Integer | The X position of the item entity (Quantized)                             |
| Y               | Integer | The Y position of the item entity (Quantized)                             |
| Z               | Integer | The Z position of the item entity (Quantized)                             |
| Owner Entity Id | Integer | Entity Id of object owner (Defaults is `0`)                               |
| Velocity X      | Short   | The initial velocity in the X direction (if **Owner Entity Id** is > `0`) |
| Velocity Y      | Short   | The initial velocity in the Y direction (if **Owner Entity Id** is > `0`) |
| Velocity Z      | Short   | The initial velocity in the Z direction (if **Owner Entity Id** is > `0`) |

**Owner Entity Id** is always set to be the Entity Id of the entity that spawned/owns the object. This is only used by Arrows and Fireballs. The value defaults to `0` for all other objects.

## Example Packet

| Field           | Value               |
| --------------- | ------------------- |
| Entity Id       | `1298`              |
| Object Type     | `1` (Boat)          |
| X               | `5669` (`177.15`)   |
| Y               | `2176` (`68.0`)     |
| Z               | `-5325` (`-166.40`) |
| Owner Entity Id | `0`                 |
