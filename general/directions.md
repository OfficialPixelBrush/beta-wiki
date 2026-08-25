---
order: 65
description: There are many ways to figure out the orientation of the world or oneself in old Minecraft versions. This is not just useful for navigation but also for those that're trying to reimplement systems that rely on such directionality, such as Bed or Door placement.
---

# Directions

There are many ways to figure out the orientation of the world or oneself in old Minecraft versions. This is not just useful for navigation but also for those that're trying to reimplement systems that rely on such directionality, such as Bed or Door placement.

The mapping from numerical directions to cardinal directions is as follows.

| Numerical | Cardinal |
| --------- | -------- |
| -Z        | North    |
| +Z        | South    |
| +X        | East     |
| -X        | West     |
| +Y        | Up       |
| -Y        | Down     |

## Sun

The sun rises in the North (-Z), and sets in the South (+Z). This was only changed/fixed in Release 1.0.0.

## Chests

Chests automatically orient themselves when placed against another block, to ensure they're facing out from it. Without any adjacent blocks, and the assumption that their facing direction is determined by the face on which the latch is, they default to facing towards South (+Z).

## Further Reading

The directions found here line up with what they've been determined as in modern versions
 as proven by [the Navigation page on the Minecraft Wiki](https://minecraft.wiki/w/Tutorial:Navigation).