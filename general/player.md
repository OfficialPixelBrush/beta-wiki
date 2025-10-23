---
title: Player
nav_order: 3
layout: home
parent: General
---

# Player
{: .no_toc }
The player is the entity the client has direct control over.

1. TOC
{:toc}


## NBT
### Inventory Slots
The inventory slot layout between how it is over the network and how it is when stored to an NBT is very different.


| Network | NBT |
| :---: | :---: |
| <img src="inventoryNetwork.png" alt="Player Inventory as sent over Network" style="image-rendering: pixelated; width: 100%"> | <img src="inventoryNbt.png" alt="Player Inventory as stored in NBT file" style="image-rendering: pixelated; width: 100%"> |


{: .note }
> The items in the crafting grid appear to not have a slot associated with them when saved or loaded to NBT.