---
title: Pathfinding
nav_order: 20
layout: home
parent: Entities
---

# Pathfinding

Pathfinding is the algorithm that mobs in Minecraft Beta 1.7.3 use to determine how and where to move to reach a target destination. To navigate the blocky terrain, the game relies on a 3D implementation of the A* (A-Star) search algorithm.

## How Mobs Evaluate the World

To prevent the server from crashing by searching the entire map, a mob only calculates paths within a restricted local area (typically a `32`-block radius). When a mob wants to reach a target, it checks the blocks immediately around it (North, South, East, West) and evaluates them based on a few strict rules:

- The pathfinder checks the entity's specific bounding box. A spider needs wider clearance than a zombie, so a path that is valid for a zombie might be flagged as blocked for a spider.
- Mobs can step up `1` block. If an adjacent block is solid, the pathfinder checks if the space above it is empty. It also checks downwards, allowing mobs to safely drop down terrain.
- The algorithm assigns specific walkability values to blocks. It strictly avoids paths that lead into lava (`-2` (Lava)), but it will calculate routes through water (`-1` (Water)). Blocks where the material blocks movement evaluate to `true` (Blocks Movement) and are completely rejected.
- Solid blocks naturally block movement. Interestingly, the algorithm understands wooden and iron doors, but it will only consider them passable if their metadata explicitly states that they are currently open.

## Executing the Movement

Once the algorithm successfully chains together a route from the mob to the target, it generates a list of 3D waypoints.

The mob then hands this list over to its internal movement logic:

1. The mob calculates the angle to the first waypoint, rotates to face it, and walks forward.
2. As soon as the mob gets close enough to a waypoint (based on its bounding box), it discards it and targets the next one in the list.
3. If the next waypoint is higher than the mob's current floor level, it triggers a jump. Mobs will also continuously attempt to jump if they are navigating through water or lava to keep their heads above the surface.

## Notable Beta 1.7.3 Quirks

Because the pathfinding system was still relatively early in its lifecycle during Beta 1.7.3, it is responsible for a few highly nostalgic, era-specific mechanics:

### The "Nightmare" Mechanic

Sleeping in a poorly lit or unsecure area can result in a monster rudely waking you up. Behind the scenes, the game attempts to randomly spawn a monster near the sleeping player. If it succeeds, it uses the pathfinder to check if a valid, walking route exists from the monster's spawn point to the bed. If the monster can physically pathfind to you within a distance of `32.0f`, the game forces you awake and teleports the monster right next to your bed.

### Wolf Teleportation Fallback

Tamed wolves usually try to walk to their owner using the standard pathfinding algorithm. However, if the path is too complex, completely blocked, or if the owner gets more than `12.0f` blocks away, the wolf's AI abandons the pathfinder entirely. Instead, it scans a `5`x`5` grid around the owner, finds the first safe, empty block, and instantly teleports there.


{: .missing }
> A huge chunk of info is still missing!!

1. TOC
{:toc}
