---
title: Pathfinding
nav_order: 20
layout: home
parent: Entities
---

# Pathfinding
{: .no_toc }

In Minecraft Beta 1.7.3, pathfinding is the system used by mobs to navigate the world and reach a specific target, coordinates, or other entities. The game utilizes a 3D implementation of the A* (A-Star) search algorithm to calculate these routes across the voxel terrain.

{: .missing }
> A huge chunk of info is still missing!!

1. TOC
{:toc}

## The A* Heuristic

To determine which blocks to check first, the pathfinder calculates a "score" for each evaluated block (`PathPoint`). Beta 1.7.3 uses a 3D Euclidean distance heuristic.

Each block is scored based on three values:

* G-Score (`totalPathDistance`): The actual walking distance from the mob's starting position to the current block.
* H-Score (`distanceToNext`): The heuristic. This is the estimated straight-line distance from the current block to the target. It is calculated using the Euclidean distance formula: $h = \sqrt{\Delta x^2 + \Delta y^2 + \Delta z^2}$
* F-Score (`distanceToTarget`): The total estimated cost of the path, calculated as $f = g + h$.

The algorithm uses a priority queue to always expand the block with the lowest F-Score. Because the heuristic uses true straight-line distance rather than Manhattan distance (grid-based distance), mobs naturally understand diagonal movement and will attempt to take the most direct angle toward their target when the terrain allows it.

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

<script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>