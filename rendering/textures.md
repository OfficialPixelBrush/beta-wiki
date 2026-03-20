---
order: 2
description: Textures are what give each rendered block and item their colorful, detailed appearance.
---

# Textures

description: Textures are what give each rendered block and item their colorful, detailed appearance.

## Texture Atlas

There exist two texture atlases, one for blocks and one for items. Both atlases are `256x256` with the default texture pack, where each individual block face/item is `16x16` pixels. Each block/item shares its textures with every other block, only having a unique appearance by zooming into and showing different parts of the atlas by using differing UV-Coordinates.

|                          Block Textures                          |
| :--------------------------------------------------------------: |
| ![The full block texture atlas](/beta-wiki/textures/terrain.png) |

The texture atlases are indexed from `0` to `255`.

### Block Atlas

|   # | Row/Column |                            Texture                            | Label                          | Notes                                                                            |
| --: | :--------: | :-----------------------------------------------------------: | :----------------------------- | :------------------------------------------------------------------------------- |
|   0 |   `0,0`    |         ![](/beta-wiki/textures/blocks/grass_top.png)         | Grass Top (Base)               | Biome Tinted                                                                     |
|   1 |   `0,1`    |           ![](/beta-wiki/textures/blocks/stone.png)           | Stone                          |                                                                                  |
|   2 |   `0,2`    |           ![](/beta-wiki/textures/blocks/dirt.png)            | Dirt                           |                                                                                  |
|   3 |   `0,3`    |        ![](/beta-wiki/textures/blocks/grass_side.png)         | Grass-side (Base)              |                                                                                  |
|   4 |   `0,4`    |          ![](/beta-wiki/textures/blocks/planks.png)           | Planks                         |                                                                                  |
|   5 |   `0,5`    |      ![](/beta-wiki/textures/blocks/stone_slab_side.png)      | Stone Slab (Side)              |                                                                                  |
|   6 |   `0,6`    |      ![](/beta-wiki/textures/blocks/stone_slab_top.png)       | Stone Slab (Top)               |                                                                                  |
|   7 |   `0,7`    |          ![](/beta-wiki/textures/blocks/bricks.png)           | Bricks                         |                                                                                  |
|   8 |   `0,8`    |         ![](/beta-wiki/textures/blocks/tnt_side.png)          | TNT (Side)                     |                                                                                  |
|   9 |   `0,9`    |          ![](/beta-wiki/textures/blocks/tnt_top.png)          | TNT (Top)                      |                                                                                  |
|  10 |   `0,10`   |        ![](/beta-wiki/textures/blocks/tnt_bottom.png)         | TNT (Bottom)                   |                                                                                  |
|  11 |   `0,11`   |          ![](/beta-wiki/textures/blocks/cobweb.png)           | Cobweb                         |                                                                                  |
|  12 |   `0,12`   |           ![](/beta-wiki/textures/blocks/rose.png)            | Rose                           |                                                                                  |
|  13 |   `0,13`   |         ![](/beta-wiki/textures/blocks/dandelion.png)         | Dandelion                      |                                                                                  |
|  14 |   `0,14`   |    ![](/beta-wiki/textures/blocks/portal_placeholder.png)     | Nether Portal (Placeholder)    | Pure blue                                                                        |
|  15 |   `0,15`   |        ![](/beta-wiki/textures/blocks/oak_sapling.png)        | Oak Sapling                    |                                                                                  |
|  16 |   `1,0`    |        ![](/beta-wiki/textures/blocks/cobblestone.png)        | Cobblestone                    |                                                                                  |
|  17 |   `1,1`    |          ![](/beta-wiki/textures/blocks/bedrock.png)          | Bedrock                        |                                                                                  |
|  18 |   `1,2`    |           ![](/beta-wiki/textures/blocks/sand.png)            | Sand                           |                                                                                  |
|  19 |   `1,3`    |          ![](/beta-wiki/textures/blocks/gravel.png)           | Gravel                         |                                                                                  |
|  20 |   `1,4`    |       ![](/beta-wiki/textures/blocks/oak_log_side.png)        | Oak Log (Side)                 |                                                                                  |
|  21 |   `1,5`    |          ![](/beta-wiki/textures/blocks/log_top.png)          | Log (Top)                      | Used by all logs                                                                 |
|  22 |   `1,6`    |        ![](/beta-wiki/textures/blocks/iron_block.png)         | Iron Block                     |                                                                                  |
|  23 |   `1,7`    |        ![](/beta-wiki/textures/blocks/gold_block.png)         | Gold Block                     |                                                                                  |
|  24 |   `1,8`    |       ![](/beta-wiki/textures/blocks/diamond_block.png)       | Diamond Block                  |                                                                                  |
|  25 |   `1,9`    |         ![](/beta-wiki/textures/blocks/chest_top.png)         | Chest (Top/Bottom)             |                                                                                  |
|  26 |   `1,10`   |        ![](/beta-wiki/textures/blocks/chest_side.png)         | Chest (Side)                   |                                                                                  |
|  27 |   `1,11`   |        ![](/beta-wiki/textures/blocks/chest_front.png)        | Chest (Front)                  |                                                                                  |
|  28 |   `1,12`   |       ![](/beta-wiki/textures/blocks/red_mushroom.png)        | Red Mushroom                   |                                                                                  |
|  29 |   `1,13`   |      ![](/beta-wiki/textures/blocks/brown_mushroom.png)       | Brown Mushroom                 |                                                                                  |
|  31 |   `1,15`   |     ![](/beta-wiki/textures/blocks/fire_placeholder.png)      | Fire (Placeholder)             |                                                                                  |
|  32 |   `2,0`    |         ![](/beta-wiki/textures/blocks/gold_ore.png)          | Gold Ore                       |                                                                                  |
|  33 |   `2,1`    |         ![](/beta-wiki/textures/blocks/iron_ore.png)          | Iron Ore                       |                                                                                  |
|  34 |   `2,2`    |         ![](/beta-wiki/textures/blocks/coal_ore.png)          | Coal Ore                       |                                                                                  |
|  35 |   `2,3`    |         ![](/beta-wiki/textures/blocks/bookshelf.png)         | Bookshelf                      |                                                                                  |
|  36 |   `2,4`    |     ![](/beta-wiki/textures/blocks/mossy_cobblestone.png)     | Mossy Cobblestone              |                                                                                  |
|  37 |   `2,5`    |         ![](/beta-wiki/textures/blocks/obsidian.png)          | Obsidian                       |
|  38 |   `2,6`    |        ![](/beta-wiki/textures/blocks/grass_side.png)         | Grass-side (Overlay)           | Biome Tinted                                                                     |
|  39 |   `2,7`    |         ![](/beta-wiki/textures/blocks/tallgrass.png)         | Tallgrass                      | Biome Tinted                                                                     |
|  40 |   `2,8`    |         ![](/beta-wiki/textures/blocks/grass_top.png)         | Grass Top (Overlay)            | Biome Tinted                                                                     |
|  41 |   `2,9`    |  ![](/beta-wiki/textures/blocks/double_chest_front_left.png)  | Double Chest (Front Left)      |                                                                                  |
|  42 |   `2,10`   | ![](/beta-wiki/textures/blocks/double_chest_front_right.png)  | Double Chest (Front Right)     |                                                                                  |
|  43 |   `2,11`   |    ![](/beta-wiki/textures/blocks/crafting_table_top.png)     | Crafting Table (Top)           |                                                                                  |
|  44 |   `2,12`   |       ![](/beta-wiki/textures/blocks/furnace_front.png)       | Furnace (Front)                |                                                                                  |
|  45 |   `2,13`   |  ![](/beta-wiki/textures/blocks/furnace_dispenser_side.png)   | Furnace/Dispenser (Side)       |                                                                                  |
|  46 |   `2,14`   |      ![](/beta-wiki/textures/blocks/dispenser_front.png)      | Dispenser (Front)              |                                                                                  |
|  47 |   `2,15`   |     ![](/beta-wiki/textures/blocks/fire_placeholder.png)      | Fire (Placeholder)             |                                                                                  |
|  48 |   `3,0`    |          ![](/beta-wiki/textures/blocks/sponge.png)           | Sponge                         |                                                                                  |
|  49 |   `3,1`    |           ![](/beta-wiki/textures/blocks/glass.png)           | Glass                          |                                                                                  |
|  50 |   `3,2`    |        ![](/beta-wiki/textures/blocks/diamond_ore.png)        | Diamond Ore                    |                                                                                  |
|  51 |   `3,3`    |       ![](/beta-wiki/textures/blocks/redstone_ore.png)        | Redstone Ore                   |                                                                                  |
|  52 |   `3,4`    |  ![](/beta-wiki/textures/blocks/oak_leaves_transparent.png)   | Oak/Birch leaves (Transparent) |                                                                                  |
|  53 |   `3,5`    |     ![](/beta-wiki/textures/blocks/oak_leaves_opaque.png)     | Oak/Birch leaves (Opaque)      |                                                                                  |
|  55 |   `3,7`    |      ![](/beta-wiki/textures/blocks/deadbush_shrub.png)       | Deadbush/Shrub                 | Shrubs are biome tinted                                                          |
|  56 |   `3,8`    |           ![](/beta-wiki/textures/blocks/fern.png)            | Fern                           |                                                                                  |
|  57 |   `3,9`    |  ![](/beta-wiki/textures/blocks/double_chest_back_left.png)   | Double Chest (Back Left)       |                                                                                  |
|  58 |   `3,10`   |  ![](/beta-wiki/textures/blocks/double_chest_back_right.png)  | Double Chest (Back Right)      |                                                                                  |
|  59 |   `3,11`   |   ![](/beta-wiki/textures/blocks/crafting_table_side_1.png)   | Crafting Table (Side)          |                                                                                  |
|  60 |   `3,12`   |   ![](/beta-wiki/textures/blocks/crafting_table_side_2.png)   | Crafting Table (Side)          |                                                                                  |
|  61 |   `3,13`   |     ![](/beta-wiki/textures/blocks/lit_furnace_front.png)     | Lit Furnace (Front)            |                                                                                  |
|  62 |   `3,14`   |   ![](/beta-wiki/textures/blocks/furnace_dispenser_top.png)   | Furnace/Dispenser (Top)        |                                                                                  |
|  63 |   `3,15`   |      ![](/beta-wiki/textures/blocks/spruce_sapling.png)       | Spruce Sapling                 |                                                                                  |
|  64 |   `4,0`    |        ![](/beta-wiki/textures/blocks/white_wool.png)         | Wool (White)                   |                                                                                  |
|  65 |   `4,1`    |        ![](/beta-wiki/textures/blocks/mob_spawner.png)        | Mob Spawner                    |                                                                                  |
|  66 |   `4,2`    |           ![](/beta-wiki/textures/blocks/snow.png)            | Snow                           |                                                                                  |
|  67 |   `4,3`    |            ![](/beta-wiki/textures/blocks/ice.png)            | Ice                            |                                                                                  |
|  68 |   `4,4`    |      ![](/beta-wiki/textures/blocks/grass_side_snow.png)      | Grass-side (Snow)              |                                                                                  |
|  69 |   `4,5`    |        ![](/beta-wiki/textures/blocks/cactus_top.png)         | Cactus (Top)                   |                                                                                  |
|  70 |   `4,6`    |        ![](/beta-wiki/textures/blocks/cactus_side.png)        | Cactus (Side)                  |                                                                                  |
|  71 |   `4,7`    |       ![](/beta-wiki/textures/blocks/cactus_bottom.png)       | Cactus (Bottom)                |                                                                                  |
|  72 |   `4,8`    |           ![](/beta-wiki/textures/blocks/clay.png)            | Clay                           |                                                                                  |
|  73 |   `4,9`    |         ![](/beta-wiki/textures/blocks/sugarcane.png)         | Sugarcane                      |                                                                                  |
|  74 |   `4,10`   |     ![](/beta-wiki/textures/blocks/noteblock_jukebox.png)     | Noteblock/Jukebox              |                                                                                  |
|  75 |   `4,11`   |        ![](/beta-wiki/textures/blocks/jukebox_top.png)        | Jukebox (Top)                  |                                                                                  |
|  79 |   `4,15`   |       ![](/beta-wiki/textures/blocks/birch_sapling.png)       | Birch Sapling                  |                                                                                  |
|  80 |   `5,0`    |           ![](/beta-wiki/textures/blocks/torch.png)           | Torch                          |                                                                                  |
|  81 |   `5,1`    |      ![](/beta-wiki/textures/blocks/wooden_door_top.png)      | Wooden Door (Top)              |                                                                                  |
|  82 |   `5,2`    |       ![](/beta-wiki/textures/blocks/iron_door_top.png)       | Iron Door (Top)                |                                                                                  |
|  83 |   `5,3`    |          ![](/beta-wiki/textures/blocks/ladder.png)           | Ladder                         |                                                                                  |
|  84 |   `5,4`    |         ![](/beta-wiki/textures/blocks/trapdoor.png)          | Trapdoor                       |                                                                                  |
|  86 |   `5,6`    |       ![](/beta-wiki/textures/blocks/farmland_wet.png)        | Farmland (Wet)                 |                                                                                  |
|  87 |   `5,7`    |       ![](/beta-wiki/textures/blocks/farmland_dry.png)        | Farmland (Dry)                 |                                                                                  |
|  88 |   `5,8`    |       ![](/beta-wiki/textures/blocks/wheat_level_0.png)       | Wheat (Level 0)                |                                                                                  |
|  89 |   `5,9`    |       ![](/beta-wiki/textures/blocks/wheat_level_1.png)       | Wheat (Level 1)                |                                                                                  |
|  90 |   `5,10`   |       ![](/beta-wiki/textures/blocks/wheat_level_2.png)       | Wheat (Level 2)                |                                                                                  |
|  91 |   `5,11`   |       ![](/beta-wiki/textures/blocks/wheat_level_3.png)       | Wheat (Level 3)                |                                                                                  |
|  92 |   `5,12`   |       ![](/beta-wiki/textures/blocks/wheat_level_4.png)       | Wheat (Level 4)                |                                                                                  |
|  93 |   `5,13`   |       ![](/beta-wiki/textures/blocks/wheat_level_5.png)       | Wheat (Level 5)                |                                                                                  |
|  94 |   `5,14`   |       ![](/beta-wiki/textures/blocks/wheat_level_6.png)       | Wheat (Level 6)                |                                                                                  |
|  95 |   `5,15`   |       ![](/beta-wiki/textures/blocks/wheat_level_7.png)       | Wheat (Level 7)                |                                                                                  |
|  96 |   `6,0`    |           ![](/beta-wiki/textures/blocks/lever.png)           | Lever                          |                                                                                  |
|  97 |   `6,1`    |    ![](/beta-wiki/textures/blocks/wooden_door_bottom.png)     | Wooden Door (Bottom)           |                                                                                  |
|  98 |   `6,2`    |     ![](/beta-wiki/textures/blocks/iron_door_bottom.png)      | Iron Door (Bottom)             |                                                                                  |
|  99 |   `6,3`    |   ![](/beta-wiki/textures/blocks/redstone_torch_active.png)   | Redstone Torch (Active)        |                                                                                  |
| 102 |   `6,6`    |        ![](/beta-wiki/textures/blocks/pumpkin_top.png)        | Pumpkin (Top)                  |                                                                                  |
| 103 |   `6,7`    |        ![](/beta-wiki/textures/blocks/netherrack.png)         | Netherrack                     |                                                                                  |
| 104 |   `6,8`    |         ![](/beta-wiki/textures/blocks/soul_sand.png)         | Soul Sand                      |                                                                                  |
| 105 |   `6,9`    |         ![](/beta-wiki/textures/blocks/glowstone.png)         | Glowstone                      |                                                                                  |
| 106 |   `6,10`   |    ![](/beta-wiki/textures/blocks/sticky_piston_front.png)    | Sticky Piston (Front)          |                                                                                  |
| 107 |   `6,11`   |       ![](/beta-wiki/textures/blocks/piston_front.png)        | Piston (Front)                 |                                                                                  |
| 108 |   `6,12`   |        ![](/beta-wiki/textures/blocks/piston_side.png)        | Piston (Side)                  |                                                                                  |
| 109 |   `6,13`   |       ![](/beta-wiki/textures/blocks/piston_bottom.png)       | Piston (Bottom)                |                                                                                  |
| 110 |   `6,14`   |    ![](/beta-wiki/textures/blocks/piston_inside_front.png)    | Piston (Inside Front)          |                                                                                  |
| 112 |   `7,0`    |         ![](/beta-wiki/textures/blocks/rail_turn.png)         | Rail (Turn)                    |                                                                                  |
| 113 |   `7,1`    |        ![](/beta-wiki/textures/blocks/black_wool.png)         | Wool (Black)                   |                                                                                  |
| 114 |   `7,2`    |      ![](/beta-wiki/textures/blocks/dark_grey_wool.png)       | Wool (Dark Gray)               |                                                                                  |
| 115 |   `7,3`    |  ![](/beta-wiki/textures/blocks/redstone_torch_inactive.png)  | Redstone Torch (Inactive)      |                                                                                  |
| 116 |   `7,4`    |      ![](/beta-wiki/textures/blocks/spruce_log_side.png)      | Spruce Log (Side)              |                                                                                  |
| 117 |   `7,5`    |      ![](/beta-wiki/textures/blocks/birch_log_side.png)       | Birch Log (Side)               |                                                                                  |
| 118 |   `7,6`    |       ![](/beta-wiki/textures/blocks/pumpkin_side.png)        | Pumpkin (Side)                 |                                                                                  |
| 119 |   `7,7`    |       ![](/beta-wiki/textures/blocks/pumpkin_front.png)       | Pumpkin (Front)                |                                                                                  |
| 120 |   `7,8`    |   ![](/beta-wiki/textures/blocks/jack_o_lantern_front.png)    | Jack o' Lantern (Front)        |                                                                                  |
| 121 |   `7,9`    |         ![](/beta-wiki/textures/blocks/cake_top.png)          | Cake (Top)                     |                                                                                  |
| 122 |   `7,10`   |       ![](/beta-wiki/textures/blocks/cake_outside.png)        | Cake (Outside)                 |                                                                                  |
| 123 |   `7,11`   |        ![](/beta-wiki/textures/blocks/cake_inside.png)        | Cake (Inside)                  |                                                                                  |
| 124 |   `7,12`   |        ![](/beta-wiki/textures/blocks/cake_bottom.png)        | Cake (Bottom)                  |                                                                                  |
| 128 |   `8,0`    |       ![](/beta-wiki/textures/blocks/rail_straight.png)       | Rail (Straight)                |                                                                                  |
| 129 |   `8,1`    |         ![](/beta-wiki/textures/blocks/red_wool.png)          | Wool (Red)                     |                                                                                  |
| 130 |   `8,2`    |         ![](/beta-wiki/textures/blocks/pink_wool.png)         | Wool (Pink)                    |                                                                                  |
| 131 |   `8,3`    |     ![](/beta-wiki/textures/blocks/repeater_inactive.png)     | Repeater (Inactive)            |                                                                                  |
| 132 |   `8,4`    | ![](/beta-wiki/textures/blocks/spruce_leaves_transparent.png) | Spruce leaves (Transparent)    |                                                                                  |
| 133 |   `8,5`    |   ![](/beta-wiki/textures/blocks/spruce_leaves_opaque.png)    | Spruce leaves (Opaque)         |                                                                                  |
| 134 |   `8,6`    |        ![](/beta-wiki/textures/blocks/bed_top_end.png)        | Bed (Top End)                  |                                                                                  |
| 135 |   `8,7`    |       ![](/beta-wiki/textures/blocks/bed_top_head.png)        | Bed (Top Head)                 |                                                                                  |
| 140 |   `8,12`   |         ![](/beta-wiki/textures/blocks/cake_item.png)         | Cake (Item)                    |                                                                                  |
| 144 |   `9,0`    |    ![](/beta-wiki/textures/blocks/lapis_lazuli_block.png)     | Lapis-Lazuli Block             |                                                                                  |
| 145 |   `9,1`    |      ![](/beta-wiki/textures/blocks/dark_green_wool.png)      | Wool (Dark Green)              |                                                                                  |
| 146 |   `9,2`    |         ![](/beta-wiki/textures/blocks/lime_wool.png)         | Wool (Lime Green)              |                                                                                  |
| 147 |   `9,3`    |      ![](/beta-wiki/textures/blocks/repeater_active.png)      | Repeater (Active)              |                                                                                  |
| 149 |   `9,5`    |       ![](/beta-wiki/textures/blocks/bed_front_end.png)       | Bed (Front End)                |                                                                                  |
| 150 |   `9,6`    |       ![](/beta-wiki/textures/blocks/bed_side_end.png)        | Bed (Side End)                 |                                                                                  |
| 151 |   `9,7`    |       ![](/beta-wiki/textures/blocks/bed_side_head.png)       | Bed (Side Head)                |                                                                                  |
| 152 |   `9,8`    |      ![](/beta-wiki/textures/blocks/bed_front_head.png)       | Bed (Front Head)               |                                                                                  |
| 160 |   `10,0`   |     ![](/beta-wiki/textures/blocks/lapis_lazuli_ore.png)      | Lapis-Lazuli Ore               |                                                                                  |
| 161 |   `10,1`   |        ![](/beta-wiki/textures/blocks/brown_wool.png)         | Wool (Brown)                   |                                                                                  |
| 162 |   `10,2`   |        ![](/beta-wiki/textures/blocks/yellow_wool.png)        | Wool (Yellow)                  |                                                                                  |
| 163 |   `10,3`   |  ![](/beta-wiki/textures/blocks/powered_rails_inactive.png)   | Powered Rails (Inactive)       |                                                                                  |
| 164 |   `10,4`   |      ![](/beta-wiki/textures/blocks/redstone_cross.png)       | Redstone (Cross)               | Power-level tinted                                                               |
| 165 |   `10,5`   |       ![](/beta-wiki/textures/blocks/redstone_line.png)       | Redstone (Line)                | Power-level tinted                                                               |
| 176 |   `11,0`   |       ![](/beta-wiki/textures/blocks/sandstone_top.png)       | Sandstone (Top)                |                                                                                  |
| 177 |   `11,1`   |      ![](/beta-wiki/textures/blocks/dark_blue_wool.png)       | Wool (Dark Blue)               |                                                                                  |
| 178 |   `11,2`   |      ![](/beta-wiki/textures/blocks/light_blue_wool.png)      | Wool (Light Blue)              |                                                                                  |
| 179 |   `11,3`   |   ![](/beta-wiki/textures/blocks/powered_rails_active.png)    | Powered Rails (Active)         |                                                                                  |
| 192 |   `12,0`   |      ![](/beta-wiki/textures/blocks/sandstone_side.png)       | Sandstone (Side)               |                                                                                  |
| 193 |   `12,1`   |        ![](/beta-wiki/textures/blocks/purple_wool.png)        | Wool (Purple)                  |                                                                                  |
| 194 |   `12,2`   |       ![](/beta-wiki/textures/blocks/magenta_wool.png)        | Wool (Magenta)                 |                                                                                  |
| 195 |   `12,3`   |      ![](/beta-wiki/textures/blocks/activator_rail.png)       | Activator Rail                 |                                                                                  |
| 205 |  `12,13`   |     ![](/beta-wiki/textures/blocks/water_placeholder.png)     | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 206 |  `12,14`   |     ![](/beta-wiki/textures/blocks/water_placeholder.png)     | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 207 |  `12,15`   |     ![](/beta-wiki/textures/blocks/water_placeholder.png)     | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 208 |   `13,0`   |     ![](/beta-wiki/textures/blocks/sandstone_bottom.png)      | Sandstone (Bottom)             |                                                                                  |
| 209 |   `13,1`   |         ![](/beta-wiki/textures/blocks/cyan_wool.png)         | Wool (Cyan)                    |                                                                                  |
| 210 |   `13,2`   |        ![](/beta-wiki/textures/blocks/orange_wool.png)        | Wool (Orange)                  |                                                                                  |
| 222 |  `13,14`   |     ![](/beta-wiki/textures/blocks/water_placeholder.png)     | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 223 |  `13,15`   |     ![](/beta-wiki/textures/blocks/water_placeholder.png)     | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 225 |   `14,1`   |         ![](/beta-wiki/textures/blocks/grey_wool.png)         | Wool (Gray)                    |                                                                                  |
| 237 |  `14,13`   |     ![](/beta-wiki/textures/blocks/lava_placeholder.png)      | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 238 |  `14,14`   |     ![](/beta-wiki/textures/blocks/lava_placeholder.png)      | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 239 |  `14,15`   |     ![](/beta-wiki/textures/blocks/lava_placeholder.png)      | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 240 |   `15,0`   |  ![](/beta-wiki/textures/blocks/block_breaking_level_0.png)   | Block Breaking (Level 0)       |                                                                                  |
| 241 |   `15,1`   |  ![](/beta-wiki/textures/blocks/block_breaking_level_1.png)   | Block Breaking (Level 1)       |                                                                                  |
| 242 |   `15,2`   |  ![](/beta-wiki/textures/blocks/block_breaking_level_2.png)   | Block Breaking (Level 2)       |                                                                                  |
| 243 |   `15,3`   |  ![](/beta-wiki/textures/blocks/block_breaking_level_3.png)   | Block Breaking (Level 3)       |                                                                                  |
| 244 |   `15,4`   |  ![](/beta-wiki/textures/blocks/block_breaking_level_4.png)   | Block Breaking (Level 4)       |                                                                                  |
| 245 |   `15,5`   |  ![](/beta-wiki/textures/blocks/block_breaking_level_5.png)   | Block Breaking (Level 5)       |                                                                                  |
| 246 |   `15,6`   |  ![](/beta-wiki/textures/blocks/block_breaking_level_6.png)   | Block Breaking (Level 6)       |                                                                                  |
| 247 |   `15,7`   |  ![](/beta-wiki/textures/blocks/block_breaking_level_7.png)   | Block Breaking (Level 7)       |                                                                                  |
| 248 |   `15,8`   |  ![](/beta-wiki/textures/blocks/block_breaking_level_8.png)   | Block Breaking (Level 8)       |                                                                                  |
| 249 |   `15,9`   |  ![](/beta-wiki/textures/blocks/block_breaking_level_9.png)   | Block Breaking (Level 9)       |                                                                                  |
| 254 |  `15,14`   |     ![](/beta-wiki/textures/blocks/lava_placeholder.png)      | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 255 |  `15,15`   |     ![](/beta-wiki/textures/blocks/lava_placeholder.png)      | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |

