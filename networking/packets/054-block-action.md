---
title: "0x36: Block Action"
nav_order: 55
layout: home
parent: Packets
---

# Block Action

| Packet ID | Direction   |
| --------- | ----------- |
| `0x36`    | Clientbound |

## Clientbound
This packet is sent to inform the client when a block has perfored an action. There are only two blocks that make use this packet, Noteblocks and Pistons.

## Noteblock 
Noteblocks use the Packet to indicate they've played a tone. They use the two bytes the packet offers for Instrument and Pitch information.

| Field     | Type    | Description |
| --------- | ------- | --- |
| X         | Integer | The X position of where the block is. |
| Y         | Short    | The Y position of where the block is. |
| Z         | Integer | The Z position of where the block is. |
| Instrument | Byte | The instrument type. |
| Pitch | Byte | The pitch of the note. |

| Value | Instrument |
| --- | --- |
| 0 | Harp |
| 1 | Bass |
| 2 | Snare Drum |
| 3 | Hi-hat |
| 4 | Bass Drum |

## Piston
Pistons use it to indicate whether they're extended or not and what direction they face. This also plays the piston push or retract sound as needed.*

| Field     | Type    | Description |
| --------- | ------- | --- |
| X         | Integer | The X position of where the block is |
| Y         | Short    | The Y position of where the block is |
| Z         | Integer | The Z position of where the block is |
| State | Byte | `false` for extending, `true` for retracting |
| Direction | Byte | The direction the piston extends/retracts to |

The direction matches the lower 3-Bits of the metadata values that're [used for pistons as described on the Blocks page](../../general/blocks#pistons).

| Value | Direction |
| --- | --- |
| 0 | Down |
| 1 | Up |
| 2 | East |
| 3 | West |
| 4 | North |
| 5 | South |

{: .missing }
> A lot of this still needs to be tested. I'm unsure if this just plays the sound or if this is also responsible for playing the piston extend/retract animations!

## Example Packet

{: .missing }
> TODO: Capture or at least write example packet data