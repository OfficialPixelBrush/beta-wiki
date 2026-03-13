---
title: "0x27: Add Passenger"
order: 40
---

# Add Passenger

| Packet ID | Direction   | Mojang Name       | MCP Name               |
| --------- | ----------- | ----------------- | ---------------------- |
| `0x27`    | Clientbound | `SetRidingPacket` | `Packet39AttachEntity` |

## Clientbound

Sent to the client to attach an entity to another. Used for riding.

| Field                 | Type    | Description                                |
| --------------------- | ------- | ------------------------------------------ |
| Entity ID (passenger) | Integer | The ID of the entity that should ride      |
| Entity ID (vehicle)   | Integer | The ID of the entity that should be ridden |

## Example Packets

### Clientbound

| Field                 | Value |
| --------------------- | ----- |
| Entity ID (passenger) | `2`   |
| Entity ID (vehicle)   | `654` |
