---
order: 65
description: There are many ways to figure out the orientation of the world or oneself in old Minecraft versions. This is not just useful for navigation but also for those that're trying to reimplement systems that rely on such directionality, such as Bed or Door placement.
---

# Directions

There are many ways to figure out the orientation of the world or oneself in old Minecraft versions. This is not just useful for navigation but also for those that're trying to reimplement systems that rely on such directionality, such as Bed or Door placement.

::: tip MISSING
What's discussed here will either lead to pretty much every page mentioning directions requiring to be updated, or this page itself needing to be adjusted.
:::

## Sun

The sun rises in the North (-Z), and sets in the South (+Z). This was only changed/fixed in Release 1.0.0.

## Chests

Chests automatically orient themselves when placed against another block, to ensure they're facing out from it. Without any adjacent blocks, and the assumption that their facing direction is determined by the face on which the latch is, they default to facing towards South (+Z).
