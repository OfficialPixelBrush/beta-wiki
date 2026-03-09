---
order: 4
---

# Effects

These are the sound/particle effects present in the vanilla client.

Some of these effects also have additional metadata available as an integer in the [Effect packet](packets/061-effect).

| Value | Purpose                                                 | Metadata use                          | Type             |
| :---- | :------------------------------------------------------ | :------------------------------------ | :--------------- |
| 1000  | Button Click                                            |                                       | Sound            |
| 1001  | Button Click 2                                          |                                       | Sound            |
| 1002  | Bow shot                                                |                                       | Sound            |
| 1003  | Door open/close                                         |                                       | Sound            |
| 1004  | Fire Extinguisted                                       |                                       | Sound            |
| 1005  | Music Disk                                              | 13 `2256`, cat `2257`                 | Sound            |
| 2000  | [Smoke](../rendering/particles#named-particles)         | [Position](#smoke-position)           | Particle         |
| 2001  | [Block Break](../rendering/particles#block-destruction) | [Block ID](../general/blocks#listing) | Particle + Sound |

## Smoke Position

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

## Further reading

- [Particles](../rendering/particles)
