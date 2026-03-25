---
title: "0x1B: Player Input (unused)"
order: 28
---

# Player Input (unused)

| Packet ID | Direction   | Mojang Name         | MCP Name           |
| --------- | ----------- | ------------------- | ------------------ |
| `0x1B`    | Serverbound | `PlayerInputPacket` | `Packet27Position` |

This packet could be used for sending player input and movement states from the client to the server.

> [!WARNING]
> This packet is completely unused in the Notchian server, so there's no example of what it _should_ look or act like.

## Serverbound

| Field             | Type    | Description                |
| ----------------- | ------- | -------------------------- |
| Strafe Direction  | Float   | Strafing movement          |
| Forward Direction | Float   | Forward/Backward movement  |
| Pitch             | Float   | Pitch rotation             |
| Yaw               | Float   | Yaw rotation               |
| Jumping           | Boolean | If the player should jump  |
| Sneaking          | Boolean | If the player should sneak |

## Example Packet

| Field             | Value |
| ----------------- | ----- |
| Strafe Direction  |       |
| Forward Direction |       |
| Pitch             |       |
| Yaw               |       |
| Jumping           |       |
| Sneaking          |       |
