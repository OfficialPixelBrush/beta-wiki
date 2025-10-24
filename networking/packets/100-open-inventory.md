---
title: "0x64: Open Inventory"
nav_order: 101
layout: home
parent: Packets
---

# Open Window

| Packet ID | Direction   |
| --------- | ----------- |
| `0x64`    | Clientbound |

This packet is sent by the server when an inventory/window is opened. The type of inventory can either be `0` for a chest, `1` for a crafting table, `2` for a furnace, and `3` for a dispenser.

## Clientbound

| Field     | Type    | Description                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------ |
| Window ID | Byte    | The incremental ID of the window. Ranges from 0 to 99                         |
| Type      | Byte    | The type of the inventory. See above                                          |
| Title     | String8 | The name of the window                                                        |
| Size      | Byte    | The amount of inventory slots. Must be a multiple of 9 for a chest, see below |

| Block          | Inventory Size |
| -------------- | -------------- |
| Chest          | 27             |
| Large Chest    | 54             |
| Crafting Table | 9              |
| Furnace        | 3              |
| Dispenser      | 9              |

## Example Packet

| Field | Value | 
| --- | --- |
| Window ID | 49 |
| Type | 0 |
| Title | "Chest" |
| Size | 27 |