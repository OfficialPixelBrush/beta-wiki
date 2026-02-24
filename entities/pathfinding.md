---
title: Pathfinding
nav_order: 20
layout: home
parent: Entities
---

# Pathfinding

Pathfinding in Minecraft Beta 1.7.3 is the algorithm that mobs use to determine how and where to move to reach a target destination. It relies on a 3D implementation of the **A* (A-Star) search algorithm**, constrained by the blocky terrain and the physical bounding boxes of the entities.

## Notable Beta 1.7.3 Quirks

Because the pathfinding system was still relatively early in its lifecycle during Beta 1.7.3, it is responsible for a few highly nostalgic, era-specific mechanics:

### The "Nightmare" Mechanic

If you play Beta 1.7.3, you know that sleeping in a poorly lit or unsecure area can result in a monster rudely waking you up. Behind the scenes, the game attempts to randomly spawn a monster near the sleeping player. If it succeeds, it uses the pathfinder to check if a valid, walking route exists from the monster's spawn point to the bed. If the monster can physically pathfind to you, the game forces you awake and teleports the monster right next to your bed.

### Wolf Teleportation Fallback

Tamed wolves usually try to walk to their owner using the standard pathfinding algorithm. However, if the path is too complex, completely blocked, or if the owner gets more than 12 blocks away, the wolf's AI abandons the pathfinder entirely. Instead, it scans a 5x5 grid around the owner, finds the first safe, empty block, and instantly teleports there.


{: .no_toc }
Pathfinding is the algorithm mobs use to determine how and where to move.

{: .missing }
> A huge chunk of info is still missing!!

1. TOC
{:toc}
