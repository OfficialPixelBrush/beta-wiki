---
order: 11
description: 89Drops are items which are spawned into the world when a block is destroyed or an entity killed.
---

# Drops

Drops are items which are spawned into the world when a block is destroyed or an entity killed.

::: tip MISSING
Lots still missing! And some stuff hasn't been double-checked in the code. Please check!
:::

## Blocks

There are four types of blocks in this regard. Those that drop themselves, those that drop another block/item, those that can't be mined in the first place and those that drop nothing.

### Blocks that drop themselves

| Value | Block                 | Note                                                  |
| ----: | :-------------------- | :---------------------------------------------------- |
|     3 | Dirt                  |                                                       |
|     4 | Cobblestone           | Requires pickaxe                                      |
|     5 | Planks                |                                                       |
|     6 | Sapling               | Resets age back to 0, but retains type                |
|    12 | Sand                  |                                                       |
|    14 | Gold Ore              | Requires iron or diamond pickaxe                      |
|    15 | Iron Ore              | Requires stone, iron or diamond pickaxe               |
|    17 | Log                   | Retains block metadata                                |
|    18 | Leaves                | Requires shears, retains block metadata               |
|    19 | Sponge                |                                                       |
|    22 | Lapis Lazuli Block    |                                                       |
|    23 | Dispenser             | Also drops any items inside                           |
|    24 | Sandstone             | Requires pickaxe                                      |
|    25 | Note Block            | Resets pitch                                          |
|    27 | Powered Rail          | Resets power level                                    |
|    28 | Detected Rail         | Resets state                                          |
|    29 | Sticky Piston         | Resets state                                          |
|    33 | Piston                | Resets state                                          |
|    34 | Piston Head           | Drops whichever block it's part of, can't be obtained |
|    35 | Wool                  | Retains color                                         |
|    37 | Dandelion             |                                                       |
|    38 | Rose                  |                                                       |
|    39 | Brown Mushroom        |
|    40 | Red Mushroom          |
|    41 | Gold Block            |                                                       |
|    42 | Iron Block            |                                                       |
|    44 | Slab                  |                                                       |
|    45 | Bricks                |                                                       |
|    46 | TNT                   |                                                       |
|    48 | Mossy Cobblestone     | Requires pickaxe                                      |
|    49 | Obsidian              | Requires diamond pickaxe                              |
|    50 | Torch                 | Resets orientation                                    |
|    53 | Wooden Stairs         | Resets orientation                                    |
|    54 | Chest                 | Drops contained items as well                         |
|    57 | Diamond Blocks        |                                                       |
|    58 | Crafting Table        |                                                       |
|    61 | Furnace               | Drops contained items as well                         |
|    65 | Ladder                | Resets orientation                                    |
|    66 | Rail                  | Resets state                                          |
|    67 | Cobblestone Stairs    | Resets orientation                                    |
|    69 | Lever                 | Resets orientation and state                          |
|    70 | Stone Pressure Plate  | Resets state                                          |
|    72 | Wooden Pressure Plate | Resets state                                          |
|    76 | Lit Redstone Torch    | Does not retain orientation                           |
|    77 | Stone Button          | Resets orientation and state                          |
|    81 | Cactus                |                                                       |
|    84 | Jukebox               | Drops contained record as well                        |
|    85 | Fence                 |                                                       |
|    86 | Pumpkin               | Resets orientation                                    |
|    87 | Netherrack            |                                                       |
|    88 | Soul Sand             |                                                       |
|    91 | Jack 'o' Lantern      | Resets orientation                                    |
|    95 | Locked Chest          |
|    96 | Trapdoor              | Resets orientation and state                          |

### Blocks that drop something unique

| Value | Block                 | Drop                     | Note                                                             |
| ----: | :-------------------- | :----------------------- | :--------------------------------------------------------------- |
|     1 | Stone                 | Cobblestone              | Requires pickaxe                                                 |
|     2 | Grass                 | Dirt                     |                                                                  |
|    13 | Gravel                | Gravel / Flint           | `1/10`chance to drop Flint                                       |
|    16 | Coal Ore              | Coal                     | Requires pickaxe                                                 |
|    18 | Leaves                | Sapling                  | `1/20` chance                                                    |
|    21 | Lapis Lazuli Ore      | Lapis Lazuli             | Drops `4` to `9` items, requires stone, iron or diamond pickaxe  |
|    26 | Bed                   | Bed (Item)               | Destroys both bed blocks, does not retain metadata               |
|    30 | Cobweb                | String                   |                                                                  |
|    31 | Tall Grass            | Seeds                    | `1/8` chance                                                     |
|    43 | Double Slab           | Slab                     | `2` slabs, retains metadata                                      |
|    55 | Redstone              | Redstone dust            |                                                                  |
|    56 | Diamond Ore           | Diamond                  | Requires diamond or iron pickaxe                                 |
|    59 | Wheat                 | Wheat (Item)             | Only drops if the Wheat has reached its final growth stage (`7`) |
|    60 | Farmland              | Dirt                     |                                                                  |
|    62 | Lit Furnace           | Furnace                  | Drops contained items as well                                    |
|    63 | Sign (standing)       | Sign (Item)              |                                                                  |
|    64 | Wooden Door           | Wooden Door (Item)       | Destroys both wooden door blocks, does not retain metadata       |
|    68 | Sign (wall)           | Sign (Item)              |                                                                  |
|    71 | Iron Door             | Iron Door (Item)         | Destroys both iron door blocks, does not retain metadata         |
|    73 | Redstone Ore          | Redstone Dust            | Drops `4` to `6` items, requires iron or diamond pickaxe         |
|    74 | Lit Redstone Ore      | \"                       | \"                                                               |
|    75 | Redstone Torch        | Lit Redstone Torch       | Does not retain orientation                                      |
|    78 | Snow (Layer)          | Snowball                 |                                                                  |
|    80 | Snow Block            | Snowball (`4`)           |                                                                  |
|    82 | Clay                  | Clay (Item) (`4`)        |                                                                  |
|    83 | Sugar Cane            | Sugar Cane (Item)        |                                                                  |
|    89 | Glowstone             | Glowstone dust           | Drops `2` to `5` items                                           |
|    93 | Redstone Repeater     | Redstone Repeater (Item) |                                                                  |
|    94 | Lit Redstone Repeater | Redstone Repeater (Item) |                                                                  |

### Blocks that can't be broken

| Value | Block           | Note               |
| ----: | :-------------- | ------------------ |
|     0 | Air             | Cannot be mined    |
|     7 | Bedrock         | Cannot be broken   |
|     8 | Water (Flowing) | Cannot be mined    |
|     9 | Water (Still)   | Cannot be mined    |
|    10 | Lava (Flowing)  | Cannot be mined    |
|    11 | Lava (Still)    | Cannot be mined    |
|    36 | Moving Block    | Cannot be obtained |

### Blocks that drop nothing

| Value | Block           | Note |
| ----: | :-------------- | ---- |
|    20 | Glass           |      |
|    32 | Deadbush        |      |
|    47 | Bookshelf       |      |
|    51 | Fire            |      |
|    52 | Monster Spawner |      |
|    79 | Ice             |      |
|    90 | Nether Portal   |      |
|    92 | Cake            |      |

## Mobs

- Pigs can drop porkchops
- Cows can drop leather
- Chickens can drop feathers
- Zombies can drop feathers
- Skeletons can drop bones
- Creepers can drop gunpowder
- Spiders can drop string
- Zombie pigmen drop nothing
- Ghasts drop nothing
- Squids can drop Black dye/Inksacks
