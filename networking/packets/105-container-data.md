---
title: "0x69: Container Data"
order: 106
---

# Container Data

| Packet ID | Direction   | Mojang Name              | MCP Name                     |
| --------- | ----------- | ------------------------ | ---------------------------- |
| `0x69`    | Clientbound | `ContainerSetDataPacket` | `Packet105UpdateProgressbar` |

This is sent by the server to update the furnace GUI's progress bars.

## Clientbound

| Field     | Type                                 | Description                                           |
| --------- | ------------------------------------ | ----------------------------------------------------- |
| Window ID | Byte                                 | The incremental ID of the window. Ranges from 0 to 99 |
| Type      | Short [(Type)](#container-data-type) | The type of data.                                     |
| Value     | Short                                | The value of the data.                                |

## Type

| ID  | Name              | Range                  | Description                                                                                               |
| --- | ----------------- | ---------------------- | --------------------------------------------------------------------------------------------------------- |
| `0` | Smelting Progress | `0` to `200`           | The progress of the current item being smelted. This counts up from `0`                                   |
| `1` | Burn Time         | `0` to (fuel duration) | The progress of how much fuel remains. Starts at the burn time of the used fuel, then counts down to `0`. |
| `2` | Maximum Burn Time | `0` to `20000`         | Sets the max burn time of the current fuel (defaults to `200` if not sent)                                |

All of these are sent only if they've changed, which means `0` and `1` can be sent every tick while looking inside of the Furnace Interface.

## Fuel

See the [smelting page](/general/recipes/smelting#valid-fuel) for more info on what counts as valid fuel and for how long said fuel burns.

## Example Packet

| Field     | Value |
| --------- | ----- |
| Window ID | `49`  |
| Type      | `0`   |
| Value     | `50`  |

## Further reading

- [Furnace Behavior](../behavior/furnaces.md)
