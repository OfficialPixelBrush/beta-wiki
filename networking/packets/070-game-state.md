---
title: "0x46: Game State"
nav_order: 71
layout: home
parent: Packets
---

# Game State

| Packet ID | Direction   |
| --------- | ----------- |
| `0x46`    | Clientbound |

This is sent by the server to control precipitation or to notify that their bed is missing or obstructed. The game state is `0` for an invalid bed, `1` to start raining, and `2` to stop raining.

## Clientbound

| Field | Type | Description               |
| ----- | ---- | ------------------------- |
| Type  | Byte | The ID of the game state. |

## Example Packet

| Field | Value | 
| --- | --- |
| Type | `1` (Start Raining) |