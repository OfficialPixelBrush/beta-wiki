---
description: This page serves as a quick-reference/guide on differences that came up as the Beta-era protocol was developed, including some info on Beta 1.8 and beyond.
---

# Multi-Version

This page serves as a quick-reference/guide on differences that came up as the Beta-era protocol was developed, including some info on Beta 1.8 and beyond.

The pre-netty Protocol was first created around [Alpha v1.0.17](https://minecraft.wiki/w/Java_Edition_Alpha_v1.0.17) as it marked the reset of the Protocol version from `14` to `1`. The protocol created was tweaked and changed, but left mostly similar until [Snapshot 13w39b](https://minecraft.wiki/w/Java_Edition_13w39b) (Release 1.7.2, Protocol version `80`), where it was finally replaced by the moderm Netty-based Protocol.

::: warning
This page features incomplete and possibly erroneous information. Please double and triple check EVERYTHING said here.
:::

## Beta 1.8

Beta 1.8.x is a version often disliked by legacy Minecraft players, due to its addition of the hunger bar and less nostalgic world generation. However, it has interesting features for server admins like creative mode and flying, and the protocol still resembles Beta 1.7.3 closely.

To implement basic support, make the following changes to the [login](/networking/packets/001-login) packet:

### Clientbound

```swift
func write(to buffer: inout ByteBuffer) throws {
    buffer.writeInteger(entityId)
    buffer.writeString16("")
    buffer.writeInteger(worldSeed)

    if beta18 {
        buffer.writeInteger(Int32(1)) // 0 for survival, 1 for creative
        buffer.writeInteger(dimension.rawValue)
        buffer.writeInteger(Int8(2)) // normal difficulty
        buffer.writeInteger(UInt8(128)) // world height
        buffer.writeInteger(UInt8(8)) // max players
    } else {
        buffer.writeInteger(dimension.rawValue)
    }
}
```

### Serverbound

```swift
init(from buffer: inout ByteBuffer) throws {
    protocolVersion = try buffer.readInteger()
    username = try buffer.readString16()
    let _: Int64 = try buffer.readInteger()

    if beta18 {
        let _: Int32 = try buffer.readInteger()
        let _: Int8 = try buffer.readInteger()
        let _: Int8 = try buffer.readInteger()
        let _: UInt8 = try buffer.readInteger()
        let _: UInt8 = try buffer.readInteger()
    } else {
        let _: Int8 = try buffer.readInteger()
    }
}
```

### Other modified packets

#### Keep Alive

Now carries an int that the recipient echoes back.

| Field         | Type    |
| ------------- | ------- |
| Keep Alive ID | Integer |

#### Set Health

Two fields appended after the existing Health.

| Field      | Type  | Description |
| ---------- | ----- | ----------- |
| Food       | Short | `0` to `20` |
| Saturation | Float |             |

#### Respawn

The body is fully replaced. Wire order:

| Field        | Type  | Description                                         |
| ------------ | ----- | --------------------------------------------------- |
| Dimension    | Byte  |                                                     |
| Difficulty   | Byte  |                                                     |
| Game Mode    | Byte  | `0` survival, `1` creative                          |
| World Height | Short | Always `128`. This is a `Byte` in the Login packet. |
| World Seed   | Long  |                                                     |

#### Game Event

A trailing byte is appended. It carries the new game mode (`0`/`1`) for state `3` ("game mode changed"), and is sent regardless of the state.

| Field     | Type |
| --------- | ---- |
| Game Mode | Byte |

#### Open Container

The Title field's type changed from `String8` to `String16`.

### New packets

#### Spawn XP Orb

| Packet ID | Direction   | Mojang Name | MCP Name               |
| --------- | ----------- | ----------- | ---------------------- |
| `0x1A`    | Clientbound | TODO        | `Packet26EntityExpOrb` |

Position is in [block space](/networking/terminology#block-space).

| Field     | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| Entity ID | Integer |                                   |
| X         | Integer | The X block position of the orb   |
| Y         | Integer | The Y block position of the orb   |
| Z         | Integer | The Z block position of the orb   |
| Count     | Short   | The amount of XP the orb is worth |

#### Apply Mob Effect

| Packet ID | Direction   | Mojang Name | MCP Name               |
| --------- | ----------- | ----------- | ---------------------- |
| `0x29`    | Clientbound | TODO        | `Packet41EntityEffect` |

| Field     | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| Entity ID | Integer |                                   |
| Effect ID | Byte    |                                   |
| Amplifier | Byte    | Effect tier minus one (`0` = `I`) |
| Duration  | Short   | In ticks                          |

#### Remove Mob Effect

| Packet ID | Direction   | Mojang Name | MCP Name                     |
| --------- | ----------- | ----------- | ---------------------------- |
| `0x2A`    | Clientbound | TODO        | `Packet42RemoveEntityEffect` |

| Field     | Type    |
| --------- | ------- |
| Entity ID | Integer |
| Effect ID | Byte    |

#### Set Experience

| Packet ID | Direction   | Mojang Name | MCP Name             |
| --------- | ----------- | ----------- | -------------------- |
| `0x2B`    | Clientbound | TODO        | `Packet43Experience` |

| Field        | Type  | Description                              |
| ------------ | ----- | ---------------------------------------- |
| Bar Progress | Byte  | Position of the green fill in the XP bar |
| Level        | Byte  | Number rendered above the XP bar         |
| Total XP     | Short |                                          |

#### Creative Set Slot

| Packet ID | Direction | Mojang Name | MCP Name                   |
| --------- | --------- | ----------- | -------------------------- |
| `0x6B`    | Both      | TODO        | `Packet107CreativeSetSlot` |

Sent by the client to set a slot in their inventory while in creative mode.

| Field    | Type  | Description                                             |
| -------- | ----- | ------------------------------------------------------- |
| Slot     | Short | The destination slot. `-1` means "drop into the world". |
| Item ID  | Short |                                                         |
| Count    | Short |                                                         |
| Metadata | Short |                                                         |

#### Player List Item

| Packet ID | Direction   | Mojang Name | MCP Name              |
| --------- | ----------- | ----------- | --------------------- |
| `0xC9`    | Clientbound | TODO        | `Packet201PlayerInfo` |

Adds, updates, or removes an entry in the in-game player list overlay.

| Field    | Type     | Description                                                                              |
| -------- | -------- | ---------------------------------------------------------------------------------------- |
| Username | String16 |                                                                                          |
| Online   | Byte     | `1` to add or update, `0` to remove the entry                                            |
| Ping     | Short    | Latency in milliseconds. Bar count is `<150`, `<300`, `<600`, `<1000`, or `<0` for none. |

#### Server List Ping

| Packet ID | Direction   | Mojang Name | MCP Name              |
| --------- | ----------- | ----------- | --------------------- |
| `0xFE`    | Serverbound | TODO        | `Packet254ServerPing` |

Empty payload. The server is expected to respond with a [Disconnect](/networking/packets/255-disconnect) packet whose reason holds the MOTD.

### Registry additions

These don't change any packet shapes, but the new IDs can't be sent to a Beta 1.7.3 client.

#### Blocks

| ID    | Name               |
| ----- | ------------------ |
| `97`  | Silverfish Block   |
| `98`  | Stone Bricks       |
| `99`  | Brown Mushroom Cap |
| `100` | Red Mushroom Cap   |
| `101` | Iron Bars          |
| `102` | Glass Pane         |
| `103` | Melon              |
| `104` | Pumpkin Stem       |
| `105` | Melon Stem         |
| `106` | Vines              |
| `107` | Fence Gate         |
| `108` | Brick Stairs       |
| `109` | Stone Brick Stairs |

#### Items

| ID    | Name           |
| ----- | -------------- |
| `104` | Melon Slice    |
| `105` | Pumpkin Seeds  |
| `106` | Melon Seeds    |
| `107` | Raw Beef       |
| `108` | Steak          |
| `109` | Raw Chicken    |
| `110` | Cooked Chicken |
| `111` | Rotten Flesh   |
| `112` | Ender Pearl    |

#### Entities

| ID   | Name        | Notes                                |
| ---- | ----------- | ------------------------------------ |
| `2`  | XP Orb      | Spawned with its own packet (`0x1A`) |
| `58` | Enderman    |                                      |
| `59` | Cave Spider |                                      |
| `60` | Silverfish  |                                      |

#### Mob Effects

Referenced by `0x29 Apply Mob Effect` and `0x2A Remove Mob Effect`.

| ID   | Name            |
| ---- | --------------- |
| `1`  | Speed           |
| `2`  | Slowness        |
| `3`  | Haste           |
| `4`  | Mining Fatigue  |
| `5`  | Strength        |
| `6`  | Instant Health  |
| `7`  | Instant Damage  |
| `8`  | Jump Boost      |
| `9`  | Nausea          |
| `10` | Regeneration    |
| `11` | Resistance      |
| `12` | Fire Resistance |
| `13` | Water Breathing |
| `14` | Invisibility    |
| `15` | Blindness       |
| `16` | Night Vision    |
| `17` | Hunger          |
| `18` | Weakness        |
| `19` | Poison          |

::: tip MISSING
TODO: beta 1.2 and 1.1 sharing the same protocol version is suspicious, could be minecraft.wiki mistake
:::

## Versions

| First Version         | Last Version          | Protocol Version | Minecraft Wiki Page                                                                     |
| --------------------- | --------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| Alpha v1.0.17         | Alpha v1.0.17_04      | `1`              | (undocumented)                                                                          |
| Alpha v1.1.0          | Alpha v1.1.2_01       | `2`              | (undocumented)                                                                          |
| Alpha v1.2.0          | Alpha v1.2.1_01       | `3`              | <https://minecraft.wiki/w/Java_Edition_protocol/Packets?direction=prev&oldid=2769656>   |
| Alpha v1.2.2          | Alpha v1.2.2          | `4`              | <https://minecraft.wiki/w/Java_Edition_protocol/Packets?direction=next&oldid=2769656>   |
| Alpha v1.2.3          | Alpha v1.2.3_04       | `5`              | <https://minecraft.wiki/w/Java_Edition_protocol/Packets?direction=next&oldid=2769656>   |
| Alpha v1.2.3_05       | Alpha v1.2.6          | `6`              | <https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769659> |
| Beta 1.0              | Beta 1.1_01           | `7`?             | TODO                                                                                    |
| Beta 1.1_02           | Beta 1.2_02           | `8`              | <https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769711> |
| Beta 1.3              | Beta 1.3_01           | `9`              | <https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769723> |
| Beta 1.4              | Beta 1.4_01           | `10`             | (not undocumented standalone, see `11`)                                                 |
| Beta 1.5              | Beta 1.5_02           | `11`             | <https://minecraft.wiki/w/Java_Edition_protocol/Packets?direction=next&oldid=2769730>   |
| Beta 1.6 Test Build 3 | Beta 1.6 Test Build 3 | `12`             | (undocumented)                                                                          |
| Beta 1.6              | Beta 1.6.6            | `13`             | <https://minecraft.wiki/w/Java_Edition_protocol/Packets?direction=next&oldid=2769745>   |
| Beta 1.7              | Beta 1.7.3            | `14`             | <https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769763> |
| Beta 1.8              | Beta 1.8.1            | `17`             | <https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769858> |
| Beta 1.9 Pre-6        | Release 1.0.1         | `22`             | TODO                                                                                    |
| Release 1.6.4         | Release 1.6.4         | `78`             | <https://minecraft.wiki/w/Java_Edition_protocol/Packets?direction=next&oldid=2771078>   |
| Snapshot 13w38a       | Snapshot 13w38c       | `79`             | (undocumented)                                                                          |
| Snapshot 13w39a       | Snapshot 13w39b       | `80`             | (undocumented)                                                                          |

From Snapshot 13w41a (Release 1.7) onward, the protocol was rewritten to use Netty, which goes about describing packet data entirely differently.
Here's the first edit on the old Protocol docs to describe this change: <https://minecraft.wiki/w/Java_Edition_protocol/Packets?direction=next&oldid=2771080>
