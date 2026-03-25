---
title: "0x04: Set Time"
order: 5
---

# Set Time

| Packet ID | Direction   | Mojang Name     | MCP Name            |
| --------: | ----------- | --------------- | ------------------- |
| `0x04`    | Clientbound | `SetTimePacket` | `Packet4UpdateTime` |

Minecraft's time is measured in ticks, where there should be 20 ticks per second, with 24,000 ticks per day in total. `0` is sunrise, `6000` is noon, `12000` is sunset, and `18000` is midnight. <sup>[src](<https://minecraft.wiki/w/Java_Edition_protocol/Packets?oldid=2769730#Time_Update_(0x04)>)</sup>

## Clientbound

| Field | Type | Description                             |
| ----: | ---- | --------------------------------------- |
| Time  | Long | The total accumulated time of the world |

## Example Packet

| Field | Value                           |
| ----: | ------------------------------- |
| Time  | `102000` (The morning of Day 4) |
