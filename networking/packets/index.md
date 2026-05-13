---
order: 0
description: Packets can be described as messages that go between the client and server. These typically consist of the packet id and the data the specified packet holds.
---

# Packets

Packets can be described as messages that go between the client and server. These typically consist of the packet id and the data the specified packet holds.

In total there are `57` packets.
- `36` Clientbound (S->C)
- `7` Serverbound (C->S)
- `14` Bidirectional (C<->S)

This page offers a few different ways to sort the packets, to make finding the relevant one easier.

- [Information direction](#information-direction)
- [Categorized](#categorized)
- [Numerical](#numerical) (same as sidebar)

## Information direction

Sorted by which way information travels, at least in practice.
All packets have the ability to be serialized and deseralized by both the client and server,
but often only one or the other is used, depending on the packet.

### Both (C<->S)

Packets that are sent by either the client or server.

- [0x00: Keep Alive](./000-keep-alive)
- [0x01: Login](./001-login)
- [0x02: Pre-Login](./002-pre-login)
- [0x03: Chat Message](./003-chat-message)
- [0x09: Respawn](./009-respawn)
- [0x0A: Player Movement](./010-player-movement)
- [0x0B: Player Position](./011-player-position)
- [0x0C: Player Rotation](./012-player-rotation)
- [0x0D: Player Position and Rotation](./013-player-position-and-rotation)
- [0x12: Animation](./018-animation)
- [0x65: Close Container](./101-close-container.md)
- [0x6A: Container Transaction](./106-container-transaction)
- [0x82: Update Sign](./130-update-sign)
- [0xFF: Disconnect](./255-disconnect)

### Serverbound (C->S)

Packets that are only sent by the client.

- [0x07: Interact with Entity](./007-interact-with-entity)
- [0x0E: Mine Block](./014-mine-block)
- [0x0F: Place Block](./015-place-block)
- [0x10: Set Hotbar Slot](./016-set-hotbar-slot)
- [0x13: Player Action](./019-player-action)
- [0x1B: Player Input (unused)](./027-player-input)
- [0x66: Click Slot](./102-click-slot)

### Clientbound (S->C)

Packets that are only sent by the server.

- [0x04: Set Time](./004-set-time)
- [0x05: Set Equipment](./005-set-equipment)
- [0x06: Set Spawn Position](./006-set-spawn-position)
- [0x08: Set Health](./008-set-health)
- [0x11: Interact with Block](./017-interact-with-block)
- [0x14: Spawn Player](./020-spawn-player)
- [0x15: Spawn Item](./021-spawn-item)
- [0x16: Collect Item](./022-collect-item)
- [0x17: Spawn Object](./023-spawn-object)
- [0x18: Spawn Mob](./024-spawn-mob)
- [0x19: Spawn Painting](./025-spawn-painting)
- [0x1C: Entity Velocity](./028-entity-velocity)
- [0x1D: Despawn Entity](./029-despawn-entity)
- [0x1E: Entity Movement (unused)](./030-entity-movement)
- [0x1F: Entity Position](./031-entity-position)
- [0x20: Entity Rotation](./032-entity-rotation)
- [0x21: Entity Position and Rotation](./033-entity-position-and-rotation)
- [0x22: Teleport Entity](./034-teleport-entity)
- [0x26: Entity Event](./038-entity-event)
- [0x27: Add Passenger](./039-add-passenger)
- [0x28: Entity Metadata](./040-entity-metadata)
- [0x32: Set Chunk Visibility](./050-set-chunk-visibility)
- [0x33: Chunk](./051-chunk)
- [0x34: Set Multiple Blocks](./052-set-multiple-blocks)
- [0x35: Set Block](./053-set-block)
- [0x36: Block Event](./054-block-event)
- [0x3C: Explosion](./060-explosion)
- [0x3D: World Event](./061-world-event)
- [0x46: Game Event](./070-game-event)
- [0x47: Lightning Bolt](./071-lightning-bolt)
- [0x64: Open Container](./100-open-container)
- [0x67: Set Slot](./103-set-slot)
- [0x68: Fill Container](./104-fill-container)
- [0x69: Container Data](./105-container-data)
- [0x83: Item Data](./131-item-data)
- [0xC8: Increment Statistic](./200-increment-statistic)

## Categorized

This is a rather arbitrary way to put the packets together,
but it simplifies finding related ones

### Connection State

Packets relating to establishing, maintaining or ending the connection.

- [0x00: Keep Alive](./000-keep-alive)
- [0x01: Login](./001-login)
- [0x02: Pre-Login](./002-pre-login)
- [0xFF: Disconnect](./255-disconnect)

### Player

Packets relating to the player.

#### Player State

- [0x06: Set Spawn Position](./006-set-spawn-position)
- [0x08: Set Health](./008-set-health)

#### Player Movement

- [0x0A: Player Movement](./010-player-movement)
- [0x0B: Player Position](./011-player-position)
- [0x0C: Player Rotation](./012-player-rotation)
- [0x0D: Player Position and Rotation](./013-player-position-and-rotation)

#### Player Action

- [0x09: Respawn](./009-respawn)
- [0x0E: Mine Block](./014-mine-block)
- [0x0F: Place Block](./015-place-block)
- [0x10: Set Hotbar Slot](./016-set-hotbar-slot)
- [0x11: Interact with Block](./017-interact-with-block)
- [0x13: Player Action](./019-player-action)

### Entity

Packets relating to entities.

- [0x07: Interact with Entity](./007-interact-with-entity)

#### Entity Spawning

- [0x14: Spawn Player](./020-spawn-player)
- [0x15: Spawn Item](./021-spawn-item)
- [0x16: Collect Item](./022-collect-item)
- [0x17: Spawn Object](./023-spawn-object)
- [0x18: Spawn Mob](./024-spawn-mob)
- [0x19: Spawn Painting](./025-spawn-painting)
- [0x1D: Despawn Entity](./029-despawn-entity)

#### Entity Position

- [0x1C: Entity Velocity](./028-entity-velocity)
- [0x1E: Entity Movement (unused)](./030-entity-movement)
- [0x1F: Entity Position](./031-entity-position)
- [0x20: Entity Rotation](./032-entity-rotation)
- [0x21: Entity Position and Rotation](./033-entity-position-and-rotation)
- [0x22: Teleport Entity](./034-teleport-entity)

#### Entity Attributes

- [0x05: Set Equipment](./005-set-equipment)
- [0x12: Animation](./018-animation)
- [0x26: Entity Event](./038-entity-event)
- [0x27: Add Passenger](./039-add-passenger)
- [0x28: Entity Metadata](./040-entity-metadata)

### Container State

Packets that relate to container management.

- [0x6A: Container Transaction](./106-container-transaction)
- [0x64: Open Container](./100-open-container)
- [0x65: Close Container](./101-close-container.md)
- [0x66: Click Slot](./102-click-slot)
- [0x67: Set Slot](./103-set-slot)
- [0x68: Fill Container](./104-fill-container)
- [0x69: Container Data](./105-container-data)

### World

Packets that provide info on the world.

#### World Events

- [0x04: Set Time](./004-set-time)
- [0x36: Block Event](./054-block-event)
- [0x3C: Explosion](./060-explosion)
- [0x3D: World Event](./061-world-event)
- [0x46: Game Event](./070-game-event)
- [0x47: Lightning Bolt](./071-lightning-bolt)

#### World Blocks

- [0x32: Set Chunk Visibility](./050-set-chunk-visibility)
- [0x33: Chunk](./051-chunk)
- [0x34: Set Multiple Blocks](./052-set-multiple-blocks)
- [0x35: Set Block](./053-set-block)
- [0x82: Update Sign](./130-update-sign)

### Misc

Packets that provide other info.

- [0x03: Chat Message](./003-chat-message)
- [0x83: Item Data](./131-item-data)
- [0xC8: Increment Statistic](./200-increment-statistic)

## Numerical

All the packets, listed in numerical order.

- [0x00: Keep Alive](./000-keep-alive)
- [0x01: Login](./001-login)
- [0x02: Pre-Login](./002-pre-login)
- [0x03: Chat Message](./003-chat-message)
- [0x04: Set Time](./004-set-time)
- [0x05: Set Equipment](./005-set-equipment)
- [0x06: Set Spawn Position](./006-set-spawn-position)
- [0x07: Interact with Entity](./007-interact-with-entity)
- [0x08: Set Health](./008-set-health)
- [0x09: Respawn](./009-respawn)
- [0x0A: Player Movement](./010-player-movement)
- [0x0B: Player Position](./011-player-position)
- [0x0C: Player Rotation](./012-player-rotation)
- [0x0D: Player Position and Rotation](./013-player-position-and-rotation)
- [0x0E: Mine Block](./014-mine-block)
- [0x0F: Place Block](./015-place-block)
- [0x10: Set Hotbar Slot](./016-set-hotbar-slot)
- [0x11: Interact with Block](./017-interact-with-block)
- [0x12: Animation](./018-animation)
- [0x13: Player Action](./019-player-action)
- [0x14: Spawn Player](./020-spawn-player)
- [0x15: Spawn Item](./021-spawn-item)
- [0x16: Collect Item](./022-collect-item)
- [0x17: Spawn Object](./023-spawn-object)
- [0x18: Spawn Mob](./024-spawn-mob)
- [0x19: Spawn Painting](./025-spawn-painting)
- [0x1B: Player Input (unused)](./027-player-input)
- [0x1C: Entity Velocity](./028-entity-velocity)
- [0x1D: Despawn Entity](./029-despawn-entity)
- [0x1E: Entity Movement (unused)](./030-entity-movement)
- [0x1F: Entity Position](./031-entity-position)
- [0x20: Entity Rotation](./032-entity-rotation)
- [0x21: Entity Position and Rotation](./033-entity-position-and-rotation)
- [0x22: Teleport Entity](./034-teleport-entity)
- [0x26: Entity Event](./038-entity-event)
- [0x27: Add Passenger](./039-add-passenger)
- [0x28: Entity Metadata](./040-entity-metadata)
- [0x32: Set Chunk Visibility](./050-set-chunk-visibility)
- [0x33: Chunk](./051-chunk)
- [0x34: Set Multiple Blocks](./052-set-multiple-blocks)
- [0x35: Set Block](./053-set-block)
- [0x36: Block Event](./054-block-event)
- [0x3C: Explosion](./060-explosion)
- [0x3D: World Event](./061-world-event)
- [0x46: Game Event](./070-game-event)
- [0x47: Lightning Bolt](./071-lightning-bolt)
- [0x64: Open Container](./100-open-container)
- [0x65: Close Container](./101-close-container.md)
- [0x66: Click Slot](./102-click-slot)
- [0x67: Set Slot](./103-set-slot)
- [0x68: Fill Container](./104-fill-container)
- [0x69: Container Data](./105-container-data)
- [0x6A: Container Transaction](./106-container-transaction)
- [0x82: Update Sign](./130-update-sign)
- [0x83: Item Data](./131-item-data)
- [0xC8: Increment Statistic](./200-increment-statistic)
- [0xFF: Disconnect](./255-disconnect)
