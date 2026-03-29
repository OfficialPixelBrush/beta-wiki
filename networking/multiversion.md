---
exclude: true
---

# Multi-Version

> [!WARNING]
> This is not an official page and just for taking notes (hence why it's hidden from the sidebar), so it will be less structured and less formal than other pages. It may be removed at any time.

## Beta 1.8

Beta 1.8.x is a version often disliked by legacy Minecraft players, due to its addition of the hunger bar and less nostalgic world generation. However, it has interesting features for server admins like creative mode and flying, and the protocol still resembles Beta 1.7.3 closely.

To implement basic support, make the following changes to the [login](/networking/packets/001-login.md) packet:

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

## Minecraft Wiki pages
| Version      | Link                                                                                  |
| ------------ | ------------------------------------------------------------------------------------- |
| Alpha v1.2.6 | https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769659 |
| Beta 1.1_01  | https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769678 |
| Beta 1.2_02  | https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769711 |
| Beta 1.3_01  | https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769723 |
| Beta 1.7.3   | https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769763 |
| Beta 1.8.1   | https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769858 |