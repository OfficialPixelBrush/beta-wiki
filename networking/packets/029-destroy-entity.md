---
title: 0x1D: Destroy Entity
order: 30
---

# Destroy Entity

| Packet ID | Direction   | Mojang Name          |
| --------- | ----------- | -------------------- |
| `0x1D`    | Clientbound | `RemoveEntityPacket` |

## Clientbound

Sent to the client when an entity should be destroyed on the client, such as a mob despawning or a player disconnecting.

| Field     | Type    | Description                                   |
| --------- | ------- | --------------------------------------------- |
| Entity ID | Integer | The ID of the entity that should be destroyed |

## Example Packets

### Clientbound

| Field     | Value  |
| --------- | ------ |
| Entity ID | `1298` |
