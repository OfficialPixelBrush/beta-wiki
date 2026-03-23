---
order: 2
description: Smelting is done in the furnace. It's how ores are processed into ingots, and food is cooked.
---

# Smelting

Smelting is done in the furnace. It's how ores are processed into ingots, and food is cooked.

# Valid inputs

|                                                                    Input | Result                                                                              |
| -----------------------------------------------------------------------: | :---------------------------------------------------------------------------------- |
|        <TextureSwatch texture_name="blocks/iron_ore" label="Iron ore" /> | <TextureSwatch texture_name="items/iron_ingot" label="Iron ingot" />                |
|        <TextureSwatch texture_name="blocks/gold_ore" label="Gold ore" /> | <TextureSwatch texture_name="items/gold_ingot" label="Gold ingot" />                |
|  <TextureSwatch texture_name="blocks/diamond_ore" label="Diamond ore" /> | <TextureSwatch texture_name="items/diamond" label="Diamond" />                      |
|                <TextureSwatch texture_name="blocks/sand" label="Sand" /> | <TextureSwatch texture_name="blocks/glass" label="Glass" />                         |
| <TextureSwatch texture_name="items/raw_porkchop" label="Raw porkchop" /> | <TextureSwatch texture_name="items/cooked_porkchop" label="Cooked porkchop" />      |
|         <TextureSwatch texture_name="items/raw_fish" label="Raw fish" /> | <TextureSwatch texture_name="items/cooked_fish" label="Cooked fish" />              |
|  <TextureSwatch texture_name="blocks/cobblestone" label="Cobblestone" /> | <TextureSwatch texture_name="blocks/stone" label="Stone" />                         |
|                <TextureSwatch texture_name="blocks/clay" label="Clay" /> | <TextureSwatch texture_name="items/brick" label="Brick" />                          |
|       <TextureSwatch texture_name="blocks/cactus_side" label="Cactus" /> | <TextureSwatch texture_name="items/green_dye" label="Green dye" /> (Dye, Meta: `2`) |
|                                                          Wood (Material) | <TextureSwatch texture_name="items/coal" label="Charcoal" /> (Coal, Meta: `1`)      |

# Valid fuel

|                                                                      Fuel | Burn time (ticks) |
| ------------------------------------------------------------------------: | :---------------- |
|                                                           Wood (Material) | `300`             |
|                <TextureSwatch texture_name="items/stick" label="Stick" /> | `100`             |
|                  <TextureSwatch texture_name="items/coal" label="Coal" /> | `1600`            |
|    <TextureSwatch texture_name="items/lava_bucket" label="Lava Bucket" /> | `20000`           |
| <TextureSwatch texture_name="blocks/oak_sapling" label="Sapling" /> (any) | `100`             |
|                                                                     Other | `0`               |
