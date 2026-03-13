---
title: 0x65: Close Inventory
order: 102
---

# Close Inventory

| Packet ID | Direction | Mojang Name            |
| --------- | --------- | ---------------------- |
| `0x65`    | Both      | `ContainerClosePacket` |

This packet is sent by the client when closing an inventory/window, and by the server when an inventory is forcibly closed, such as a chest being destroyed.

## Both

| Field     | Type | Description                                           |
| --------- | ---- | ----------------------------------------------------- |
| Window ID | Byte | The incremental ID of the window. Ranges from 0 to 99 |

## Example Packet

| Field     | Value |
| --------- | ----- |
| Window ID | `49`  |
