---
title: Tile Entities
nav_order: 20
layout: home
parent: General
---

# Tile Entities
{: .no_toc }
Tile Entities are blocks that contain additional data, beyond the 4-Bit Metadata/Damage Value every item/block has.

1. TOC
{:toc}

## Base
All tile entities share a common layout that they then add their additional fields onto.


| Field            | Type     | Description                           |
| ---------------- | -------- | ------------------------------------- |
| id           | String16     | The label of the tile entity |
| x           | Integer     | The X position of the block |
| y           | Integer     | The Y position of the block |
| z           | Integer     | The Z position of the block |

As these are always the same, they will only be included as part of the examples

## Mob Spawner

| Field    | Type     | Description                           |
| -------- | -------- | ------------------------------------- |
| Delay    | Short    | How often per tick a mob spawn attempt can be issued |
| EntityId | String16 | The label of the spawnable entity      |

**Example**

| Field | Value | 
| --- | --- |
| Delay | 20 |
| EntityId | `Zombie` |
| id | `MobSpawner` |
| x | 17 |
| y | 55 |
| z | 60 |

## Chest

| Field | Type  | Description                    |
| ----- | ----- | ------------------------------ |
| Items | List  | A list of Compound-taged items |

**Example**

| Field | Value | 
| --- | --- |
| Items | |
| id | `Chest` |
| x | 20 |
| y | 55 |
| z | 61 |