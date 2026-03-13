---
title: 0x13: Entity Action
order: 20
---

# Entity Action

| Packet ID | Direction   | Mojang Name           |
| --------- | ----------- | --------------------- |
| `0x13`    | Serverbound | `PlayerCommandPacket` |

This packet is sent by the client for performing certain actions, defined via a Bitmask.

- Bit 0 is for Crouching
- Bit 1 is for if the Entity is on fire
- Bit 2 is for if the Entity is sitting

## Serverbound

| Field     | Type    | Description                              |
| --------- | ------- | ---------------------------------------- |
| Entity ID | Integer | The ID of the entity that did the action |
| Action    | Byte    | The type of action                       |

## Example Packet

| Field     | Value                  |
| --------- | ---------------------- |
| Entity ID | `1298`                 |
| Action    | `3` (On Fire & Crouch) |
