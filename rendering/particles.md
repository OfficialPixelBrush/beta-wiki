---
order: 10
description: Particles are 2D sprites that are there to spice up the look of Minecraft. They're all usually rendered as a billboard, to always face the player. Internally they're handled as entities.
---

# Particles

Particles are 2D sprites that are there to spice up the look of Minecraft. They're all usually rendered as a billboard, to always face the player. Internally they're handled as entities.

## Named Particles

These particles are reused for several things, and are indexed with a string ID.

|        ID/Name |                                     Appearance                                      | Usage                                                                                            |
| -------------: | :---------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------- |
|       `bubble` |         <img src="/beta-wiki/textures/particles/bubble.png" alt="Bubbles">          | Usually spawned when entities are in water                                                       |
|        `smoke` |                                    Rising smoke                                     | Used by torches, fireballs, furnaces, mob spawners and lava, but also primed TNT and wolf taming |
|         `note` |                                Colored musical note                                 | Used by note blocks                                                                              |
|       `portal` |                                    Purple smoke                                     | Spawned around Nether portal blocks                                                              |
|      `explode` |                                        Smoke                                        | Used by explosions, but also as the smoke that appears when entities die                         |
|        `flame` |        <img src="/beta-wiki/textures/particles/flame.png" alt="Small flame">        | Used by torches, furnaces and mob spawners                                                       |
|         `lava` |       <img src="/beta-wiki/textures/particles/lava.png" alt="Lava ejection">        | Used by lava, usually trailed by smoke                                                           |
|     `footstep` |  <img src="/beta-wiki/textures/particles/footprint.png" alt="Small, gray square">   | Unused, lingers on the ground for quite a while                                                  |
|       `splash` |                                    Rain particle                                    | Used by boats, wet wolves shaking themselves off and for fish when fishing                       |
|   `largesmoke` |                                 Rising smoke plume                                  | Used by fire, lava, furnace minecarts and water buckets when placed in the Nether                |
|      `reddust` |        <img src="/beta-wiki/textures/particles/reddust.gif" alt="Red smoke">        | Used by powered redstone components                                                              |
| `snowballpoof` |                                   Snowball pieces                                   | Used by snowballs                                                                                |
|   `snowshovel` | <img src="/beta-wiki/textures/particles/generic_particle.gif" alt="Snow/Dust puff"> | Unused                                                                                           |
|        `slime` |                                  Slimeball pieces                                   | Spawned when slimes land on the ground                                                           |
|        `heart` |           <img src="/beta-wiki/textures/particles/heart.png" alt="Heart">           | Used when a wolf is tamed                                                                        |

> [!NOTE]
> `snowballpoof`, `slime` and thrown eggs all use the same function under the hood. They just use different item textures.

## Misc particles

Some particles are not spawned via a string ID, though two of these are likely oversights, or they required special handling that the string ID particle spawning system didn't provide.

- Lava spawns smoke when it's raining
- All sky-visible, non-air blocks can spawn rain splashes when it's raining
- Item pick-ups are treated as particles when they're flying towards you

## Block Destruction

Block destruction particles are handled slightly differently. The game will spawn 64 particles, evenly spread out within the space the block occupied.

A random face is chosen as the source for the texture of each particle.

## Further reading

- [Effect Packet](../networking/packets/061-effect)
