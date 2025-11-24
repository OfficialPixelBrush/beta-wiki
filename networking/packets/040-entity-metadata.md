---
title: "0x28: Entity Metadata"
nav_order: 41
layout: home
parent: Packets
---
# Entity Metadata

| Packet ID | Direction |
| --------- | --------- |
| `0x28`    | Clientbound      |

## Clientbound
Sent to the client to supply further data for some entities. See the [entity metadata page](../entity-metadata) for more info!

| Field  | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| Entity ID | Integer | The ID of the entity that has this metadata |
| Metadata | Metadata | The mob metadata |

## Example Packets

### Clientbound
TODO: Provide real example

| Field  | Value    |
| ------ | -------- |
| Entity ID | 6436 |
| Metadata | `0x00 0x01 0x7F` |
