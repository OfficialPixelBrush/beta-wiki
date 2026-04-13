---
title: "0x12: Animation"
order: 19
---

# Animation

| Packet ID | Direction | Mojang Name     | MCP Name            |
| --------- | --------- | --------------- | ------------------- |
| `0x12`    | Both      | `AnimatePacket` | `Packet18Animation` |

This packet is sent by both the client and the server for swinging your arm (`1`) and leaving a bed (`3`), which is clientbound only. The client sends the [Player Action](./019-player-action) packet for when it wishes to leave a bed (aka clicking the "Leave Bed" button).

| ID  | Animation            |
| --- | -------------------- |
| `0` | -                    |
| `1` | Swing Arm            |
| `2` | Hurt                 |
| `3` | Wake Player from Bed |
| `4` | Unused               |

## Both

| Field     | Type    | Description                             |
| --------- | ------- | --------------------------------------- |
| Player ID | Integer | The ID of the player who did the action |
| Animation | Byte    | The type of action. Can be `1` or `3`   |

## Example Packet

| Field     | Value           |
| --------- | --------------- |
| Player ID | `1298`          |
| Animation | `1` (Swing Arm) |
