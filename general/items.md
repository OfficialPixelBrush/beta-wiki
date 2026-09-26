---
order: 10
description: Items are non-block things that're usually represented as a 2D Sprite, given pseudo-3D depth. Most items only have 2 properties. A 16-bit numeric ID and an 8-bit data value.
---

# Items

Items are non-block things that're usually represented as a 2D Sprite, given pseudo-3D depth. Most items only have 2 properties. A 16-bit numeric ID and a 16-bit data value.

## Listing

Here is a comprehensive listing of all items.

| Value | Icon                                                        | Name                 | Metadata use                   |
| ----: | :---------------------------------------------------------- | :------------------- | :----------------------------- |
|   256 | <TextureSwatch texture_name="items/iron_shovel" />          | Iron Shovel          | [Remaining uses](#tools)       |
|   257 | <TextureSwatch texture_name="items/iron_pickaxe" />         | Iron Pickaxe         | [Remaining uses](#tools)       |
|   258 | <TextureSwatch texture_name="items/iron_axe" />             | Iron Axe             | [Remaining uses](#tools)       |
|   259 | <TextureSwatch texture_name="items/flint_and_steel" />      | Flint and Steel      | [Remaining uses](#tools)       |
|   260 | <TextureSwatch texture_name="items/apple" />                | Apple                |                                |
|   261 | <TextureSwatch texture_name="items/bow" />                  | Bow                  |                                |
|   262 | <TextureSwatch texture_name="items/arrow" />                | Arrow                |                                |
|   263 | <TextureSwatch texture_name="items/coal" />                 | Coal                 | Coal `0`, Charcoal `1`         |
|   264 | <TextureSwatch texture_name="items/diamond" />              | Diamond              |                                |
|   265 | <TextureSwatch texture_name="items/iron_ingot" />           | Iron                 |                                |
|   266 | <TextureSwatch texture_name="items/gold_ingot" />           | Gold                 |                                |
|   267 | <TextureSwatch texture_name="items/iron_sword" />           | Iron Sword           | [Remaining uses](#tools)       |
|   268 | <TextureSwatch texture_name="items/wooden_sword" />         | Wooden Sword         | [Remaining uses](#tools)       |
|   269 | <TextureSwatch texture_name="items/wooden_shovel" />        | Wooden Shovel        | [Remaining uses](#tools)       |
|   270 | <TextureSwatch texture_name="items/wooden_pickaxe" />       | Wooden Pickaxe       | [Remaining uses](#tools)       |
|   271 | <TextureSwatch texture_name="items/wooden_axe" />           | Wooden Axe           | [Remaining uses](#tools)       |
|   272 | <TextureSwatch texture_name="items/stone_sword" />          | Stone Sword          | [Remaining uses](#tools)       |
|   273 | <TextureSwatch texture_name="items/stone_shovel" />         | Stone Shovel         | [Remaining uses](#tools)       |
|   274 | <TextureSwatch texture_name="items/stone_pickaxe" />        | Stone Pickaxe        | [Remaining uses](#tools)       |
|   275 | <TextureSwatch texture_name="items/stone_axe" />            | Stone Axe            | [Remaining uses](#tools)       |
|   276 | <TextureSwatch texture_name="items/diamond_sword" />        | Diamond Sword        | [Remaining uses](#tools)       |
|   277 | <TextureSwatch texture_name="items/diamond_shovel" />       | Diamond Shovel       | [Remaining uses](#tools)       |
|   278 | <TextureSwatch texture_name="items/diamond_pickaxe" />      | Diamond Pickaxe      | [Remaining uses](#tools)       |
|   279 | <TextureSwatch texture_name="items/diamond_axe" />          | Diamond Axe          | [Remaining uses](#tools)       |
|   280 | <TextureSwatch texture_name="items/stick" />                | Stick                |                                |
|   281 | <TextureSwatch texture_name="items/bowl" />                 | Bowl                 |                                |
|   282 | <TextureSwatch texture_name="items/mushroom_stew" />        | Mushroom Stew        |                                |
|   283 | <TextureSwatch texture_name="items/gold_sword" />           | Gold Sword           | [Remaining uses](#tools)       |
|   284 | <TextureSwatch texture_name="items/gold_shovel" />          | Gold Shovel          | [Remaining uses](#tools)       |
|   285 | <TextureSwatch texture_name="items/gold_pickaxe" />         | Gold Pickaxe         | [Remaining uses](#tools)       |
|   286 | <TextureSwatch texture_name="items/gold_axe" />             | Gold Axe             | [Remaining uses](#tools)       |
|   287 | <TextureSwatch texture_name="items/string" />               | String               |                                |
|   288 | <TextureSwatch texture_name="items/feather" />              | Feather              |                                |
|   289 | <TextureSwatch texture_name="items/gunpowder" />            | Gunpowder            |                                |
|   290 | <TextureSwatch texture_name="items/wooden_hoe" />           | Wooden Hoe           | [Remaining uses](#tools)       |
|   291 | <TextureSwatch texture_name="items/stone_hoe" />            | Stone Hoe            | [Remaining uses](#tools)       |
|   292 | <TextureSwatch texture_name="items/iron_hoe" />             | Iron Hoe             | [Remaining uses](#tools)       |
|   293 | <TextureSwatch texture_name="items/diamond_hoe" />          | Diamond Hoe          | [Remaining uses](#tools)       |
|   294 | <TextureSwatch texture_name="items/gold_hoe" />             | Gold Hoe             | [Remaining uses](#tools)       |
|   295 | <TextureSwatch texture_name="items/seeds" />                | Seeds                |                                |
|   296 | <TextureSwatch texture_name="items/wheat" />                | Wheat                |                                |
|   297 | <TextureSwatch texture_name="items/bread" />                | Bread                |                                |
|   298 | <TextureSwatch texture_name="items/leather_helmet" />       | Leather Cap          | [Remaining uses](#tools)       |
|   299 | <TextureSwatch texture_name="items/leather_chestplate" />   | Leather Tunic        | [Remaining uses](#tools)       |
|   300 | <TextureSwatch texture_name="items/leather_leggings" />     | Leather Pants        | [Remaining uses](#tools)       |
|   301 | <TextureSwatch texture_name="items/leather_boots" />        | Leather Boots        | [Remaining uses](#tools)       |
|   302 | <TextureSwatch texture_name="items/chainmail_helmet" />     | Chainmail Helmet     | [Remaining uses](#tools)       |
|   303 | <TextureSwatch texture_name="items/chainmail_chestplate" /> | Chainmail Chestplate | [Remaining uses](#tools)       |
|   304 | <TextureSwatch texture_name="items/chainmail_leggings" />   | Chainmail Leggings   | [Remaining uses](#tools)       |
|   305 | <TextureSwatch texture_name="items/chainmail_boots" />      | Chainmail Boots      | [Remaining uses](#tools)       |
|   306 | <TextureSwatch texture_name="items/iron_helmet" />          | Iron Helmet          | [Remaining uses](#tools)       |
|   307 | <TextureSwatch texture_name="items/iron_chestplate" />      | Iron Chestplate      | [Remaining uses](#tools)       |
|   308 | <TextureSwatch texture_name="items/iron_leggings" />        | Iron Leggings        | [Remaining uses](#tools)       |
|   309 | <TextureSwatch texture_name="items/iron_boots" />           | Iron Boots           | [Remaining uses](#tools)       |
|   310 | <TextureSwatch texture_name="items/diamond_helmet" />       | Diamond Helmet       | [Remaining uses](#tools)       |
|   311 | <TextureSwatch texture_name="items/diamond_chestplate" />   | Diamond Chestplate   | [Remaining uses](#tools)       |
|   312 | <TextureSwatch texture_name="items/diamond_leggings" />     | Diamond Leggings     | [Remaining uses](#tools)       |
|   313 | <TextureSwatch texture_name="items/diamond_boots" />        | Diamond Boots        | [Remaining uses](#tools)       |
|   314 | <TextureSwatch texture_name="items/gold_helmet" />          | Gold Helmet          | [Remaining uses](#tools)       |
|   315 | <TextureSwatch texture_name="items/gold_chestplate" />      | Gold Chestplate      | [Remaining uses](#tools)       |
|   316 | <TextureSwatch texture_name="items/gold_leggings" />        | Gold Leggings        | [Remaining uses](#tools)       |
|   317 | <TextureSwatch texture_name="items/gold_boots" />           | Gold Boots           | [Remaining uses](#tools)       |
|   318 | <TextureSwatch texture_name="items/flint" />                | Flint                |                                |
|   319 | <TextureSwatch texture_name="items/raw_porkchop" />         | Porkchop             |                                |
|   320 | <TextureSwatch texture_name="items/cooked_porkchop" />      | Cooked Porkchop      |                                |
|   321 | <TextureSwatch texture_name="items/painting" />             | Painting             |                                |
|   322 | <TextureSwatch texture_name="items/golden_apple" />         | Golden Apple         |                                |
|   323 | <TextureSwatch texture_name="items/sign" />                 | Sign                 |                                |
|   324 | <TextureSwatch texture_name="items/wooden_door" />          | Wooden Door          |                                |
|   325 | <TextureSwatch texture_name="items/bucket" />               | Bucket               |                                |
|   326 | <TextureSwatch texture_name="items/water_bucket" />         | Water Bucket         |                                |
|   327 | <TextureSwatch texture_name="items/lava_bucket" />          | Lava Bucket          |                                |
|   328 | <TextureSwatch texture_name="items/minecart" />             | Minecart             |                                |
|   329 | <TextureSwatch texture_name="items/saddle" />               | Saddle               |                                |
|   330 | <TextureSwatch texture_name="items/iron_door" />            | Iron Door            |                                |
|   331 | <TextureSwatch texture_name="items/redstone_dust" />        | Redstone             |                                |
|   332 | <TextureSwatch texture_name="items/snowball" />             | Snowball             |                                |
|   333 | <TextureSwatch texture_name="items/boat" />                 | Boat                 |                                |
|   334 | <TextureSwatch texture_name="items/leather" />              | Leather              |                                |
|   335 | <TextureSwatch texture_name="items/milk_bucket" />          | Milk Bucket          |                                |
|   336 | <TextureSwatch texture_name="items/brick" />                | Brick                |                                |
|   337 | <TextureSwatch texture_name="items/clay" />                 | Clay                 |                                |
|   338 | <TextureSwatch texture_name="items/sugarcane" />            | Sugarcane            |                                |
|   339 | <TextureSwatch texture_name="items/paper" />                | Paper                |                                |
|   340 | <TextureSwatch texture_name="items/book" />                 | Book                 |                                |
|   341 | <TextureSwatch texture_name="items/slimeball" />            | Slime                |                                |
|   342 | <TextureSwatch texture_name="items/chest_minecart" />       | Chest Minecart       |                                |
|   343 | <TextureSwatch texture_name="items/furnace_minecart" />     | Furnace Minecart     |                                |
|   344 | <TextureSwatch texture_name="items/egg" />                  | Egg                  |                                |
|   345 | <TextureSwatch texture_name="items/compass" />              | Compass              |                                |
|   346 | <TextureSwatch texture_name="items/fishing_rod" />          | Fishing Rod          |                                |
|   347 | <TextureSwatch texture_name="items/clock" />                | Clock                |                                |
|   348 | <TextureSwatch texture_name="items/glowstone_dust" />       | Glowstone Dust       |                                |
|   349 | <TextureSwatch texture_name="items/raw_fish" />             | Fish                 |                                |
|   350 | <TextureSwatch texture_name="items/cooked_fish" />          | Cooked Fish          |                                |
|   351 | <TextureSwatch texture_name="items/black_dye" />            | Dye                  | [Color](#dye)                  |
|   352 | <TextureSwatch texture_name="items/bone" />                 | Bone                 |                                |
|   353 | <TextureSwatch texture_name="items/sugar" />                | Sugar                |                                |
|   354 | <TextureSwatch texture_name="items/cake" />                 | Cake                 |                                |
|   355 | <TextureSwatch texture_name="items/bed" />                  | Bed                  |                                |
|   356 | <TextureSwatch texture_name="items/repeater" />             | Redstone Repeater    |                                |
|   357 | <TextureSwatch texture_name="items/cookie" />               | Cookie               |                                |
|   358 | <TextureSwatch texture_name="items/map" />                  | Map                  |                                |
|   359 | <TextureSwatch texture_name="items/shears" />               | Shears               | [Remaining uses](#other-tools) |
|  2256 | <TextureSwatch texture_name="items/record_13" />            | Record (13)          |                                |
|  2257 | <TextureSwatch texture_name="items/record_cat" />           | Record (cat)         |                                |

# Metadata

## Tools

|              | Wooden | Stone | Iron  | Diamond |  Gold  |
| -----------: | :----: | :---: | :---: | :-----: | :----: |
|     Max uses |  `59`  | `131` | `250` | `1561`  |  `32`  |
|   Efficiency | `2.0`  | `4.0` | `6.0` |  `8.0`  | `12.0` |
| Damage Level |  `0`   |  `1`  |  `2`  |   `3`   |  `0`   |

### Weapon Damage

|  Weapon | Base Damage |
| ------: | :---------- |
|   Sword | `4`         |
|     Axe | `3`         |
| Pickaxe | `2`         |
|  Shovel | `1`         |

Damage dealt against entities is calulated with this formula.

$$ \text{Damage} = \text{Base}+(\text{Level}\times2) $$

|  Weapon | Wooden/Gold | Stone | Iron | Diamond |
| ------: | :---------: | :---: | :--: | :-----: |
|   Sword |     `4`     |  `6`  | `8`  |  `10`   |
|     Axe |     `3`     |  `5`  | `7`  |   `9`   |
| Pickaxe |     `2`     |  `4`  | `6`  |   `8`   |
|  Shovel |     `1`     |  `3`  | `5`  |   `7`   |

### Other tools

|            Item | Max uses |
| --------------: | :------- |
| Flint and Steel | `64`     |
|          Shears | `238`    |

## Armor

|                  | Helmet | Chestplate | Leggings | Boots |
| ---------------: | :----: | :--------: | :------: | :---: |
| Damage reduction |  `3`   |    `8`     |   `6`    |  `3`  |
|        Base uses |  `11`  |    `16`    |   `15`   | `13`  |

Maximum amount of uses/damage absorbed is calculated with this formula.

$$ \text{MaxUses} = (\text{BaseUses}\times3) \times 2^\text{Level} $$

|            Level | Helmet | Chestplate | Leggings | Boots |
| ---------------: | :----: | :--------: | :------: | :---: |
|    Leather (`0`) |  `33`  |    `48`    |   `45`   | `39`  |
| Chain/Gold (`1`) |  `66`  |    `96`    |   `90`   | `78`  |
|       Iron (`2`) | `132`  |   `192`    |  `180`   | `156` |
|    Diamond (`3`) | `264`  |   `384`    |  `360`   | `312` |

## Dye

::: warning
These are sorted backwards compared to [the colors that wool offers](./blocks#wool)
:::

| Value | Color                                                                          |
| ----: | :----------------------------------------------------------------------------- |
|     0 | <TextureSwatch texture_name="items/black_dye" label="Ink sac/Black dye" />     |
|     1 | <TextureSwatch texture_name="items/red_dye" label="Red dye" />                 |
|     2 | <TextureSwatch texture_name="items/green_dye" label="Green dye" />             |
|     3 | <TextureSwatch texture_name="items/brown_dye" label="Coco beans/ Brown dye" /> |
|     4 | <TextureSwatch texture_name="items/blue_dye" label="Blue dye" />               |
|     5 | <TextureSwatch texture_name="items/purple_dye" label="Purple dye" />           |
|     6 | <TextureSwatch texture_name="items/cyan_dye" label="Cyan dye" />               |
|     7 | <TextureSwatch texture_name="items/light_grey_dye" label="Light-gray dye" />   |
|     8 | <TextureSwatch texture_name="items/grey_dye" label="Gray dye" />               |
|     9 | <TextureSwatch texture_name="items/pink_dye" label="Pink dye" />               |
|    10 | <TextureSwatch texture_name="items/lime_dye" label="Lime dye" />               |
|    11 | <TextureSwatch texture_name="items/yellow_dye" label="Yellow dye" />           |
|    12 | <TextureSwatch texture_name="items/light_blue_dye" label="Light-blue dye" />   |
|    13 | <TextureSwatch texture_name="items/magenta_dye" label="Magenta dye" />         |
|    14 | <TextureSwatch texture_name="items/orange_dye" label="Orange dye" />           |
|    15 | <TextureSwatch texture_name="items/bonemeal" label="Bonemeal/White dye" />     |
