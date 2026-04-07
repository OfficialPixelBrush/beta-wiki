---
order: 5
description: The actions that describe how a client and server negotiate to connect.
---

# Minimal Login

The bare minimum number of packets to join a server with a Notchian client is as follows.

| Packet                                                                                         | Contents                                                    |
| :--------------------------------------------------------------------------------------------- | :---------------------------------------------------------- |
| `C->S` [Pre-Login](../packets/002-pre-login#serverbound)                                       | Giving the server the client name                           |
| `S->C` [Pre-Login](../packets/002-pre-login#clientbound)                                       | Gives the client a connection hash                          |
| `C->S` [Login](../packets/001-login#serverbound)                                               | Gives the server info about the client                      |
| `S->C` [Login](../packets/001-login#clientbound)                                               | Gives the client info about the to-be-used player and world |
| `S->C` [Player Position and Rotation](../packets/013-player-position-and-rotation#clientbound) | Sets the players position in the world                      |

A vanilla client will become responsive upon receiving the player's initial starting position and rotation from the server. After this, the client will continuously send Position and Look packets as needed.

This will place the player into an empty world at sunrise. The player will begin to fall shortly after connecting, since there are no solid blocks for it to collide with.

# Vanilla Login

| Packet                                                                     | Contents                                                    |
| :------------------------------------------------------------------------- | :---------------------------------------------------------- |
| `C->S` [Pre-Login](../packets/002-pre-login#serverbound)                   | Giving the server the client name                           |
| `S->C` [Pre-Login](../packets/002-pre-login#clientbound)                   | Gives the client a connection hash                          |
| `C->S` [Login](../packets/001-login#serverbound)                           | Gives the server info about the client                      |
| `S->C` [Login](../packets/001-login#clientbound)                           | Gives the client info about the to-be-used player and world |
| `S->C` [Set Spawn Position](../packets/006-set-spawn-position#clientbound) | Sets the players spawn                                      |
| `S->C` [Set Time](../packets/004-set-time#clientbound)                     | Sets the current time                                       |
| `S->C` [Set Health](../packets/008-set-health#clientbound)                 | Sets the shown health                                       |
| `S->C` [Fill Container](../packets/104-fill-container)                     | Sets the players inventory                                  |

This is followed by a bunch of [Set Chunk Visibility](../packets/050-set-chunk-visibility) packets to load the chunks, and [Chunk](../packets/051-chunk) packets which contain the actual chunk data, alongside the server and Client exchanging position and rotation information.
