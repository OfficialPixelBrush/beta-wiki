---
title: "0xFF: Disconnect"
order: 256
---

# Disconnect

| Packet ID | Direction | Mojang Name        | MCP Name                  |
| --------- | --------- | ------------------ | ------------------------- |
| `0xFF`    | Both      | `DisconnectPacket` | `Packet255KickDisconnect` |

This packet is used by the server to disconnect the client with a reason, after which it will close the connection. Due to this, when the server disconnects the client, the client often doesn't even receive the Disconnect Message\*.

<sub>\* please verify this</sub>

## Clientbound

| Field  | Type     | Description                             |
| ------ | -------- | --------------------------------------- |
| Reason | String16 | The reason for disconnecting the client |

## Serverbound

| Field  | Type     | Description                        |
| ------ | -------- | ---------------------------------- |
| Reason | String16 | The reason the client disconnected |

## Example Packet

| Field  | Value                 |
| ------ | --------------------- |
| Reason | `The server is full!` |
