---
order: 10
description: Particles are 2D sprites that are there to spice up the look of Minecraft. They're all usually rendered as a billboard, to always face the player. Internally they're handled as entities.
---

# Particles
Particles are 2D sprites that are there to spice up the look of Minecraft. They're all usually rendered as a billboard, to always face the player. Internally they're handled as entities.

## Generic Particles
These particles are reused for several things, and are indexed with a string id.

| ID/Name | Appeareance | Usage |
| ---: | :--- | :--- |
| `bubble` | Bubbles | Usually spawned when entities are in water  |
| `smoke` | Rising smoke | Used by torches, fireballs, furnaces, mob spawners and lava, but also primed TNT and Wolf taming  |
| `note` | Colored musical note | Used by Noteblocks |
| `portal` | Purple smoke | Spawned around Nether Portal blocks |
| `explode` | Smoke | Used by explosions, but also as the smoke that appears when entities die |
| `flame` | Small flame | Used by torches, furnaces and mob spawners |
| `lava` | Lava ejection | Used by lava |
| `footstep` | Small grey square | Unused |
| `splash` | Rain particle | Used by boats, wet wolves shaking themselves off and for fish when fishing |
| `largesmoke` | Rising smoke plume | Used by fire, lava, furnace minecarts and water buckets when placed in the Nether |
| `reddust` | Red smoke | Used by powered redstone components |
| `snowballpoof` | Snowball pieces | Used by snowballs |
| `snowshovel` | | Unused |
| `slime` | Slimeball pieces | Spawned when slimes land on the ground |
| `heart` | Heart | Used when a wolf is tamed |

> [!NOTE]
> `snowballpoof`, `slime` and thrown eggs all use the same function under the hood. They just use different item textures.

## Block Destruction
Block Destruction particles are handled slightly differently. The game will spawn 64 particles, evenly spread out within the space the block occupied.

A random face is chosen as the source for the texture of each particle.