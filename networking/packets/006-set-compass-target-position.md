---
title: "0x06: Set Compass Target Position"
order: 7
---

# Set Compass Target Position

| Packet ID | Direction   | Mojang Name              | MCP Name               |
| --------- | ----------- | ------------------------ | ---------------------- |
| `0x06`    | Clientbound | `SetSpawnPositionPacket` | `Packet6SpawnPosition` |

This is sent after the player has finished logging in. It can be sent at any time to update where the player's compass points to.
Typically it's used to indicate where the player will respawn.

## Clientbound

| Field | Type    | Description                        |
| ----- | ------- | ---------------------------------- |
| X     | Integer | The X block position of the target |
| Y     | Integer | The Y block position of the target |
| Z     | Integer | The Z block position of the target |

## Example Packet

| Field | Value |
| ----- | ----- |
| X     | `117` |
| Y     | `70`  |
| Z     | `-46` |
