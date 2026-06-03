---
order: 3
description: Drops are items which are spawned into the world when a block or entity are destroyed and/or killed.
---

# Drops

Drops are items which are spawned into the world when a block or entity are destroyed and/or killed.

::: tip MISSING
Lots still missing! And some stuff hasn't been double-checked in the code. Please check!
:::

## Blocks

There are four types of blocks in this regard. Those that drop nothing, those that drop themselves, those that drop another block/item or those that can't be mined in the first place.

### Blocks that drop themselves

| Value | Block              | Note                                                  |
| ----: | :----------------- | :---------------------------------------------------- |
|     3 | Dirt               |                                                       |
|     4 | Cobblestone        |                                                       |
|     5 | Planks             |                                                       |
|     6 | Sapling            | Resets age back to 0, but retains type                |
|    12 | Sand               |                                                       |
|    13 | Gravel             |                                                       |
|    14 | Gold Ore           |                                                       |
|    15 | Iron Ore           |                                                       |
|    17 | Log                | Retains block metadata                                |
|    18 | Leaves             | Requires shears, retains block metadata               |
|    19 | Sponge             |                                                       |
|    22 | Lapis Lazuli Block |                                                       |
|    23 | Dispenser          | Also drops any items inside                           |
|    24 | Sandstone          |                                                       |
|    25 | Note Block         | Resets pitch                                          |
|    27 | Powered Rail       | Resets power level                                    |
|    28 | Detected Rail      | Resets state                                          |
|    29 | Sticky Piston      | Resets state                                          |
|    33 | Piston             | Resets state                                          |
|    34 | Piston Head        | Drops whichever block it's part of, can't be obtained |
|    35 | Wool               | Retains color                                         |
|    37 | Dandelion          |                                                       |
|    38 | Rose               |                                                       |
|    39 | Brown Mushroom     |
|    40 | Red Mushroom       |

### Blocks that drop something unique

| Value | Block            | Drop         | Note                                                   |
| ----: | :--------------- | :----------- | :----------------------------------------------------- |
|     1 | Stone            | Cobblestone  | Requires pickaxe                                       |
|     2 | Grass            | Dirt         |                                                        |
|    16 | Coal Ore         | Coal         | Requires pickaxe                                       |
|    18 | Leaves           | Sapling      | `1/20` chance                                          |
|    21 | Lapis Lazuli Ore | Lapis Lazuli | Drops `4-9` items                                      |
|    26 | Bed              | Bed (Item)   | Destroys both parts of the bed and only drops one item |
|    30 | Cobweb           | String       |                                                        |
|    31 | Tall Grass       | Seeds        | `1/8` chance                                           |

### Blocks that drop nothing

| Value | Block    | Note |
| ----: | :------- | ---- |
|    20 | Glass    |      |
|    32 | Deadbush |      |

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
