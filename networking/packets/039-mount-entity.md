---
title: "0x27: Mount Entity"
nav_order: 40
layout: home
parent: Packets
---
# Mount Entity

| Packet ID | Direction |
| --------- | --------- |
| `0x27`    | Clientbound      |

## Clientbound
Sent to the client to attach an entity to another. Used for riding.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Entity ID (Rider) | Integer | The ID of the entity that should ride |
| Entity ID (Ridee) | Integer | The ID of the entity that should be ridden |

## Example Packets

### Clientbound

| Field  | Value    |
| ------ | -------- |
| Entity ID (Rider) | `2`  |
| Entity ID (Ridee) | `654` |
