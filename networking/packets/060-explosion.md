---
title: "0x3C: Explosion"
nav_order: 61
layout: home
parent: Packets
---

# Explosion

| Packet ID | Direction   |
| --------- | ----------- |
| `0x3C`    | Clientbound |

Used to tell the client about where an explosion occured and what blocks were destroyed due to it. This spawns the explosion particles and plays the sound as well.

## Clientbound

| Field | Type    | Description |
| ----- | ------- | --- |
| X     | Double | The X position of the explosion |
| Y     | Double | The Y position of the explosion |
| Z     | Double | The Z position of the explosion |
| Explosion Radius | Float | The radius of the explosion  |
| Number of Destroyed Blocks | Integer | The number of destroyed blocks  |
| Destroyed Blocks | Byte Array | The offsets of each destroyed block  |

The **Destroyed Blocks Array** has a format of `(X,Y,Z)` as bytes. These are added onto the explosions origin position, which is converted to an Integer.

```cpp
int destroyedBlockX = int(explosionX) + offsetX;
int destroyedBlockY = int(explosionY) + offsetY;
int destroyedBlockZ = int(explosionZ) + offsetZ;
```

## Example Packet

| Field | Value | 
| --- | --- |
| X | `51.0` |
| Y | `66.4` |
| Z | `-1642.4` |
| Explosion Radius | `3.0f` |
| Number of Destroyed Blocks | `2` |
| Destroyed Blocks | `(4, 5, 6), (1, 2, 3)` |