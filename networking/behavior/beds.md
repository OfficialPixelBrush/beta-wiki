---
order: 10
description: Bed-related behaviors.
---

# Beds

## A client tries to sleep in a bed

- Client interacts with bed block
- Use Bed packet is sent to client

## Another client observes a player getting into bed

- Use Bed packet is sent to client

## A player clicks "Leave Bed"

- Entity Action packet is received by the server
- Animation packet with value 3 to the client

## Another player observes a player getting out of bed

- Animation Packet with value 3 to the client

> [!WARNING]
> It appears setting the player animation to `3` causes the infamous issue where players can walk under water. This remains for as long as the client remains connected. Possibly the animation needs to be reset to `0` soon after?
