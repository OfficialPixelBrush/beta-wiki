---
title: Beds
layout: home
nav_order: 10
parent: Behavior
---

# Beds

## A client tries to sleep in a bed
- Client interacts with bed block
- Use Bed Packet is sent to client

## Another client observes a player getting into bed
- Use Bed Packet is sent to client

## A player clicks "Leave Bed"
- Entity Action is received by Server
- Animation Packet with value 3 to client

## Another player observes a player getting out of bed
- Animation Packet with value 3 to client

{: .warning }
> It appears setting the player animation to `3` causes the infamous issue where players can walk under water. This remains for as long as the client remains connected. Possibly the animation needs to be reset to `0` soon after?