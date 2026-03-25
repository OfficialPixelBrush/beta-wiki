---
title: "0x13: Player Action"
order: 20
---

# Player Action

| Packet ID | Direction   | Mojang Name           | MCP Name               |
| --------- | ----------- | --------------------- | ---------------------- |
| `0x13`    | Serverbound | `PlayerCommandPacket` | `Packet19EntityAction` |

This packet is sent by the client when the player performs certain actions.

## Serverbound

| Field     | Type    | Description                              |
| --------- | ------- | ---------------------------------------- |
| Entity ID | Integer | The ID of the entity that did the action |
| Action    | Byte    | The type of action (see below)           |

### Action Values

| Value | Description    |
| ----- | -------------- |
| `1`   | Start Sneaking |
| `2`   | Stop Sneaking  |
| `3`   | Stop Sleeping  |

## Example Packet

| Field     | Value                |
| --------- | -------------------- |
| Entity ID | `1298`               |
| Action    | `1` (Start Sneaking) |
