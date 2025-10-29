---
title: "0xFF: Disconnect"
nav_order: 256
layout: home
parent: Packets
---

# Disconnect

| Packet ID | Direction   |
| --------- | ----------- |
| `0x00`    | Clientbound |

This packet is used by the server to disconnect the client with a reason, after which it will close the connection..

## Clientbound

| Field  | Type     | Description                              |
| ------ | -------- | ---------------------------------------- |
| Reason | String16 | The reason for disconnecting the client |


## Example Packet

| Field | Value |
| --- | --- |
| Reason | "The server is full!" |