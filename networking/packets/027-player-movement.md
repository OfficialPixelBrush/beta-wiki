---
title: "0x1B: Player Movement (Unused)"
order: 28
---

# Player Movement (Unused)

| Packet ID | Direction   | Mojang Name         | MCP Name           |
| --------- | ----------- | ------------------- | ------------------ |
| `0x1B`    | Clientbound | `PlayerInputPacket` | `Packet27Position` |

This packet could be used for setting the movement values and states of whichever player receives the packet.

> [!NOTE]
> This packet is completely unused in the Notchian Server, so there's no example of what it _should_ look or act like but the Client does seem to handle it.

## Clientbound

| Field            | Type    | Description                |
| ---------------- | ------- | -------------------------- |
| Strafe Direction | Float   | Strafing movement          |
| Forward Direction | Float   | Forward/Backward movement   |
| Pitch            | Float   | Pitch rotation             |
| Yaw              | Float   | Yaw rotation               |
| Jumping          | Boolean | If the player should jump  |
| Sneaking         | Boolean | If the player should sneak |

## Example Packet

| Field            | Value |
| ---------------- | ----- |
| Strafe Direction |       |
| Forward Direction |       |
| Pitch            |       |
| Yaw              |       |
| Jumping          |       |
| Sneaking         |       |
