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
|  `stone` | Used by Redstone Dust, Glass, any of the ore blocks and all stone-related blocks like Stone, Cobblestone, Bedrock, Furnaces, etc.                                                                   |
|   `wood` | Used by all wodden blocks, like logs, planks, crafting tables, chests, signs, doors, ladders, torches and signs, but also levers, Repeaters and Pumpkins (also Fire, though it can't be stepped on) |
| `gravel` | Used by Dirt, Gravel, Farmland and Clay                                                                                                                                                             |
|  `grass` | Used by grass, saplings, leaves, sponges, TNT, crops, deadbushes, flowers and tallgrass                                                                                                             |
|  `cloth` | Used by Snow, Cacti, Cake and Wool                                                                                                                                                                  |
|   `sand` | Used by Sand and Soul sand                                                                                                                                                                          |

## Further reading

- [Effect Packet](../networking/packets/061-effect)
