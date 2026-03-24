---
title: "0x27: Mount Entity"
order: 40
---

# Mount Entity

| Packet ID | Direction   | Mojang Name       | MCP Name               |
| --------: | ----------- | ----------------- | ---------------------- |
|    `0x27` | Clientbound | `SetRidingPacket` | `Packet39AttachEntity` |

## Clientbound

Sent to the client to attach an entity to another. Used for riding.

|              Field | Type    | Description                                |
| -----------------: | ------- | ------------------------------------------ |
|  Entity ID (Rider) | Integer | The ID of the entity that should ride      |
| Entity ID (Ridden) | Integer | The ID of the entity that should be ridden |

## Example Packets

### Clientbound

|              Field | Value |
| -----------------: | ----- |
|  Entity ID (Rider) | `2`   |
| Entity ID (Ridden) | `654` |
