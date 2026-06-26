---
order: 65
description: The Nether, also known as Hell, is a dimension filled with lava. It allows the player to travel long distances rather quickly, as every block in the Nether maps to 8 blocks in the overworld.
---

# Nether

The Nether, also known as Hell or the Slip, is a dimension filled with lava. It allows the player to travel long distances rather quickly, as every block in the Nether maps to 8 blocks in the overworld.

## Biomes

The Nether can only generate a single "biome" in this version, that being the Hell biome, later renamed to the [Nether Wastes](https://minecraft.wiki/w/Nether_Wastes) in modern versions.

## Generation

The nether generator is very closely related to the [overworld generator](./overworld), sometimes even erroneously so (See the [quirks page](../../misc/quirks#nether) for more info).

Here's a brief list of all the most important things.

### Terrain Noise

- All the same noises with the same octave values exist, with the exception of Tree Density Noise, which is removed.
- The vertical noise scale was changed from `684.412` to `2053.236`
- Continentalness and Depth noise are sampled as 3D Perlin noise with a height of `1`, ignoring the 2D fastpath introduced in Alpha 1.2.0
  | Generator | Octaves | Scale |
  | :----------------- | ------- | --------------------------------------------------: |
  | Low Noise | `16` | `(684.412, 2053.236, 684.412)` |
  | High Noise | `16` | `(684.412, 2053.236, 684.412)` |
  | Selector Noise | `8` | `(684.412 / 80.0, 2053.236 / 160.0, 684.412 / 80.0)` |
  | Continentalness | `10` | `(1.0, 0.0, 1.0)` |
  | Depth Noise | `16` | `(100.0, 0.0, 100.0)` |
- The sand, gravel and stone noise maps are unchanged
- Biomes, Temperature or Humidity are not present

### Interpolation

- <TextureSwatch texture_name="blocks/netherrack" label="Netherrack" /> is placed instead of <TextureSwatch texture_name="blocks/stone" label="Stone" />
- <TextureSwatch texture_name="blocks/ice" label="Ice" /> is not placed at the top-layer of water
- <TextureSwatch texture_name="blocks/lava_placeholder" label="Lava (Still)" /> is placed instead of <TextureSwatch texture_name="blocks/water_placeholder" label="Water (Still)" />
- The lava level is `32`, with the exception of it being `64` when replacing surface blocks

### Biome Blocks

- The top and filler block are always <TextureSwatch texture_name="blocks/netherrack" label="Netherrack" /> by default
- The same algorithm that places <TextureSwatch texture_name="blocks/bedrock" label="Bedrock" /> at the bottom of the world places it at world height (`y >= (CHUNK_HEIGHT-1) - rand.nextInt(5)`)
- If the gravel noise is active, it places <TextureSwatch texture_name="blocks/gravel" label="Gravel" /> at the top instead of air, and fills with <TextureSwatch texture_name="blocks/netherrack" label="Netherrack" />
- If the sand noise is active, it places <TextureSwatch texture_name="blocks/soul_sand" label="Soul Sand" /> as both the top and filler
- <TextureSwatch texture_name="blocks/sandstone_side" label="Sandstone" /> is not placed

## Caves

The nether caver is [identical to the one used for the overworld](./caves), with the only exception being that is checks for different blocks.

See the [nether cave generation secton](./caves#nether-generation) for more info.

## Population

Please see the [nether section on the population page](./population#nether).
