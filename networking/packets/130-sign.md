---
title: "0x82: Sign"
nav_order: 131
layout: home
parent: Packets
---

# Sign

| Packet ID | Direction   |
| --------- | ----------- |
| `0x82`    | Both |

## Both
Sent by the client when "Done" is clicked in the sign writing dialog.

Sent by the server when a sign is placed or loaded in.

| Field | Type     | Description                 |
| ----- | -------- | --------------------------- |
| X     | Integer  | The X position of the sign  |
| Y     | Short    | The Y position of the sign  |
| Z     | Integer  | The Z position of the sign  |
| Line1 | String16 | The first line on the sign  |
| Line2 | String16 | The second line on the sign |
| Line3 | String16 | The third line on the sign  |
| Line4 | String16 | The fourth line on the sign |

## Example Packet

| Field | Value | 
| --- | --- |
| X | 70 |
| Y | 67 |
| Z | -6015 |
| Line1 | "Hey" |
| Line2 | "" |
| Line3 | "" |
| Line 4 | "" |