---
title: "0x6A: Inventory Transaction"
nav_order: 107
layout: home
parent: Packets
---

# Inventory Transaction

| Packet ID | Direction   |
| --------- | ----------- |
| `0x6A`    | Both |

This packet is sent to indicate if an inventory transaction was accepted.

## Both

| Field | Type    | Description |
| ----- | ------- | --- |
| Window | Byte | The window the inventory belongs to |
| Action number | Short | The unique ID for this action |
| Accepted | Boolean | If the action was accepted |

## Example packet

| Field | Value | 
| --- | --- |
| Window | `2` |
| Action number | `1` |
| Accepted | `1` |