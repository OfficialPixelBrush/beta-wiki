---
title: "0xC8: Statistic"
nav_order: 201
layout: home
parent: Packets
---

# Statistic

| Packet ID | Direction |
| --------- | --------- |
| `0xC8`    | Clientbound      |

Increment the relevant statistic.

## Clientbound

| Field | Type    | Description |
| ----- | ------- | --- |
| Statistic ID | Integer | [The ID of the statistic](../../general/statistics) |
| Amount | Byte | Amount to increment the statistic |

## Example packet

| Field | Value | 
| --- | --- |
| Entity ID | 2 |