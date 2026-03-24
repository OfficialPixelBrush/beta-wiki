---
title: "0x17: Spawn Object Entity"
order: 24
---

# Spawn Object Entity

| Packet ID | Direction   | Mojang Name       | MCP Name               |
| --------: | ----------- | ----------------- | ---------------------- |
|    `0x17` | Clientbound | `AddEntityPacket` | `Packet23VehicleSpawn` |

Sent to the client when an [object entity](../../entities/objects) should be spawned. The position is in [block space](../terminology#block-space).

## Clientbound

|           Field | Type    | Description                                                               |
| --------------: | ------- | ------------------------------------------------------------------------- |
|       Entity Id | Integer | The ID of the entity that will refer to this object                       |
|     Object Type | Byte    | [The type of the object](../../entities/objects)                          |
|               X | Integer | The X block position of the object                                        |
|               Y | Integer | The Y block position of the object                                        |
|               Z | Integer | The Z block position of the object                                        |
| Owner Entity Id | Integer | Entity Id of object owner (Defaults is `0`)                               |
|      Velocity X | Short   | The initial velocity in the X direction (if **Owner Entity Id** is > `0`) |
|      Velocity Y | Short   | The initial velocity in the Y direction (if **Owner Entity Id** is > `0`) |
|      Velocity Z | Short   | The initial velocity in the Z direction (if **Owner Entity Id** is > `0`) |

**Owner Entity Id** is always set to be the Entity Id of the entity that spawned/owns the object. This is only used by Arrows and Fireballs. The value defaults to `0` for all other objects.

## Example Packet

|           Field | Value      |
| --------------: | ---------- |
|       Entity Id | `1298`     |
|     Object Type | `1` (Boat) |
|               X | `5669`     |
|               Y | `68`       |
|               Z | `-5325`    |
| Owner Entity Id | `0`        |
