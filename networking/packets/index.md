---
order: 0
description: Packets can be described as messages that go between the client and server. These typically consist of the packet id and the data the specified packet holds.
---

# Packets

Packets can be described as messages that go between the client and server. These typically consist of the packet id and the data the specified packet holds.

## Both (C<->S)

- [0x00: Keep Alive](./000-keep-alive)
- [0x01: Login](./001-login)
- [0x02: Handshake](./002-handshake)
- [0x03: Chat Message](./003-chat-message)
- [0x09: Respawn](./009-respawn)
- [0x0A: Player On Ground](./010-player-on-ground)
- [0x0B: Player Position](./011-player-position)
- [0x0C: Player Look](./012-player-look)
- [0x0D: Player Position and Look](./013-player-position-look)

- [0xFF: Disconnect](./255-disconnect)

## Serverbound (C->S)

- [0x07: Click Entity](./007-click-entity)
- [0x0E: Mine](./014-mine)
- [0x0F: Place](./015-place)
- [0x10: Active Slot](./016-active-slot)

## Clientbound (S->C)

- [0x04: Time](./004-time)
- [0x05: Entity Equipment](./005-entity-equipment)
- [0x06: Spawn Point](./005-entity-equipment)
- [0x08: Set Health](./008-health)
- [0x11: Use Bed](./017-use-bed)
