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

|          Label | Usage          |
| -------------: | :------------- |
| `random.click` | Button presses |

## Step Sounds

These sounds are usually played when a block is broken or walked on. Internally they're prefixed with `step.`

|    Label | Usage                                                                                                                                                                                               |
| -------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  `stone` | Used by Redstone Dust, Glass, any of the ore blocks and all stone-related blocks like Stone, Cobblestone, Bedrock, Furnaces, etc.                                                                   |
|   `wood` | Used by all wodden blocks, like logs, planks, crafting tables, chests, signs, doors, ladders, torches and signs, but also levers, Repeaters and Pumpkins (also Fire, though it can't be stepped on) |
| `gravel` | Used by Dirt, Gravel, Farmland and Clay                                                                                                                                                             |
|  `grass` | Used by grass, saplings, leaves, sponges, TNT, crops, deadbushes, flowers and tallgrass                                                                                                             |
|  `cloth` | Used by Snow, Cacti, Cake and Wool                                                                                                                                                                  |
|   `sand` | Used by Sand and Soul sand                                                                                                                                                                          |

`stone` is reused a few times by several blocks, even ones that aren't stone. These include Redstone Dust

`wood` is used by all wodden blocks

`gravel` is used by Dirt, Gravel, Farmland and Clay.

## Further reading

- [Effect Packet](../networking/packets/061-effect)
