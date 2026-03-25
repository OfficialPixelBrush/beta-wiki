---
title: "0x47: Lightning Bolt"
order: 72
---

# Lightning Bolt

| Packet ID | Direction   | Mojang Name             | MCP Name          |
| --------- | ----------- | ----------------------- | ----------------- |
| `0x47`    | Clientbound | `AddGlobalEntityPacket` | `Packet71Weather` |

Spawns a lightning bolt at the specified position.

## Clientbound

| Field       | Type    | Description                                |
| ----------- | ------- | ------------------------------------------ |
| Entity ID   | Integer | The ID of the lightning bolt               |
| Entity Type | Byte    | `0x01` for lightning                       |
| X           | Integer | The X block position of the lightning bolt |
| Y           | Integer | The Y block position of the lightning bolt |
| Z           | Integer | The Z block position of the lightning bolt |

## Example Packet

| Field       | Value |
| ----------- | ----- |
| Entity ID   | `2`   |
| Entity Type | `1`   |
| X           | `0`   |
| Y           | `76`  |
| Z           | `5`   |
