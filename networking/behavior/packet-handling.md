---
order: 1
description: This page describes  packet-handling behavior, aka how data is sent, received and parsed.
---

# Packet handling

This page describes packet-handling behavior, aka how data is sent, received and parsed.

Generally, unless a packet is too large, such as a poorly compressed [Chunk packet](../packets/051-chunk), one TCP Packet only contains one Minecraft Packet of data. So for a server/client that only ever interacts with a Vanilla server/client, this approach is sufficient.

However, in practice, its is fully supported for Minecraft packets to be split across multiple TCP packets. While this is normally reserved to the aforementioned [Chunk packet](../packets/051-chunk), it can be done to any packet, and a true vanilla-compliant server/client should be able to handle this.

### An example

| TCP Packet Id | Raw Data                                    | Decoded data                                                                                                                       |
| ------------: | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
|            #1 | `0x0D`                                      | Packet Id for [Player Position and Rotation](https://pixelbrush.dev/beta-wiki/networking/packets/013-player-position-and-rotation) |
|            #2 | `0xC0, 0x21, 0x00, 0x00, 0x00, 0x00, (...)` | x=-8.50; y=66.00; cameraY=67.62; z=-4.50; Yaw=0.00; Pitch=0.00; OnGround=0;                                                        |

A naive implementation would've just assumed the packet ended prematurely and was invalid, then tried to make sense of the non-existent, invalid packet `0xC0`.
