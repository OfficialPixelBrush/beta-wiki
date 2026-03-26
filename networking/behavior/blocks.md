---
order: 15
---

# Blocks

Blocks do a lot in Minecraft, given that it's a voxel-based world. In most cases, when a block is placed or mined, the server needs to reply with a [block update packet](../packets/053-set-block).

If this packet isn't sent, the client just assumes the packet was dropped or the client wasn't allowed to place the block, replacing it with air after a second or two.

## Breaking

| Packet                                         | Contents                              |
| :--------------------------------------------- | :------------------------------------ |
| `C->S` [Mine Block](../packets/014-mine-block) | Telling the server to destroy a block |
| `S->C` [Set Block](../packets/053-set-block)   | Tells the client a block was updated  |

## Placing

| Packet                                           | Contents                             |
| :----------------------------------------------- | :----------------------------------- |
| `C->S` [Place Block](../packets/015-place-block) | Telling the server to place a block  |
| `S->C` [Set Block](../packets/053-set-block)     | Tells the client a block was updated |
