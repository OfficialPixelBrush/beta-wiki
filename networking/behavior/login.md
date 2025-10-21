---
title: Login
layout: home
nav_order: 3
parent: Behavior
---

# Minimal Login
The bare minimum number of packets to join a Server with a Notchian Client is as follows.

| Packet | Contents |
| :--- | :--- |
| `C->S` [Handshake](../packets/002-handshake#serverbound) | Giving the server the client name |
| `S->C` [Handshake](../packets/002-handshake#clientbound) | Gives the client a connection hash |
| `C->S` [Login](../packets/001-login#serverbound) | Gives the server info about the client |
| `S->C` [Login](../packets/001-login#clientbound) | Gives the client info about the to-be-used player and world |
| `S->C` [Player Position and Look](../packets/013-player-position-look#clientbound) | Sets the players position in the world |

A vanilla client will become responsive upon receiving the player's initial starting position and rotation from the server. After this, the client will continuously send Position and Look packets as needed.

This will place the player into an empty world at sunrise. The player will begin to fall shortly after connecting, since there are no solid blocks for it to collide with.

# Vanilla Login

| Packet | Contents |
| :--- | :--- |
| `C->S` [Handshake](../packets/002-handshake#serverbound) | Giving the server the client name |
| `S->C` [Handshake](../packets/002-handshake#clientbound) | Gives the client a connection hash |
| `C->S` [Login](../packets/001-login#serverbound) | Gives the server info about the client |
| `S->C` [Login](../packets/001-login#clientbound) | Gives the client info about the to-be-used player and world |
| `S->C` [Spawn Point](../packets/006-spawn-point#clientbound) | Sets the players spawn |
| `S->C` [Time](../packets/004-time#clientbound) | Sets the current time |
| `S->C` [Health](../packets/008-health#clientbound) | Sets the shown health |
| `S->C` [Window Items](../packets/104-window-items) | Sets the players inventory |

This is followed by a bunch of [Pre-Chunk](../packets/050-pre-chunk) packets to load the chunks, and [Chunk](../packets/051-chunk) packets which contain the actual chunk data, alongside the Server and Client exchanging position and rotation information.