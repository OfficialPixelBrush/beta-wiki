---
order: 10
description: Particles are 2D sprites that are there to spice up the look of Minecraft. They're all usually rendered as a billboard, to always face the player. Internally they're handled as entities.
---

# Particles

Particles are 2D sprites that are there to spice up the look of Minecraft. They're all usually rendered as a billboard, to always face the player. Internally they're handled as entities.

## Generic Particles

These particles are reused for several things, and are indexed with a string id.

|        ID/Name | Appeareance                                                                                  | Usage                                                                                            |
| -------------: | :------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
|       `bubble` | <img src="./images/particles/bubble.png" alt="Bubbles" style="width: 50%;">                  | Usually spawned when entities are in water                                                       |
|        `smoke` | <img src="./images/particles/smoke.png" alt="Rising smoke" style="width: 50%;">              | Used by torches, fireballs, furnaces, mob spawners and lava, but also primed TNT and Wolf taming |
|         `note` | <img src="./images/particles/note.png" alt="Colored musical note" style="width: 50%;">       | Used by Noteblocks                                                                               |
|       `portal` | <img src="./images/particles/portal.png" alt="Purple smoke" style="width: 50%;">             | Spawned around Nether Portal blocks                                                              |
|      `explode` | <img src="./images/particles/explode.png" alt="Smoke" style="width: 50%;">                   | Used by explosions, but also as the smoke that appears when entities die                         |
|        `flame` | <img src="./images/particles/flame.png" alt="Small flame" style="width: 50%;">               | Used by torches, furnaces and mob spawners                                                       |
|         `lava` | <img src="./images/particles/lava.png" alt="Lava ejection" style="width: 50%;">              | Used by lava                                                                                     |
|     `footstep` | <img src="./images/particles/footstep.png" alt="Small grey square" style="width: 50%;">      | Unused                                                                                           |
|       `splash` | <img src="./images/particles/splash.png" alt="Rain particle" style="width: 50%;">            | Used by boats, wet wolves shaking themselves off and for fish when fishing                       |
|   `largesmoke` | <img src="./images/particles/largesmoke.png" alt="Rising smoke plume" style="width: 50%;">   | Used by fire, lava, furnace minecarts and water buckets when placed in the Nether                |
|      `reddust` | <img src="./images/particles/reddust.gif" alt="Red smoke" style="width: 50%;">               | Used by powered redstone components                                                              |
| `snowballpoof` | <img src="./images/particles/snowballpoof.png" alt="Snowball pieces" style="width: 50%;">    | Used by snowballs                                                                                |
|   `snowshovel` | <img src="./images/particles/generic_particle.gif" alt="Snow/Dust puff" style="width: 50%;"> | Unused                                                                                           |
|        `slime` | <img src="./images/particles/slime.png" alt="Slimeball pieces" style="width: 50%;">          | Spawned when slimes land on the ground                                                           |
|        `heart` | <img src="./images/particles/heart.png" alt="Heart" style="width: 50%;">                     | Used when a wolf is tamed                                                                        |

> [!NOTE]
> `snowballpoof`, `slime` and thrown eggs all use the same function under the hood. They just use different item textures.

## Block Destruction

Block Destruction particles are handled slightly differently. The game will spawn 64 particles, evenly spread out within the space the block occupied.

A random face is chosen as the source for the texture of each particle.
