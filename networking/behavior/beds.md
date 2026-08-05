---
order: 10
description: Bed-related behaviors.
---

# Beds

## A client tries to sleep in a bed

| Packet                                                           | Contents                                     |
| :--------------------------------------------------------------- | :------------------------------------------- |
| `C->S` [Place Block](../packets/015-place-block)                 | Client interacts with the bed block          |
| `S->C` [Interact With Block](../packets/017-interact-with-block) | The server makes the player sleep in the bed |

## Another client observes a player getting into bed

| Packet                                                           | Contents                                                   |
| :--------------------------------------------------------------- | :--------------------------------------------------------- |
| `S->C` [Animation](../packets/018-animation)                     | Other client interacts with the bed block (`1`: Swing Arm) |
| `S->C` [Interact With Block](../packets/017-interact-with-block) | The server makes the player sleep in the bed               |

## A player clicks "Leave Bed"

| Packet                                               | Contents                                                      |
| :--------------------------------------------------- | :------------------------------------------------------------ |
| `C->S` [Player Action](../packets/019-player-action) | Player Action value of `1` is sent (Stop Sleeping)            |
| `S->C` [Animation](../packets/018-animation)         | The server makes the player leave the bed (`3` Stop Sleeping) |

## Another player observes a player getting out of bed

| Packet                                       | Contents                                                      |
| :------------------------------------------- | :------------------------------------------------------------ |
| `S->C` [Animation](../packets/018-animation) | The server makes the player leave the bed (`3` Stop Sleeping) |

::: warning
It appears setting the player animation to `3` causes the infamous issue where players can walk under water. This remains for as long as the client remains connected. Possibly the animation needs to be reset to `0` soon after?
:::
