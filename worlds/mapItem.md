---
title: Map Item
nav_order: 60
layout: home
parent: Worlds
---

# Map Item
{: .no_toc }
The map item has some special quirks that make it interesting enough to deserve it's own section of the Wiki.

{: .missing }
>This still requires most of its info. This is extremely barebones

1. TOC
{:toc}

## Stored data
The map item color data is stored as 8-Bit Byte values.

The upper 6 Bits are used as an index into an internal color array that maps the index to a color.

| Index | Label |Color |
| --- | --- | --- |
| 0 | Air | <span class="color-swatch" style="background-color:#00000000;"></span> `#00000000`* |
| 1 | Grass | <span class="color-swatch" style="background-color:#7FB238;"></span> `#7FB238` |
| 2 | Sand | <span class="color-swatch" style="background-color:#F7E9A3;"></span> `#F7E9A3` |
| 3 | Cloth | <span class="color-swatch" style="background-color:#A7A7A7;"></span> `#A7A7A7` |
| 4 | TNT | <span class="color-swatch" style="background-color:#FF0000;"></span> `#FF0000` |
| 5 | Ice | <span class="color-swatch" style="background-color:#A0A0FF;"></span> `#A0A0FF` |
| 6 | Iron | <span class="color-swatch" style="background-color:#A7A7A7;"></span> `#A7A7A7` |
| 7 | Foliage | <span class="color-swatch" style="background-color:#007C00;"></span> `#007C00` |
| 8 | Snow | <span class="color-swatch" style="background-color:#FFFFFF;"></span> `#FFFFFF` |
| 9 | Clay | <span class="color-swatch" style="background-color:#A4A8B8;"></span> `#A4A8B8` |
| 10 | Dirt | <span class="color-swatch" style="background-color:#B76A2F;"></span> `#B76A2F` |
| 11 | Stone | <span class="color-swatch" style="background-color:#707070;"></span> `#707070` |
| 12 | Water | <span class="color-swatch" style="background-color:#4040FF;"></span> `#4040FF` |
| 13 | Wood | <span class="color-swatch" style="background-color:#685332;"></span> `#685332` |

<sub>* Air is transparent</sub>

The lowest 2 Bits of this value determine the rendered shade.

| Shade | Limit | Demo (Snow) |
| --- | --- | --- |
| 0 | 180 | <span class="color-swatch" style="background-color:#B4B4B4;"></span> `#B4B4B4` |
| 1 | 220 | <span class="color-swatch" style="background-color:#DCDCDC;"></span> `#DCDCDC` |
| 2 | 255 | <span class="color-swatch" style="background-color:#FFFFFF;"></span> `#FFFFFF` |

## Icons

A map can choose from one of 16 possible icon values, though only 5 are textured in this version.

| # | Icon |
| --- | --- |
| 0 | White arrow |
| 1 | Green arrow |
| 2 | Red arrow |
| 3 | Blue arrow |
| 4 | White Cross |

All other icons are filled with blue.