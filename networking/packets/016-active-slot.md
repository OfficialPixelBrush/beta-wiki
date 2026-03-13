---
title: 0x10: Active Slot
order: 17
---

# Active Slot

| Packet ID | Direction   | Mojang Name            |
| --------- | ----------- | ---------------------- |
| `0x10`    | Serverbound | `SetCarriedItemPacket` |

## Serverbound

Sent when the player changes the slot selection. Other players will be informed of this via the [Entity Equipment packet](./005-entity-equipment).

| Field | Type  | Description                                  |
| ----- | ----- | -------------------------------------------- |
| Slot  | Short | The slot which the player has selected (0-8) |

## Example Packet

### Serverbound

| Field | Value |
| ----- | ----- |
| Slot  | `3`   |
