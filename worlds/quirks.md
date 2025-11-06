---
title: Quirks
nav_order: 30
layout: home
parent: Worlds
---

# Ice and Snow
Ice is generated during the [terrain shape stage](generation#terrain-shape) anywhere the temperature is less than `0.5`. **However** this does not line up completely with the later determined biomes, which then determine where ice and snow can form via Random Ticking.

| Unticked | Ticked |
| :---: | :---: |
| <img src="images/quirks/noTickIce.png" alt="Generated without random ticks" style="image-rendering: pixelated; width: 100%"> | <img src="images/quirks/tickIce.png" alt="Generated with random ticks" style="image-rendering: pixelated; width: 100%"> |

This becomes more apparent when the relevant values are visualized.

| Biomes (Map Colors) + Temp < 0.5 (Red) |
| :---: |
| <img src="images/quirks/biomeVStemp.png" alt="Biome map with Map colors, Red marking where temperature values are less than 0.5" style="image-rendering: pixelated; width: 100%"> |

<sub>Biome map with Map colors, Red marking where temperature values are less than 0.5</sub>

Snow depends on the same system to determine where it can appear, though its placed later in the [population stage](population).

{: .note }
>Seed for this section is `-1712183887779554298`, showing the area around chunk `x: -1, z:6`

<script>
  document.addEventListener("DOMContentLoaded", function () {
    mediumZoom('img', {
      margin: 10,
      background: '#000000CC'
    });
  });
</script>