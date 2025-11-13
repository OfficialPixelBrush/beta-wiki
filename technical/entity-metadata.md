---
title: Entity Metadata
layout: home
nav_order: 10
parent: Technical
---

# Entity Metadata
{: .no_toc }
Entity metadata is a format introduced in Beta 1.2 for sending entity state over the network. This page will document the possible metadata values of mobs and how metadata is encoded in Beta 1.7.3. For the packet used to send the metadata, see [Entity Metadata](../networking/packets/040-entity-metadata.md).

1. TOC
{:toc}

## Format
To read entity metadata, follow these steps:
1. Read an unsigned byte.
1. If the byte is `127`, stop reading.
1. The ID of the metadata value is the bottom 5 bits, equal to `byte & 31`.
1. The data type is the top 5 bits, equal to `byte >> 5`. See below for a list of all data types.

## Data Types

| ID | Type | Note |
| -- | ---- | ---- |
| 0 | Byte | |
| 1 | Short | |
| 2 | Integer | |
| 3 | Float | |
| 4 | String | Uses the modified UCS-2 string format. |
| 5 | Item | Short (item/block ID), byte (quantity), short (metadata). |
| 6 | Coordinates | Three integers for X, Y, and Z. |

## Mobs
<table>
    <tr>
        <th>Name</th>
        <td>Metadata</td>
    </tr>
    <tr>
        <td>Entity<sup></sup></td>
        <td>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>Byte</td>
                    <td><a href="#flags">Flags</a></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>Player</td>
        <td>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Byte</td>
                    <td>Unused</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>Pig</td>
        <td>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Byte</td>
                    <td>Saddled?</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>Creeper</td>
        <td>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Byte</td>
                    <td>Fuse<sup>1</sup></td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Byte</td>
                    <td>Charged?</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>Sheep</td>
        <td>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Byte</td>
                    <td>Sheared? / Color<sup>2</sup></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>Slime</td>
        <td>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Byte</td>
                    <td>Size</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>Ghast</td>
        <td>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Byte</td>
                    <td>Attacking?</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>Wolf</td>
        <td>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Byte</td>
                    <td>Sitting?</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>String</td>
                    <td>Owner</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>Integer</td>
                    <td>Health</td>
                </tr>
            </table>
        </td>
    </tr>
</table>

{: .note }
> <sup>1</sup> `1` for blowing up, `-1` otherwise
>
> <sup>2</sup> `0x10` bit indicates shearedness, values `0x0-0xF` indicate the color

### Flags
All entities extending the `Entity` class must support this bit field at metadata ID 0. In later versions, this is also used for sprinting and eating/drinking. To get the flag at an ID, you can use `value & mask != 0`.

| ID | Bit Mask | Name |
| --- | --- | --- |
| 0 | 0x01 | Burning |
| 1 | 0x02 | Sneaking |
| 2 | 0x04 | Riding |

## Relevant Classes

| Name (MCP) | Name (Mojang) | Notes |
| --- | ------ | ----- |
| `DataWatcher` | `SynchedEntityData` | Watches metadata values for changes and sends packets. |
| `WatchableObject` | `SynchedEntityData.DataItem` | Represents a metadata value that can be changed. |
| `Packet40EntityMetadata` | `SetEntityDataPacket` | The packet that notifies the client of metadata changes in a mob. |

## Further Reading
- [Protocol (wiki.vg)](https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769758#Metadata)
- [Mobs](../general/mobs.md)
- [Entity Metadata Packet](../networking/packets/040-entity-metadata.md)