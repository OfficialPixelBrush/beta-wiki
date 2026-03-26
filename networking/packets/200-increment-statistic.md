---
title: "0xC8: Increment Statistic"
order: 201
---

# Increment Statistic

| Packet ID | Direction   | Mojang Name       | MCP Name             |
| --------- | ----------- | ----------------- | -------------------- |
| `0xC8`    | Clientbound | `AwardStatPacket` | `Packet200Statistic` |

Increment the relevant statistic.

## Clientbound

| Field        | Type    | Description                                         |
| ------------ | ------- | --------------------------------------------------- |
| Statistic ID | Integer | [The ID of the statistic](../../general/statistics) |
| Amount       | Byte    | Amount to increment the statistic                   |

## Example packet

| Field        | Value          |
| ------------ | -------------- |
| Statistic ID | `2010` (Jumps) |
| Amount       | `1`            |
