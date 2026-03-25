---
title: "0x08: Set Health"
order: 9
---

# Set Health

| Packet ID | Direction   | Mojang Name       | MCP Name              |
| --------: | ----------- | ----------------- | --------------------- |
|    `0x08` | Clientbound | `SetHealthPacket` | `Packet8UpdateHealth` |

This is sent to the player to increase/decrease their health.

## Clientbound

|  Field | Type  | Description                                     |
| -----: | ----- | ----------------------------------------------- |
| Health | Short | `20` for full health and `0` to kill the player |

## Example Packet

|  Field | Value |
| -----: | ----- |
| Health | `20`  |
