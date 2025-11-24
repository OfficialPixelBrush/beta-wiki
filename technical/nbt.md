---
title: NBT
nav_order: 2
layout: home
parent: Technical
---

# NBT
{: .no_toc }
NBT (Named Binary Tag) is used all over Minecraft. The [Minecraft Wiki has an extremely well put together page on the topic](https://minecraft.wiki/w/NBT_format), so only the most relevant information will be placed here for ease of access.

1. TOC
{:toc}

## Compression
In the context of Beta Minecraft, there are two relevant forms of compression that're applied to NBT Data:

| Format | Used for |
| :--- | :--- |
| GZip | Player Data, level.dat |
| Zlib/Deflate | Chunk Data |

## Tags
Tags are what NBT Data consists of. They typically start with a single byte describing their tag type/ID, followed by the value of that tag.

### Data types
See [Data types](data-types) for more info.

| Hex  | Tag     | Contains | Purpose |
| :--- | :--- | :--- | :--- |
| `0x01` | `TAG_Byte` | Byte | A signed byte, also used for booleans |
| `0x02` | `TAG_Short` | Short | A signed short |
| `0x03` | `TAG_Int` | Integer | A signed integer |
| `0x04` | `TAG_Long` | Long | A signed long |
| `0x05` | `TAG_Float` | Float | A signed float |
| `0x06` | `TAG_Double` | Double | A signed double |

### Multi tags

| Hex  | Tag     | Contains | Purpose |
| :--- | :--- | :--- | :--- |
| `0x00` | `TAG_End` | `0` | Used to mark the end of compound tags. This tag does not have a name, so it is always a single byte 0. It may also be the type of empty List tags. |
| `0x07` | `TAG_Byte_Array` | Integer of array Length, followed by bytes | An array of bytes |
| `0x08` | `TAG_String` | Unsigned Short of string length, followed by UTF-8 Characters | A UTF-8 string |
| `0x09` | `TAG_List` | Byte for the Tag ID that'll be used throughout the list, Integer of how many entries are in the List, followed by Tags without a tag ID. | A list of tags without repeating the tag ID header |
| `0x0A` | `TAG_Compound` | Can contain any number of tags, is terminated by TAG_End | Contain full formed tags. All tags inside need to have a unique name |

## Layout
Every NBT-formatted file starts with a `TAG_Compound`, and is terminated with a `TAG_End`.

# Libraries
Check the [projects page](../projects#nbt) for libraries that implemnt NBT in the language you're working in.

# Further reading and sources
- [NBT Format (Minecraft Wiki)](https://minecraft.wiki/w/NBT_format)
- [NBT (Notch)](http://web.archive.org/web/20110723210920/http://www.minecraft.net/docs/NBT.txt)