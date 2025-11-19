---
title: "0x1B: Player Movement (Unused)"
nav_order: 28
layout: home
parent: Packets
---

# Player Movement (Unused)

| Packet ID | Direction   |
| --------- | ----------- |
| `0x1B`    | Clientbound |

This packet could be used for setting the movement values and states of whichever player receives the packet.

{: .note }
> This packet is completely unused in the Notchian Server, so there's no example of what it *should* look or act like but the Client does seem to handle it.

## Clientbound

| Field     | Type    | Description |
| --- | --- | --- |
| Strafe Direction | Float | Strafing movement |
| Foward Direction  | Float | Foward/Backward movement |
| Pitch      | Float | Pitch rotation |
| Yaw      | Float | Yaw rotation |
| Jumping | Boolean | If the player should jump |
| Sneaking | Boolean | If the player should sneak |

## Example Packet

| Field     | Value | 
| --- | --- |
| Strafe Direction | |
| Foward Direction  | |
| Pitch      | |
| Yaw      | |
| Jumping | |
| Sneaking | |