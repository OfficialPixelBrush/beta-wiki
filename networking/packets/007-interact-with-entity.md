---
title: "0x07: Interact with Entity"
order: 8
---

# Interact with Entity

| Packet ID | Direction   | Mojang Name      | MCP Name           |
| --------- | ----------- | ---------------- | ------------------ |
| `0x07`    | Serverbound | `InteractPacket` | `Packet7UseEntity` |

This is sent by the client when a player attacks or interacts with an entity. The server should only accept this packet if the entity is not obstructed and is within 3 blocks of the player.

## Serverbound

| Field     | Type    | Description                                    |
| --------- | ------- | ---------------------------------------------- |
| Player ID | Integer | The ID of the player who clicked the entity    |
| Entity ID | Integer | The ID of the entity that was clicked          |
| Attack?   | Boolean | Whether the player is attacking or interacting |

## Example Packet

| Field     | Value  |
| --------- | ------ |
| Player ID | `1298` |
| Entity ID | `1805` |
| Attack?   | `true` |
