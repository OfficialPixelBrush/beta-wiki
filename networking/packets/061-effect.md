---
title: "0x3D: Effect"
nav_order: 62
layout: home
parent: Packets
---

# Effect

| Packet ID | Direction   |
| --------- | ----------- |
| `0x3D`    | Clientbound |

This is sent by the server when it expects a client to play a sound effect or spawn a particle.

## Clientbound

| Field     | Type    | Description                                                        |
| --------- | ------- | ------------------------------------------------------------------ |
| Effect ID | Integer | The ID of the effect to play. See [Effects](../effects) |
| X         | Integer | The X position of where the effect is played.                      |
| Y         | Byte    | The Y position of where the effect is played.                      |
| Z         | Integer | The Z position of where the effect is played.                      |
| Data      | Integer | Additional data for the effect.                                    |

## Example Packet

| Field     | Value |
| --------- | ----- | 
| Effect ID | `1005` (MUSIC_DISC)  |
| X         | `105`   |
| Y         | `72`    |
| Z         | `649`   |
| Data      | `2257` (cat) |
