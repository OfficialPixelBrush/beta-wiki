---
title: "0x33: Chunk"
nav_order: 52
layout: home
parent: Packets
---

# Chunk

| Packet ID | Direction   |
| --------- | ----------- |
| `0x33`    | Clientbound |

The packets is sent from the server to the client to update the blocks in the specified area.

The origin coordinate (x,y,z) is in [block space](../terminology#block-space).
The to-be-updated volume is defined by the width, height and length bytes which the server subtracts `1` from to allow updating of a 256x128x256 area\*.

<sub>\* untested, but height values more than `127` seem to crash the client<sub>

The chunk size can only be positive, so the origin coordinate must always indicate the lowest value of the changed area, towards Negative X/Y/Z.

## Chunk Data
How the chunk data is formatted over the network is explained on the [chunk page](../../worlds/chunk#network).
This data is zlib compressed when sent over the network.
For more info, check out the [compression page](../../technical/compression).

## Clientbound

| Field           | Type       | Description                                     |
| --------------- | ---------- | ----------------------------------------------- |
| X               | Integer    | The X position of the chunk towards Negative X |
| Y               | Short      | The Y position of the chunk towards Negative Y |
| Z               | Integer    | The Z position of the chunk towards Negative Z |
| width           | Byte       | The width of the updated area towards Positive X, `-1` |
| height          | Byte       | The height of the updated area towards Positive Y, `-1` |
| length          | Byte       | The length of the updated area towards Positive Z, `-1` |
| compressed size | Integer    | The size, in bytes, of the zlib compressed data |
| compressed data | Byte Array | The zlib compressed chunk data |

{: .warning }
> If a chunk that's taller than 127 blocks is sent, a vanilla client **will** softlock/crash.

## Example Packet

| Field           | Value   |
| --------------- | ----- |
| x               | `0` |
| y               | `0` |
| z               | `0` |
| width           | `15` |
| height          | `127` |
| length          | `15` |
| compressed size | `256` |
| compressed data | `120,218,237,205,161,13,0,32,16,4,65,2,226,37,253,119,73,7,208,1,136,51,136,25,191,217,26,153,222,50,229,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,239,255,193,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,120,219,119,75,175,215,235,245,122,189,94,175,215,235,245,122,189,94,175,215,235,245,122,189,94,175,215,235,245,122,189,94,175,215,235,245,122,189,94,175,215,235,245,122,189,94,175,215,235,245,122,189,94,175,215,235,245,122,125,220,207,3,138,218,152,0` |