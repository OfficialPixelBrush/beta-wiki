---
order: 1
description: Crafting is done at the crafting table or in the players inventory. It's how various tools, blocks and items are created.
---

# Crafting

Crafting is done at the crafting table or in the players inventory. It's how various tools, blocks and items are created.

::: tip MISSING
TODO: Lots missing still!

Should we even have recipes on this page? Unsure. Please discuss.
:::

## Single-tile recipes

- Ingot (from Material Block)
  - <TextureSwatch texture_name="items/gold_ingot" label="Gold Ingot" /> (x9)
  - <TextureSwatch texture_name="items/iron_ingot" label="Iron Ingot" />(x9)
  - <TextureSwatch texture_name="items/diamond" label="Diamond" />(x9)
  - <TextureSwatch texture_name="items/blue_dye" label="Lapis-lazuli" />(x9)
- <TextureSwatch texture_name="blocks/planks" label="Planks" /> (x4)

## 2x2 recipes

- <TextureSwatch texture_name="blocks/crafting_table_side_1" label="Crafting Table" />
- <TextureSwatch texture_name="blocks/sandstone_side" label="Sandstone" />

## 3x3 recipes

- Pickaxes
  - <TextureSwatch texture_name="items/wooden_pickaxe" label="Wooden Pickaxe" />
  - <TextureSwatch texture_name="items/stone_pickaxe" label="Stone Pickaxe" />
  - <TextureSwatch texture_name="items/iron_pickaxe" label="Iron Pickaxe" />
  - <TextureSwatch texture_name="items/gold_pickaxe" label="Gold Pickaxe" />
  - <TextureSwatch texture_name="items/diamond_pickaxe" label="Diamond Pickaxe" />
- Shovels
  - <TextureSwatch texture_name="items/wooden_shovel" label="Wooden Shovel" />
  - <TextureSwatch texture_name="items/stone_shovel" label="Stone Shovel" />
  - <TextureSwatch texture_name="items/iron_shovel" label="Iron Shovel" />
  - <TextureSwatch texture_name="items/gold_shovel" label="Gold Shovel" />
  - <TextureSwatch texture_name="items/diamond_shovel" label="Diamond Shovel" />
- Axes (can be mirrored)
  - <TextureSwatch texture_name="items/wooden_axe" label="Wooden Axe" />
  - <TextureSwatch texture_name="items/stone_axe" label="Stone Axe" />
  - <TextureSwatch texture_name="items/iron_axe" label="Iron Axe" />
  - <TextureSwatch texture_name="items/gold_axe" label="Gold Axe" />
  - <TextureSwatch texture_name="items/diamond_axe" label="Diamond Axe" />
- Hoes
  - <TextureSwatch texture_name="items/wooden_hoe" label="Wooden Hoe" />
  - <TextureSwatch texture_name="items/stone_hoe" label="Stone Hoe" />
  - <TextureSwatch texture_name="items/iron_hoe" label="Iron Hoe" />
  - <TextureSwatch texture_name="items/gold_hoe" label="Gold Hoe" />
  - <TextureSwatch texture_name="items/diamond_hoe" label="Diamond Hoe" />
- Swords
  - <TextureSwatch texture_name="items/wooden_sword" label="Wooden Sword" />
  - <TextureSwatch texture_name="items/stone_sword" label="Stone Sword" />
  - <TextureSwatch texture_name="items/iron_sword" label="Iron Sword" />
  - <TextureSwatch texture_name="items/gold_sword" label="Gold Sword" />
  - <TextureSwatch texture_name="items/diamond_sword" label="Diamond Sword" />
- Material Blocks
  - <TextureSwatch texture_name="blocks/gold_block" label="Gold Block" />
  - <TextureSwatch texture_name="blocks/iron_block" label="Iron Block" />
  - <TextureSwatch texture_name="blocks/diamond_block" label="Diamond Block" />
  - <TextureSwatch texture_name="blocks/lapis_lazuli_block" label="Lapis-lazuli Block" />
- <TextureSwatch texture_name="items/mushroom_stew" label="Mushroom Stew" />
- <TextureSwatch texture_name="items/cookie" label="Cookie" />
- <TextureSwatch texture_name="blocks/chest_front" label="Chest" />
- <TextureSwatch texture_name="blocks/furnace_front" label="Furnace" />

## Utilize metadata

Most recipes do not care about an ingredients' metadata. These are all recipes that do check for specific metadata values.

- Wool + Dye = Colored Wool (Only meta 0-15 are valid, also the only truly shapeless recipe)
- Wheat + Cocoa beans (Brown dye) = Cookies
- 9x Lapis-lazuli (Blue dye) = Lapis-lazuli block
- The slab recipe results, as all slabs share the same block id
