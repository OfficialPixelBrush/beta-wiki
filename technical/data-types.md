---
order: 1
---

# Data Types

This page describes the various data types that Minecraft works with.

All numbers are stored as **big endian**, so the number `12345` (`0x3039`) would be stored as

| Address | Data   |
| ------: | :----- |
|     `n` | `0x30` |
|   `n+1` | `0x39` |

| Type     | Size (Bytes)   | Range                                                   | Comment                                                                                                                                                                                                                      |
| -------- | -------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Boolean  | 1              | 0 to 1                                                  | Written as a byte. Can either be `0x00` or `0x01`.                                                                                                                                                                           |
| Byte     | 1              | -128 to 127                                             | Signed, two's complement.                                                                                                                                                                                                    |
| Short    | 2              | -32,768 to 32,767                                       | Signed, two's complement.                                                                                                                                                                                                    |
| Integer  | 4              | -2,147,483,648 to 2,147,483,647                         | Signed, two's complement.                                                                                                                                                                                                    |
| Long     | 8              | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | Signed, two's complement.                                                                                                                                                                                                    |
| Float    | 4              |                                                         | Single-precision 32-bit IEEE 754 floating point.                                                                                                                                                                             |
| Double   | 8              |                                                         | Double-precision 64-bit IEEE 754 floating point.                                                                                                                                                                             |
| String8  | >=2            |                                                         | Modified UTF-8 string. Prefixed by an unsigned short containing the length of the string.                                                                                                                                    |
| String16 | >=2 and <= 240 |                                                         | UCS-2 string, big-endian. Prefixed by an unsigned short containing the length of the string in characters. UCS-2 consists of 16-bit words, each of which represent a Unicode code point between U+0000 and U+FFFF inclusive. |

## Entity Metadata

Read more over on [Entity metadata](../networking/entity-metadata).

## Further reading

- [Endianness (Wikipedia)](https://en.wikipedia.org/wiki/Endianness)
- [Integer (computer science) (Wikipedia)](<https://en.wikipedia.org/wiki/Integer_(computer_science)>)
- [Two's complement (Wikipedia)](https://en.wikipedia.org/wiki/Two%27s_complement)
- [Single-precision floating-point format (Wikipedia)](https://en.wikipedia.org/wiki/Single-precision_floating-point_format)
- [Double-precision floating-point format (Wikipedia)](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)
- [UTF-8 (Wikipedia)](https://en.wikipedia.org/wiki/UTF-8)
- [Universal Coded Character Set (UCS) (Wikipedia)](https://en.wikipedia.org/wiki/Universal_Coded_Character_Set)
