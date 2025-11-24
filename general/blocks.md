---
title: Blocks
nav_order: 5
layout: home
parent: General
---

# Blocks
{: .no_toc }
Blocks are non-items things that're usually represented as a 3D Cube. Blocks only have 2 properites. An 8-Bit numberic ID and a 4-Bit metadata/damage value.

1. TOC
{:toc}

## Listing
Here is a comprehensive listing of all blocks.

| Value | Name                    | In-game Name                                        | Metadata use                                        |
| ----: | :---------------------- | :-------------------------------------------------- | :-------------------------------------------------- |
| 0     | Air                     |                                                     | |
| 1     | Stone                   | Stone                                               | |
| 2     | Grass                   | Grass                                               | |
| 3     | Dirt                    | Dirt                                                | |
| 4     | Cobblestone             | Cobblestone                                         | |
| 5     | Planks                  | Wooden Planks                                       | |
| 6     | Sapling                 | Sapling                                             | [Wood Type](#saplings) |
| 7     | Bedrock                 | Bedrock                                             | |
| 8     | Water (Flowing)         | Water                                               | [Liquid height](#liquids) |
| 9     | Water (Still)           | Water                                               | [Liquid height](#liquids) |
| 10    | Lava (Flowing)          | Lava                                                | [Liquid height](#liquids) |
| 11    | Lava (Still)            | Lava                                                | [Liquid height](#liquids) |
| 12    | Sand                    | Sand                                                | |
| 13    | Gravel                  | Gravel                                              | |
| 14    | Gold Ore                | Gold Ore                                            | |
| 15    | Iron Ore                | Iron Ore                                            | |
| 16    | Coal Ore                | Coal Ore                                            | |
| 17    | Log                     | Wood                                                | [Wood Type](#logs) |
| 18    | Leaves                  | Leaves                                              | [Leaf Type](#leaves) |
| 19    | Sponge                  | Sponge                                              | |
| 20    | Glass                   | Glass                                               | |
| 21    | Lapis Lazuli Ore        | Lapis Lazuli Ore                                    | |
| 23    | Dispenser               | Dispenser                                           | Direction |
| 24    | Sandstone               | Sandstone                                           | |
| 25    | Noteblock               | Noteblock                                           | |
| 26    | Bed                     | Bed                                                 | Top/Bottom and Direction                            |
| 27    | Powered Rail            | Powered Rail                                        | Direction |
| 28    | Detector Rail           | Detector Rail                                       | Direction |
| 29    | Sticky Piston           | Sticky Piston                                       | Direction |
| 30    | Cobweb                  | Cobweb                                              | |
| 31    | Tallgrass               |                                                     | Shrub `0`, Grass `1`, Fern `2`                      |
| 32    | Deadbush                |                                                     | |
| 33    | Piston                  | Piston                                              | Direction |
| 34    | Piston Head             |                                                     | Direction |
| 35    | Wool                    |                                                     | [Color](#wool) |
| 36    |                         |                                                     | |
| 37    | Dandelion               | Flower                                              | |
| 38    | Rose                    | Rose                                                | |
| 39    | Brown Mushroom          | Mushroom                                            | |
| 40    | Red Mushroom            | Mushroom                                            | |
| 41    | Gold Block              | Block of Gold                                       | |
| 42    | Iron Block              | Block of Iron                                       | |
| 43    | Double Slab             |                                                     | Stone `0`, Sandstone `1`, Wood `2`, Cobblestone `3` |
| 44    | Slab                    | Stone Slab, Sandstone Slab, Wooden Slab, Stone Slab | Stone `0`, Sandstone `1`, Wood `2`, Cobblestone `3` |
| 45    | Bricks                  | Bricks                                              | |
| 46    | TNT                     | TNT                                                 | |
| 47    | Bookshelf               | Bookshelf                                           | |
| 48    | Mossy Cobblestone       | Moss Stone                                          | |
| 49    | Obsidian                | Obsidian                                            | |
| 50    | Torch                   | Torch                                               | Direction |
| 51    | Fire                    | Fire                                                | |
| 52    | Monster Spawner         | Monster Spawner                                     | |
| 53    | Wooden Stairs           | Wooden Stairs                                       | Direction |
| 54    | Chest                   | Chest                                               | |
| 55    | Redstone                | Redstone                                            | Power Level |
| 56    | Diamond Ore             | Diamond Ore                                         | |
| 57    | Diamond Block           | Block of Diamond                                    | |
| 58    | Crafting Table          | Crafting Table                                      | |
| 59    | Wheat                   | Crops                                               | Growth Stage (0-7) |
| 60    | Farmland                | Farmland                                            | >0 if wet |
| 61    | Furnace                 | Furnace                                             | |
| 62    | Furnace (Lit)           | Furnace                                             | |
| 63    | Sign (Ground)           | Sign                                                | Direction |
| 64    | Wooden Door             | Wooden Door                                         | |
| 65    | Ladder                  | Ladder                                              | Direction |
| 66    | Rail                    | Rail                                                | Direction |
| 67    | Cobblestone Stairs      | Stone Stairs                                        | Direction |
| 68    | Sign (Wall)             | Sign                                                | Direction |
| 69    | Lever                   | Lever                                               | Toggled & Direction |
| 70    | Stone Pressure Plate    | Pressure Plate                                      | Toggled |
| 71    | Iron Door               | Iron Door                                           | |
| 72    | Wooden Pressure Plate   | Pressure Plate                                      | Toggled |
| 73    | Redstone Ore (Off)      | Redstone Ore                                        | |
| 74    | Redstone Ore (On)       | Redstone Ore                                        | |
| 75    | Redstone Torch (Off)    | Redstone Torch                                      | |
| 76    | Redstone Torch (On)     | Redstone Torch                                      | |
| 77    | Stone Button            | Button                                              | Toggled & Direction |
| 78    | Snow Layer              | Snow                                                | |
| 79    | Ice                     | Ice                                                 | |
| 80    | Snow Block              | Snow                                                | |
| 81    | Cactus                  | Cactus                                              | |
| 82    | Clay                    | Clay                                                | |
| 83    | Sugarcane               | Sugar cane                                          | |
| 84    | Jukebox                 | Jukebox                                             | |
| 85    | Fence                   | Fence                                               | |
| 86    | Pumpkin                 | Pumpkin                                             | Direction |
| 87    | Netherrack              | Netherrack                                          | |
| 88    | Soulsand                | Soul Sand                                           | |
| 89    | Glowstone               | Glowstone                                           | |
| 90    | Nether Portal           | Portal                                              | |
| 91    | Pumpkin (Lit)           | Jack 'o' Lantern                                    | Direction |
| 92    | Cake                    | Cake                                                | |
| 93    | Redstone Repeater (Off) |                                                     | Direction |
| 94    | Redstone Repeater (On)  |                                                     | Direction |
| 95    | Locked Chest            | Locked chest                                        | |
| 96    | Trapdoor                | Trapdoor                                            | Toggled & Direction |

# Metadata
Many blocks make use of the 4-Bit Metadata values that they have access to.
Often times these are used for indicating their direction. Sometimes they're used for if they're activated, open or if they're a variety of a share base-block, such as the different wool colors or logs.

## Liquids
Liquids indicate their level with their metadata. Generally, the further away they are from a water source, the lower their level gets.

## Wood
All wood or tree-related blocks have related values and behaviors.

### Saplings
Logs have 3 distinct values.

| Value | Color |
| --- | --- |
| 0 | Oak |
| 1 | Spruce |
| 2 | Birch |

Value `3` also shows up as oak, but is unobtainable under normal circumstances.

The upper 2-bits are used to indicate the age of the sapling.

### Logs
Logs have 3 distinct values.

| Value | Color |
| --- | --- |
| 0 | Oak |
| 1 | Spruce |
| 2 | Birch |

Any other value will appear as oak.

### Leaves
Leaves have 3/4 distinct values. Only oak is biome-colored.

| Value | Color |
| --- | --- |
| 0 | Oak |
| 1 | Spruce |
| 2 | Birch |
| 4 | Oak (spruce colors) |

The values after this simply follow the same pattern.

## Wool
Wool exists in 16 distinct colors.

| Value | Color |
| --- | --- |
| 0 | <span class="color-swatch" style="background-color:#FFFFFF;"></span> White |
| 1 | <span class="color-swatch" style="background-color:#FC933F;"></span> Orange |
| 2 | <span class="color-swatch" style="background-color:#DC56E7;"></span> Magenta |
| 3 | <span class="color-swatch" style="background-color:#77A0F2;"></span> Light Blue |
| 4 | <span class="color-swatch" style="background-color:#DFCF21;"></span> Yellow |
| 5 | <span class="color-swatch" style="background-color:#45D938;"></span> Lime |
| 6 | <span class="color-swatch" style="background-color:#F697B2;"></span> Pink |
| 7 | <span class="color-swatch" style="background-color:#4D4D4D;"></span> Gray |
| 8 | <span class="color-swatch" style="background-color:#B6BEBE;"></span> Light Gray |
| 9 | <span class="color-swatch" style="background-color:#2F86AC;"></span> Cyan |
| 10 | <span class="color-swatch" style="background-color:#953FE1;"></span> Purple |
| 11 | <span class="color-swatch" style="background-color:#2D3CB1;"></span> Blue |
| 12 | <span class="color-swatch" style="background-color:#633C21;"></span> Brown |
| 13 | <span class="color-swatch" style="background-color:#41591C;"></span> Green |
| 14 | <span class="color-swatch" style="background-color:#BC3530;"></span> Red |
| 15 | <span class="color-swatch" style="background-color:#201B1B;"></span> Black |

{: .note }
> The color swatches were estimated by dividing the colored wool textures with the white one, then averaging the resulting images. This gets us decently close to the original colors that were used before the wool texture was applied ontop.