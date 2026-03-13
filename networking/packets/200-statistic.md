---
title: 0xC8: Statistic
order: 201
---

# Statistic

| Packet ID | Direction   | Mojang Name |
| --------- | ----------- | ----------- |
| `0xC8`    | Clientbound | Unknown     |

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
