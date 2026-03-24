---
order: 10
description: Items are non-block things that're usually represented as a 2D Sprite, given pseudo-3D depth. Most items only have 2 properties. A 16-bit numeric ID and an 8-bit data value.
---

# Items

Items are non-block things that're usually represented as a 2D Sprite, given pseudo-3D depth. Most items only have 2 properties. A 16-bit numeric ID and an 8-bit data value.

## Listing

Here is a comprehensive listing of all items.

| Value | Name                 | Metadata use                   |
| ----: | :------------------- | :----------------------------- |
|   256 | Iron Shovel          | [Remaining uses](#tools)       |
|   257 | Iron Pickaxe         | [Remaining uses](#tools)       |
|   258 | Iron Axe             | [Remaining uses](#tools)       |
|   259 | Flint and Steel      | [Remaining uses](#tools)       |
|   260 | Apple                |                                |
|   261 | Bow                  |                                |
|   262 | Arrow                |                                |
|   263 | Coal                 | Coal `0`, Charcoal `1`         |
|   264 | Diamond              |                                |
|   265 | Iron                 |                                |
|   266 | Gold                 |                                |
|   267 | Iron Sword           | [Remaining uses](#tools)       |
|   268 | Wooden Sword         | [Remaining uses](#tools)       |
|   269 | Wooden Shovel        | [Remaining uses](#tools)       |
|   270 | Wooden Pickaxe       | [Remaining uses](#tools)       |
|   271 | Wooden Axe           | [Remaining uses](#tools)       |
|   272 | Stone Sword          | [Remaining uses](#tools)       |
|   273 | Stone Shovel         | [Remaining uses](#tools)       |
|   274 | Stone Pickaxe        | [Remaining uses](#tools)       |
|   275 | Stone Axe            | [Remaining uses](#tools)       |
|   276 | Diamond Sword        | [Remaining uses](#tools)       |
|   277 | Diamond Shovel       | [Remaining uses](#tools)       |
|   278 | Diamond Pickaxe      | [Remaining uses](#tools)       |
|   279 | Diamond Axe          | [Remaining uses](#tools)       |
|   280 | Stick                |                                |
|   281 | Bowl                 |                                |
|   282 | Mushroom Stew        |                                |
|   283 | Gold Sword           | [Remaining uses](#tools)       |
|   284 | Gold Shovel          | [Remaining uses](#tools)       |
|   285 | Gold Pickaxe         | [Remaining uses](#tools)       |
|   286 | Gold Axe             | [Remaining uses](#tools)       |
|   287 | String               |                                |
|   288 | Feather              |                                |
|   289 | Gunpowder            |                                |
|   290 | Wooden Hoe           | [Remaining uses](#tools)       |
|   291 | Stone Hoe            | [Remaining uses](#tools)       |
|   292 | Iron Hoe             | [Remaining uses](#tools)       |
|   293 | Diamond Hoe          | [Remaining uses](#tools)       |
|   294 | Gold Hoe             | [Remaining uses](#tools)       |
|   295 | Seeds                |                                |
|   296 | Wheat                |                                |
|   297 | Bread                |                                |
|   298 | Leather Cap          | [Remaining uses](#tools)       |
|   299 | Leather Tunic        | [Remaining uses](#tools)       |
|   300 | Leather Pants        | [Remaining uses](#tools)       |
|   301 | Leather Boots        | [Remaining uses](#tools)       |
|   302 | Chainmail Helmet     | [Remaining uses](#tools)       |
|   303 | Chainmail Chestplate | [Remaining uses](#tools)       |
|   304 | Chainmail Leggings   | [Remaining uses](#tools)       |
|   305 | Chainmail Boots      | [Remaining uses](#tools)       |
|   306 | Iron Helmet          | [Remaining uses](#tools)       |
|   307 | Iron Chestplate      | [Remaining uses](#tools)       |
|   308 | Iron Leggings        | [Remaining uses](#tools)       |
|   309 | Iron Boots           | [Remaining uses](#tools)       |
|   310 | Diamond Helmet       | [Remaining uses](#tools)       |
|   311 | Diamond Chestplate   | [Remaining uses](#tools)       |
|   312 | Diamond Leggings     | [Remaining uses](#tools)       |
|   313 | Diamond Boots        | [Remaining uses](#tools)       |
|   314 | Gold Helmet          | [Remaining uses](#tools)       |
|   315 | Gold Chestplate      | [Remaining uses](#tools)       |
|   316 | Gold Leggings        | [Remaining uses](#tools)       |
|   317 | Gold Boots           | [Remaining uses](#tools)       |
|   318 | Flint                | [Remaining uses](#other-tools) |
|   319 | Porkchop             |                                |
|   320 | Cooked Porkchop      |                                |
|   321 | Painting             |                                |
|   322 | Golden Apple         |                                |
|   323 | Sign                 |                                |
|   324 | Wooden Door          |                                |
|   325 | Bucket               |                                |
|   326 | Water Bucket         |                                |
|   327 | Lava Bucket          |                                |
|   328 | Minecart             |                                |
|   329 | Saddle               |                                |
|   330 | Iron Door            |                                |
|   331 | Redstone             |                                |
|   332 | Snowball             |                                |
|   333 | Boat                 |                                |
|   334 | Leather              |                                |
|   335 | Milk Bucket          |                                |
|   336 | Brick                |                                |
|   337 | Clay                 |                                |
|   338 | Sugarcane            |                                |
|   339 | Paper                |                                |
|   340 | Book                 |                                |
|   341 | Slime                |                                |
|   342 | Chest Minecart       |                                |
|   343 | Furnace Minecart     |                                |
|   344 | Egg                  |                                |
|   345 | Compass              |                                |
|   346 | Fishing Rod          |                                |
|   347 | Clock                |                                |
|   348 | Glowstone Dust       |                                |
|   349 | Fish                 |                                |
|   350 | Cooked Fish          |                                |
|   351 | Dye                  | [Color](#dye)                  |
|   352 | Bone                 |                                |
|   353 | Sugar                |                                |
|   354 | Cake                 |                                |
|   355 | Bed                  |                                |
|   356 | Redstone Repeater    |                                |
|   357 | Cookie               |                                |
|   358 | Map                  |                                |
|   359 | Shears               | [Remaining uses](#other-tools) |
|  2256 | Record (13)          |                                |
|  2257 | Record (cat)         |                                |

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

| Value | Color                                                                          |
| ----: | :----------------------------------------------------------------------------- |
|     0 | <TextureSwatch texture_name="items/bonemeal" label="Bonemeal/White dye" />     |
|     1 | <TextureSwatch texture_name="items/orange_dye" label="Orange dye" />           |
|     2 | <TextureSwatch texture_name="items/magenta_dye" label="Magenta dye" />         |
|     3 | <TextureSwatch texture_name="items/light_blue_dye" label="Light-blue dye" />   |
|     4 | <TextureSwatch texture_name="items/yellow_dye" label="Yellow dye" />           |
|     5 | <TextureSwatch texture_name="items/lime_dye" label="Lime dye" />               |
|     6 | <TextureSwatch texture_name="items/pink_dye" label="Pink dye" />               |
|     7 | <TextureSwatch texture_name="items/grey_dye" label="Gray dye" />               |
|     8 | <TextureSwatch texture_name="items/light_grey_dye" label="Light-gray dye" />   |
|     9 | <TextureSwatch texture_name="items/cyan_dye" label="Cyan dye" />               |
|    10 | <TextureSwatch texture_name="items/purple_dye" label="Purple dye" />           |
|    11 | <TextureSwatch texture_name="items/blue_dye" label="Blue dye" />               |
|    12 | <TextureSwatch texture_name="items/brown_dye" label="Coco beans/ Brown dye" /> |
|    13 | <TextureSwatch texture_name="items/green_dye" label="Green dye" />             |
|    14 | <TextureSwatch texture_name="items/red_dye" label="Red dye" />                 |
|    15 | <TextureSwatch texture_name="items/black_dye" label="Ink sac/Black dye" />     |
