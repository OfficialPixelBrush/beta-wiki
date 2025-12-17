---
title: "0x0E: Mine"
nav_order: 15
layout: home
parent: Packets
---

# Mine

| Packet ID | Direction |
| --------- | --------- |
| `0x0E`    | Serverbound |

## Serverbound
Sent to the server when the player attempts to mine a block. If a block is mined, this must be followed up by a [block change packet](053-block-change) that turns it into air!

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| Status | Byte | The action the player is taking against the block |
| X         | Integer | The X position of the block                      |
| Y         | Byte | The Y position of the block                      |
| Z         | Integer | The Z position of the block                      |
| Face | Byte | The face of the block that's being mined |

The status can represent one of three values.

| Status | Value |
| --- | --- |
| Started digging | `0` |
| Finished digging | `2` |
| Drop item | `4` |

`Started digging` is sent whenever a client wants to start mining a block.
`Finished digging` is only sent when the client thinks its broken a block. as a result, it should be checked on the server-side if the amount of time the client took to break the block is appropriate.
If a client stops breaking a block the server isn't informed of this.

`Drop item` is sent by the client whenever an item should be dropped from the player, such as when `Q` is pressed or when items are clicked outside of an inventory(?).

The face can be one of six values, representing the face being hit.

| Value | 0 | 1  | 2    | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| Face | -Y | +Y | -Z   | +Z | -X | +X |

## Example Packet

### Serverbound

| Field     | Value    |
| --------- | -------- |
| Status | `0` (Started Digging) |
| X | `-6231` |
| Y | `53` |
| Z | `563` |
| Face | `3` (+Z) |