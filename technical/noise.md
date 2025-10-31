---
title: Noise
nav_order: 5
layout: home
parent: Technical
---

# Noise
{: .no_toc }
This page will explain how the Perlin Noise Generator up to at least Beta 1.7.3 worked.

1. TOC
{:toc}

## Perlin Noise
The algorithm used by most of Minecraft's Terrain is based on "Improved Perlin Noise", first published in 2002, which is a slightly tweaked version of the original Perlin Noise Algorithm from 1985, both by Ken Perlin.

The official paper can be found [here](https://dl.acm.org/doi/abs/10.1145/566654.566636), however a more accessible option is the [Wikipedia page on Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise).

{: .note }
> [The Farlands](https://minecraft.wiki/w/Java_Edition_Far_Lands/Infdev_20100327_to_Beta_1.7.3) occur here a 64-Bit Floating-point number being wrongfully limited to a 32-Bit Integer, capping it out at the maximum value of a 32-Bit Integer, resulting in the same permutation from the permutation table being chosen repeatedly.

## Simplex Noise
Minecraft utilizes a slightly modified implementation of Simplex Noise for its [Biome values (Temperature & Humidity)](../worlds/biomes). As with Perlin noise, [more can be found about this algorithm on Wikipedia](https://en.wikipedia.org/wiki/Simplex_noise). It was also developed by Ken Perlin.

## Modifications made for Minecraft
The main differences that arise in the Perlin and Simplex Noise generators comes from some slight tweaks that were made when implementing them.

1. An inital pseudorandom offset is assigned to each of the coordinates of the noise generator `coordinate = nextDouble() * 256.0;`
2. For shuffling the permutation table, once again, Javas PRNG is used

## Noise Octaves
A common practice when using Perlin noise is to use multiple octaves/layers of it to improve fine detail, resulting in a more realistic/natural appearance.

It boils down to halving the size of the noise, while also halving the amount of noise each additional octave adds.

X, Y and Z values are passed as input. Then appropriately scaled noise is sampled, with the result scaled by the multiplier.

```c
    double total = 0.0;
    double mult  = 1.0;
    for (int i = 0; i < octaves; ++i) {
        total += perlinNoise(x / mult, y / mult, z / mult) * mult;
        mult  *= 2.0;
    }
    return total;
```

## Further reading
From here on out, one can read about how the rest of the world generation is done. Check out the page for the [World Generator](../worlds/generation).
