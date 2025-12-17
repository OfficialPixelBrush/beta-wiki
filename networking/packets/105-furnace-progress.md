---
title: "0x69: Furnace Progress"
nav_order: 106
layout: home
parent: Packets
---

# Furnace Progress

| Packet ID | Direction   |
| --------- | ----------- |
| `0x69`    | Clientbound |

This is sent by the server to update the progress of fuel burning or progress of an item being smelted. The smelting bar ranges from `0` to `200`, while the max value of the fuel bar depends on the type of fuel used (`300` for any wood, `100` for sticks or a sapling, `1600` for coal, and `20000` for a lava bucket.).

## Clientbound

| Field     | Type  | Description                                                            |
| --------- | ----- | ---------------------------------------------------------------------- |
| Window ID | Byte  | The incremental ID of the window. Ranges from 0 to 99                 |
| Bar       | Short | `0` for the smelting bar, `1` for the fuel bar, `2` for max burn time |
| Value     | Short | The progress of the bar                                               |

## Example Packet

| Field | Value | 
| --- | --- |
| Window ID | `49` |
| Bar | `0` |
| Value | `0` |