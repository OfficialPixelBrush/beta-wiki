---
title: World Format
nav_order: 20
layout: home
parent: Worlds
---

# World Format
{: .no_toc }
This page will go over how Minecraft Worlds are organized and stored.

1. TOC
{:toc}

## Hierarchy
Minecraft worlds have a hierarchy of how data can be accessed.

`World -> Dimension/Level -> Region -> Chunk -> Block`

| Term | Description |
| :--- | :--- |
| World | The world that is to be loaded |
| Dimension | The dimension/level that is to be loaded |
| Region | A region covers a 32x32 chunk area, consisting of 512x128x512 blocks in total |
| Chunk | A 16x128x16 area, containing 32.768 blocks in total |

Everything before the region layer has remained the same ever since infinite world saving and loading has been introduced. Regions were introduced as part of the shift over to the [McRegion format](#mcregion) with Beta 1.3, up to today even, as the [modern Anvil format](https://minecraft.wiki/w/Anvil_file_format) is more or less just an extension of [McRegion](#mcregion).

![World Hierarchy Diagram](images/worldHierarchy.svg)

### World
A world is a folder that contains everything that describes it, such as the overworld (`region`), the nether (`DIM-1/region`), the player data and `level.dat`.

### Level
`Level` is what worlds were called in early Indev. As Minecraft shifted over to infinite terrain, the term `World` started to become more widely used, but for historical reasons the term `Level` stuck around. More specifically, due to how multiple dimensions are literally just separate worlds in separate folders (`DIM-1` for the Nether), each Dimension is technically its own separate `Level`.

### Region
This is the core idea that differentiates the [Alpha level format](https://minecraft.wiki/w/Java_Edition_Alpha_level_format) and McRegion. Instead of having a bunch of tiny files that only contain information about a single chunk, it's much more efficient to pack chunks together into 32x32 chunk regions.

### Chunk
For more info, see the [chunk page](chunk).

## level.dat
`level.dat` is a [`gzip` compressed](../technical/compression#gzip) nbt file which contains important metadata for the world.

| Field    | Type     | Description                           |
| -------- | -------- | ------------------------------------- |
| LastPlayed | Long     | Timestamp for when the world was last played |
| LevelName | String16 | The name of the world |
| raining | Byte | If it's raining |
| RandomSeed | Long | The seed of the world |
| SizeOnDisk | Long | The size of the world in bytes |
| SpawnX | Integer | The X-Coordinate of the Spawn |
| SpawnY | Integer | The Y-Coordinate of the Spawn |
| SpawnZ | Integer | The Z-Coordinate of the Spawn |
| thundering | Byte | If it's thundering |
| thunderTime | Integer | ? |
| Time | Long | World time in ticks |
| version | Integer | `level.dat` format version. Always `19132` for worlds made after Beta 1.3 |

## McRegion
McRegion is the format in which Minecraft Worlds were stored, starting with Beta 1.3 and ending with Release 1.1. This page will largely go into how exactly reading and writing of these files cane be done, instead of going into many details such as alternative compression formats, as [the article on the Minecraft Wiki](https://minecraft.wiki/w/Region_file_format) already covers this quite thoroughly.

### Reading
Reading is the easiest part of the McRegion format.
1. Divide the chunk coordinate by 32 (or shift right by 5 bits) to get the region coordinate the chunk is in, following the naming convention `r.x.z.mcr`, where `x` and `z` are the region coordinates.
2. Find the offset and sector count of the desired chunk data in the header by using `4 * ((x & 31) + (z & 31) * 32)`
3. Read the offset (3-bytes) and sector count (1-byte). These numbers should be multiplied by 4096, as each sector is 4 Kilobytes. Move to the offset.
4. Get the length of the chunk data (4-bytes) and the compression type (1-byte). This is followed by `length - 1` bytes of compressed data.
5. Use the compression type to decompress the compressed data.
6. [Read the Chunks NBT Data](chunk#nbt)

## Further Reading
- [Region file format (Minecraft Wiki)](https://minecraft.wiki/w/Region_file_format)
- [Anvil file format (Minecraft Wiki)](https://minecraft.wiki/w/Anvil_file_format)
- [Alpha level format (Minecraft Wiki)](https://minecraft.wiki/w/Java_Edition_Alpha_level_format)