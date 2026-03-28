---
title: "0x11: Interact with Block"
order: 18
---

# Interact with Block

| Packet ID | Direction   | Mojang Name                    | MCP Name        |
| --------- | ----------- | ------------------------------ | --------------- |
| `0x11`    | Clientbound | `EntityActionAtPositionPacket` | `Packet17Sleep` |

## Clientbound

This packet is sent when there are at least 2 more more players on a server, and at least one player uses the bed.

When the Entity ID of the client and the packet are the same, the player is put into sleep mode and the "leave bed" button is shown.

If the Entity ID is that of another player, the relevant entity will lay down in the bed.

| Field     | Type    | Description                              |
| --------- | ------- | ---------------------------------------- |
| Entity ID | Integer | The ID of the entity that did the action |
| Type      | Byte    | `0` for sleeping                         |
| X         | Integer | The X position of bed's headboard        |
| Y         | Byte    | The Y position of bed's headboard        |
| Z         | Integer | The Z position of bed's headboard        |

## Example Packet

### Clientbound

| Field     | Value |
| --------- | ----- |
| Entity ID | `1`   |
| Type      | `0`   |
| X         | `53`  |
| Y         | `75`  |
| Z         | `-54` |
