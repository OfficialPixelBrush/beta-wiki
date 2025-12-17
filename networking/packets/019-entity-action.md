---
title: "0x13: Entity Action"
nav_order: 20
layout: home
parent: Packets
---

# Entity Action

| Packet ID | Direction   |
| --------- | ----------- |
| `0x13`    | Serverbound |

This packet is sent by the client for performing certain actions, defined via a Bitmask.
- Bit 0 is for Crouching
- Bit 1 is for if the Entity is on fire
- Bit 2 is for if the Entity is sitting

## Serverbound

| Field     | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| Entity ID | Integer | The ID of the entity that did the action |
| Action    | Integer | The type of action |

## Example Packet

| Field     | Value | 
| --------- | ----- |
| Entity ID | `1298`  |
| Action    | `3` (On Fire & Crouch) |