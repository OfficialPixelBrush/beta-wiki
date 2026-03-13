---
title: "0x09: Respawn"
order: 10
---

# Respawn

| Packet ID | Direction | Mojang Name     |
| --------- | --------- | --------------- |
| `0x09`    | Both      | `RespawnPacket` |

This is sent by the client when they press the "respawn" button after dying or when changing dimensions. The server must teleport the user to the spawn point and return a respawn packet in response.

## Both

| Field | Type | Description                                   |
| ----- | ---- | --------------------------------------------- |
| World | Byte | `0` for The Overworld and `-1` for The Nether |

## Example Packet

| Field | Value |
| ----- | ----- |
| World | `0`   |
