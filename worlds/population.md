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

Features generate in the order written here.

1. Water lakes (still)
2. Lava lakes (still)
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
23. Water (flowing)
24. Lava (flowing)
25. Snow layer

Each of them have their own unique Generator object that's responsible for placing them in, though some are shared. Thus the only distinct feature generators that exist are presented here.

1. TOC
{:toc}

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

## Liquids
Liquids

## Snow
Snow generates on the highest solid block, except ice, where the temperature value is  `<0.5`.