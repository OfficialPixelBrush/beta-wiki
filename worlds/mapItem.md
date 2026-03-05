---
order: 60
---

# Map Item
The map item has some special quirks that make it interesting enough to deserve it's own section of the Wiki.

::: tip MISSING
This still requires most of its info. This is extremely barebones
:::

## Stored data
The map item color data is stored as 8-Bit Byte values.

The upper 6 Bits are used as an index into an internal color array that maps the index to a color.

| Index | Label |Color |
| --- | --- | --- |
| 0 | Air | <ColorSwatch color="#00000000" />* |
| 1 | Grass | <ColorSwatch color="#7FB238" /> |
| 2 | Sand | <ColorSwatch color="#F7E9A3" /> |
| 3 | Cloth | <ColorSwatch color="#A7A7A7" /> |
| 4 | TNT | <ColorSwatch color="#FF0000" /> |
| 5 | Ice | <ColorSwatch color="#A0A0FF" /> |
| 6 | Iron | <ColorSwatch color="#A7A7A7" /> |
| 7 | Foliage | <ColorSwatch color="#007C00" /> |
| 8 | Snow | <ColorSwatch color="#FFFFFF" /> |
| 9 | Clay | <ColorSwatch color="#A4A8B8" /> |
| 10 | Dirt | <ColorSwatch color="#B76A2F" /> |
| 11 | Stone | <ColorSwatch color="#707070" /> |
| 12 | Water | <ColorSwatch color="#4040FF" /> |
| 13 | Wood | <ColorSwatch color="#685332" /> |

<sub>* Air is transparent</sub>

The lowest 2 Bits of this value determine the rendered shade.

| Shade | Limit | Demo (Snow) |
| --- | --- | --- |
| 0 | 180 | <ColorSwatch color="#B4B4B4" /> |
| 1 | 220 | <ColorSwatch color="#DCDCDC" /> |
| 2 | 255 | <ColorSwatch color="#FFFFFF" /> |

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