---
title: "0x26: Entity Health Action"
nav_order: 39
layout: home
parent: Packets
---

# Entity Health Action

| Packet ID | Direction |
| --------- | --------- |
| `0x26`    | Clientbound      |


## Clientbound
Sent to the client to showcase an entity's health state, such as if it should turn red when being hit or if it should play the death animation.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Entity ID | Integer | The ID of the entity that should show this action |
| Action | Byte | Action that should be shown |

| Value | Action | Entity |
| --- | --- | --- |
| 2 | Hurt | Any |
| 3 | Death | Any |
| 6 | Smoke Particles | Wolf |
| 7 | Heart Particles | Wolf |
| 8 | Start Shaking | Wolf |

Unlisted values do nothing.

## Example Packets

### Clientbound

| Field  | Value    |
| ------ | -------- |
| Entity ID | `1298`  |
| Action | `2` (Hurt) |
