---
title: "0x68: Inventory Contents"
order: 105
---

# Inventory Contents

| Packet ID | Direction   | Mojang Name                 | MCP Name               |
| --------- | ----------- | --------------------------- | ---------------------- |
| `0x68`    | Clientbound | `ContainerSetContentPacket` | `Packet104WindowItems` |

## Clientbound

Sent to the client to show the contents of inventories

| Field        | Type  | Description                                           |
| ------------ | ----- | ----------------------------------------------------- |
| Window ID    | Byte  | The incremental ID of the window. Ranges from 0 to 99 |
| Payload Size | Short | The number of slots in the inventory                  |
| Payload      | \*    | The inventory data                                    |

The Payload is a list which describes the items in the sent inventory.

| Field  | Type  | Description                                            |
| ------ | ----- | ------------------------------------------------------ |
| ID     | Short | The ID of the item                                     |
| Count  | Byte  | The amount of the item (only added if `ID > -1`)       |
| Damage | Short | The damage value of the item (only added if `ID > -1`) |

## Example Packet

### Clientbound

| Field        | Value |
| ------------ | ----- |
| Window ID    | `0`   |
| Payload Size | `45`  |

Repeat the following 45 Times

| Field  | Value                                                                                             |
| ------ | ------------------------------------------------------------------------------------------------- |
| ID     | `17` (<TextureSwatch texture_name="../../images/blocks/log_top.png" label="Log" />)               |
| Count  | `42`                                                                                              |
| Damage | `1` (<TextureSwatch texture_name="../../images/blocks/spruce_log_side.png" label="Spruce Log" />) |

This would show up as an inventory full of Birch Logs.
