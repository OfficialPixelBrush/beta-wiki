---
title: "0x83: Item Data"
order: 132
---

# Item Data

| Packet ID | Direction   | Mojang Name             | MCP Name           |
| --------- | ----------- | ----------------------- | ------------------ |
| `0x83`    | Clientbound | `ComplexItemDataPacket` | `Packet131MapData` |

Used for sending pixel data for the map item.

## Clientbound

| Field     | Type       | Description                            |
| --------- | ---------- | -------------------------------------- |
| Item ID   | Short      | ID of the modified Item                |
| Map ID    | Short      | ID of the map that should be displayed |
| Data Size | Byte       | Size of the data array                 |
| Data      | Byte Array | Array containing the data              |

The data that results from this has a format completely unique to it.

The first byte determines if the sent data is graphics data (`0`) or icon data (`1`).

### Graphics Data

If the sent data is graphics data, the next two Bytes are the X and Y offset of the updated map region.

| #   | Data                                                         |
| --- | ------------------------------------------------------------ |
| 0   | X offset                                                     |
| 1   | Y offset                                                     |
| 2+n | [Graphics data](/worlds/mapItem#stored-data) palette indices |

Pixels are written southward of the X/Y offset.
Data can only be written until the end of the current line. This means that, if you start at Y offset `0`, you can write a total of `128` pixels. Any beyond that and the client crashes.

### Icon Data

Each icon uses 3 bytes of data.

| #   | Data                                                                         |
| --- | ---------------------------------------------------------------------------- |
| 0   | Rotation (upper 4-bits), [Icon Sprite](/worlds/mapItem#icons) (lower 4-bits) |
| 1   | X offset                                                                     |
| 2   | Y offset                                                                     |

Valid icon rotation values range from `0 - 15` and maps to `0.0° - 337.5°` (`22.5°` increments).

A map can, at most, have `(256 - 1) / 3 = 85` icons.

## Example packet

| Field     | Value                                                          |
| --------- | -------------------------------------------------------------- |
| Item ID   | `358` (<TextureSwatch texture_name="items/map" label="Map" />) |
| Map ID    | `1`                                                            |
| Data Size | `4`                                                            |
| Data      | `1, 0, 5, 7`                                                   |

## Further reading

- [Map Item](/worlds/mapItem)
