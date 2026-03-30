---
title: "0x6A: Container Transaction"
order: 107
---

# Container Transaction

| Packet ID | Direction | Mojang Name          | MCP Name               |
| --------- | --------- | -------------------- | ---------------------- |
| `0x6A`    | Both      | `ContainerAckPacket` | `Packet106Transaction` |

This packet is sent to indicate if an inventory transaction was accepted.

## Both

| Field         | Type    | Description                                           |
| ------------- | ------- | ----------------------------------------------------- |
| Window ID     | Byte    | The incremental ID of the window. Ranges from 0 to 99 |
| Action number | Short   | The unique ID for this action                         |
| Accepted      | Boolean | If the action was accepted                            |

## Example packet

| Field         | Value  |
| ------------- | ------ |
| Window ID     | `2`    |
| Action number | `1`    |
| Accepted      | `true` |
