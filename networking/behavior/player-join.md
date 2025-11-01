---
title: Player Joining
layout: home
nav_order: 10
parent: Behavior
---

# Player Joining
The behavior observed when a new player joins the Server is exceedingly interesting, as it reveals a little bit about how the Protocol came about.

## An existing player is sent to the new Client

| Direction | Packet | Data |
|---|---|---|
| `S->C` | [Login](../packets/001-login) | EID=7; Unknown=""; Seed=4700869286537174060; Dimension=0; |
| `S->C` | [Spawn Point](../packets/006-spawn-point) | x=0; y=64; z=0; |
| `S->C` | [Time](../packets/004-time) | Time=240402; |
| `S->C` | [Spawn Player](../packets/020-spawn-player) | EID=6; Username="PixelBrushArt"; x=656; y=2272; z=-290; Yaw=79; Pitch=16; Held Item=17; |
| `S->C` | [Entity Equipment](../packets/005-entity-equipment) | EID=6; Slot=0; Item=17; Damage=0; |
| `S->C` | [Entity Equipment](../packets/005-entity-equipment) | EID=6; Slot=1; Item=-1; Damage=0; |
| `S->C` | [Entity Equipment](../packets/005-entity-equipment) | EID=6; Slot=2; Item=-1; Damage=0; |
| `S->C` | [Entity Equipment](../packets/005-entity-equipment) | EID=6; Slot=3; Item=-1; Damage=0; |
| `S->C` | [Entity Equipment](../packets/005-entity-equipment) | EID=6; Slot=4; Item=-1; Damage=0; |

It's interesting that the held item is sent twice, despite already being sent with `SpawnPlayer`. However, that packet lacks the damage value data that is need for some blocks, such as the different kinds of saplings or wool.

{: .note }
> If the held item is less than `0` and not followed up by an `Entity Equipment` packet, the sky inverts, as the notchian client never expects to draw block `-1`, failing to acquire the correct block model and running into an `ArrayIndexOutOfBoundsException`. Due to the state of the OpenGL Context by this point in the rendering pipeline, any subsequent rendering process' are messed up, most obviously manifesting by flipping many transparent objects (water, clouds, block selector box) and players.

## A new client shows up on the existing client

| Direction | Packet | Data |
| --- | --- | --- |
| `S->C` | [Chat Message](../packets/003-chat-message)      | Message="§eCamera joined the game."; |
| `S->C` | [Spawn Player](../packets/020-spawn-player) | EID=7; Username="Camera"; x=272; y=2355; z=272; Yaw=0; Pitch=0; Held Item=0; |
| `S->C` | [Entity Equipment](../packets/005-entity-equipment)  | EID=7; Slot=0; Item=-1; Damage=0; |
| `S->C` | [Entity Equipment](../packets/005-entity-equipment)  | EID=7; Slot=1; Item=-1; Damage=0; |
| `S->C` | [Entity Equipment](../packets/005-entity-equipment)  | EID=7; Slot=2; Item=-1; Damage=0; |
| `S->C` | [Entity Equipment](../packets/005-entity-equipment)  | EID=7; Slot=3; Item=-1; Damage=0; |
| `S->C` | [Entity Equipment](../packets/005-entity-equipment)  | EID=7; Slot=4; Item=-1; Damage=0; |

# Further reading
- [A new player joins (Github - BetrockServer Wiki - Vanilla Server Behavior)](https://github.com/OfficialPixelBrush/BetrockServer/wiki/Vanilla-Server-Behavior#a-new-player-joins)