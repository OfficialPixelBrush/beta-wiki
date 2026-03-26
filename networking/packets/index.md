---
order: 0
description: Packets can be described as messages that go between the client and server. These typically consist of the packet id and the data the specified packet holds.
---

# Packets

Packets can be described as messages that go between the client and server. These typically consist of the packet id and the data the specified packet holds.

## Both (C<->S)

- [0x00: Keep Alive](./000-keep-alive)
- [0x01: Login](./001-login)
- [0x02: Pre-Login](./002-pre-login)
- [0x03: Chat Message](./003-chat-message)
- [0x09: Respawn](./009-respawn)
- [0x0A: Player Movement](./010-player-movement)
- [0x0B: Player Position](./011-player-position)
- [0x0C: Player Rotation](./012-player-rotation)
- [0x0D: Player Position and Rotation](./013-player-position-and-rotation)

- [0xFF: Disconnect](./255-disconnect)

## Serverbound (C->S)

- [0x07: Interact with Entity](./007-interact-with-entity)
- [0x0E: Mine Block](./014-mine-block)
- [0x0F: Place Block](./015-place-block)
- [0x10: Set Hotbar Slot](./016-set-hotbar-slot)

## Clientbound (S->C)

- [0x04: Set Time](./004-set-time)
- [0x05: Set Equipment](./005-set-equipment)
- [0x06: Set Spawn Position](./006-set-spawn-position)
- [0x08: Set Health](./008-set-health)
- [0x11: Interact with Block](./017-interact-with-block)
