---
order: 30
---

# Tile Entities

Tile entities are blocks that contain additional data, beyond the 4-bit Metadata/Damage Value every item/block has.

## Base

All tile entities share a common layout that they then add their additional fields onto.

| Field | Type    | Description                       |
| ----- | ------- | --------------------------------- |
| id    | String  | The label of the tile entity      |
| x     | Integer | The X block position of the block |
| y     | Integer | The Y block position of the block |
| z     | Integer | The Z block position of the block |

As these are always the same, they will only be included as part of the examples.

## Sign

Signs just store what lines they contain. The rest is handled by the block they attach to, namely their rotation. Their data needs to be sent to any clients via [the designated Sign Packet](../networking/packets/130-update-sign). Each line of a sign should only have `15` characters.

| Field | Type   | Description             |
| ----- | ------ | ----------------------- |
| Text1 | String | First Line on the sign  |
| Text2 | String | Second Line on the sign |
| Text3 | String | Third Line on the sign  |
| Text4 | String | Fourth Line on the sign |

**Example**

| Field | Value           |
| ----- | --------------- |
| Text1 | `Welcome to`    |
| Text2 | `the Beta Wiki` |
| Text3 | `Thank you`     |
| Text4 | `for helping!`  |
| id    | `Sign`          |
| x     | `17`            |
| y     | `55`            |
| z     | `60`            |

## Mob Spawner

| Field    | Type   | Description                                          |
| -------- | ------ | ---------------------------------------------------- |
| Delay    | Short  | How often per tick a mob spawn attempt can be issued |
| EntityId | String | The label of the spawnable entity                    |

**Example**

| Field    | Value        |
| -------- | ------------ |
| Delay    | `20`         |
| EntityId | `Zombie`     |
| id       | `MobSpawner` |
| x        | `17`         |
| y        | `55`         |
| z        | `60`         |

## Chest

| Field | Type | Description                     |
| ----- | ---- | ------------------------------- |
| Items | List | A list of Compound-tagged items |

> [!NOTE]
> Large chests are just normal chests that happen to be adjacent when opened. They do not share a tile entity entry!

**Example**

| Field | Value   |
| ----- | ------- |
| Items |         |
| id    | `Chest` |
| x     | `20`    |
| y     | `55`    |
| z     | `61`    |

## Furnace

| Field    | Type  | Description                                       |
| -------- | ----- | ------------------------------------------------- |
| Items    | List  | A list of Compound-taged items                    |
| BurnTime | Short | Time remaining in ticks until the fuel is used up |
| CookTime | Short | Time remaining in ticks until the item is cooked  |

**Example**

| Field    | Value     |
| -------- | --------- |
| Items    |           |
| BurnTime | `0`       |
| CookTime | `0`       |
| id       | `Furnace` |
| x        | `20`      |
| y        | `55`      |
| z        | `61`      |

## Dispenser

The dispenser is internally referred to as `Trap`.

| Field | Type | Description                     |
| ----- | ---- | ------------------------------- |
| Items | List | A list of Compound-tagged items |

**Example**

| Field | Value  |
| ----- | ------ |
| Items |        |
| id    | `Trap` |
| x     | `20`   |
| y     | `55`   |
| z     | `61`   |

## Noteblock

Noteblocks are internally referred to as `Music`.

| Field | Type | Description                  |
| ----- | ---- | ---------------------------- |
| note  | Byte | The current Note/Pitch value |

**Example**

| Field | Value   |
| ----- | ------- |
| id    | `Music` |
| note  | `5`     |
| x     | `20`    |
| y     | `55`    |
| z     | `61`    |

## Jukebox

Jukeboxes are internally referred to as `RecordPlayer`.

| Field  | Type    | Description                                   |
| ------ | ------- | --------------------------------------------- |
| Record | Integer | The item id of the currently contained record |

**Example**

| Field  | Value          |
| ------ | -------------- |
| id     | `RecordPlayer` |
| Record | `2257`         |
| x      | `20`           |
| y      | `55`           |
| z      | `61`           |
