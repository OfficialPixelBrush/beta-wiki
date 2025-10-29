---
title: "0x68: Window Items"
nav_order: 105
layout: home
parent: Packets
---

# Window Items

| Packet ID | Direction |
| --------- | --------- |
| `0x68`    | Clientbound |

## Clientbound
Sent to the client to show the contents of inventories

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| Window | Byte | The window the inventory belongs to |
| Payload Size | Short | The number of slots in the inventory |
| Payload | * | The inventory data |

The Payload is a list which describes the items in the sent inventory.

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| Id | Short | The id of the item |
| Damage | Short | The damage value of the item (only added if `Id > -1`) |

## Example Packet

### Clientbound

| Field     | Value    |
| --------- | -------- |
| Window | `0` |
| Payload Size | `45` |

Repeat the following 45 Times

| Field     | Value    |
| --------- | -------- |
| Id | `17` |
| Damage | `1` |

This would show up as an inventory full of Birch Logs.