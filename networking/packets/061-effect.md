---
title: "0x3D: Effect"
order: 62
description: This is sent by the server when it expects a client to play a sound effect or spawn a particle.
---

# Effect

| Packet ID | Direction   | Mojang Name        | MCP Name             |
| --------- | ----------- | ------------------ | -------------------- |
| `0x3D`    | Clientbound | `LevelEventPacket` | `Packet61DoorChange` |

This is sent by the server when it expects a client to play a sound effect or spawn a particle.

## Effect IDs

These are the sound/particle effect IDs and what sound they map to.

| Value | Purpose                                                    | Metadata use                                                                                                                                                                   | Type             |
| ----: | :--------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- |
|  1000 | Button Click                                               |                                                                                                                                                                                | Sound            |
|  1001 | Button Click 2                                             |                                                                                                                                                                                | Sound            |
|  1002 | Bow shot                                                   |                                                                                                                                                                                | Sound            |
|  1003 | Door open/close                                            |                                                                                                                                                                                | Sound            |
|  1004 | Fire Extinguisted                                          |                                                                                                                                                                                | Sound            |
|  1005 | Music Disk                                                 | `2256` (<TextureSwatch texture_name="../../images/items/record_13.png" label="13" />), `2257` (<TextureSwatch texture_name="../../images/items/record_cat.png" label="cat" />) | Sound            |
|  2000 | [Smoke](../../rendering/particles#named-particles)         | [Position](#smoke-position)                                                                                                                                                    | Particle         |
|  2001 | [Block Break](../../rendering/particles#block-destruction) | [Block ID](../../general/blocks#listing)                                                                                                                                       | Particle + Sound |

For more info on what effects the client itself has, check the [sounds](../../general/sounds) and [particles](../../rendering/particles) pages respectively.

> [!NOTE]
> Any sound that's started will only be heard by players that're nearby and currently connected. If a sound is started while a player isn't present, it will not be heard by that player. The most obvious example of this behavior are music disks.

### Smoke Position

The integer that's passed in is turned into a coordinate for a flat `3x3` grid, centered at the vertical middle of a block.

| Value | X/Z     |
| ----: | :------ |
|   `0` | `-1,-1` |
|   `1` | `0,-1`  |
|   `2` | `1,-1`  |
|   `3` | `-1,0`  |
|   `4` | `0,0`   |
|   `5` | `1,0`   |
|   `6` | `-1,1`  |
|   `7` | `0,1`   |
|   `8` | `1,1`   |

## Clientbound

|     Field | Type    | Description                                                 |
| --------: | ------- | ----------------------------------------------------------- |
| Effect ID | Integer | The ID of the effect to play. See [Effect IDs](#effect-ids) |
|         X | Integer | The X position of where the effect is played.               |
|         Y | Byte    | The Y position of where the effect is played.               |
|         Z | Integer | The Z position of where the effect is played.               |
|      Data | Integer | Additional data for the effect.                             |

## Example Packet

|     Field | Value                                                                                   |
| --------: | --------------------------------------------------------------------------------------- |
| Effect ID | `1005` (MUSIC_DISC)                                                                     |
|         X | `105`                                                                                   |
|         Y | `72`                                                                                    |
|         Z | `649`                                                                                   |
|      Data | `2257` (<TextureSwatch texture_name="../../images/items/record_cat.png" label="cat" />) |

## Further reading

- [Sounds](../../general/sounds)
- [Particles](../../rendering/particles)
