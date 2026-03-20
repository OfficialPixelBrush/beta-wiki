---
title: "0x05: Entity Equipment"
order: 6
---

# Entity Equipment

| Packet ID | Direction   | Mojang Name             | MCP Name                 |
| --------- | ----------- | ----------------------- | ------------------------ |
| `0x05`    | Clientbound | `SetEquippedItemPacket` | `Packet5PlayerInventory` |

After an entity has been spawned, this packet may be sent to change the armor and held item of the entity. It is unclear if this packet may be used to equip entities other than players and what the client will do if the inventory slot is not within 0 to 4.

## Clientbound

| Field          | Type    | Description                                                                            |
| -------------- | ------- | -------------------------------------------------------------------------------------- |
| Entity ID      | Integer | The ID of the player/entity                                                            |
| Inventory Slot | Short   | `0` for held item, `1` for boots, `2` for leggings, `3` for chestplate, `4` for helmet |
| Item ID        | Short   | `-1` to reset the slot to be empty                                                     |
| Item Metadata  | Short   | The metadata value of the item                                                         |

## Example Packet

| Field          | Value                                                                              |
| -------------- | ---------------------------------------------------------------------------------- |
| Entity ID      | `1298`                                                                             |
| Inventory Slot | `0` (Hand)                                                                         |
| Item ID        | `276` (<TextureSwatch texture_name="items/diamond_sword" label="Diamond Sword" />) |
| Item Metadata  | `0`                                                                                |
