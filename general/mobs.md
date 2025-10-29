---
title: Mobs
nav_order: 25
layout: home
parent: General
---

# Mobs
{: .no_toc }
Mobs are entities which make use of an AI to move around the world.

1. TOC
{:toc}

## Listing
A comprehensive list of all mobs.

| Value | Name          |
| ----: | :------------ |
| 50    | Creeper       |
| 51    | Skeleton      |
| 52    | Spider        |
| 53    | Giant Zombie  |
| 54    | Zombie        |
| 55    | Slime         |
| 56    | Ghast         |
| 57    | Zombie Pigman |
| 90    | Pig           |
| 91    | Sheep         |
| 92    | Cow           |
| 93    | Chicken       |
| 94    | Squid         |
| 95    | Wolf          |

## Metadata
Some entities sent metadata when they are [spawned](../networking/packets/024-spawn-mob). Its sent in a format that is very much unlike NBT, but it makes use of the same [data types](../technical/data-types) as everything else. The format for entity metadata is simple, just a byte indicating the type of the following value.

| Header | Expected data type |
| 0 | Byte |
| 1 | Short |
| 2 | Integer |
| 3 | Float |
| 4 | String16 |
| 5 | Item (Short (id), Byte (amount), Short (damage)) |
| 6 | X,Y,Z (Integer, Integer, Integer) |

The metadata is terminated by `127`/`0x7F`.

### Creeper

| Type | Values | Description |
| --- | --- | --- |
| Byte | `-1 - 1` | Max damage (?) |

### Pig

| Type | Values | Description |
| --- | --- | --- |
| Byte | `0/1` | Saddled if `1` |

### Sheep

| Type | Values | Description |
| --- | --- | --- |
| Byte | `0x00 - 0x1F` | Lower 4-Bits for wool color, Bit `0x10` if shorn |

### Wolf
Tamed wolves have more health than wilf ones.

| Type | Values | Description |
| --- | --- | --- |
| Byte | `0x00-0x7` | State |
| String16 | - | Username of the player who tamed the wolf |
| Integer | `0-8`/`0-20` | Health of the Wolf |

| Bit | State |
| --- | --- |
| `0x01` | Sitting down |
| `0x02` | Agressive |
| `0x04` | Tamed |
