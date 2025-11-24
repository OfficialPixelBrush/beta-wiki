---
title: Mobs
nav_order: 25
layout: home
parent: Entities
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
Some entities sent metadata when they are [spawned](../networking/packets/024-spawn-mob) or it gets [updated](../networking/packets/040-entity-metadata). Its sent in a format that is very much unlike NBT, but it makes use of the same [data types](../technical/data-types) as everything else.

You can read more about [entity metadata](../networking/entity-metadata) on the dedicated page for it.