---
title: "0x11: Use Bed"
nav_order: 18
layout: home
parent: Packets
---

# Use Bed

| Packet ID | Direction |
| --------- | --------- |
| `0x11`    | Clientbound |

## Clientbound

This packet is sent when there are at least 2 more more players on a server, and at least one player uses the bed.

When the Entity ID of the client and the Packet are the same, the player is put into sleeping mode and displays the "Leave Bed" UI.

If the Entity ID is that of another player, the relevant entity will lay down in the bed.

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| Entity ID | Integer | The ID of the entity that did the action |
| Unsued | Byte | Always `0` |
| X      | Integer | The X position of beds headboard |
| Y      | Byte | The Y position of beds headboard |
| Z      | Integer | The Z position of beds headboard |

## Example Packet

### Clientbound

| Field     | Value    |
| --------- | -------- |
| Entity ID | `1` |
| Unused | `0` |
| X | `53` |
| Y | `75` |
| Z | `-54` |