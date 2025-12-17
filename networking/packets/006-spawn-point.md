---
title: "0x06: Spawn Point"
nav_order: 7
layout: home
parent: Packets
---

# Spawn Point

| Packet ID | Direction   |
| --------- | ----------- |
| `0x06`    | Clientbound |

This is sent after the player has finished logging in to spawn them into the world. It can also be sent at any time to update where the player's compass points at.

## Clientbound

| Field | Type    | Description                        |
| ----- | ------- | ---------------------------------- |
| X     | Integer | The X position of the spawn point |
| Y     | Integer | The Y position of the spawn point |
| Z     | Integer | The Z position of the spawn point |

## Example Packet

| Field | Value | 
| --- | --- |
| X | `117` |
| Y | `70` |
| Z | `-46` |