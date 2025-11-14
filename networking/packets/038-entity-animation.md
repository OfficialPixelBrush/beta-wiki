---
title: "0x26: Entity Animation"
nav_order: 39
layout: home
parent: Packets
---
# Entity Animation

| Packet ID | Direction |
| --------- | --------- |
| `0x26`    | Clientbound      |


## Clientbound
Sent to the client to set an entity's animation state, such as if it should turn red when being hit or if its should play the death animation.

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Entity ID | Integer | The ID of the entity that should play this animation |
| Animation | Byte | Animation that should be played |

| Value | Animation |
| --- | --- |
| 0 | ? |
| 1 | ? |
| 2 | Hurt |
| 3 | Death |
| 4 | ? |
| 5 | ? |

## Example Packets

### Clientbound

| Field  | Value    |
| ------ | -------- |
| Entity ID | 1298  |
| Animation      | 2 |
