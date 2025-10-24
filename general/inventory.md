---
title: Inventory
nav_order: 20
layout: home
parent: General
---

# Inventory
{: .no_toc }
Inventories/Windows behave quite differently to how one'd expect. On the network side the slots tend to be counted from the one that's top-left down to the one that's bottom-right. Due to how the player inventory is counted and stored, some conversion is necessary, depending on which inventory is open and what slot was clicked.

Each inventory/window also has a unique identifier/index.

{: .missing }
> TODO: NBT-side for blocks

{: .missing }
> TODO: Graphics for blocks

1. TOC
{:toc}

## Player
The player inventory has no index. It has a few obvious oddities between how its sent over the network and how its stored, namely the armor slots starting at index 100 and being ordered bottom to top.

| Network | NBT |
| :---: | :---: |
| <img src="inventoryNetwork.png" alt="Player Inventory as sent over Network" style="image-rendering: pixelated; width: 100%"> | <img src="inventoryNbt.png" alt="Player Inventory as stored in NBT file" style="image-rendering: pixelated; width: 100%"> |

{: .note }
> The items in the crafting grid appear to not have a slot associated with them when saved or loaded to NBT.

## Chest (0)
Chests have an index of `0`.

- First slot: 0
- Last slot: 26
- First inventory slot: 27
- Last hotbar slot: 62

{: .note }
> TODO: Large chests

## Crafting Table (1)
Crafting Tables have an index of `1`.
- Result slot: 0
- First slot: 1
- Last slot: 9
- First inventory slot: 10
- Last hotbar slot: 45

{: .note }
> Crafting Tables are not tile entities and they do not keep track of what was in them when the world is saved.

## Furnace (2)
Furnaces have an index of `2`.
- Burnable slot: 0
- Fuel slot: 1
- Result slot: 2
- First inventory slot: 3
- Last hotbar slot: 38

## Dispenser (3)
Dispensers have an index of `3`.
- First slot: 0
- Last slot: 8
- First inventory slot: 9
- Last hotbar slot: 44 

## Outside (-999)
This is not any valid inventory. If the number `-999` is sent over the network, it means the player has clicked outside of an open inventory/window.