Any spaces that're not filled with a texture are usually occupied by a pink grid-piece, or are entirely transparent.
| Empty | Transparent |
| :----------------------------------------------: | :-----------------------------------------------: |
| ![Missing Texture](/beta-wiki/textures/blocks/missing.png) | ![Transparent Texture](/beta-wiki/textures/transparent.png) |

## Item Atlas

The item texture atlas is utilized similarly to the block texture atlas.

|                      Item Textures                       |
| :------------------------------------------------------: |
| ![The item texture atlas](/beta-wiki/textures/items.png) |

|   # | Row/Column |                         Texture                         | Label                |
| --: | :--------: | :-----------------------------------------------------: | :------------------- |
|   0 |   `0,0`    |    ![](/beta-wiki/textures/items/leather_helmet.png)    | Leather Helmet       |
|   1 |   `0,1`    |   ![](/beta-wiki/textures/items/chainmail_helmet.png)   | Chainmail Helmet     |
|   2 |   `0,2`    |     ![](/beta-wiki/textures/items/iron_helmet.png)      | Iron Helmet          |
|   3 |   `0,3`    |    ![](/beta-wiki/textures/items/diamond_helmet.png)    | Diamond Helmet       |
|   4 |   `0,4`    |     ![](/beta-wiki/textures/items/gold_helmet.png)      | Gold Helmet          |
|   5 |   `0,5`    |    ![](/beta-wiki/textures/items/flint_n_steel.png)     | Flint and Steel      |
|   6 |   `0,6`    |        ![](/beta-wiki/textures/items/flint.png)         | Flint                |
|   7 |   `0,7`    |         ![](/beta-wiki/textures/items/coal.png)         | Coal                 |
|   8 |   `0,8`    |        ![](/beta-wiki/textures/items/string.png)        | String               |
|   9 |   `0,9`    |        ![](/beta-wiki/textures/items/seeds.png)         | Seeds                |
|  10 |   `0,10`   |        ![](/beta-wiki/textures/items/apple.png)         | Apple                |
|  11 |   `0,11`   |     ![](/beta-wiki/textures/items/golden_apple.png)     | Golden Apple         |
|  12 |   `0,12`   |         ![](/beta-wiki/textures/items/egg.png)          | Egg                  |
|  13 |   `0,13`   |        ![](/beta-wiki/textures/items/sugar.png)         | Sugar                |
|  14 |   `0,14`   |       ![](/beta-wiki/textures/items/snowball.png)       | Snowball             |
|  16 |   `1,0`    |  ![](/beta-wiki/textures/items/leather_chestplate.png)  | Leather Chestplate   |
|  17 |   `1,1`    | ![](/beta-wiki/textures/items/chainmail_chestplate.png) | Chainmail Chestplate |
|  18 |   `1,2`    |   ![](/beta-wiki/textures/items/iron_chestplate.png)    | Iron Chestplate      |
|  19 |   `1,3`    |  ![](/beta-wiki/textures/items/diamond_chestplate.png)  | Diamond Chestplate   |
|  20 |   `1,4`    |   ![](/beta-wiki/textures/items/gold_chestplate.png)    | Gold Chestplate      |
|  21 |   `1,5`    |         ![](/beta-wiki/textures/items/bow.png)          | Bow                  |
|  22 |   `1,6`    |        ![](/beta-wiki/textures/items/brick.png)         | Brick                |
|  23 |   `1,7`    |      ![](/beta-wiki/textures/items/iron_ingot.png)      | Iron Ingot           |
|  24 |   `1,8`    |       ![](/beta-wiki/textures/items/feather.png)        | Feather              |
|  25 |   `1,9`    |        ![](/beta-wiki/textures/items/wheat.png)         | Wheat                |
|  26 |   `1,10`   |       ![](/beta-wiki/textures/items/painting.png)       | Painting             |
|  27 |   `1,11`   |      ![](/beta-wiki/textures/items/sugarcane.png)       | Sugarcane            |
|  28 |   `1,12`   |         ![](/beta-wiki/textures/items/bone.png)         | Bone                 |
|  29 |   `1,13`   |         ![](/beta-wiki/textures/items/cake.png)         | Cake                 |
|  30 |   `1,14`   |      ![](/beta-wiki/textures/items/slimeball.png)       | Slimeball            |
|  32 |   `2,0`    |   ![](/beta-wiki/textures/items/leather_leggings.png)   | Leather Leggings     |
|  33 |   `2,1`    |  ![](/beta-wiki/textures/items/chainmail_leggings.png)  | Chainmail Leggings   |
|  34 |   `2,2`    |    ![](/beta-wiki/textures/items/iron_leggings.png)     | Iron Leggings        |
|  35 |   `2,3`    |   ![](/beta-wiki/textures/items/diamond_leggings.png)   | Diamond Leggings     |
|  36 |   `2,4`    |    ![](/beta-wiki/textures/items/gold_leggings.png)     | Gold Leggings        |
|  37 |   `2,5`    |        ![](/beta-wiki/textures/items/arrow.png)         | Arrow                |
|  38 |   `2,6`    |        ![](/beta-wiki/textures/items/quiver.png)        | Quiver               |
|  39 |   `2,7`    |      ![](/beta-wiki/textures/items/gold_ingot.png)      | Gold Ingot           |
|  40 |   `2,8`    |      ![](/beta-wiki/textures/items/gunpowder.png)       | Gunpowder            |
|  41 |   `2,9`    |        ![](/beta-wiki/textures/items/bread.png)         | Bread                |
|  42 |   `2,10`   |         ![](/beta-wiki/textures/items/sign.png)         | Sign                 |
|  43 |   `2,11`   |     ![](/beta-wiki/textures/items/wooden_door.png)      | Wooden Door          |
|  44 |   `2,12`   |      ![](/beta-wiki/textures/items/iron_door.png)       | Iron Door            |
|  45 |   `2,13`   |         ![](/beta-wiki/textures/items/bed.png)          | Bed                  |
|  48 |   `3,0`    |    ![](/beta-wiki/textures/items/leather_boots.png)     | Leather Boots        |
|  49 |   `3,1`    |   ![](/beta-wiki/textures/items/chainmail_boots.png)    | Chainmail Boots      |
|  50 |   `3,2`    |      ![](/beta-wiki/textures/items/iron_boots.png)      | Iron Boots           |
|  51 |   `3,3`    |    ![](/beta-wiki/textures/items/diamond_boots.png)     | Diamond Boots        |
|  52 |   `3,4`    |      ![](/beta-wiki/textures/items/gold_boots.png)      | Gold Boots           |
|  53 |   `3,5`    |        ![](/beta-wiki/textures/items/stick.png)         | Stick                |
|  54 |   `3,6`    |       ![](/beta-wiki/textures/items/compass.png)        | Compass              |
|  55 |   `3,7`    |       ![](/beta-wiki/textures/items/diamond.png)        | Diamond              |
|  56 |   `3,8`    |    ![](/beta-wiki/textures/items/redstone_dust.png)     | Redstone dust        |
|  57 |   `3,9`    |         ![](/beta-wiki/textures/items/clay.png)         | Clay                 |
|  58 |   `3,10`   |        ![](/beta-wiki/textures/items/paper.png)         | Paper                |
|  59 |   `3,11`   |         ![](/beta-wiki/textures/items/book.png)         | Book                 |
|  60 |   `3,12`   |         ![](/beta-wiki/textures/items/map.png)          | Map                  |
|  64 |   `4,0`    |     ![](/beta-wiki/textures/items/wooden_sword.png)     | Wooden Sword         |
|  65 |   `4,1`    |     ![](/beta-wiki/textures/items/stone_sword.png)      | Stone Sword          |
|  66 |   `4,2`    |      ![](/beta-wiki/textures/items/iron_sword.png)      | Iron Sword           |
|  67 |   `4,3`    |    ![](/beta-wiki/textures/items/diamond_sword.png)     | Diamond Sword        |
|  68 |   `4,4`    |      ![](/beta-wiki/textures/items/gold_sword.png)      | Gold Sword           |
|  69 |   `4,5`    |     ![](/beta-wiki/textures/items/fishing_rod.png)      | Fishing rod          |
|  70 |   `4,6`    |        ![](/beta-wiki/textures/items/clock.png)         | Clock                |
|  71 |   `4,7`    |         ![](/beta-wiki/textures/items/bowl.png)         | Bowl                 |
|  72 |   `4,8`    |    ![](/beta-wiki/textures/items/mushroom_stew.png)     | Mushroom stew        |
|  73 |   `4,9`    |    ![](/beta-wiki/textures/items/glowstone_dust.png)    | Glowstone dust       |
|  74 |   `4,10`   |        ![](/beta-wiki/textures/items/bucket.png)        | Bucket               |
|  75 |   `4,11`   |     ![](/beta-wiki/textures/items/water_bucket.png)     | Water Bucket         |
|  76 |   `4,12`   |     ![](/beta-wiki/textures/items/lava_bucket.png)      | Lava Bucket          |
|  77 |   `4,12`   |     ![](/beta-wiki/textures/items/milk_bucket.png)      | Milk Bucket          |
|  78 |   `4,12`   |      ![](/beta-wiki/textures/items/black_dye.png)       | Black dye/Ink sack   |
|  79 |   `4,12`   |       ![](/beta-wiki/textures/items/grey_dye.png)       | Gray dye             |

Any spaces that're not filled with a texture are usually transparent, though a few have a blue corner.
| Empty | Transparent |
| :------------------------------------------------: | :-----------------------------------------------: |
| ![Corner Texture](/beta-wiki/textures/items/placeholder.png) | ![Transparent Texture](/beta-wiki/textures/transparent.png) |

## Legal disclaimer

These textures fully belong to Mojang, and we make no claim of ownership by presenting them on this page or other parts of the Wiki. Please see our [legal page](/legal) for more info.
