---
title: "0x66: Click Inventory Slot"
nav_order: 103
layout: home
parent: Packets
---

# Click Inventory Slot

| Packet ID | Direction |
| --------- | --------- |
| `0x66`    | Serverbound |

This packet is sent by the client when an inventory slot is clicked. See the [inventory page](../../general/inventory) for more information.

## Serverbound

| Field     | Type | Description                                            |
| --------- | ---- | ------------------------------------------------------ |
| Window ID | Byte | The incremental ID of the window. Ranges from 0 to 99 |
| Slot | Short | The id of the clicked slot. See the [inventory page](../../general/inventory) for slot mapping. |
| Right Click | Byte | If client right-clicked |
| Action number | Short | Something to do with the transaction packet(?) |
| Shift | Byte | If client shift-clicked |
| Item Id | Short | The id of the clicked item (`-1` if empty slot) |
| Item Amount | Byte | The amount of the clicked item (only sent if id > 0) |
| Item Meta/Damage | Short | The meta/damage of the clicked item  (only sent if id > 0) |

## Example Packet

| Field | Value | 
| --- | --- |
| Window ID | `2` |
| Slot | `22` |
| Right Click | Byte | `0` |
| Action number | Short | (?) |
| Shift | Byte | `1` |
| Item Id | Short | `50` |
| Item Amount | Byte | `63` |
| Item Meta/Damage | Short | `0` |