---
order: 6
description: Caves are used to make the underground more interesting
---

# Caves

Caves are used to make the underground more interesting.

## Overworld Generation

Caves are not noise based, but instead work by carving the terrain out between a random amount of nodes. It gets its own dedicated [PRNG object](/technical/javaFeatures#random) when initialized.

### Setup

The world seed and the relevant chunk position are used to determine the seed of the cave.

```cpp
int32_t carveExtent = 8;
// Use the world seed to init the PRNG
rand.setSeed(world.seed);
int64_t xOffset = rand.nextLong() / 2 * 2 + 1;
int64_t zOffset = rand.nextLong() / 2 * 2 + 1;
// Iterate beyond the current chunk by 8 chunks in every direction
for (int32_t cXoffset = cX - carveExtent; cXoffset <= cX + carveExtent; ++cXoffset) {
  for (int32_t cZoffset = cZ - carveExtent; cZoffset <= cZ + carveExtent; ++cZoffset) {
    rand.setSeed(((int64_t(cXoffset) * xOffset) + (int64_t(cZoffset) * zOffset)) ^ world.seed);
    GenerateCaves(cXoffset, cZoffset, cX, cZ, c);
  }
}
```

From here, a number in the range of `0 - 42` is generated, by feeding the generation result into itself 3 times and adding `1` after each result.

```cpp
int32_t numberOfCaves = rand.nextInt(rand.nextInt(rand.nextInt(40) + 1) + 1);
```

This number is reset to `0` if the next random number between `0` and `15` isn't equal to `0`.

### Carving

The resulting number of caves are then iterated over.

```cpp
double xOffset = double(cXoffset * CHUNK_WIDTH_X + rand.nextInt(CHUNK_WIDTH_X));
double yOffset = double(rand.nextInt(rand.nextInt(120) + 8));
double zOffset = double(cZoffset * CHUNK_WIDTH_Z + rand.nextInt(CHUNK_WIDTH_Z));
int32_t numberOfNodes = 1;
if(rand.nextInt(4) == 0) {
    CarveCave(cX, cZ, c, xOffset, yOffset, zOffset);
    numberOfNodes += rand.nextInt(4);
}
```

The resulting number of nodes is then iterated over, while still inside of the cave loop.

```cpp
float carveYaw = rand.nextFloat() * float(M_PI) * 2.0F;
float carvePitch = (rand.nextFloat() - 0.5F) * 2.0F / 8.0F;
float tunnelRadius = rand.nextFloat() * 2.0F + rand.nextFloat();
CarveCave(
    cX, cZ, c,
    xOffset, yOffset, zOffset,
    tunnelRadius, carveYaw, carvePitch,
    0, 0, 1.0D
);
```

::: tip MISSING
This algorithm is difficult to not express as just code, and I hate that.
:::

## Nether Generation

|                                                                         Overworld | Nether                                                                          |
| --------------------------------------------------------------------------------: | :------------------------------------------------------------------------------ |
|                       <TextureSwatch texture_name="blocks/stone" label="Stone" /> | <TextureSwatch texture_name="blocks/netherrack" label="Netherrack" />           |
| <TextureSwatch texture_name="blocks/water_placeholder" label="Water (Flowing)" /> | <TextureSwatch texture_name="blocks/lava_placeholder" label="Lava (Flowing)" /> |
|   <TextureSwatch texture_name="blocks/water_placeholder" label="Water (Still)" /> | <TextureSwatch texture_name="blocks/lava_placeholder" label="Lava (Still)" />   |

The checks for <TextureSwatch texture_name="blocks/dirt" label="Dirt"/> and <TextureSwatch texture_name="blocks/grass_side" label="Grass"/> still exist, though neither are replenished, and <TextureSwatch texture_name="blocks/lava_placeholder" label="Lava" /> isn't placed at the bottom of the world.

## Further reading

- [Overworld Terrain Generation](./overworld)
- [Nether Generation](./nether)
