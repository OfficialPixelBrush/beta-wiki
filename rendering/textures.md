---
order: 2
description: Textures are what give each rendered block and item their colorful, detailed appearance.
---

# Textures

Textures are what give each rendered block and item their colorful, detailed appearance.

## Texture Atlas

There exist two texture atlases, one for blocks and one for items. Both atlases are `256x256` with the default texture pack, where each individual block face/item is `16x16` pixels. Each block/item shares its textures with every other block, only having a unique appearance by zooming into and showing different parts of the atlas by using differing UV-Coordinates.

|                     Block Textures                     |
| :----------------------------------------------------: |
| ![The full block texture atlas](/textures/terrain.png) |

The texture atlases are indexed from `0` to `255`.

### Block Atlas

|   # | Row/Column |                             Texture                              | Label                          | Notes                                                                            |
| --: | :--------: | :--------------------------------------------------------------: | :----------------------------- | :------------------------------------------------------------------------------- |
|   0 |   `0,0`    |  <TextureSwatch atlas="blocks" :index="0" :showLabel="false" />  | Grass Top (Base)               | Biome Tinted                                                                     |
|   1 |   `0,1`    |  <TextureSwatch atlas="blocks" :index="1" :showLabel="false" />  | Stone                          |                                                                                  |
|   2 |   `0,2`    |  <TextureSwatch atlas="blocks" :index="2" :showLabel="false" />  | Dirt                           |                                                                                  |
|   3 |   `0,3`    |  <TextureSwatch atlas="blocks" :index="3" :showLabel="false" />  | Grass-side (Base)              |                                                                                  |
|   4 |   `0,4`    |  <TextureSwatch atlas="blocks" :index="4" :showLabel="false" />  | Planks                         |                                                                                  |
|   5 |   `0,5`    |  <TextureSwatch atlas="blocks" :index="5" :showLabel="false" />  | Stone Slab (Side)              |                                                                                  |
|   6 |   `0,6`    |  <TextureSwatch atlas="blocks" :index="6" :showLabel="false" />  | Stone Slab (Top)               |                                                                                  |
|   7 |   `0,7`    |  <TextureSwatch atlas="blocks" :index="7" :showLabel="false" />  | Bricks                         |                                                                                  |
|   8 |   `0,8`    |  <TextureSwatch atlas="blocks" :index="8" :showLabel="false" />  | TNT (Side)                     |                                                                                  |
|   9 |   `0,9`    |  <TextureSwatch atlas="blocks" :index="9" :showLabel="false" />  | TNT (Top)                      |                                                                                  |
|  10 |   `0,10`   | <TextureSwatch atlas="blocks" :index="10" :showLabel="false" />  | TNT (Bottom)                   |                                                                                  |
|  11 |   `0,11`   | <TextureSwatch atlas="blocks" :index="11" :showLabel="false" />  | Cobweb                         |                                                                                  |
|  12 |   `0,12`   | <TextureSwatch atlas="blocks" :index="12" :showLabel="false" />  | Rose                           |                                                                                  |
|  13 |   `0,13`   | <TextureSwatch atlas="blocks" :index="13" :showLabel="false" />  | Dandelion                      |                                                                                  |
|  14 |   `0,14`   | <TextureSwatch atlas="blocks" :index="14" :showLabel="false" />  | Nether Portal (Placeholder)    | Pure blue                                                                        |
|  15 |   `0,15`   | <TextureSwatch atlas="blocks" :index="15" :showLabel="false" />  | Oak Sapling                    |                                                                                  |
|  16 |   `1,0`    | <TextureSwatch atlas="blocks" :index="16" :showLabel="false" />  | Cobblestone                    |                                                                                  |
|  17 |   `1,1`    | <TextureSwatch atlas="blocks" :index="17" :showLabel="false" />  | Bedrock                        |                                                                                  |
|  18 |   `1,2`    | <TextureSwatch atlas="blocks" :index="18" :showLabel="false" />  | Sand                           |                                                                                  |
|  19 |   `1,3`    | <TextureSwatch atlas="blocks" :index="19" :showLabel="false" />  | Gravel                         |                                                                                  |
|  20 |   `1,4`    | <TextureSwatch atlas="blocks" :index="20" :showLabel="false" />  | Oak Log (Side)                 |                                                                                  |
|  21 |   `1,5`    | <TextureSwatch atlas="blocks" :index="21" :showLabel="false" />  | Log (Top)                      | Used by all logs                                                                 |
|  22 |   `1,6`    | <TextureSwatch atlas="blocks" :index="22" :showLabel="false" />  | Iron Block                     |                                                                                  |
|  23 |   `1,7`    | <TextureSwatch atlas="blocks" :index="23" :showLabel="false" />  | Gold Block                     |                                                                                  |
|  24 |   `1,8`    | <TextureSwatch atlas="blocks" :index="24" :showLabel="false" />  | Diamond Block                  |                                                                                  |
|  25 |   `1,9`    | <TextureSwatch atlas="blocks" :index="25" :showLabel="false" />  | Chest (Top/Bottom)             |                                                                                  |
|  26 |   `1,10`   | <TextureSwatch atlas="blocks" :index="26" :showLabel="false" />  | Chest (Side)                   |                                                                                  |
|  27 |   `1,11`   | <TextureSwatch atlas="blocks" :index="27" :showLabel="false" />  | Chest (Front)                  |                                                                                  |
|  28 |   `1,12`   | <TextureSwatch atlas="blocks" :index="28" :showLabel="false" />  | Red Mushroom                   |                                                                                  |
|  29 |   `1,13`   | <TextureSwatch atlas="blocks" :index="29" :showLabel="false" />  | Brown Mushroom                 |                                                                                  |
|  31 |   `1,15`   | <TextureSwatch atlas="blocks" :index="31" :showLabel="false" />  | Fire (Placeholder)             |                                                                                  |
|  32 |   `2,0`    | <TextureSwatch atlas="blocks" :index="32" :showLabel="false" />  | Gold Ore                       |                                                                                  |
|  33 |   `2,1`    | <TextureSwatch atlas="blocks" :index="33" :showLabel="false" />  | Iron Ore                       |                                                                                  |
|  34 |   `2,2`    | <TextureSwatch atlas="blocks" :index="34" :showLabel="false" />  | Coal Ore                       |                                                                                  |
|  35 |   `2,3`    | <TextureSwatch atlas="blocks" :index="35" :showLabel="false" />  | Bookshelf                      |                                                                                  |
|  36 |   `2,4`    | <TextureSwatch atlas="blocks" :index="36" :showLabel="false" />  | Mossy Cobblestone              |                                                                                  |
|  37 |   `2,5`    | <TextureSwatch atlas="blocks" :index="37" :showLabel="false" />  | Obsidian                       |                                                                                  |
|  38 |   `2,6`    | <TextureSwatch atlas="blocks" :index="38" :showLabel="false" />  | Grass-side (Overlay)           | Biome Tinted                                                                     |
|  39 |   `2,7`    | <TextureSwatch atlas="blocks" :index="39" :showLabel="false" />  | Tallgrass                      | Biome Tinted                                                                     |
|  40 |   `2,8`    | <TextureSwatch atlas="blocks" :index="40" :showLabel="false" />  | Grass Top (Overlay)            | Biome Tinted                                                                     |
|  41 |   `2,9`    | <TextureSwatch atlas="blocks" :index="41" :showLabel="false" />  | Double Chest (Front Left)      |                                                                                  |
|  42 |   `2,10`   | <TextureSwatch atlas="blocks" :index="42" :showLabel="false" />  | Double Chest (Front Right)     |                                                                                  |
|  43 |   `2,11`   | <TextureSwatch atlas="blocks" :index="43" :showLabel="false" />  | Crafting Table (Top)           |                                                                                  |
|  44 |   `2,12`   | <TextureSwatch atlas="blocks" :index="44" :showLabel="false" />  | Furnace (Front)                |                                                                                  |
|  45 |   `2,13`   | <TextureSwatch atlas="blocks" :index="45" :showLabel="false" />  | Furnace/Dispenser (Side)       |                                                                                  |
|  46 |   `2,14`   | <TextureSwatch atlas="blocks" :index="46" :showLabel="false" />  | Dispenser (Front)              |                                                                                  |
|  47 |   `2,15`   | <TextureSwatch atlas="blocks" :index="47" :showLabel="false" />  | Fire (Placeholder)             |                                                                                  |
|  48 |   `3,0`    | <TextureSwatch atlas="blocks" :index="48" :showLabel="false" />  | Sponge                         |                                                                                  |
|  49 |   `3,1`    | <TextureSwatch atlas="blocks" :index="49" :showLabel="false" />  | Glass                          |                                                                                  |
|  50 |   `3,2`    | <TextureSwatch atlas="blocks" :index="50" :showLabel="false" />  | Diamond Ore                    |                                                                                  |
|  51 |   `3,3`    | <TextureSwatch atlas="blocks" :index="51" :showLabel="false" />  | Redstone Ore                   |                                                                                  |
|  52 |   `3,4`    | <TextureSwatch atlas="blocks" :index="52" :showLabel="false" />  | Oak/Birch leaves (Transparent) | Oak is Biome Tinted, Birch is <ColorSwatch color="#80A755" :showLabel="true" />  |
|  53 |   `3,5`    | <TextureSwatch atlas="blocks" :index="53" :showLabel="false" />  | Oak/Birch leaves (Opaque)      | Oak is Biome Tinted, Birch is <ColorSwatch color="#80A755" :showLabel="true" />  |
|  55 |   `3,7`    | <TextureSwatch atlas="blocks" :index="55" :showLabel="false" />  | Deadbush/Shrub                 | Shrubs are biome tinted                                                          |
|  56 |   `3,8`    | <TextureSwatch atlas="blocks" :index="56" :showLabel="false" />  | Fern                           | Biome Tinted                                                                     |
|  57 |   `3,9`    | <TextureSwatch atlas="blocks" :index="57" :showLabel="false" />  | Double Chest (Back Left)       |                                                                                  |
|  58 |   `3,10`   | <TextureSwatch atlas="blocks" :index="58" :showLabel="false" />  | Double Chest (Back Right)      |                                                                                  |
|  59 |   `3,11`   | <TextureSwatch atlas="blocks" :index="59" :showLabel="false" />  | Crafting Table (Side)          |                                                                                  |
|  60 |   `3,12`   | <TextureSwatch atlas="blocks" :index="60" :showLabel="false" />  | Crafting Table (Side)          |                                                                                  |
|  61 |   `3,13`   | <TextureSwatch atlas="blocks" :index="61" :showLabel="false" />  | Lit Furnace (Front)            |                                                                                  |
|  62 |   `3,14`   | <TextureSwatch atlas="blocks" :index="62" :showLabel="false" />  | Furnace/Dispenser (Top)        |                                                                                  |
|  63 |   `3,15`   | <TextureSwatch atlas="blocks" :index="63" :showLabel="false" />  | Spruce Sapling                 |                                                                                  |
|  64 |   `4,0`    | <TextureSwatch atlas="blocks" :index="64" :showLabel="false" />  | Wool (White)                   |                                                                                  |
|  65 |   `4,1`    | <TextureSwatch atlas="blocks" :index="65" :showLabel="false" />  | Mob Spawner                    |                                                                                  |
|  66 |   `4,2`    | <TextureSwatch atlas="blocks" :index="66" :showLabel="false" />  | Snow                           |                                                                                  |
|  67 |   `4,3`    | <TextureSwatch atlas="blocks" :index="67" :showLabel="false" />  | Ice                            |                                                                                  |
|  68 |   `4,4`    | <TextureSwatch atlas="blocks" :index="68" :showLabel="false" />  | Grass-side (Snow)              |                                                                                  |
|  69 |   `4,5`    | <TextureSwatch atlas="blocks" :index="69" :showLabel="false" />  | Cactus (Top)                   |                                                                                  |
|  70 |   `4,6`    | <TextureSwatch atlas="blocks" :index="70" :showLabel="false" />  | Cactus (Side)                  |                                                                                  |
|  71 |   `4,7`    | <TextureSwatch atlas="blocks" :index="71" :showLabel="false" />  | Cactus (Bottom)                |                                                                                  |
|  72 |   `4,8`    | <TextureSwatch atlas="blocks" :index="72" :showLabel="false" />  | Clay                           |                                                                                  |
|  73 |   `4,9`    | <TextureSwatch atlas="blocks" :index="73" :showLabel="false" />  | Sugarcane                      |                                                                                  |
|  74 |   `4,10`   | <TextureSwatch atlas="blocks" :index="74" :showLabel="false" />  | Noteblock/Jukebox              |                                                                                  |
|  75 |   `4,11`   | <TextureSwatch atlas="blocks" :index="75" :showLabel="false" />  | Jukebox (Top)                  |                                                                                  |
|  79 |   `4,15`   | <TextureSwatch atlas="blocks" :index="79" :showLabel="false" />  | Birch Sapling                  |                                                                                  |
|  80 |   `5,0`    | <TextureSwatch atlas="blocks" :index="80" :showLabel="false" />  | Torch                          |                                                                                  |
|  81 |   `5,1`    | <TextureSwatch atlas="blocks" :index="81" :showLabel="false" />  | Wooden Door (Top)              |                                                                                  |
|  82 |   `5,2`    | <TextureSwatch atlas="blocks" :index="82" :showLabel="false" />  | Iron Door (Top)                |                                                                                  |
|  83 |   `5,3`    | <TextureSwatch atlas="blocks" :index="83" :showLabel="false" />  | Ladder                         |                                                                                  |
|  84 |   `5,4`    | <TextureSwatch atlas="blocks" :index="84" :showLabel="false" />  | Trapdoor                       |                                                                                  |
|  86 |   `5,6`    | <TextureSwatch atlas="blocks" :index="86" :showLabel="false" />  | Farmland (Wet)                 |                                                                                  |
|  87 |   `5,7`    | <TextureSwatch atlas="blocks" :index="87" :showLabel="false" />  | Farmland (Dry)                 |                                                                                  |
|  88 |   `5,8`    | <TextureSwatch atlas="blocks" :index="88" :showLabel="false" />  | Wheat (Level 0)                |                                                                                  |
|  89 |   `5,9`    | <TextureSwatch atlas="blocks" :index="89" :showLabel="false" />  | Wheat (Level 1)                |                                                                                  |
|  90 |   `5,10`   | <TextureSwatch atlas="blocks" :index="90" :showLabel="false" />  | Wheat (Level 2)                |                                                                                  |
|  91 |   `5,11`   | <TextureSwatch atlas="blocks" :index="91" :showLabel="false" />  | Wheat (Level 3)                |                                                                                  |
|  92 |   `5,12`   | <TextureSwatch atlas="blocks" :index="92" :showLabel="false" />  | Wheat (Level 4)                |                                                                                  |
|  93 |   `5,13`   | <TextureSwatch atlas="blocks" :index="93" :showLabel="false" />  | Wheat (Level 5)                |                                                                                  |
|  94 |   `5,14`   | <TextureSwatch atlas="blocks" :index="94" :showLabel="false" />  | Wheat (Level 6)                |                                                                                  |
|  95 |   `5,15`   | <TextureSwatch atlas="blocks" :index="95" :showLabel="false" />  | Wheat (Level 7)                |                                                                                  |
|  96 |   `6,0`    | <TextureSwatch atlas="blocks" :index="96" :showLabel="false" />  | Lever                          |                                                                                  |
|  97 |   `6,1`    | <TextureSwatch atlas="blocks" :index="97" :showLabel="false" />  | Wooden Door (Bottom)           |                                                                                  |
|  98 |   `6,2`    | <TextureSwatch atlas="blocks" :index="98" :showLabel="false" />  | Iron Door (Bottom)             |                                                                                  |
|  99 |   `6,3`    | <TextureSwatch atlas="blocks" :index="99" :showLabel="false" />  | Redstone Torch (Active)        |                                                                                  |
| 102 |   `6,6`    | <TextureSwatch atlas="blocks" :index="102" :showLabel="false" /> | Pumpkin (Top)                  |                                                                                  |
| 103 |   `6,7`    | <TextureSwatch atlas="blocks" :index="103" :showLabel="false" /> | Netherrack                     |                                                                                  |
| 104 |   `6,8`    | <TextureSwatch atlas="blocks" :index="104" :showLabel="false" /> | Soul Sand                      |                                                                                  |
| 105 |   `6,9`    | <TextureSwatch atlas="blocks" :index="105" :showLabel="false" /> | Glowstone                      |                                                                                  |
| 106 |   `6,10`   | <TextureSwatch atlas="blocks" :index="106" :showLabel="false" /> | Sticky Piston (Front)          |                                                                                  |
| 107 |   `6,11`   | <TextureSwatch atlas="blocks" :index="107" :showLabel="false" /> | Piston (Front)                 |                                                                                  |
| 108 |   `6,12`   | <TextureSwatch atlas="blocks" :index="108" :showLabel="false" /> | Piston (Side)                  |                                                                                  |
| 109 |   `6,13`   | <TextureSwatch atlas="blocks" :index="109" :showLabel="false" /> | Piston (Bottom)                |                                                                                  |
| 110 |   `6,14`   | <TextureSwatch atlas="blocks" :index="110" :showLabel="false" /> | Piston (Inside Front)          |                                                                                  |
| 112 |   `7,0`    | <TextureSwatch atlas="blocks" :index="112" :showLabel="false" /> | Rail (Turn)                    |                                                                                  |
| 113 |   `7,1`    | <TextureSwatch atlas="blocks" :index="113" :showLabel="false" /> | Wool (Black)                   |                                                                                  |
| 114 |   `7,2`    | <TextureSwatch atlas="blocks" :index="114" :showLabel="false" /> | Wool (Dark Gray)               |                                                                                  |
| 115 |   `7,3`    | <TextureSwatch atlas="blocks" :index="115" :showLabel="false" /> | Redstone Torch (Inactive)      |                                                                                  |
| 116 |   `7,4`    | <TextureSwatch atlas="blocks" :index="116" :showLabel="false" /> | Spruce Log (Side)              |                                                                                  |
| 117 |   `7,5`    | <TextureSwatch atlas="blocks" :index="117" :showLabel="false" /> | Birch Log (Side)               |                                                                                  |
| 118 |   `7,6`    | <TextureSwatch atlas="blocks" :index="118" :showLabel="false" /> | Pumpkin (Side)                 |                                                                                  |
| 119 |   `7,7`    | <TextureSwatch atlas="blocks" :index="119" :showLabel="false" /> | Pumpkin (Front)                |                                                                                  |
| 120 |   `7,8`    | <TextureSwatch atlas="blocks" :index="120" :showLabel="false" /> | Jack o' Lantern (Front)        |                                                                                  |
| 121 |   `7,9`    | <TextureSwatch atlas="blocks" :index="121" :showLabel="false" /> | Cake (Top)                     |                                                                                  |
| 122 |   `7,10`   | <TextureSwatch atlas="blocks" :index="122" :showLabel="false" /> | Cake (Outside)                 |                                                                                  |
| 123 |   `7,11`   | <TextureSwatch atlas="blocks" :index="123" :showLabel="false" /> | Cake (Inside)                  |                                                                                  |
| 124 |   `7,12`   | <TextureSwatch atlas="blocks" :index="124" :showLabel="false" /> | Cake (Bottom)                  |                                                                                  |
| 128 |   `8,0`    | <TextureSwatch atlas="blocks" :index="128" :showLabel="false" /> | Rail (Straight)                |                                                                                  |
| 129 |   `8,1`    | <TextureSwatch atlas="blocks" :index="129" :showLabel="false" /> | Wool (Red)                     |                                                                                  |
| 130 |   `8,2`    | <TextureSwatch atlas="blocks" :index="130" :showLabel="false" /> | Wool (Pink)                    |                                                                                  |
| 131 |   `8,3`    | <TextureSwatch atlas="blocks" :index="131" :showLabel="false" /> | Repeater (Inactive)            |                                                                                  |
| 132 |   `8,4`    | <TextureSwatch atlas="blocks" :index="132" :showLabel="false" /> | Spruce leaves (Transparent)    | Tinted with <ColorSwatch color="#619961" :showLabel="true" />                    |
| 133 |   `8,5`    | <TextureSwatch atlas="blocks" :index="133" :showLabel="false" /> | Spruce leaves (Opaque)         | Tinted with <ColorSwatch color="#619961" :showLabel="true" /> Tinted             |
| 134 |   `8,6`    | <TextureSwatch atlas="blocks" :index="134" :showLabel="false" /> | Bed (Top End)                  |                                                                                  |
| 135 |   `8,7`    | <TextureSwatch atlas="blocks" :index="135" :showLabel="false" /> | Bed (Top Head)                 |                                                                                  |
| 140 |   `8,12`   | <TextureSwatch atlas="blocks" :index="140" :showLabel="false" /> | Cake (Item)                    |                                                                                  |
| 144 |   `9,0`    | <TextureSwatch atlas="blocks" :index="144" :showLabel="false" /> | Lapis-Lazuli Block             |                                                                                  |
| 145 |   `9,1`    | <TextureSwatch atlas="blocks" :index="145" :showLabel="false" /> | Wool (Dark Green)              |                                                                                  |
| 146 |   `9,2`    | <TextureSwatch atlas="blocks" :index="146" :showLabel="false" /> | Wool (Lime Green)              |                                                                                  |
| 147 |   `9,3`    | <TextureSwatch atlas="blocks" :index="147" :showLabel="false" /> | Repeater (Active)              |                                                                                  |
| 149 |   `9,5`    | <TextureSwatch atlas="blocks" :index="149" :showLabel="false" /> | Bed (Front End)                |                                                                                  |
| 150 |   `9,6`    | <TextureSwatch atlas="blocks" :index="150" :showLabel="false" /> | Bed (Side End)                 |                                                                                  |
| 151 |   `9,7`    | <TextureSwatch atlas="blocks" :index="151" :showLabel="false" /> | Bed (Side Head)                |                                                                                  |
| 152 |   `9,8`    | <TextureSwatch atlas="blocks" :index="152" :showLabel="false" /> | Bed (Front Head)               |                                                                                  |
| 160 |   `10,0`   | <TextureSwatch atlas="blocks" :index="160" :showLabel="false" /> | Lapis-Lazuli Ore               |                                                                                  |
| 161 |   `10,1`   | <TextureSwatch atlas="blocks" :index="161" :showLabel="false" /> | Wool (Brown)                   |                                                                                  |
| 162 |   `10,2`   | <TextureSwatch atlas="blocks" :index="162" :showLabel="false" /> | Wool (Yellow)                  |                                                                                  |
| 163 |   `10,3`   | <TextureSwatch atlas="blocks" :index="163" :showLabel="false" /> | Powered Rails (Inactive)       |                                                                                  |
| 164 |   `10,4`   | <TextureSwatch atlas="blocks" :index="164" :showLabel="false" /> | Redstone (Cross)               | Power-level tinted                                                               |
| 165 |   `10,5`   | <TextureSwatch atlas="blocks" :index="165" :showLabel="false" /> | Redstone (Line)                | Power-level tinted                                                               |
| 176 |   `11,0`   | <TextureSwatch atlas="blocks" :index="176" :showLabel="false" /> | Sandstone (Top)                |                                                                                  |
| 177 |   `11,1`   | <TextureSwatch atlas="blocks" :index="177" :showLabel="false" /> | Wool (Dark Blue)               |                                                                                  |
| 178 |   `11,2`   | <TextureSwatch atlas="blocks" :index="178" :showLabel="false" /> | Wool (Light Blue)              |                                                                                  |
| 179 |   `11,3`   | <TextureSwatch atlas="blocks" :index="179" :showLabel="false" /> | Powered Rails (Active)         |                                                                                  |
| 192 |   `12,0`   | <TextureSwatch atlas="blocks" :index="192" :showLabel="false" /> | Sandstone (Side)               |                                                                                  |
| 193 |   `12,1`   | <TextureSwatch atlas="blocks" :index="193" :showLabel="false" /> | Wool (Purple)                  |                                                                                  |
| 194 |   `12,2`   | <TextureSwatch atlas="blocks" :index="194" :showLabel="false" /> | Wool (Magenta)                 |                                                                                  |
| 195 |   `12,3`   | <TextureSwatch atlas="blocks" :index="195" :showLabel="false" /> | Activator Rail                 |                                                                                  |
| 205 |  `12,13`   | <TextureSwatch atlas="blocks" :index="205" :showLabel="false" /> | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 206 |  `12,14`   | <TextureSwatch atlas="blocks" :index="206" :showLabel="false" /> | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 207 |  `12,15`   | <TextureSwatch atlas="blocks" :index="207" :showLabel="false" /> | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 208 |   `13,0`   | <TextureSwatch atlas="blocks" :index="208" :showLabel="false" /> | Sandstone (Bottom)             |                                                                                  |
| 209 |   `13,1`   | <TextureSwatch atlas="blocks" :index="209" :showLabel="false" /> | Wool (Cyan)                    |                                                                                  |
| 210 |   `13,2`   | <TextureSwatch atlas="blocks" :index="210" :showLabel="false" /> | Wool (Orange)                  |                                                                                  |
| 222 |  `13,14`   | <TextureSwatch atlas="blocks" :index="222" :showLabel="false" /> | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 223 |  `13,15`   | <TextureSwatch atlas="blocks" :index="223" :showLabel="false" /> | Water (Placeholder)            | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 225 |   `14,1`   | <TextureSwatch atlas="blocks" :index="225" :showLabel="false" /> | Wool (Gray)                    |                                                                                  |
| 237 |  `14,13`   | <TextureSwatch atlas="blocks" :index="237" :showLabel="false" /> | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 238 |  `14,14`   | <TextureSwatch atlas="blocks" :index="238" :showLabel="false" /> | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 239 |  `14,15`   | <TextureSwatch atlas="blocks" :index="239" :showLabel="false" /> | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 240 |   `15,0`   | <TextureSwatch atlas="blocks" :index="240" :showLabel="false" /> | Block Breaking (Level 0)       |                                                                                  |
| 241 |   `15,1`   | <TextureSwatch atlas="blocks" :index="241" :showLabel="false" /> | Block Breaking (Level 1)       |                                                                                  |
| 242 |   `15,2`   | <TextureSwatch atlas="blocks" :index="242" :showLabel="false" /> | Block Breaking (Level 2)       |                                                                                  |
| 243 |   `15,3`   | <TextureSwatch atlas="blocks" :index="243" :showLabel="false" /> | Block Breaking (Level 3)       |                                                                                  |
| 244 |   `15,4`   | <TextureSwatch atlas="blocks" :index="244" :showLabel="false" /> | Block Breaking (Level 4)       |                                                                                  |
| 245 |   `15,5`   | <TextureSwatch atlas="blocks" :index="245" :showLabel="false" /> | Block Breaking (Level 5)       |                                                                                  |
| 246 |   `15,6`   | <TextureSwatch atlas="blocks" :index="246" :showLabel="false" /> | Block Breaking (Level 6)       |                                                                                  |
| 247 |   `15,7`   | <TextureSwatch atlas="blocks" :index="247" :showLabel="false" /> | Block Breaking (Level 7)       |                                                                                  |
| 248 |   `15,8`   | <TextureSwatch atlas="blocks" :index="248" :showLabel="false" /> | Block Breaking (Level 8)       |                                                                                  |
| 249 |   `15,9`   | <TextureSwatch atlas="blocks" :index="249" :showLabel="false" /> | Block Breaking (Level 9)       |                                                                                  |
| 254 |  `15,14`   | <TextureSwatch atlas="blocks" :index="254" :showLabel="false" /> | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |
| 255 |  `15,15`   | <TextureSwatch atlas="blocks" :index="255" :showLabel="false" /> | Lava (Placeholder)             | Was replaced in [0.0.19a](https://minecraft.wiki/w/Java_Edition_Classic_0.0.19a) |

Any spaces that're not filled with a texture are usually occupied by a pink grid-piece, or are entirely transparent.

|                              Empty                              |                           Transparent                           |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <TextureSwatch atlas="blocks" :index="30" :showLabel="false" /> | <TextureSwatch atlas="items" :index="208" :showLabel="false" /> |

## Item Atlas

The item texture atlas is utilized similarly to the block texture atlas.

|                 Item Textures                  |
| :--------------------------------------------: |
| ![The item texture atlas](/textures/items.png) |

|   # | Row/Column |                             Texture                             | Label                    |
| --: | :--------: | :-------------------------------------------------------------: | :----------------------- |
|   0 |   `0,0`    |  <TextureSwatch atlas="items" :index="0" :showLabel="false" />  | Leather Helmet           |
|   1 |   `0,1`    |  <TextureSwatch atlas="items" :index="1" :showLabel="false" />  | Chainmail Helmet         |
|   2 |   `0,2`    |  <TextureSwatch atlas="items" :index="2" :showLabel="false" />  | Iron Helmet              |
|   3 |   `0,3`    |  <TextureSwatch atlas="items" :index="3" :showLabel="false" />  | Diamond Helmet           |
|   4 |   `0,4`    |  <TextureSwatch atlas="items" :index="4" :showLabel="false" />  | Gold Helmet              |
|   5 |   `0,5`    |  <TextureSwatch atlas="items" :index="5" :showLabel="false" />  | Flint and Steel          |
|   6 |   `0,6`    |  <TextureSwatch atlas="items" :index="6" :showLabel="false" />  | Flint                    |
|   7 |   `0,7`    |  <TextureSwatch atlas="items" :index="7" :showLabel="false" />  | Coal                     |
|   8 |   `0,8`    |  <TextureSwatch atlas="items" :index="8" :showLabel="false" />  | String                   |
|   9 |   `0,9`    |  <TextureSwatch atlas="items" :index="9" :showLabel="false" />  | Seeds                    |
|  10 |   `0,10`   | <TextureSwatch atlas="items" :index="10" :showLabel="false" />  | Apple                    |
|  11 |   `0,11`   | <TextureSwatch atlas="items" :index="11" :showLabel="false" />  | Golden Apple             |
|  12 |   `0,12`   | <TextureSwatch atlas="items" :index="12" :showLabel="false" />  | Egg                      |
|  13 |   `0,13`   | <TextureSwatch atlas="items" :index="13" :showLabel="false" />  | Sugar                    |
|  14 |   `0,14`   | <TextureSwatch atlas="items" :index="14" :showLabel="false" />  | Snowball                 |
|  16 |   `1,0`    | <TextureSwatch atlas="items" :index="16" :showLabel="false" />  | Leather Chestplate       |
|  17 |   `1,1`    | <TextureSwatch atlas="items" :index="17" :showLabel="false" />  | Chainmail Chestplate     |
|  18 |   `1,2`    | <TextureSwatch atlas="items" :index="18" :showLabel="false" />  | Iron Chestplate          |
|  19 |   `1,3`    | <TextureSwatch atlas="items" :index="19" :showLabel="false" />  | Diamond Chestplate       |
|  20 |   `1,4`    | <TextureSwatch atlas="items" :index="20" :showLabel="false" />  | Gold Chestplate          |
|  21 |   `1,5`    | <TextureSwatch atlas="items" :index="21" :showLabel="false" />  | Bow                      |
|  22 |   `1,6`    | <TextureSwatch atlas="items" :index="22" :showLabel="false" />  | Brick                    |
|  23 |   `1,7`    | <TextureSwatch atlas="items" :index="23" :showLabel="false" />  | Iron Ingot               |
|  24 |   `1,8`    | <TextureSwatch atlas="items" :index="24" :showLabel="false" />  | Feather                  |
|  25 |   `1,9`    | <TextureSwatch atlas="items" :index="25" :showLabel="false" />  | Wheat                    |
|  26 |   `1,10`   | <TextureSwatch atlas="items" :index="26" :showLabel="false" />  | Painting                 |
|  27 |   `1,11`   | <TextureSwatch atlas="items" :index="27" :showLabel="false" />  | Sugarcane                |
|  28 |   `1,12`   | <TextureSwatch atlas="items" :index="28" :showLabel="false" />  | Bone                     |
|  29 |   `1,13`   | <TextureSwatch atlas="items" :index="29" :showLabel="false" />  | Cake                     |
|  30 |   `1,14`   | <TextureSwatch atlas="items" :index="30" :showLabel="false" />  | Slimeball                |
|  32 |   `2,0`    | <TextureSwatch atlas="items" :index="32" :showLabel="false" />  | Leather Leggings         |
|  33 |   `2,1`    | <TextureSwatch atlas="items" :index="33" :showLabel="false" />  | Chainmail Leggings       |
|  34 |   `2,2`    | <TextureSwatch atlas="items" :index="34" :showLabel="false" />  | Iron Leggings            |
|  35 |   `2,3`    | <TextureSwatch atlas="items" :index="35" :showLabel="false" />  | Diamond Leggings         |
|  36 |   `2,4`    | <TextureSwatch atlas="items" :index="36" :showLabel="false" />  | Gold Leggings            |
|  37 |   `2,5`    | <TextureSwatch atlas="items" :index="37" :showLabel="false" />  | Arrow                    |
|  38 |   `2,6`    | <TextureSwatch atlas="items" :index="38" :showLabel="false" />  | Quiver                   |
|  39 |   `2,7`    | <TextureSwatch atlas="items" :index="39" :showLabel="false" />  | Gold Ingot               |
|  40 |   `2,8`    | <TextureSwatch atlas="items" :index="40" :showLabel="false" />  | Gunpowder                |
|  41 |   `2,9`    | <TextureSwatch atlas="items" :index="41" :showLabel="false" />  | Bread                    |
|  42 |   `2,10`   | <TextureSwatch atlas="items" :index="42" :showLabel="false" />  | Sign                     |
|  43 |   `2,11`   | <TextureSwatch atlas="items" :index="43" :showLabel="false" />  | Wooden Door              |
|  44 |   `2,12`   | <TextureSwatch atlas="items" :index="44" :showLabel="false" />  | Iron Door                |
|  45 |   `2,13`   | <TextureSwatch atlas="items" :index="45" :showLabel="false" />  | Bed                      |
|  48 |   `3,0`    | <TextureSwatch atlas="items" :index="48" :showLabel="false" />  | Leather Boots            |
|  49 |   `3,1`    | <TextureSwatch atlas="items" :index="49" :showLabel="false" />  | Chainmail Boots          |
|  50 |   `3,2`    | <TextureSwatch atlas="items" :index="50" :showLabel="false" />  | Iron Boots               |
|  51 |   `3,3`    | <TextureSwatch atlas="items" :index="51" :showLabel="false" />  | Diamond Boots            |
|  52 |   `3,4`    | <TextureSwatch atlas="items" :index="52" :showLabel="false" />  | Gold Boots               |
|  53 |   `3,5`    | <TextureSwatch atlas="items" :index="53" :showLabel="false" />  | Stick                    |
|  54 |   `3,6`    | <TextureSwatch atlas="items" :index="54" :showLabel="false" />  | Compass                  |
|  55 |   `3,7`    | <TextureSwatch atlas="items" :index="55" :showLabel="false" />  | Diamond                  |
|  56 |   `3,8`    | <TextureSwatch atlas="items" :index="56" :showLabel="false" />  | Redstone dust            |
|  57 |   `3,9`    | <TextureSwatch atlas="items" :index="57" :showLabel="false" />  | Clay                     |
|  58 |   `3,10`   | <TextureSwatch atlas="items" :index="58" :showLabel="false" />  | Paper                    |
|  59 |   `3,11`   | <TextureSwatch atlas="items" :index="59" :showLabel="false" />  | Book                     |
|  60 |   `3,12`   | <TextureSwatch atlas="items" :index="60" :showLabel="false" />  | Map                      |
|  64 |   `4,0`    | <TextureSwatch atlas="items" :index="64" :showLabel="false" />  | Wooden Sword             |
|  65 |   `4,1`    | <TextureSwatch atlas="items" :index="65" :showLabel="false" />  | Stone Sword              |
|  66 |   `4,2`    | <TextureSwatch atlas="items" :index="66" :showLabel="false" />  | Iron Sword               |
|  67 |   `4,3`    | <TextureSwatch atlas="items" :index="67" :showLabel="false" />  | Diamond Sword            |
|  68 |   `4,4`    | <TextureSwatch atlas="items" :index="68" :showLabel="false" />  | Gold Sword               |
|  69 |   `4,5`    | <TextureSwatch atlas="items" :index="69" :showLabel="false" />  | Fishing rod              |
|  70 |   `4,6`    | <TextureSwatch atlas="items" :index="70" :showLabel="false" />  | Clock                    |
|  71 |   `4,7`    | <TextureSwatch atlas="items" :index="71" :showLabel="false" />  | Bowl                     |
|  72 |   `4,8`    | <TextureSwatch atlas="items" :index="72" :showLabel="false" />  | Mushroom stew            |
|  73 |   `4,9`    | <TextureSwatch atlas="items" :index="73" :showLabel="false" />  | Glowstone dust           |
|  74 |   `4,10`   | <TextureSwatch atlas="items" :index="74" :showLabel="false" />  | Bucket                   |
|  75 |   `4,11`   | <TextureSwatch atlas="items" :index="75" :showLabel="false" />  | Water Bucket             |
|  76 |   `4,12`   | <TextureSwatch atlas="items" :index="76" :showLabel="false" />  | Lava Bucket              |
|  77 |   `4,13`   | <TextureSwatch atlas="items" :index="77" :showLabel="false" />  | Milk Bucket              |
|  78 |   `4,14`   | <TextureSwatch atlas="items" :index="78" :showLabel="false" />  | Black dye/Ink sack       |
|  79 |   `4,15`   | <TextureSwatch atlas="items" :index="79" :showLabel="false" />  | Gray dye                 |
|  80 |   `5,0`    | <TextureSwatch atlas="items" :index="80" :showLabel="false" />  | Wooden Shovel            |
|  81 |   `5,1`    | <TextureSwatch atlas="items" :index="81" :showLabel="false" />  | Stone Shovel             |
|  82 |   `5,2`    | <TextureSwatch atlas="items" :index="82" :showLabel="false" />  | Iron Shovel              |
|  83 |   `5,3`    | <TextureSwatch atlas="items" :index="83" :showLabel="false" />  | Diamond Shovel           |
|  84 |   `5,4`    | <TextureSwatch atlas="items" :index="84" :showLabel="false" />  | Gold Shovel              |
|  85 |   `5,5`    | <TextureSwatch atlas="items" :index="85" :showLabel="false" />  | Fishing rod (reeled out) |
|  86 |   `5,6`    | <TextureSwatch atlas="items" :index="86" :showLabel="false" />  | Redstone Repeater        |
|  87 |   `5,7`    | <TextureSwatch atlas="items" :index="87" :showLabel="false" />  | Raw Porkchop             |
|  88 |   `5,8`    | <TextureSwatch atlas="items" :index="88" :showLabel="false" />  | Cooked Porkchop          |
|  89 |   `5,9`    | <TextureSwatch atlas="items" :index="89" :showLabel="false" />  | Raw Fish                 |
|  90 |   `5,10`   | <TextureSwatch atlas="items" :index="90" :showLabel="false" />  | Cooked Fish              |
|  92 |   `5,12`   | <TextureSwatch atlas="items" :index="92" :showLabel="false" />  | Cookie                   |
|  93 |   `5,13`   | <TextureSwatch atlas="items" :index="93" :showLabel="false" />  | Shears                   |
|  94 |   `5,14`   | <TextureSwatch atlas="items" :index="94" :showLabel="false" />  | Red dye                  |
|  95 |   `5,15`   | <TextureSwatch atlas="items" :index="95" :showLabel="false" />  | Pink dye                 |
|  96 |   `6,0`    | <TextureSwatch atlas="items" :index="96" :showLabel="false" />  | Wooden Pickaxe           |
|  97 |   `6,1`    | <TextureSwatch atlas="items" :index="97" :showLabel="false" />  | Stone Pickaxe            |
|  98 |   `6,2`    | <TextureSwatch atlas="items" :index="98" :showLabel="false" />  | Iron Pickaxe             |
|  99 |   `6,3`    | <TextureSwatch atlas="items" :index="99" :showLabel="false" />  | Diamond Pickaxe          |
| 100 |   `6,4`    | <TextureSwatch atlas="items" :index="100" :showLabel="false" /> | Gold Pickaxe             |
| 103 |   `6,7`    | <TextureSwatch atlas="items" :index="103" :showLabel="false" /> | Leather                  |
| 104 |   `6,8`    | <TextureSwatch atlas="items" :index="104" :showLabel="false" /> | Saddle                   |
| 110 |   `6,14`   | <TextureSwatch atlas="items" :index="110" :showLabel="false" /> | Green dye                |
| 111 |   `6,15`   | <TextureSwatch atlas="items" :index="111" :showLabel="false" /> | Lime dye                 |
| 112 |   `7,0`    | <TextureSwatch atlas="items" :index="112" :showLabel="false" /> | Wooden Axe               |
| 113 |   `7,1`    | <TextureSwatch atlas="items" :index="113" :showLabel="false" /> | Stone Axe                |
| 114 |   `7,2`    | <TextureSwatch atlas="items" :index="114" :showLabel="false" /> | Iron Axe                 |
| 115 |   `7,3`    | <TextureSwatch atlas="items" :index="115" :showLabel="false" /> | Diamond Axe              |
| 116 |   `7,4`    | <TextureSwatch atlas="items" :index="116" :showLabel="false" /> | Gold Axe                 |
| 126 |   `7,14`   | <TextureSwatch atlas="items" :index="126" :showLabel="false" /> | Brown dye                |
| 127 |   `7,15`   | <TextureSwatch atlas="items" :index="127" :showLabel="false" /> | Yellow dye               |
| 128 |   `8,0`    | <TextureSwatch atlas="items" :index="128" :showLabel="false" /> | Wooden Hoe               |
| 129 |   `8,1`    | <TextureSwatch atlas="items" :index="129" :showLabel="false" /> | Stone Hoe                |
| 130 |   `8,2`    | <TextureSwatch atlas="items" :index="130" :showLabel="false" /> | Iron Hoe                 |
| 131 |   `8,3`    | <TextureSwatch atlas="items" :index="131" :showLabel="false" /> | Diamond Hoe              |
| 132 |   `8,4`    | <TextureSwatch atlas="items" :index="132" :showLabel="false" /> | Gold Hoe                 |
| 135 |   `8,7`    | <TextureSwatch atlas="items" :index="135" :showLabel="false" /> | Minecart                 |
| 136 |   `8,8`    | <TextureSwatch atlas="items" :index="136" :showLabel="false" /> | Boat                     |
| 142 |   `8,14`   | <TextureSwatch atlas="items" :index="142" :showLabel="false" /> | Blue dye/Lapis Lazuli    |
| 143 |   `8,15`   | <TextureSwatch atlas="items" :index="143" :showLabel="false" /> | Light-blue dye           |
| 151 |   `9,7`    | <TextureSwatch atlas="items" :index="151" :showLabel="false" /> | Minecart with Chest      |
| 158 |   `9,14`   | <TextureSwatch atlas="items" :index="158" :showLabel="false" /> | Purple dye               |
| 159 |   `9,15`   | <TextureSwatch atlas="items" :index="159" :showLabel="false" /> | Magenta dye              |
| 167 |   `10,7`   | <TextureSwatch atlas="items" :index="167" :showLabel="false" /> | Minecart with Furnace    |
| 174 |  `10,14`   | <TextureSwatch atlas="items" :index="174" :showLabel="false" /> | Cyan dye                 |
| 175 |  `10,15`   | <TextureSwatch atlas="items" :index="175" :showLabel="false" /> | Orange dye               |
| 190 |  `11,14`   | <TextureSwatch atlas="items" :index="190" :showLabel="false" /> | Light-grey dye           |
| 191 |  `11,15`   | <TextureSwatch atlas="items" :index="191" :showLabel="false" /> | White dye/Bonemeal       |
| 240 |   `15,0`   | <TextureSwatch atlas="items" :index="240" :showLabel="false" /> | Record 13                |
| 241 |   `15,1`   | <TextureSwatch atlas="items" :index="241" :showLabel="false" /> | Record cat               |

Any spaces that're not filled with a texture are usually transparent, though a few have a blue corner.

|                              Empty                              |                           Transparent                           |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <TextureSwatch atlas="items" :index="207" :showLabel="false" /> | <TextureSwatch atlas="items" :index="208" :showLabel="false" /> |

## Legal disclaimer

These textures fully belong to Mojang, and we make no claim of ownership by presenting them on this page or other parts of the Wiki. Please see our [legal page](/legal) for more info.
