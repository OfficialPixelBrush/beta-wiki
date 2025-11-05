---
title: Quirks
nav_order: 30
layout: home
parent: Worlds
---

# Ice and Snow
Ice is generated during the [terrain shape stage](generation#terrain-shape) anywhere the temperature is less than `0.5`. **However** this does not line up completely with the later determined biomes.

| Unticked | Ticked |
| :---: | :---: |
| <img src="images/quirks/noTickIce.png" alt="Generated without random ticks" style="image-rendering: pixelated; width: 100%"> | <img src="images/quirks/tickIce.png" alt="Generated with random ticks" style="image-rendering: pixelated; width: 100%"> |

Snow depends on the same system to determine where it can appear, though its placed later in the [population stage](population).

{: .missing }
> TODO: Add a proper chart that illustrates this discreptency, using this location and seed as an example!

<script>
  document.addEventListener("DOMContentLoaded", function () {
    mediumZoom('img', {
      margin: 10,
      background: '#000000CC'
    });
  });
</script>