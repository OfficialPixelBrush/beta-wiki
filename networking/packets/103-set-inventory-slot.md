---
title: "0x67: Set Inventory Slot"
nav_order: 104
layout: home
parent: Packets
---

# Set Inventory Slot

| Packet ID | Direction |
| --------- | --------- |
| `0x67`    | Clientbound |

This packet is sent by the client when an inventory slot is updated. See the [inventory page](../../general/inventory) for more information.

## Clientbound

| Field     | Type | Description                                            |
| --------- | ---- | ------------------------------------------------------ |
| Window ID | Byte | The incremental ID of the window. Ranges from 0 to 99 |
| Slot | Short | The id of the updated slot. See the [inventory page](../../general/inventory) for slot mapping. |
| Item Id | Short | The id of the new item (`-1` if empty slot) |
| Item Amount | Byte | The amount of the new item (only sent if id > 0) |
| Item Meta/Damage | Short | The meta/damage of the new item  (only sent if id > 0) |

If both the window id and slot id are `-1`, then the item that's currently held by the mouse is affected.

## Example Packet

| Field | Value | 
| --- | --- |
| Window ID | `2` |
| Slot | `22` |
| Item Id | Short | `50` (Torch) |
| Item Amount | Byte | `63` |
| Item Meta/Damage | Short | `0` |