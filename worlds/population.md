---
title: Population
nav_order: 15
layout: home
parent: Worlds
---

# Population
{: .no_toc }

The population phase is done a little differently when compared to [terrain generation](generation), as it relies on adjacent chunks already existing, due to the generated features being capable of generating across chunk boundaries.

{: .missing }
> A huge chunk of info is still missing!!

1. TOC
{:toc}

# Initialization
Before any population is done, the Chunk Populator prepares a few things to make subsequent generation easier.
- Get the current biome of the chunk (offset by +16 blocks on the x/z axes)
- The PRNG seed is set to the world seed
- This is then used to generate a random x/z offset (`rand.nextLong() / 2L * 2L + 1L`)
- This is then used to generate a new, chunk position dependent seed
```cpp
rand.setSeed((
        (int64_t(chunkPos.x) * xOffset) +
        (int64_t(chunkPos.y) * zOffset)
    ) ^ worldSeed
);
```

# Generation order
Features attempt to generate in the following order.

1. Water lakes
2. Lava lakes
3. Dungeons
4. Clay patches
5. Dirt blobs
6. Gravel blobs
7. Coal ore veins
8. Iron ore veins
9. Gold ore veins
10. Redstone ore veins
11. Diamond ore veins
12. Lapis lazuli ore veins
13. Trees
14. Yellow flowers (Dandelions)
15. Tallgrass
16. Deadbushes
17. Red flowers (Roses)
18. Brown mushrooms
19. Red mushrooms
20. Reeds (Sugarcane)
21. Pumpkins
22. Cacti
23. Singular Fluid Source (Water)
24. Singular Fluid Source (Lava)
25. Snow layer

Each of them have their own unique Generator object that's responsible for placing them in, though some are shared. Thus the only distinct feature generators that exist are presented here.

# Before generation
Before actually being placed into the world, each feature does a bit of extra stuff. This can be as simple as having its generation be attempted multiple times, or as complex as having to fulfill specific conditions before generation is even attempted.

## Chances/Ranges

{: .note }
> The initial coordinates for each feature are always generated in the order `(X,Y,Z)`. It's only ordered as `(X/Z,Y)` here, as `X` and `Z` always share the same ranges.

{: .note }
> These offset coordinates are relative to the chunks block coordinate, i.e. `chunkPos / 16`.

{: .note }
> Offset coordinates marked with `~` utilize multiple PRNG passes. The depicted number is the total chance if both of those random numbers attained their lowest/highest possible value.

| Feature | Chance | Attempts | X/Z | Y |
| --- | --- | --- | --- |
| Lakes (Water) | `1/4` | `1` |`8 - 23` | `0 - 127` |
| Lakes (Lava) | `1/8` | `1` | `8 - 23` | `0 - ~126` |
| Dungeons | - | `8` | `8 - 23` | `0 - 127` |
| Clay Patches | - | `10` | `0 - 15` | `0 - 127` |
| Dirt Blobs | - | `20` | `0 - 15` | `0 - 127` |
| Gravel Blobs | - | `10` | `0 - 15` | `0 - 127` |
| Coal Vein | - | `20` | `0 - 15` | `0 - 127` |
| Iron Vein | - | `20` | `0 - 15` | `0 - 63` |
| Gold Vein | - | `2` | `0 - 15` | `0 - 31` |
| Redstone Vein | - | `8` | `0 - 15` | `0 - 15` |
| Diamond Vein | - | `1` | `0 - 15` | `0 - 15` |
| Lapis Lazuli Vein | - | `1` | `0 - 15` | `0 - ~30` |
| Trees | - | *\*[1]* | `8 - 23` | *\*[2]* |
| Dandelions | - | *\*[1]* | `8 - 23` | `0 - 127` |
| Tallgrass | - | *\*[1]* | `8 - 23` | `0 - 127` |
| Deadbushes | - | *\*[1]* | `8 - 23` | `0 - 127` |
| Roses | `1/2` | `1` | `8 - 23` | `0 - 127` |
| Brown Mushrooms | `1/4` | `1` | `8 - 23` | `0 - 127` |
| Red Mushrooms | `1/8` | `1` | `8 - 23` | `0 - 127` |
| Sugarcane | - | `10` | `8 - 23` | `0 - 127` |
| Pumpkins | `1/32` | `1` | `8 - 23` | `0 - 127` |
| Cacti | - | *\*[1]* | `8 - 23` | `0 - 127` |
| SBS (Water) | - | `50` | `8 - 23` | `8 - ~127` |
| SBS (Lava) | - | `20` | `8 - 23` | `8 - ~127` |

