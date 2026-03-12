---
order: 1
description: Textures are what give each rendered block their colorful, detailed appearance.
---

# Textures

Textures are what give each rendered block their colorful, detailed appearance.

## Texture Atlas

The texture atlas contains all possible block textures in the game, and is `256x256` in the Vanilla game, where each individual block face is `16x16` pixels. Each block shares its textures with every other block, only having a unique appearance by zooming into and showing different parts of the atlas by using differing UV-Coordinates.

The texture atlas is indexed from `0` to `255`.

|   # | Row/Column |                       Texture                       | Label                          | Notes                                                                            |
| --: | :--------: | :-------------------------------------------------: | :----------------------------- | :------------------------------------------------------------------------------- |
|   0 |   `0,0`    |         ![](../images/blocks/grass_top.png)         | Grass Top (Base)               | Biome Tinted                                                                     |
|   1 |   `0,1`    |           ![](../images/blocks/stone.png)           | Stone                          |                                                                                  |
|   2 |   `0,2`    |           ![](../images/blocks/dirt.png)            | Dirt                           |                                                                                  |
|   3 |   `0,3`    |        ![](../images/blocks/grass_side.png)         | Grass-side (Base)              |                                                                                  |
|   4 |   `0,4`    |          ![](../images/blocks/planks.png)           | Planks                         |                                                                                  |
|   5 |   `0,5`    |      ![](../images/blocks/stone_slab_side.png)      | Stone Slab (Side)              |                                                                                  |
|   6 |   `0,6`    |      ![](../images/blocks/stone_slab_top.png)       | Stone Slab (Top)               |                                                                                  |
|   7 |   `0,7`    |          ![](../images/blocks/bricks.png)           | Bricks                         |                                                                                  |
|   8 |   `0,8`    |         ![](../images/blocks/tnt_side.png)          | TNT (Side)                     |                                                                                  |
|   9 |   `0,9`    |          ![](../images/blocks/tnt_top.png)          | TNT (Top)                      |                                                                                  |
|  10 |   `0,10`   |        ![](../images/blocks/tnt_bottom.png)         | TNT (Bottom)                   |                                                                                  |
|  11 |   `0,11`   |          ![](../images/blocks/cobweb.png)           | Cobweb                         |                                                                                  |
|  12 |   `0,12`   |           ![](../images/blocks/rose.png)            | Rose                           |                                                                                  |
|  13 |   `0,13`   |         ![](../images/blocks/dandelion.png)         | Dandelion                      |                                                                                  |
|  14 |   `0,14`   |    ![](../images/blocks/portal_placeholder.png)     | Nether Portal (Placeholder)    | Pure blue                                                                        |
|  15 |   `0,15`   |        ![](../images/blocks/oak_sapling.png)        | Oak Sapling                    |                                                                                  |
|  16 |   `1,0`    |        ![](../images/blocks/cobblestone.png)        | Cobblestone                    |                                                                                  |
|  17 |   `1,1`    |          ![](../images/blocks/bedrock.png)          | Bedrock                        |                                                                                  |
|  18 |   `1,2`    |           ![](../images/blocks/sand.png)            | Sand                           |                                                                                  |
|  19 |   `1,3`    |          ![](../images/blocks/gravel.png)           | Gravel                         |                                                                                  |
|  20 |   `1,4`    |       ![](../images/blocks/oak_log_side.png)        | Oak Log (Side)                 |                                                                                  |
|  21 |   `1,5`    |          ![](../images/blocks/log_top.png)          | Log (Top)                      | Used by all logs                                                                 |
|  22 |   `1,6`    |        ![](../images/blocks/iron_block.png)         | Iron Block                     |                                                                                  |
|  23 |   `1,7`    |        ![](../images/blocks/gold_block.png)         | Gold Block                     |                                                                                  |
|  24 |   `1,8`    |       ![](../images/blocks/diamond_block.png)       | Diamond Block                  |                                                                                  |
|  25 |   `1,9`    |         ![](../images/blocks/chest_top.png)         | Chest (Top/Bottom)             |                                                                                  |
|  26 |   `1,10`   |        ![](../images/blocks/chest_side.png)         | Chest (Side)                   |                                                                                  |
|  27 |   `1,11`   |        ![](../images/blocks/chest_front.png)        | Chest (Front)                  |                                                                                  |
|  28 |   `1,12`   |       ![](../images/blocks/red_mushroom.png)        | Red Mushroom                   |                                                                                  |
|  29 |   `1,13`   |      ![](../images/blocks/brown_mushroom.png)       | Brown Mushroom                 |                                                                                  |
|  31 |   `1,15`   |     ![](../images/blocks/fire_placeholder.png)      | Fire (Placeholder)             |                                                                                  |
|  32 |   `2,0`    |         ![](../images/blocks/gold_ore.png)          | Gold Ore                       |                                                                                  |
|  33 |   `2,1`    |         ![](../images/blocks/iron_ore.png)          | Iron Ore                       |                                                                                  |
|  34 |   `2,2`    |         ![](../images/blocks/coal_ore.png)          | Coal Ore                       |                                                                                  |
|  35 |   `2,3`    |         ![](../images/blocks/bookshelf.png)         | Bookshelf                      |                                                                                  |
|  36 |   `2,4`    |     ![](../images/blocks/mossy_cobblestone.png)     | Mossy Cobblestone              |                                                                                  |
|  37 |   `2,5`    |         ![](../images/blocks/obsidian.png)          | Obsidian                       |
|  38 |   `2,6`    |        ![](../images/blocks/grass_side.png)         | Grass-side (Overlay)           | Biome Tinted                                                                     |
|  39 |   `2,7`    |         ![](../images/blocks/tallgrass.png)         | Tallgrass                      | Biome Tinted                                                                     |
|  40 |   `2,8`    |         ![](../images/blocks/grass_top.png)         | Grass Top (Overlay)            | Biome Tinted                                                                     |
|  41 |   `2,9`    |  ![](../images/blocks/double_chest_front_left.png)  | Double Chest (Front Left)      |                                                                                  |
|  42 |   `2,10`   | ![](../images/blocks/double_chest_front_right.png)  | Double Chest (Front Right)     |                                                                                  |
|  43 |   `2,11`   |    ![](../images/blocks/crafting_table_top.png)     | Crafting Table (Top)           |                                                                                  |
|  44 |   `2,12`   |       ![](../images/blocks/furnace_front.png)       | Furnace (Front)                |                                                                                  |
|  45 |   `2,13`   |  ![](../images/blocks/furnace_dispenser_side.png)   | Furnace/Dispenser (Side)       |                                                                                  |
|  46 |   `2,14`   |      ![](../images/blocks/dispenser_front.png)      | Dispenser (Front)              |                                                                                  |
|  47 |   `2,15`   |     ![](../images/blocks/fire_placeholder.png)      | Fire (Placeholder)             |                                                                                  |
|  48 |   `3,0`    |          ![](../images/blocks/sponge.png)           | Sponge                         |                                                                                  |
|  49 |   `3,1`    |           ![](../images/blocks/glass.png)           | Glass                          |                                                                                  |
|  50 |   `3,2`    |        ![](../images/blocks/diamond_ore.png)        | Diamond Ore                    |                                                                                  |
|  51 |   `3,3`    |       ![](../images/blocks/redstone_ore.png)        | Redstone Ore                   |                                                                                  |
|  52 |   `3,4`    |  ![](../images/blocks/oak_leaves_transparent.png)   | Oak/Birch leaves (Transparent) |                                                                                  |
|  53 |   `3,5`    |     ![](../images/blocks/oak_leaves_opaque.png)     | Oak/Birch leaves (Opaque)      |                                                                                  |
|  55 |   `3,7`    |      ![](../images/blocks/deadbush_shrub.png)       | Deadbush/Shrub                 | Shrubs are Biome Tinted                                                          |
|  56 |   `3,8`    |           ![](../images/blocks/fern.png)            | Fern                           |                                                                                  |
|  57 |   `3,9`    |  ![](../images/blocks/double_chest_back_left.png)   | Double Chest (Back Left)       |                                                                                  |
|  58 |   `3,10`   |  ![](../images/blocks/double_chest_back_right.png)  | Double Chest (Back Right)      |                                                                                  |
|  59 |   `3,11`   |   ![](../images/blocks/crafting_table_side_1.png)   | Crafting Table (Side)          |                                                                                  |
|  60 |   `3,12`   |   ![](../images/blocks/crafting_table_side_2.png)   | Crafting Table (Side)          |                                                                                  |
|  61 |   `3,13`   |     ![](../images/blocks/lit_furnace_front.png)     | Lit Furnace (Front)            |                                                                                  |
|  62 |   `3,14`   |   ![](../images/blocks/furnace_dispenser_top.png)   | Furnace/Dispenser (Top)        |                                                                                  |
|  63 |   `3,15`   |      ![](../images/blocks/spruce_sapling.png)       | Spruce Sapling                 |                                                                                  |
|  64 |   `4,0`    |        ![](../images/blocks/white_wool.png)         | Wool (White)                   |                                                                                  |
|  65 |   `4,1`    |        ![](../images/blocks/mob_spawner.png)        | Mob Spawner                    |                                                                                  |
|  66 |   `4,2`    |           ![](../images/blocks/snow.png)            | Snow                           |                                                                                  |
|  67 |   `4,3`    |            ![](../images/blocks/ice.png)            | Ice                            |                                                                                  |
|  68 |   `4,4`    |      ![](../images/blocks/grass_side_snow.png)      | Grass-side (Snow)              |                                                                                  |
|  69 |   `4,5`    |        ![](../images/blocks/cactus_top.png)         | Cactus (Top)                   |                                                                                  |
|  70 |   `4,6`    |        ![](../images/blocks/cactus_side.png)        | Cactus (Side)                  |                                                                                  |
|  71 |   `4,7`    |       ![](../images/blocks/cactus_bottom.png)       | Cactus (Bottom)                |                                                                                  |
|  72 |   `4,8`    |           ![](../images/blocks/clay.png)            | Clay                           |                                                                                  |
|  73 |   `4,9`    |         ![](../images/blocks/sugarcane.png)         | Sugarcane                      |                                                                                  |
|  74 |   `4,10`   |     ![](../images/blocks/noteblock_jukebox.png)     | Noteblock/Jukebox              |                                                                                  |
|  75 |   `4,11`   |        ![](../images/blocks/jukebox_top.png)        | Jukebox (Top)                  |                                                                                  |
|  79 |   `4,15`   |       ![](../images/blocks/birch_sapling.png)       | Birch Sapling                  |                                                                                  |
|  80 |   `5,0`    |           ![](../images/blocks/torch.png)           | Torch                          |                                                                                  |
|  81 |   `5,1`    |      ![](../images/blocks/wooden_door_top.png)      | Wooden Door (Top)              |                                                                                  |
|  82 |   `5,2`    |       ![](../images/blocks/iron_door_top.png)       | Iron Door (Top)                |                                                                                  |
|  83 |   `5,3`    |          ![](../images/blocks/ladder.png)           | Ladder                         |                                                                                  |
|  84 |   `5,4`    |         ![](../images/blocks/trapdoor.png)          | Trapdoor                       |                                                                                  |
|  86 |   `5,6`    |       ![](../images/blocks/farmland_wet.png)        | Farmland (Wet)                 |                                                                                  |
|  87 |   `5,7`    |       ![](../images/blocks/farmland_dry.png)        | Farmland (Dry)                 |                                                                                  |
|  88 |   `5,8`    |       ![](../images/blocks/wheat_level_0.png)       | Wheat (Level 0)                |                                                                                  |
|  89 |   `5,9`    |       ![](../images/blocks/wheat_level_1.png)       | Wheat (Level 1)                |                                                                                  |
|  90 |   `5,10`   |       ![](../images/blocks/wheat_level_2.png)       | Wheat (Level 2)                |                                                                                  |
|  91 |   `5,11`   |       ![](../images/blocks/wheat_level_3.png)       | Wheat (Level 3)                |                                                                                  |
|  92 |   `5,12`   |       ![](../images/blocks/wheat_level_4.png)       | Wheat (Level 4)                |                                                                                  |
|  93 |   `5,13`   |       ![](../images/blocks/wheat_level_5.png)       | Wheat (Level 5)                |                                                                                  |
|  94 |   `5,14`   |       ![](../images/blocks/wheat_level_6.png)       | Wheat (Level 6)                |                                                                                  |
|  95 |   `5,15`   |       ![](../images/blocks/wheat_level_7.png)       | Wheat (Level 7)                |                                                                                  |
|  96 |   `6,0`    |           ![](../images/blocks/lever.png)           | Lever                          |                                                                                  |
|  97 |   `6,1`    |    ![](../images/blocks/wooden_door_bottom.png)     | Wooden Door (Bottom)           |                                                                                  |
|  98 |   `6,2`    |     ![](../images/blocks/iron_door_bottom.png)      | Iron Door (Bottom)             |                                                                                  |
|  99 |   `6,3`    |   ![](../images/blocks/redstone_torch_active.png)   | Redstone Torch (Active)        |                                                                                  |
| 102 |   `6,6`    |        ![](../images/blocks/pumpkin_top.png)        | Pumpkin (Top)                  |                                                                                  |
| 103 |   `6,7`    |        ![](../images/blocks/netherrack.png)         | Netherrack                     |                                                                                  |
| 104 |   `6,8`    |         ![](../images/blocks/soul_sand.png)         | Soul Sand                      |                                                                                  |
| 105 |   `6,9`    |         ![](../images/blocks/glowstone.png)         | Glowstone                      |                                                                                  |
| 106 |   `6,10`   |    ![](../images/blocks/sticky_piston_front.png)    | Sticky Piston (Front)          |                                                                                  |
| 107 |   `6,11`   |       ![](../images/blocks/piston_front.png)        | Piston (Front)                 |                                                                                  |
| 108 |   `6,12`   |        ![](../images/blocks/piston_side.png)        | Piston (Side)                  |                                                                                  |
| 109 |   `6,13`   |       ![](../images/blocks/piston_bottom.png)       | Piston (Bottom)                |                                                                                  |
| 110 |   `6,14`   |    ![](../images/blocks/piston_inside_front.png)    | Piston (Inside Front)          |                                                                                  |
| 112 |   `7,0`    |         ![](../images/blocks/rail_turn.png)         | Rail (Turn)                    |                                                                                  |
| 113 |   `7,1`    |        ![](../images/blocks/black_wool.png)         | Wool (Black)                   |                                                                                  |
| 114 |   `7,2`    |      ![](../images/blocks/dark_grey_wool.png)       | Wool (Dark Grey)               |                                                                                  |
| 115 |   `7,3`    |  ![](../images/blocks/redstone_torch_inactive.png)  | Redstone Torch (Inactive)      |                                                                                  |
| 116 |   `7,4`    |      ![](../images/blocks/spruce_log_side.png)      | Spruce Log (Side)              |                                                                                  |
| 117 |   `7,5`    |      ![](../images/blocks/birch_log_side.png)       | Birch Log (Side)               |                                                                                  |
| 118 |   `7,6`    |       ![](../images/blocks/pumpkin_side.png)        | Pumpkin (Side)                 |                                                                                  |
| 119 |   `7,7`    |       ![](../images/blocks/pumpkin_front.png)       | Pumpkin (Front)                |                                                                                  |
| 120 |   `7,8`    |   ![](../images/blocks/jack_o_lantern_front.png)    | Jack o' Lantern (Front)        |                                                                                  |
| 121 |   `7,9`    |         ![](../images/blocks/cake_top.png)          | Cake (Top)                     |                                                                                  |
| 122 |   `7,10`   |       ![](../images/blocks/cake_outside.png)        | Cake (Outside)                 |                                                                                  |
| 123 |   `7,11`   |        ![](../images/blocks/cake_inside.png)        | Cake (Inside)                  |                                                                                  |
| 124 |   `7,12`   |        ![](../images/blocks/cake_bottom.png)        | Cake (Bottom)                  |                                                                                  |
| 128 |   `8,0`    |       ![](../images/blocks/rail_straight.png)       | Rail (Straight)                |                                                                                  |
| 129 |   `8,1`    |         ![](../images/blocks/red_wool.png)          | Wool (Red)                     |                                                                                  |
| 130 |   `8,2`    |         ![](../images/blocks/pink_wool.png)         | Wool (Pink)                    |                                                                                  |
| 131 |   `8,3`    |     ![](../images/blocks/repeater_inactive.png)     | Repeater (Inactive)            |                                                                                  |
| 132 |   `8,4`    | ![](../images/blocks/spruce_leaves_transparent.png) | Spruce leaves (Transparent)    |                                                                                  |
| 133 |   `8,5`    |   ![](../images/blocks/spruce_leaves_opaque.png)    | Spruce leaves (Opaque)         |                                                                                  |
| 134 |   `8,6`    |        ![](../images/blocks/bed_top_end.png)        | Bed (Top End)                  |                                                                                  |
| 135 |   `8,7`    |       ![](../images/blocks/bed_top_head.png)        | Bed (Top Head)                 |                                                                                  |
| 140 |   `8,12`   |         ![](../images/blocks/cake_item.png)         | Cake (Item)                    |                                                                                  |
| 144 |   `9,0`    |    ![](../images/blocks/lapis_lazuli_block.png)     | Lapis-Lazuli Block             |                                                                                  |
| 145 |   `9,1`    |      ![](../images/blocks/dark_green_wool.png)      | Wool (Dark Green)              |                                                                                  |
| 146 |   `9,2`    |         ![](../images/blocks/lime_wool.png)         | Wool (Lime Green)              |                                                                                  |
| 147 |   `9,3`    |      ![](../images/blocks/repeater_active.png)      | Repeater (Active)              |                                                                                  |
| 149 |   `9,5`    |       ![](../images/blocks/bed_front_end.png)       | Bed (Front End)                |                                                                                  |
| 150 |   `9,6`    |       ![](../images/blocks/bed_side_end.png)        | Bed (Side End)                 |                                                                                  |
| 151 |   `9,7`    |       ![](../images/blocks/bed_side_head.png)       | Bed (Side Head)                |                                                                                  |
| 152 |   `9,8`    |      ![](../images/blocks/bed_front_head.png)       | Bed (Front Head)               |                                                                                  |
| 160 |   `10,0`   |     ![](../images/blocks/lapis_lazuli_ore.png)      | Lapis-Lazuli Ore               |                                                                                  |
| 161 |   `10,1`   |        ![](../images/blocks/brown_wool.png)         | Wool (Brown)                   |                                                                                  |
| 162 |   `10,2`   |        ![](../images/blocks/yellow_wool.png)        | Wool (Yellow)                  |                                                                                  |
| 163 |   `10,3`   |  ![](../images/blocks/powered_rails_inactive.png)   | Powered Rails (Inactive)       |                                                                                  |
| 164 |   `10,4`   |      ![](../images/blocks/redstone_cross.png)       | Redstone (Cross)               |                                                                                  |
| 165 |   `10,5`   |       ![](../images/blocks/redstone_line.png)       | Redstone (Line)                |                                                                                  |
| 176 |   `11,0`   |       ![](../images/blocks/sandstone_top.png)       | Sandstone (Top)                |                                                                                  |
| 177 |   `11,1`   |      ![](../images/blocks/dark_blue_wool.png)       | Wool (Dark Blue)               |                                                                                  |
| 178 |   `11,2`   |      ![](../images/blocks/light_blue_wool.png)      | Wool (Light Blue)              |                                                                                  |
| 179 |   `11,3`   |   ![](../images/blocks/powered_rails_active.png)    | Powered Rails (Active)         |                                                                                  |
| 192 |   `12,0`   |      ![](../images/blocks/sandstone_side.png)       | Sandstone (Side)               |                                                                                  |
| 193 |   `12,1`   |        ![](../images/blocks/purple_wool.png)        | Wool (Purple)                  |                                                                                  |
| 194 |   `12,2`   |       ![](../images/blocks/magenta_wool.png)        | Wool (Magenta)                 |                                                                                  |
| 195 |   `12,3`   |      ![](../images/blocks/activator_rail.png)       | Activator Rail                 |                                                                                  |
| 205 |  `12,13`   |     ![](../images/blocks/water_placeholder.png)     | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 206 |  `12,14`   |     ![](../images/blocks/water_placeholder.png)     | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 207 |  `12,15`   |     ![](../images/blocks/water_placeholder.png)     | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 208 |   `13,0`   |     ![](../images/blocks/sandstone_bottom.png)      | Sandstone (Bottom)             |                                                                                  |
| 209 |   `13,1`   |         ![](../images/blocks/cyan_wool.png)         | Wool (Cyan)                    |                                                                                  |
| 210 |   `13,2`   |        ![](../images/blocks/orange_wool.png)        | Wool (Orange)                  |                                                                                  |
| 222 |  `13,14`   |     ![](../images/blocks/water_placeholder.png)     | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 223 |  `13,15`   |     ![](../images/blocks/water_placeholder.png)     | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 225 |   `14,1`   |         ![](../images/blocks/grey_wool.png)         | Wool (Grey)                    |                                                                                  |
| 237 |  `14,13`   |     ![](../images/blocks/lava_placeholder.png)      | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 238 |  `14,14`   |     ![](../images/blocks/lava_placeholder.png)      | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 239 |  `14,15`   |     ![](../images/blocks/lava_placeholder.png)      | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 240 |   `15,0`   |  ![](../images/blocks/block_breaking_level_0.png)   | Block Breaking (Level 0)       |                                                                                  |
| 241 |   `15,1`   |  ![](../images/blocks/block_breaking_level_1.png)   | Block Breaking (Level 1)       |                                                                                  |
| 242 |   `15,2`   |  ![](../images/blocks/block_breaking_level_2.png)   | Block Breaking (Level 2)       |                                                                                  |
| 243 |   `15,3`   |  ![](../images/blocks/block_breaking_level_3.png)   | Block Breaking (Level 3)       |                                                                                  |
| 244 |   `15,4`   |  ![](../images/blocks/block_breaking_level_4.png)   | Block Breaking (Level 4)       |                                                                                  |
| 245 |   `15,5`   |  ![](../images/blocks/block_breaking_level_5.png)   | Block Breaking (Level 5)       |                                                                                  |
| 246 |   `15,6`   |  ![](../images/blocks/block_breaking_level_6.png)   | Block Breaking (Level 6)       |                                                                                  |
| 247 |   `15,7`   |  ![](../images/blocks/block_breaking_level_7.png)   | Block Breaking (Level 7)       |                                                                                  |
| 248 |   `15,8`   |  ![](../images/blocks/block_breaking_level_8.png)   | Block Breaking (Level 8)       |                                                                                  |
| 249 |   `15,9`   |  ![](../images/blocks/block_breaking_level_9.png)   | Block Breaking (Level 9)       |                                                                                  |
| 254 |  `15,14`   |     ![](../images/blocks/lava_placeholder.png)      | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 255 |  `15,15`   |     ![](../images/blocks/lava_placeholder.png)      | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |

Any spaces that're not filled with a texture are usually occupied by a pink grid-piece, or are entirely transparent.
| Empty | Transparent |
| :-------: | :-----------: |
| ![Missing Texture](../images/blocks/missing.png) | ![Transparent Texture](../images/blocks/transparent.png) |

These textures fully belong to Mojang, and we make no claim of ownership by presenting them on this page or other parts of the Wiki. Please see our [legal page](/legal) for more info.
