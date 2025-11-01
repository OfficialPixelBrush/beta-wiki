---
title: Blocks
layout: home
nav_order: 15
parent: Behavior
---

# Blocks
{: .no_toc }
Blocks do a lot in Minecraft, given that it's a voxel-based world. In most cases, when a block is placed or mined, the server needs to reply with a [block change packet](../packets/053-block-change).

If this packet isn't sent, the client just assumes the packet was dropped or the client wasn't allowed to place the block, replacing it with air after a second or two.

1. TOC
{:toc}

## Breaking

| Packet | Contents |
| :--- | :--- |
| `C->S` [Mine](../packets/014-mine) | Telling the server to destroy a block |
| `S->C` [Block Change](../packets/053-block-change) | Tells the client a block was changed |

## Placing

| Packet | Contents |
| :--- | :--- |
| `C->S` [Place](../packets/015-place) | Telling the server to place a block |
| `S->C` [Block Change](../packets/053-block-change) | Tells the client a block was changed |