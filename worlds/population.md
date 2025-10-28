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

## Clay
Clay patches.

## Minable
Anything you'd find underground, such as dirt/gravel blocks and coal, iron, gold, redstone, diamond and lapis lazuli veins.

## Trees
Trees, biome dependent.

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