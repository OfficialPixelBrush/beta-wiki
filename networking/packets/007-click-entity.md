---
title: "0x07: Click Entity"
nav_order: 8
layout: home
parent: Packets
---

# Click Entity

| Packet ID | Direction   |
| --------- | ----------- |
| `0x07`    | Serverbound |

This is sent by the player when an entity is left/right-clicked. The server should only accept this packet if the entity is not obstructed and is within 3 blocks of the player.

## Clientbound

| Field       | Type    | Description                                       |
| ----------- | ------- | ------------------------------------------------- |
| Player ID   | Integer | The ID of the player who clicked the entity      |
| Entity ID   | Integer | The ID of the entity that was clicked            |
| Left-Click? | Boolean | Whether the player left-clicked or right-clicked |

## Example Packet

| Field | Value | 
| --- | --- |
| Player ID | `1298` |
| Entity ID | `1805` |
| Left-Click? | `true` |
