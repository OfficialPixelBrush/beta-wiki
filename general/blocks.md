---
order: 5
description: Blocks are the usually cuboid shapes that the Minecraft world is made of. Blocks only have 2 properties An 8-bit ID and a 4-bit data value.
---

# Blocks

Blocks are the usually cuboid shapes that the Minecraft world is made of. Blocks only have 2 properties: An 8-bit ID and a 4-bit metadata value.

::: tip MISSING
TODO: Add material type and what block belongs to what material category!
:::

## Listing

Here is a comprehensive listing of all blocks.

| Value | Name                  | In-game Name                                        | Metadata use                                     |
| ----: | :-------------------- | :-------------------------------------------------- | :----------------------------------------------- |
|     0 | Air                   |                                                     |                                                  |
|     1 | Stone                 | Stone                                               |                                                  |
|     2 | Grass                 | Grass                                               |                                                  |
|     3 | Dirt                  | Dirt                                                |                                                  |
|     4 | Cobblestone           | Cobblestone                                         |                                                  |
|     5 | Planks                | Wooden Planks                                       |                                                  |
|     6 | Sapling               | Sapling                                             | [Wood Type](#saplings)                           |
|     7 | Bedrock               | Bedrock                                             |                                                  |
|     8 | Water (Flowing)       | Water                                               | [Liquid height](#liquids)                        |
|     9 | Water (Still)         | Water                                               | [Liquid height](#liquids)                        |
|    10 | Lava (Flowing)        | Lava                                                | [Liquid height](#liquids)                        |
|    11 | Lava (Still)          | Lava                                                | [Liquid height](#liquids)                        |
|    12 | Sand                  | Sand                                                |                                                  |
|    13 | Gravel                | Gravel                                              |                                                  |
|    14 | Gold Ore              | Gold Ore                                            |                                                  |
|    15 | Iron Ore              | Iron Ore                                            |                                                  |
|    16 | Coal Ore              | Coal Ore                                            |                                                  |
|    17 | Log                   | Wood                                                | [Wood Type](#logs)                               |
|    18 | Leaves                | Leaves                                              | [Leaf Type](#leaves)                             |
|    19 | Sponge                | Sponge                                              |                                                  |
|    20 | Glass                 | Glass                                               |                                                  |
|    21 | Lapis Lazuli Ore      | Lapis Lazuli Ore                                    |                                                  |
|    22 | Lapis Lazuli Block    | Lapis Lazuli Block                                  |                                                  |
|    23 | Dispenser             | Dispenser                                           | [Direction](#dispenser-furnace-ladder-wall-sign) |
|    24 | Sandstone             | Sandstone                                           |                                                  |
|    25 | Note Block            | Note Block                                          |                                                  |
|    26 | Bed                   | Bed                                                 | [Direction + Head/Foot](#bed)                    |
|    27 | Powered Rail          | Powered Rail                                        | [Direction](#rails)                              |
|    28 | Detector Rail         | Detector Rail                                       | [Direction](#rails)                              |
|    29 | Sticky Piston         | Sticky Piston                                       | [Direction + State](#pistons)                    |
|    30 | Cobweb                | Cobweb                                              |                                                  |
|    31 | Tall Grass            |                                                     | [Block Type](#tallgrass)                         |
|    32 | Dead Bush             |                                                     |                                                  |
|    33 | Piston                | Piston                                              | [Direction + State](#pistons)                    |
|    34 | Piston Head           |                                                     | [Direction](#piston-head)                        |
|    35 | Wool                  |                                                     | [Color](#wool)                                   |
|    36 | Moving Block          |                                                     |                                                  |
|    37 | Dandelion             | Flower                                              |                                                  |
|    38 | Rose                  | Rose                                                |                                                  |
|    39 | Brown Mushroom        | Mushroom                                            |                                                  |
|    40 | Red Mushroom          | Mushroom                                            |                                                  |
|    41 | Gold Block            | Block of Gold                                       |                                                  |
|    42 | Iron Block            | Block of Iron                                       |                                                  |
|    43 | Double Slab           |                                                     | [Block Type](#double-slabs)                      |
|    44 | Slab                  | Stone Slab, Sandstone Slab, Wooden Slab, Stone Slab | [Block Type](#double-slabs)                      |
|    45 | Bricks                | Bricks                                              |                                                  |
|    46 | TNT                   | TNT                                                 |                                                  |
|    47 | Bookshelf             | Bookshelf                                           |                                                  |
|    48 | Mossy Cobblestone     | Moss Stone                                          |                                                  |
|    49 | Obsidian              | Obsidian                                            |                                                  |
|    50 | Torch                 | Torch                                               | [Direction](#torches)                            |
|    51 | Fire                  | Fire                                                |                                                  |
|    52 | Monster Spawner       | Monster Spawner                                     |                                                  |
|    53 | Wooden Stairs         | Wooden Stairs                                       | [Direction](#stairs)                             |
|    54 | Chest                 | Chest                                               |                                                  |
|    55 | Redstone              | Redstone                                            | Power Level                                      |
|    56 | Diamond Ore           | Diamond Ore                                         |                                                  |
|    57 | Diamond Block         | Block of Diamond                                    |                                                  |
|    58 | Crafting Table        | Crafting Table                                      |                                                  |
|    59 | Wheat                 | Crops                                               | Growth Stage (0-7)                               |
|    60 | Farmland              | Farmland                                            | >0 if wet                                        |
|    61 | Furnace               | Furnace                                             | [Direction](#dispenser-furnace-ladder-wall-sign) |
|    62 | Lit Furnace           | Furnace                                             | [Direction](#dispenser-furnace-ladder-wall-sign) |
|    63 | Sign (standing)       | Sign                                                | [Direction](#grounded)                           |
|    64 | Wooden Door           | Wooden Door                                         | [Direction + Open/Closed + Top/Bottom](#doors)   |
|    65 | Ladder                | Ladder                                              | [Direction](#dispenser-furnace-ladder-wall-sign) |
|    66 | Rail                  | Rail                                                | [Direction](#rails)                              |
|    67 | Cobblestone Stairs    | Stone Stairs                                        | [Direction](#stairs)                             |
|    68 | Sign (wall)           | Sign                                                | [Direction](#dispenser-furnace-ladder-wall-sign) |
|    69 | Lever                 | Lever                                               | [Direction + Toggled](#lever)                    |
|    70 | Stone Pressure Plate  | Pressure Plate                                      | Toggled                                          |
|    71 | Iron Door             | Iron Door                                           | [Direction + Open/Closed + Top/Bottom](#doors)   |
|    72 | Wooden Pressure Plate | Pressure Plate                                      | Toggled                                          |
|    73 | Redstone Ore          | Redstone Ore                                        |                                                  |
|    74 | Lit Redstone Ore      | Redstone Ore                                        |                                                  |
|    75 | Redstone Torch        | Redstone Torch                                      | [Direction](#torch)                              |
|    76 | Lit Redstone Torch    | Redstone Torch                                      | [Direction](#torch)                              |
|    77 | Stone Button          | Button                                              | [Direction + Toggled](#button)                   |
|    78 | Snow (Layer)          | Snow                                                |                                                  |
|    79 | Ice                   | Ice                                                 |                                                  |
|    80 | Snow Block            | Snow                                                |                                                  |
|    81 | Cactus                | Cactus                                              |                                                  |
|    82 | Clay                  | Clay                                                |                                                  |
|    83 | Sugar Cane            | Sugar Canes                                         |                                                  |
|    84 | Jukebox               | Jukebox                                             |                                                  |
|    85 | Fence                 | Fence                                               |                                                  |
|    86 | Pumpkin               | Pumpkin                                             | [Direction](#pumpkin-jack-o-lantern)             |
|    87 | Netherrack            | Netherrack                                          |                                                  |
|    88 | Soul Sand             | Soul Sand                                           |                                                  |
|    89 | Glowstone             | Glowstone                                           |                                                  |
|    90 | Nether Portal         | Portal                                              |                                                  |
|    91 | Jack'o'Lantern        | Jack 'o' Lantern                                    | [Direction](#pumpkin-jack-o-lantern)             |
|    92 | Cake                  | Cake                                                | Eatness                                          |
|    93 | Redstone Repeater     |                                                     | [Direction + Delay](#redstone-repeater)          |
|    94 | Lit Redstone Repeater |                                                     | [Direction + Delay](#redstone-repeater)          |
|    95 | Locked Chest          | Locked chest                                        |                                                  |
|    96 | Trapdoor              | Trapdoor                                            | [Direction + Open/Closed](#trapdoors)            |

# Metadata

Many blocks make use of the 4-bit metadata values that they have access to.
Often times these are used for indicating their direction. Sometimes they're used for if they're activated, open or if they're a variety of a share base-block, such as the different wool colors or logs.

## Direction Look-up

A lot of blocks just use the metadata for directionality information, but in different ways.
Here's a one-stop look-up to determine the appropriate value for a given direction of a group of blocks.

|                                                               Block Group | North (-Z) | South (+Z) | East (+X) | West (-X) | Up (+Y) | Down (-Y) |
| ------------------------------------------------------------------------: | :--------: | :--------: | :-------: | :-------: | :-----: | :-------: |
|                                                           [Torch](#torch) |     4      |     3      |     2     |     1     |    5    |     -     |
|                                                           [Lever](#lever) |     4      |     3      |     2     |     1     |   5/6   |     -     |
|                                                         [Button](#button) |     4      |     3      |     2     |     1     |    -    |     -     |
|                                                         [Stairs](#stairs) |     3      |     2      |     0     |     1     |    -    |     -     |
|                                                           [Doors](#doors) |     3      |     1      |     0     |     2     |    -    |     -     |
| [Dispenser/Furnace/Ladder/Wall Sign](#dispenser-furnace-ladder-wall-sign) |     2      |     3      |     5     |     4     |    -    |     -     |
|                                                       [Pistons](#pistons) |     2      |     3      |     4     |     5     |    1    |     0     |
|                                                               [Bed](#bed) |     2      |     0      |     1     |     3     |    -    |     -     |
|                         [Pumpkin/Jack'o'Lantern](#pumpkin-jack-o-lantern) |     2      |     0      |     3     |     1     |    -    |     -     |
|                                                    [Trapdoor](#trapdoors) |     1      |     0      |     2     |     3     |    -    |     -     |
|                                   [Redstone Repeater](#redstone-repeater) |     0      |     2      |     1     |     3     |    -    |     -     |

> [!NOTE]
> These values may not represent the full state of a block. [Doors](#doors) for example still use some other bits to determine whether they're the top/bottom half or if they're open/closed. This table ignores that and just goes with the numbers that determine the direction, and nothing else.

## Liquids

Liquids indicate their level with their metadata. Generally, the further away they are from a water source, the lower their level gets.

## Wood

All wood or tree-related blocks have related values and behaviors.

### Saplings

Saplings have 3 distinct values.

| Value | Color  |
| ----: | :----- |
|     0 | Oak    |
|     1 | Spruce |
|     2 | Birch  |

Value `3` also shows up as oak, but is unobtainable under normal circumstances.

The upper 2-bits are used to indicate the age of the sapling.

### Logs

Logs have 3 distinct values.

| Value | Color  |
| ----: | :----- |
|     0 | Oak    |
|     1 | Spruce |
|     2 | Birch  |

Any other value will appear as oak.

### Leaves

Leaves have 3/4 distinct values. Only oak is biome-colored.

| Value | Color                        |
| ----: | :--------------------------- |
|     0 | Oak                          |
|     1 | Spruce                       |
|     2 | Birch                        |
|     4 | Oak (spruce colors, Invalid) |

The values after this simply follow the same pattern.

## Tallgrass

| Value | Color           |
| ----: | :-------------- |
|     0 | Shrub           |
|     1 | Grass           |
|     2 | Fern            |
|     3 | Shrub (Invalid) |

## Dispenser/Furnace/Ladder/Wall Sign

The "outward" face is used as the direction they're facing.

| Value | Color          |
| ----: | :------------- |
|     0 | None (Invalid) |
|     1 | None (Invalid) |
|     2 | North          |
|     3 | South          |
|     4 | West           |
|     5 | East           |
|  6-15 | None (Invalid) |

## Bed

Beds use the highest bit to say whether they're the foot or the head block.
The lower 2-Bits indicate the beds direction, while the highest bit indicates whether the bed is the foot `0` or head `1`.
Their direction will be determined based on which way the player needs to stand to place it.

| Value | Direction     |
| ----: | :------------ |
|     0 | South         |
|     1 | East          |
|     2 | North         |
|     3 | West          |
|   4-7 | (Same as 0-3) |

## Wool

Wool exists in 16 distinct colors.

| Value | Color                                                         |
| ----: | :------------------------------------------------------------ |
|     0 | <ColorSwatch color="#FFFFFF" :showLabel="false" /> White      |
|     1 | <ColorSwatch color="#FC933F" :showLabel="false" /> Orange     |
|     2 | <ColorSwatch color="#DC56E7" :showLabel="false" /> Magenta    |
|     3 | <ColorSwatch color="#77A0F2" :showLabel="false" /> Light Blue |
|     4 | <ColorSwatch color="#DFCF21" :showLabel="false" /> Yellow     |
|     5 | <ColorSwatch color="#45D938" :showLabel="false" /> Lime       |
|     6 | <ColorSwatch color="#F697B2" :showLabel="false" /> Pink       |
|     7 | <ColorSwatch color="#4D4D4D" :showLabel="false" /> Gray       |
|     8 | <ColorSwatch color="#B6BEBE" :showLabel="false" /> Light Gray |
|     9 | <ColorSwatch color="#2F86AC" :showLabel="false" /> Cyan       |
|    10 | <ColorSwatch color="#953FE1" :showLabel="false" /> Purple     |
|    11 | <ColorSwatch color="#2D3CB1" :showLabel="false" /> Blue       |
|    12 | <ColorSwatch color="#633C21" :showLabel="false" /> Brown      |
|    13 | <ColorSwatch color="#41591C" :showLabel="false" /> Green      |
|    14 | <ColorSwatch color="#BC3530" :showLabel="false" /> Red        |
|    15 | <ColorSwatch color="#201B1B" :showLabel="false" /> Black      |

> [!NOTE]
> The color swatches were estimated by dividing the colored wool textures with the white one, then averaging the resulting images. This gets us decently close to the original colors that were used before the wool texture was applied ontop.

## (Double) Slabs

| Value | Direction               |
| ----: | :---------------------- |
|     0 | Stone                   |
|     1 | Sandstone               |
|     2 | Planks/Wood             |
|     3 | Cobblestone             |
|  4-15 | 6-Sided Stone (Invalid) |

## Torch

The "facing" direction of a torch is determined by the direction it's sticking out towards.

| Value | Direction    |
| ----: | :----------- |
|     0 | Up (Invalid) |
|     1 | West         |
|     2 | East         |
|     3 | South        |
|     4 | North        |
|     5 | Up           |
|  6-15 | Up (Invalid) |

## Stairs

The "facing" direction is determined by which way the player needs to stand to place it.

| Value | Direction |
| ----: | :-------- |
|     0 | East      |
|     1 | West      |
|     2 | South     |
|     3 | North     |
|  4-15 | (Invalid) |

Values 4 to 15 do not render.

## Signs

### Grounded

The "facing" direction is determined by which way the text would go.
The angles are given relative to West.

| Value |        Direction | Angle  |
| ----: | ---------------: | :----- |
|     0 |            North | 0°     |
|     1 | North-North-East | 22.5°  |
|     2 |       North-East | 45°    |
|     3 |  East-North-East | 67.5°  |
|     4 |             East | 90°    |
|     5 |  East-South-East | 112.5° |
|     6 |       South-East | 135°   |
|     7 | South-South-East | 157.5° |
|     8 |            South | 180°   |
|     8 | South-South-West | 202.5° |
|    10 |       South-West | 225°   |
|    11 |  West-South-West | 247.5° |
|    12 |             West | 270°   |
|    13 |  West-North-West | 292.5° |
|    14 |       North-West | 315°   |
|    15 | North-North-West | 337.5° |

## Rails

| Value | Direction   |
| ----: | :---------- |
|     0 | North/South |
|     1 | East/West   |
|     2 | East/Up     |
|     3 | West/Up     |
|     4 | North/Up    |
|     5 | South/Up    |
|     6 | East/South  |
|     7 | West/South  |
|     8 | West/North  |
|     9 | East/West   |
| 10-15 | (Invalid)   |

## Doors

The state of a door can be figured out via a bitmask. We'll use the direction the player faces while placing to determine the direction.

| Bit   | Meaning                                      |
| ----- | -------------------------------------------- |
| 3     | `0` Bottom, `1` Top                          |
| 2     | `0` Closed, `1` Open                         |
| 1 - 0 | `00` North, `01` East, `10` South, `11` West |

| Value | Direction              |
| ----: | :--------------------- |
|     0 | East (Bottom, Closed)  |
|     1 | South (Bottom, Closed) |
|     2 | West (Bottom, Closed)  |
|     3 | North (Bottom, Closed) |
|     4 | East (Bottom, Open)    |
|     5 | South (Bottom, Open)   |
|     6 | West (Bottom, Open)    |
|     7 | North (Bottom, Open)   |
|     8 | East (Top, Closed)     |
|     9 | South (Top, Closed)    |
|    10 | West (Top, Closed)     |
|    11 | North (Top, Closed)    |
|    12 | East (Top, Open)       |
|    13 | South (Top, Open)      |
|    14 | West (Top, Open)       |
|    15 | North (Top, Open)      |

## Trapdoors

The state of a trapdoor can be figured out via a bitmask. Their direction is determined by which way they show up when placed by a player.

| Bit   | Meaning                                      |
| ----- | -------------------------------------------- |
| 3     | (Ignored)                                    |
| 2     | `0` Closed, `1` Open                         |
| 1 - 0 | `00` South, `01` North, `10` East, `11` West |

|  Value | Direction           |
| -----: | :------------------ |
|      0 | South (Closed)      |
|      1 | North (Closed)      |
|      2 | East (Closed)       |
|      3 | West (Closed)       |
|      4 | South (Open)        |
|      5 | North (Open)        |
|      6 | East (Open)         |
|      7 | West (Open)         |
| 8 - 15 | (Repeats, Invalid ) |

## Pumpkin/Jack'o'Lantern

The direction their face is on is chosen.

| Value | Direction |
| ----: | :-------- |
|     0 | South     |
|     1 | West      |
|     2 | North     |
|     3 | East      |
|  4-15 | (Invalid) |

## Lever

The "facing" direction of a lever is determined by the direction it's sticking out towards.

The lower 3 bits are used for the direction, the highest bit is used for whether the lever is off `0` or on `1`.

| Value | Direction        |
| ----: | :--------------- |
|     0 | (Invalid)        |
|     1 | West             |
|     2 | East             |
|     3 | South            |
|     4 | North            |
|     5 | Up (North-South) |
|     6 | Up (East-West)   |
|     7 | (Invalid)        |

## Button

The direction they're facing out towards is chosen.
The lower 3 bits are used for the direction, the highest bit is used for whether the lever is off `0` or on `1`.

| Value | Direction |
| ----: | :-------- |
|     0 | (Invalid) |
|     1 | West      |
|     2 | East      |
|     3 | South     |
|     4 | North     |
|   5-7 | (Invalid) |

## Redstone Repeater

The direction they output towards is chosen. The lower 2 bits indicate their direction,
the upper 2 bits indicate their delay.

|  Value | Direction |
| -----: | :-------- |
| `xx00` | North     |
| `xx01` | East      |
| `xx10` | South     |
| `xx11` | West      |

|  Value | Delay (ticks) |
| -----: | :------------ |
| `00xx` | `2`           |
| `01xx` | `4`           |
| `10xx` | `6`           |
| `11xx` | `8`           |

## Pistons

Pistons and Sticky pistons use their metadata values to indicate both their direction and state.
The lower 3-Bits indicate the pistons direction, while the remaining bit indicates whether the piston is retracted `0` or extended `1`.

| Value | Direction     |
| ----: | :------------ |
|     0 | Down          |
|     1 | Up            |
|     2 | North         |
|     3 | South         |
|     4 | East          |
|     5 | West          |
|     6 | All (Invalid) |
|     7 | All (Invalid) |

## Piston Head

The piston head uses it's metadata like the pistons, though with one difference. The last bit is used to indicate whether the piston head is normal `0` or sticky `1`.

| Value | Direction      |
| ----: | :------------- |
|     0 | Down (Normal)  |
|     1 | Up (Normal)    |
|     2 | North (Normal) |
|     3 | South (Normal) |
|     4 | East (Normal)  |
|     5 | West (Normal)  |
|   6-7 | (Invalid)      |
|     8 | Down (Sticky)  |
|     9 | Up (Sticky)    |
|    10 | North (Sticky) |
|    11 | South (Sticky) |
|    12 | East (Sticky)  |
|    13 | West (Sticky)  |
| 14-15 | (Invalid)      |

Values 6, 7, 14 and 15 do not render.
