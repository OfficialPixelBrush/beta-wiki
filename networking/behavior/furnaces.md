---
order: 10
description: Furnace behaviors, especially within the UI
---

# Furnaces

## Empty Furnace is peeked into

| Packet                                                                                                           | Data                                 |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `S->C` [OpenContainer](../packets/100-open-container)                                                            | Title = `Furnace`; # of Slots = `3`; |
| `S->C` [FillContainer](../packets/104-fill-container) + [Set Slot](../packets/103-set-slot Update Inventory Data |
| `S->C` [ContainerData](../packets/105-container-data)                                                            | Smelting Progress = `0`              |
| `S->C` [ContainerData](../packets/105-container-data)                                                            | Burn Time = `0`                      |
| `S->C` [ContainerData](../packets/105-container-data)                                                            | Maximum Burn Time = `0`              |

## Item begins to smelt

| Tick | Packet                                                              | Data                                      |
| ---: | ------------------------------------------------------------------- | ----------------------------------------- |
|    1 | `C->S` [ClickSlot](../packets/102-click-slot)                       | Client places fuel Item into Furnace slot |
|    1 | `S->C` [ContainerTransaction](../packets/106-container-transaction) | The active Window accepts the action      |
|    2 | `S->C` [Set Slot](../packets/103-set-slot)                          | The furnace fuel slot is updated          |
|    2 | `S->C` [ContainerData](../packets/105-container-data)               | Smelting Progress = `1`                   |
|    2 | `S->C` [ContainerData](../packets/105-container-data)               | Burn Time = `300`                         |
|    2 | `S->C` [ContainerData](../packets/105-container-data)               | Maximum Burn Time = `300`                 |
|    3 | `S->C` [ContainerData](../packets/105-container-data)               | Smelting Progress = `2`                   |
|    3 | `S->C` [ContainerData](../packets/105-container-data)               | Burn Time = `299`                         |

## Item finishes smelting

| Tick | Packet                                                | Data                      |
| ---: | ----------------------------------------------------- | ------------------------- |
|    1 | `S->C` [ContainerData](../packets/105-container-data) | Smelting Progress = `175` |
|    1 | `S->C` [ContainerData](../packets/105-container-data) | Burn Time = `135`         |
|    2 | `S->C` [ContainerData](../packets/105-container-data) | Smelting Progress = `176` |
|    2 | `S->C` [ContainerData](../packets/105-container-data) | Burn Time = `134`         |
|    3 | `S->C` [ContainerData](../packets/105-container-data) | Smelting Progress = `0`   |
|    3 | `S->C` [ContainerData](../packets/105-container-data) | Burn Time = `133`         |
|    4 | `S->C` [ContainerData](../packets/105-container-data) | Burn Time = `132`         |
|    5 | `S->C` [ContainerData](../packets/105-container-data) | Burn Time = `131`         |
|    6 | `S->C` [ContainerData](../packets/105-container-data) | Burn Time = `130`         |
|    7 | `S->C` [ContainerData](../packets/105-container-data) | Burn Time = `129`         |
|    8 | `S->C` [ContainerData](../packets/105-container-data) | Burn Time = `128`         |

## Further reading

- [Smelting](../../general/recipes/smelting)
- [ContainerData](../packets/105-container-data)
