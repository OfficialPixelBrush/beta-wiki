---
title: "0x12: Animation"
nav_order: 19
layout: home
parent: Packets
---

# Animation

| Packet ID | Direction |
| --------- | --------- |
| `0x12`    | Both      |

This packet is sent by both the client and the server for swinging your arm (`1`) and leaving a bed (`3`), which is serverbound only. The client instead uses the [Entity Action](019-entity-action) packet for when it leaves a bed.

## Both

| Field     | Type    | Description                                 |
| --------- | ------- | ------------------------------------------- |
| Player ID | Integer | The ID of the player who did the animation |
| Animation | Byte | The type of animation. Can be `1` or `3`   |

## Example Packet

| Field | Value | 
| --- | --- |
| Player ID | 1298 |
| Animation | 1 |