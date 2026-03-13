---
title: "0x34: Multi-Block Update"
order: 53
---

# Multi-Block Update

| Packet ID | Direction   | Mojang Name              | MCP Name                   |
| --------- | ----------- | ------------------------ | -------------------------- |
| `0x34`    | Clientbound | `ChunkTilesUpdatePacket` | `Packet52MultiBlockChange` |

This is used to update multiple blocks in one go. If only a single block is being updated, consider using the [Block Update packet](./053-block-update).

The format for the coordinates is slightly obtuse but boils down to using one 16-Bit Short to store the 4-Bit X, 4-Bit Z and 8-Bit Y value of the block coordinate within the chunk.

| Bit 15 - 12 | Bit 11 - 8 | Bit 7 - 0 |
| ----------- | ---------- | --------- |
| X           | Z          | Y         |

Some example code to demonstrate how to convert to and from this format.

```c
int16_t format_multi_block(int8_t x, int8_t y, int8_t z) {
    return (
        ((int16_t(x) & 0x0F) << 12) |
        ((int16_t(z) & 0x0F) << 8 ) |
        ((int16_t(y) & 0xFF)      )
    );
}
```

```c
Int3 unformat_multi_block(int16_t value) {
    return {
        ((value >> 12) & 0x0F),
        ((value >> 8 ) & 0x0F),
        ((value      ) & 0xFF)
    }
}
```

## Clientbound

| Field             | Type        | Description                                              |
| ----------------- | ----------- | -------------------------------------------------------- |
| X                 | Integer     | The X position of the chunk                              |
| Z                 | Integer     | The Z position of the chunk                              |
| Number of Blocks  | Short       | The number of changed blocks                             |
| Block Coordinates | Short Array | Array of Block coordinates in the format described above |
| Blocktypes        | Byte Array  | Array of Block types those coordinates change to         |
| Metadata          | Byte Array  | Array of Block metadata those coordinates change to      |

## Example Packet

| Field             | Value                                                                              |
| ----------------- | ---------------------------------------------------------------------------------- |
| X                 | `-9`                                                                               |
| Z                 | `12`                                                                               |
| Number of Blocks  | `1`                                                                                |
| Block Coordinates | `0101 0111 01111111`\* (x: 5, z: 7, y: 127)                                        |
| Blocktypes        | `1` (<TextureSwatch texture_name="../../images/blocks/stone.png" label="Stone" />) |
| Metadata          | `0`                                                                                |

<sub>\* Binary value is spaced out to be more readable.</sub>
