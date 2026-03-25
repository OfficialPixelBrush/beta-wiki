---
title: "0x83: Item Data"
order: 132
---

# Item Data

| Packet ID | Direction   | Mojang Name             | MCP Name           |
| --------: | ----------- | ----------------------- | ------------------ |
|    `0x83` | Clientbound | `ComplexItemDataPacket` | `Packet131MapData` |

Used for sending pixel data for the map item.

## Clientbound

|     Field | Type       | Description                            |
| --------: | ---------- | -------------------------------------- |
|   Item ID | Short      | ID of the modified Item                |
|    Map ID | Short      | ID of the map that should be displayed |
| Data Size | Byte       | Size of the data array                 |
|      Data | Byte Array | Array containing the data              |

The data that results from this has a format completely unique to it.

The first byte determines if the sent data is map graphics data (`0`) or map icon data (`1`).

### Map Data

If the sent data is map data, the next two Bytes are the X and Y offset of the updated map region.

After this follows the [map data](../../worlds/mapItem#stored-data).

### Icon Data

Each icon uses 3 bytes of data.

|   # | Data                                                                              |
| --: | --------------------------------------------------------------------------------- |
|   0 | Rotation (upper 4-bits), [Icon Sprite](../../worlds/mapItem#icons) (lower 4-bits) |
|   1 | X offset                                                                          |
|   2 | Y offset                                                                          |

Valid icon rotation values range from `0 - 15` and maps to `0.0 - 360.0`.

A map can, at most, have `(256 - 1) / 3 = 85` icons.

## Example packet

|     Field | Value                                                          |
| --------: | -------------------------------------------------------------- |
|   Item ID | `358` (<TextureSwatch texture_name="items/map" label="Map" />) |
|    Map ID | `1`                                                            |
| Data Size | `4`                                                            |
|      Data | `1, 0, 5, 7`                                                   |
