---
title: McRegion
nav_order: 10
layout: home
parent: Worlds
---

# McRegion
{: .no_toc }
McRegion is the format in which Minecraft Worlds were stored, starting with Beta 1.3 and ending with Release 1.1. This page will largely go into how exactly reading and writing of these files cane be done, instead of going into many details such as alternative compression formats, as [the article on the Minecraft Wiki](https://minecraft.wiki/w/Region_file_format) already covers this quite thoroughly.

1. TOC
{:toc}

## Hierarchy
McRegion worlds have a hierarchy of how data can be accessed.

`World/Level -> Dimension -> Region -> Chunk -> Block`

| Term | Description |
| :--- | :--- |
| Level | The world that is to be loaded |
| Dimension | The dimension that is to be loaded |
| Region | A region covers a 32x32 chunk area, consisting of 512x128x512 blocks in total |
| Chunk | A 16x128x16 area, containing 32.768 blocks in total |

## Reading
Reading is the easiest part of the McRegion format.
1. Divide the chunk coordinate by 32 (or shift right by 5 bits) to get the region coordinate the chunk is in, following the naming convention `r.x.z.mcr`, where `x` and `z` are the region coordinates.
2. Find the offset and sector count of the desired chunk data in the header by using `4 * ((x & 31) + (z & 31) * 32)`
3. Read the offset (3-bytes) and sector count (1-byte). These numbers should be multiplied by 4096, as each sector is 4 Kilobytes. Move to the offset.
4. Get the length of the chunk data (4-bytes) and the compression type (1-byte). This is followed by `length - 1` bytes of compressed data.
5. Use the compression type to decompress the compressed data.
6. [Read the Chunks NBT Data](chunk#nbt)

## Further Reading
- [Region file format (Minecraft Wiki)](https://minecraft.wiki/w/Region_file_format)