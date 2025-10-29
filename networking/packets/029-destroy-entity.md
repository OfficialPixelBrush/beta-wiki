---
title: "0x1D: Destroy Entity"
nav_order: 30
layout: home
parent: Packets
---
# Destroy Entity

| Packet ID | Direction |
| --------- | --------- |
| `0x1D`    | Clientbound      |


## Clientbound
Sent to the client when an entity should be destroyed on the client, such as a mob despawning or a player disconnecting.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Entity ID | Integer | The ID of the entity that should be destroyed |

## Example Packets

### Clientbound

| Field  | Value    |
| ------ | -------- |
| Entity ID | 1298  |