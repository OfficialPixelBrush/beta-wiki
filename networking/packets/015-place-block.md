---
title: "0x0F: Place Block"
order: 16
description: Sent to the server when the player attempts to place or interact with a block, or use an item. If a block is changed, this must be followed up by a block update packet!
---

# Place Block

| Packet ID | Direction   | Mojang Name     | MCP Name        |
| --------- | ----------- | --------------- | --------------- |
| `0x0F`    | Serverbound | `UseItemPacket` | `Packet15Place` |

## Serverbound

Sent to the server when the player attempts to place or interact with a block, or use an item. If a block is changed, this must be followed up by a [set block packet](./053-set-block)!

| Field         | Type    | Description                                       |
| ------------- | ------- | ------------------------------------------------- |
| X             | Integer | The X block position of the block                 |
| Y             | Byte    | The Y block position of the block                 |
| Z             | Integer | The Z block position of the block                 |
| Face          | Byte    | The face of the block that's being placed against |
| Block/Item ID | Short   | The block or item to be placed                    |
| (Amount)      | Byte    | The amount of the item in the players hand        |
| (Damage)      | Short   | The Metadata of the item                          |

The face can be one of six values, representing the face the block is placed on.

| Value | 0   | 1   | 2   | 3   | 4   | 5   |
| ----- | --- | --- | --- | --- | --- | --- |
| Face  | -Y  | +Y  | -Z  | +Z  | -X  | +X  |

> [!NOTE]
> If the face value is `0xFF`, the client either failed to place the block, like trying to place it in mid-air without a block to place against, or is trying to use an item, such as a Hoe.
> For certain items, such as boats, the client will send this packet even if the no reachable block was right-clicked, sending X=-1, Y=255, Z=-1. In those cases, [Player Rotation](https://pixelbrush.dev/beta-wiki/networking/packets/012-player-rotation) and [Player Position and Rotation](https://pixelbrush.dev/beta-wiki/networking/packets/013-player-position-and-rotation) should be used to determine the correct place to spawn the object.

## Example Packet

### Serverbound

| Field         | Value                                                           |
| ------------- | --------------------------------------------------------------- |
| X             | `-6231`                                                         |
| Y             | `53`                                                            |
| Z             | `563`                                                           |
| Face          | `3` (+Z)                                                        |
| Block/Item ID | `3` (<TextureSwatch texture_name="blocks/dirt" label="Dirt" />) |
| (Amount)      | `64`                                                            |
| (Damage)      | `0`                                                             |
