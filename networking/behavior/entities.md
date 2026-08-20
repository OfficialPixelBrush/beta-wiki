---
order: 15
description: Documents how entities are tracked and updated on the server.
---

# Entities

::: warning
HYPER WIP!!!! Lots needed still!!!!

- Entity Tracker Behavior
- Entity Tracking in General
- Types of Entities
- Metadata
- Equipment
- Animations
- Spawning + Despawning
  :::

All Entities get their position and rotation quantized before they're sent to the client.

The quantized position is only updated if the difference between the last sent position and the new position is more than `1/4`th of a block. The same is true for angles that differ more than `11.25°` from the last sent angle.

Velocity is also sent to help the client smooth out the motion.

## Further Reading

- [Entities](/entities/index)
- [Entity Packets](../packets/index#entity)