- *[1]\* [Biome-dependent](#biome-dependent-attempts)*
- *[2]\* Terrain Height*

## Biome-dependent attempts
Some features have the number of generation attempts tied to the chunks biome

| Biome           | Trees        | Dandelions | Grass | Deadbushes | Cacti |
| --------------- | ------------ | ---------- | ----- | ---------- | ----- |
| Forest          | `sample + 5` | `2`        | `2`   | `0`        | `0`   |
| Rainforest      | `sample + 5` | `0`        | `10`  | `0`        | `0`   |
| Taiga           | `sample + 5` | `2`        | `0`   | `0`        | `0`   |
| Seasonal Forest | `sample + 2` | `4`        | `2`   | `0`        | `0`   |
| Desert          | `-20`        | `0`        | `0`   | `2`        | `10`  |
| Tundra          | `-20`        | `0`        | `1`   | `0`        | `0`   |
| Plains          | `-20`        | `3`        | `10`  | `0`        | `0`   |


# Generation
## Lakes
Water and lava lakes share the same logic, the only differences between them are what blocks generate, and the fact lava lakes generate a stone border around their edge.

## Dungeon
Generates a dungeon made of cobble and mossy cobble, alongside a spawner at the center and chests with loot in them.

### Dungeon Loot
When a chest is generated in a dungeon, an integer with a bound of 11 is generated, resulting in the loot table below. Up to 8 items can be generated.

| Item | Chance | Amount |
| --- | --- | --- |
| Saddle | `1/11` | `1` |
| Iron Ingot | `1/11` | `1-5` |
| Bread | `1/11` | `1` |
| Wheat | `1/11` | `1-5` |
| Gunpowder | `1/11` | `1-5` |
| String | `1/11` | `1-5` |
| Bucket | `1/11` | `1` |
| Golden Apple | `1/1100` | `1` |
| Redstone Dust | `1/22` | `1-5` |
| Record | `1/110` | `1` |
| Lapis Lazuli | `1/11` | `1` |

Anything else results in an empty slot.

### Mob Spawner mobs
When a Mob Spawner is placed by the Dungeon generator, an integer with a bound of 4 is generated, resulting in the following table below.

| Monster | Chance |
| --- | --- |
| `Skeleton` | `1/4` |
| `Zombie` | `1/2` |
| `Spider` | `1/4` |

## Clay
Clay patches.

## Minable
Anything you'd find underground, such as dirt/gravel blocks and coal, iron, gold, redstone, diamond and lapis lazuli veins.

## Trees
This section will discuss how its decided if a tree should generate and how those trees generate.
1. The tree density noise is sampled according to the current block position
2. The initial number of trees is set to `0`
3. It has a `1/10` chance to be incremented

From here, the following values are added onto the number of trees.

| Biome | Tree chance change |
| ----- | --- |
| Forest | `treeDensity + 5` |
| Rainforest | `treeDensity + 5` |
| Seasonal Forest | `treeDensity + 2` |
| Taiga | `treeDensity + 5` |
| Desert | `-20` |
| Tundra | `-20` |
| Plains | `-20` |

From there, depending on the Biome, one of four kinds of trees can be generated.

| Biome | Chance | Tree Type if win | Tree type if fail |
| --- | --- | --- | --- |
| - | `1/10` | Big Tree | Oak Tree |
| Forest | `1/5` | Birch Tree | (see birch fail) |
| Forest (birch fail) | `1/3` | Big Tree | Oak Tree |
| Rainforest | `1/3` | Big Tree | Oak Tree |
| Taiga | `1/3` | Big Taiga Tree | Oak Taiga Tree |

This is repeated for whatever number of trees that was calculated is.

### Oak Tree
TODO

#### Birch Tree
Birch trees employ the exact same generator as Oak Trees, except that their maximum height is one block more, and that their Metadata is different (`2` instead of `0`).

### Big Tree
TODO

### Small Taiga Tree
TODO

### Big Taiga Tree
TODO

## Flowers
Dandelions, Roses and Mushrooms rely on this generator.

## Tallgrass
Tallgrass

## Deadbush
Deadbushes

## Reeds
Sugarcane 

## Pumpkins
Pumpkins

## Cacti
Cacti

## Singular Fluid Source
Singular Fluid Sources can only generate if the chosen position fulfills the following conditions:
- The block above and below are stone (Y axis)
- The block at the chosen position is stone or air
- There are exactly `3` stone and `1` air blocks around it (X/Z axes)
If all of these are met, the specified fluid can generate.

## Snow
Snow generates on the highest solid block, except ice, where the temperature value is  `<0.5`. The placement of these may look different if you're implementing your own system, due to snow and ice placed by random ticks. See the [quirks page](quirks#ice-and-snow) for more info!