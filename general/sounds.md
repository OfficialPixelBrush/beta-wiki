---
order: 50
description: Sounds are used to provide auditory information to the player, and to make the world feel more alive.
---

# Sounds

Sounds are used to provide auditory information to the player, and to make the world feel more alive.

::: tip MISSING
TODO: Many sounds are still missing!
:::

## Generic Sounds

|                     Label | Usage                                                                                                           |
| ------------------------: | :-------------------------------------------------------------------------------------------------------------- |
|    `ambient.weather.rain` | Rain                                                                                                            |
| `ambient.weather.thunder` | Thunder strike                                                                                                  |
|               `fire.fire` | Fire crackling                                                                                                  |
|             `fire.ignite` | Flint n' Steel ignition                                                                                         |
|            `liquid.water` | Water flowing                                                                                                   |
|         `note.bassattack` | Bass Instrument                                                                                                 |
|                 `note.bd` | Bass Drum Instrument                                                                                            |
|               `note.harp` | Harp Instrument                                                                                                 |
|                `note.hat` | Hi-hat Instrument                                                                                               |
|              `note.snare` | Snare Instrument                                                                                                |
|           `portal.portal` | Nether portal woosh                                                                                             |
|            `random.click` | Button presses                                                                                                  |
|          `random.explode` | Explosion (and Thunder)                                                                                         |
|             `random.fizz` | Used when a Redstone Torch burns out, Water is played in the Nether or Lava is turned into Cobblestone/Obsidian |
|          `tile.piston.in` | Piston retract                                                                                                  |
|         `tile.piston.out` | Piston extend                                                                                                   |

## Material Sounds

These sounds are usually played when a block is placed, broken or walked on. Internally they're prefixed with `step.`

|    Label | Usage                                                                                                                                                                                               |
| -------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  `stone` | Used by Redstone Dust, Glass, any of the ore blocks and all stone-related blocks like stone, cobblestone, bedrock, furnaces, etc.                                                                   |
|   `wood` | Used by all wooden blocks, like logs, planks, crafting tables, chests, signs, doors, ladders, torches and signs, but also levers, repeaters and pumpkins (also fire, though it can't be stepped on) |
| `gravel` | Used by dirt, gravel, farmland and clay                                                                                                                                                             |
|  `grass` | Used by grass, saplings, leaves, sponges, TNT, crops, deadbushes, flowers and tallgrass                                                                                                             |
|  `cloth` | Used by snow, cacti, cake and wool                                                                                                                                                                  |
|   `sand` | Used by sand and soul sand                                                                                                                                                                          |

## Further reading

- [Effect Packet](../networking/packets/061-effect)
