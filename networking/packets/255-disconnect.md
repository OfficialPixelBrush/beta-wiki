---
title: "0xFF: Disconnect"
nav_order: 256
layout: home
parent: Packets
---

# Disconnect

| Packet ID | Direction   |
| --------- | ----------- |
| `0xFF`    | Both |

This packet is used by the server to disconnect the client with a reason, after which it will close the connection. Due to this, when the Server disconnects the Client, the Client often doesn't even receive the Disconnect Message\*.

<sub>\* please verify this</sub>

## Clientbound

| Field  | Type     | Description                              |
| ------ | -------- | ---------------------------------------- |
| Reason | String16 | The reason for disconnecting the client |

## Serverbound 

| Field  | Type     | Description                              |
| ------ | -------- | ---------------------------------------- |
| Reason | String16 | The reason the client disconnected |


## Example Packet

| Field | Value |
| --- | --- |
| Reason | `The server is full!` |