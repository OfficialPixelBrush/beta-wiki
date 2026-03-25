---
title: "0x06: Set Spawn Position"
order: 7
---

# Set Spawn Position

| Packet ID | Direction   | Mojang Name              | MCP Name               |
| --------- | ----------- | ------------------------ | ---------------------- |
| `0x06`    | Clientbound | `SetSpawnPositionPacket` | `Packet6SpawnPosition` |

This is sent after the player has finished logging in. It can be sent at any time to update where the player's compass points to.

## Clientbound

| Field | Type    | Description                       |
| ----- | ------- | --------------------------------- |
| X     | Integer | The X position of the spawn point |
| Y     | Integer | The Y position of the spawn point |
| Z     | Integer | The Z position of the spawn point |

## Example Packet

| Field | Value |
| ----- | ----- |
| X     | `117` |
| Y     | `70`  |
| Z     | `-46` |
