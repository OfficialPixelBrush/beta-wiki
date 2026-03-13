---
title: "0x16: Collect Item"
order: 23
---

# Collect Item

| Packet ID | Direction   | Mojang Name            |
| --------- | ----------- | ---------------------- |
| `0x16`    | Clientbound | `TakeItemEntityPacket` |

Sent to the client when an item entity should play the item collection animation. It doesn't delete the entity from the client nor does it add it othe player inventory. See [Destroy Entity](./029-destroy-entity) and [Set Inventory Slot](./103-set-inventory-slot)/[Inventory Contents](./104-inventory-contents) for that.

## Clientbound

| Field                 | Type    | Description                                              |
| --------------------- | ------- | -------------------------------------------------------- |
| Entity ID (Item)      | Integer | The ID of the entity that will refer to this item        |
| Entity ID (Collector) | Integer | The ID of the entity that the item is being collected by |

## Example Packet

| Field                 | Value  |
| --------------------- | ------ |
| Entity ID (Item)      | `1298` |
| Entity ID (Collector) | `2`    |
