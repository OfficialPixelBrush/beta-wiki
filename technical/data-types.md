---
title: Data Types
layout: home
nav_order: 1
parent: Technical
---

# Data Types
This page describes the various data types that Minecraft works with.

| Type | Size (Bytes) | Range | Comment |
| --- | --- | --- | --- |
| Boolean | 1 | 0 to 1 | Written as a byte. Can either be `0x00` or `0x01`. |
| Byte | 1 | -128 to 127 | Signed, two's complement. |
| Short | 2 | -32,768 to 32,767 | Signed, two's complement. |
| Integer | 4 | -2,147,483,648 to 2,147,483,647 | Signed, two's complement. |
| Long | 8 | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | Signed, two's complement. |
| Float | 4 | | Single-precision 32-bit IEEE 754 floating point. |
| Double | 8 | | Double-precision 64-bit IEEE 754 floating point. |
| String8 | >=2 | | Modified UTF-8 string. Prefixed by an unsigned short containing the length of the string. |
| String16 | >=2 and <= 240 | | UCS-2 string, big-endian. Prefixed by an unsigned short containing the length of the string in characters. UCS-2 consists of 16-bit words, each of which represent a Unicode code point between U+0000 and U+FFFF inclusive. |

## Entity Metadata
Read more over on [Entity metadata](entity-metadata).