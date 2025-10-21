---
title: Chunk
nav_order: 6
layout: home
parent: Worlds
---

# Chunk
{: .no_toc }
A chunk is a 16x128x16 volume of blocks. Usually these are compressed with the deflate algorithm.

1. TOC
{:toc}

## NBT
Inside of an uncompressed chunk file are only a few NBT Tags

| Field    | Type     | Description                           |
| -------- | -------- | ------------------------------------- |
| Entities | List     | All entities in this chunk |
| [TileEntities](../general/tileentities) | List | All [tile entities](../general/tileentities) in this chunk, such as Mob Spawners, Chests or Signs |
| LastUpdate | Long | The last tick value for when the chunk was updated |
| TerrainPopulated | Byte | If the chunk is populated with folliage |
| xPos | Integer | The Chunk-Space X Coordiante of the Chunk |
| zPos | Intger | The Chunk-Space Z Coordinate of the Chunk |
| BlockLight | Byte Array | The Block light values of the chunk |
| Blocks | Byte Array | The Block values of the chunk |
| Data | Byte Array | The Metadata/damage values of the chunk |
| HeightMap | Byte Array | A top-down heightmap of the chunk |
| SkyLight | Byte Array | The sky light values of the chunk |

## Block ordering
Blocks are stored as vertical columns (Y-Axis). To iterate over a stored Byte Array from a Chunk the ordering is as follows.
```c
for (int x = 0; x < 16; x++) {
    for (int z = 0; z < 16; z++) {
        for (int y = 0; y < 128; y++) {
            // Y is in Z which is in X
            block[y + (z*128) + (x*128*16)];
        }
    }
}
```