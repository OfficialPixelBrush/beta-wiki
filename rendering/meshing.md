---
order: 3
description: This section will go into how Minecraft transforms its world geometry from some arbitrary grid of block values into cubes rendered with triangles.
---

# Meshing

This section will go into how Minecraft transforms its world geometry from some arbitrary grid of block values into cubes rendered with triangles.

::: tip MISSING
This page is hugely incomplete! All I can really say is that by this point custom block models weren't a thing, up until Release 1.8, so all models were generated on the fly and statically defined in the code!
:::

> [!WARNING]
> Some of this info is just me guessing! I haven't double-checked most of this!

## Opaque mesh

First, all opaque blocks are rendered. Afterwards, all semi-transparent fluids (water) are rendered, and overlaid over the opaque render pass. Chunks are also sorted by depth, and rendered back to front.
TODO!

## Fluids

TODO!
