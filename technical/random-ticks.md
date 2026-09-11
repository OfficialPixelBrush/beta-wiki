---
description: Random ticks exist to update the state of blocks that aren't being actively interacted with, so things can occur, even without the players direct involvement.
---

# Random Ticks

Random ticks exist to update the state of blocks that aren't being actively interacted with, so things can occur, even without the players direct involvement.

A lot of blocks have their state updated or modified, only when a random tick is issued to them.

## Saplings

When random ticked, Saplings have a 1/30th chance to advance their age, eventually leading to them growing into a tree.

## Farmland

Farmland has a 1/5th chance to update it's state.

If water is nearby, it sets its hydration level of the max of `7`. If this water goes away, it slowly counts this value down, until it hits `0` and dries out.

The valid area in which water is detected extends up to `4` blocks away from the farm block along the X/Z axis, at and one above the level the farm block is at, resulting in a 9x2x9 area.

## Wheat / Crops

::: tip MISSING
TODO
:::

## Sugarcane / Cactus

Firstly, Sugarcane and Cacti check if the block above them is air, and stop if it isn't.

Secondly, they check if they're already `3` or more blocks tall, and stop there if they are.

Lastly, they check if they've reached their maximum growth value (`15`), if they have they place the new block above themselves, and reset their growth value to `0`, otherwise they just increment their growth by `1`.

## Leaves

Leaves can decay when random ticked, but only if they've not been placed by a player (as indicated by the top-most bit).

They then check for a log nearby. If that log is more than three blocks away or isn't a log or leaves, we give up and break the block.

::: tip MISSING
TODO: Explain log search better
:::
