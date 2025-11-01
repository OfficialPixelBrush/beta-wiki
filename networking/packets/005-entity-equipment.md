---
title: "0x05: Entity Equipment"
nav_order: 6
layout: home
parent: Packets
---

# Entity Equipment

| Packet ID | Direction   |
| --------- | ----------- |
| `0x05`    | Clientbound |

After an entity has been spawned, this packet may be sent to change the armor and held item of the entity. It is unclear if this packet may be used to equip entities other than players and what the client will do if the inventory slot is not within 0 to 4.

## Clientbound

| Field          | Type    | Description                              |
| -------------- | ------- | ---------------------------------------- |
| Entity ID      | Integer | The ID of the player/entity             |
| Inventory Slot | Short   | `0` for held item, `1` to `4` for armor |
| Item ID        | Short   | `-1` to reset the slot to be empty      |
| Item Metadata  | Short   | The damage value of the item            |

{: .missing }
> TODO: What armor slots specifically?


## Example Packet

| Field | Value | 
| --- | --- |
| Entity ID | 1298 |
| Inventory Slot | 0 |
| Item ID | 276 |
| Item Metadata | 0 |