---
title: Biomes
nav_order: 5
layout: home
parent: Worlds
---

# Biomes
{: .no_toc }
Biomes are regions with differing foliage, terrain etc.

1. TOC
{:toc}

{: .note }
> The seed used throughout all of these examples is `3257840388504953787`, the seed behind [`pack.png`](https://minecraftathome.com/projects/packpng.html).

## Biome List
There exist 13 distinct Biomes in Beta 1.7.3. They each have unique properties, mainly if they can show rain particles, if it can snow in them, and what their respective foliage and map colors are.

| Name            | Top Block | Filler Block | Rain | Snow |                                 Foliage Color                                  |                                   Map Color                                    |
| :-------------- | :-------: | :----------: | :--: | :--: | :----------------------------------------------------------------------------: | :----------------------------------------------------------------------------: |
| Rainforest      |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#1FF458;"></span> `#1FF458` | <span class="color-swatch" style="background-color:#8FA360;"></span> `#8FA360` |
| Swampland       |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#8BAF48;"></span> `#8BAF48` | <span class="color-swatch" style="background-color:#7F9B20;"></span> `#7F9B20` |
| Seasonal Forest |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#9BE023;"></span> `#9BE023` |
| Forest          |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EBA31;"></span> `#4EBA31` | <span class="color-swatch" style="background-color:#566210;"></span> `#566210` |
| Savanna         |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#D9E023;"></span> `#D9E023` |
| Shrubland       |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#A1AD20;"></span> `#A1AD20` |
| Taiga           |   Grass   |     Dirt     |  ✅   |  ✅   | <span class="color-swatch" style="background-color:#7BB731;"></span> `#7BB731` | <span class="color-swatch" style="background-color:#2EB153;"></span> `#2EB153` |
| Desert          |   Sand    |     Dirt     |  ❌   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#FA9418;"></span> `#FA9418` |
| Plains          |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#FFD910;"></span> `#FFD910` |
| Ice Desert      |   Grass   |     Sand     |  ❌   |  ✅   | <span class="color-swatch" style="background-color:#C4D339;"></span> `#C4D339` | <span class="color-swatch" style="background-color:#FFED93;"></span> `#FFED93` |
| Tundra          |   Grass   |     Dirt     |  ✅   |  ✅   | <span class="color-swatch" style="background-color:#C4D339;"></span> `#C4D339` | <span class="color-swatch" style="background-color:#57EBF9;"></span> `#57EBF9` |
| Hell            |   Grass   |     Dirt     |  ❌   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#FF0000;"></span> `#FF0000` |
| Sky             |   Grass   |     Dirt     |  ❌   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#8080FF;"></span> `#8080FF` |

## Lookup table
A `64x64` lookup table is generated to more quickly calculate the appropriate biome to use.

```c
Biome GetBiome(float temperature, float humidity) {
    humidity *= temperature;
    if (temperature < 0.1) {
        return tundra;
    }
    if (humidity < 0.2) {
        if (temperature < 0.5) {
            return tundra;
        }
        if (temperature < 0.95) {
            return savanna;
        }
        return desert;
    }
    if (humidity > 0.5 && temperature < 0.7) {
        return swampland;
    }
    if (temperature < 0.5) {
        return taiga;
    }
    if (temperature < 0.97) {
        if (humidity < 0.35) {
            return shrubland;
        }
        return forest;
    }
    if (humidity < 0.45) {
        return plains;
    }
    if (humidity < 0.9) {
        return seasonalForest;
    }
    return rainforest;
}
```

If mapped to an image, using the foliage/map colors, we get this.

| Foliage Colors | Map Colors |
| --- | --- |
| <img src="images/biome/biomesFoliage.png" alt="Foliage Colors" style="image-rendering: pixelated; width: 100%"> | <img src="images/biome/biomesMap.png" alt="Map Colors" style="image-rendering: pixelated; width: 100%"> |

<sub>Temperature is X, Humidity is Y. Range is from `0` to `64` (or `0.0` to `1.0`) on both axes. [Notch drew this graph back in 2011.](https://minecraft.wiki/w/File:NotchBiomeGraph.png)
</sub>

## Biome Noise
The function which determines what biome is use in a chunk is relatively simple.
It mainly uses 3 [Octave Simplex Noise Generators](../technical/noise#simplex-noise).

### Noise Octaves
The current Chunk Coordinate, scaled to Block-Space (multiplied by `16`), is passed in, alongside how many values the generator should return (`16x16` for one chunk) and a scaling factor.

| Generator | Octaves | Scale |
| --- | :---: | ---: |
| Temperature | `4` | `(0.025, 0.025, 0.25)` |
| Humidity | `4` | `(0.05, 0.05, 1/3)` |
| Variation | `2` | `(0.25, 0.25, 0.5882352941176471)` |

Each of these return a `16x16` array of 64-Bit floating point numbers, which're that chunks' temperature, humidity and variation values.

| Temperature | Humidity | Variation |
| :---: | :---: | :---: |
| <img src="images/biome/temperaturePre.png" alt="Temperature map" style="image-rendering: pixelated; width: 100%"> | <img src="images/biome/humidityPre.png" alt="Humidity map" style="image-rendering: pixelated; width: 100%"> | <img src="images/biome/biomeVariation.png" alt="Variation map" style="image-rendering: pixelated; width: 100%"> |

<sub>Temperature, humidity and variation values from chunk `-1,-1` to `1,1`. These values are in the `0.0 - 2.0` range.</sub>

### Biome map
The final biomes for each section are determined by iterating over the `16x16` array and performing the following actions for each entry.

```c
for (int i = 0; i < 16*16; i++) {
    double vari = variation[i] * 1.1 + 0.5;
    double scale = 0.01;
    double max = 1.0 - scale;
    double temp = (temperature[i] * 0.15 + 0.7) * max + vari * scale;
    scale = 0.002;
    max = 1.0 - scale;
    double humi = (humidity[i] * 0.15 + 0.5) * max + vari * scale;
    temp = 1.0 - (1.0 - temp) * (1.0 - temp);
    // Limit values to 0.0 - 1.0
    if(temp < 0.0) temp = 0.0;
    if(humi < 0.0) humi = 0.0;
    if(temp > 1.0) temp = 1.0;
    if(humi > 1.0) humi = 1.0;

    temperature[i] = temp;
    humidity[i] = humi;
    // Get the biome from the lookup
    biomeMap[i] = GetBiomeFromLookup(temp, humi);
}
```

The returned biome map can look something like this over a 3x3 chunk area.

| Foliage Colors | Map Colors |
| :---: | :---: |
| <img src="images/biome/terrainFoliage.png" alt="Biomes with foliage colors" style="image-rendering: pixelated; width: 100%"> | <img src="images/biome/terrainMap.png" alt="Biomes with map colors" style="image-rendering: pixelated; width: 100%"> |

The temperature and humidity values are changed by this function, resulting in a different set of values, to be used in later generation stages.

| Temperature | Humidity | Variation |
| :---: | :---: | :---: |
| <img src="images/biome/temperaturePost.png" alt="Temperature map" style="image-rendering: pixelated; width: 100%"> | <img src="images/biome/humidityPost.png" alt="Humidity map" style="image-rendering: pixelated; width: 100%"> | <img src="images/biome/biomeVariation.png" alt="Variation map" style="image-rendering: pixelated; width: 100%"> |

<sub>Temperature, humidity and Variation values from chunks `-1,-1` to `1,1` after being modified by this function. These values are in the `0.0 - 2.0` range. Variation is not affected.</sub>

This is then passed to the [World Generator](generation).

## Further reading
Check out the page for the [World Generator](generation).

<script>
  document.addEventListener("DOMContentLoaded", function () {
    mediumZoom('img', {
      margin: 10,
      background: '#000000CC'
    });
  });
</script>