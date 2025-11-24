---
title: Compression
layout: home
nav_order: 20
parent: Technical
---

# Compression
{: .no_toc }
Compression is used throughout many parts of Minecraft. The `level.dat` file is a `Gzip` compressed NBT file, while McRegion files are `Zlib`/`deflate` compressed NBT files.

1. TOC
{:toc}

# Deflate
Deflate is the basic algorithm that is mainly used by both Gzip and Zlib, which essentially just act as thin wrappers around it.

# Gzip
Gzip is an abstraction of the Deflate algorithm, adding some header and trailer info. It is used for most easily visible NBT files, namely `level.dat`.

# Zlib
Zlib is an abstraction of the Deflate algorithm, adding some basic error detection and more that the default Deflate data does not have. It is mostly used for compressing Chunk data as part of the [McRegion format](../worlds/worldFormat#mcregion).

## Compressed data
For reading about how zlib itself works in more detail, I recommend checking out either the [zlib Wikipedia page](https://en.wikipedia.org/wiki/Gzip) or the [zlib RFC page](https://www.rfc-editor.org/rfc/rfc1950).

## Uncompressed data
Although this is a little unorthodox, it is entirely possible to store uncompressed data in a barebones zlib/deflate format. This is very useful for when you're writing everything from scratch and can't be bothered to implement an actual compression algorithm, or are running your code in a very resource constrained environment.

The basic idea boils down to disabling as many features as possible and forcing deflate to not utilize compression.

Here's some pseudocode, [based on the implementation from PicoCraft](https://github.com/OfficialPixelBrush/PicoCraft/blob/c2abf98c595bb47f0498e14726a26857c6382fa4/picocraft/picocraft.ino#L373), to illustrate the basic idea.
```c
// The header adds 11 bytes onto our payload
int payLoadWithHeader = payLoadSize + 11;
WriteByte((payLoadWithHeader >> 24) & 0xFF);
WriteByte((payLoadWithHeader >> 16) & 0xFF);
WriteByte((payLoadWithHeader >> 8) & 0xFF);
WriteByte(payLoadWithHeader & 0xFF);
// DEFLATE Compression format
// 32K Window size (this doesn't matter,
// since we aren't compressing)
WriteByte(0x78)
// Flags = "Fastest" algorithm
WriteByte(0x01)
// Final Block flag (Bit-1) + Type (Bit-2 and 3)
// Type 0 is an uncompressed block
// This should be 0x00 if you're sending more data
WriteByte(0x01);
// Length of our data, little endian
WriteByte(payloadSize & 0xFF);
WriteByte((payloadSize >> 8) & 0xFF);
// One's Complement of our datas length, little endian
WriteByte((~payloadSize) & 0xFF);
WriteByte((~payloadSize >> 8) & 0xFF);
for (int i = 0; i < payLoadSize; i++) {
    WriteByte(payload[i]);
}
// A 32-Bit Adler Checksum is calculated and appended
int adlerChecksum = adler32(payload, payloadSize);
WriteByte((adlerChecksum >> 24) & 0xFF);
WriteByte((adlerChecksum >> 16) & 0xFF);
WriteByte((adlerChecksum >> 8) & 0xFF);
WriteByte(adlerChecksum & 0xFF);
```

The final layout looks as follows.

![Uncompressed Zlib Block](uncompressedZlib.svg)

## Adler32 Checksum
This is the checksum that goes at the end of a zlib header. This is based on the sample code from the [RFC page for the Zlib specification](https://www.rfc-editor.org/rfc/rfc1950#section-9), where you can find some more info on how and why it works.
```c
unsigned int adler32(uint8_t* payload, int32_t payloadSize) {
    unsigned int A = 1;
    unsigned int B = 0;
    for (unsigned int i = 0; i < payloadSize; i++) {
        A += payload[i];
        A = A % 65521;
        B += A;
        B = B % 65521;
    }
    return (B << 16) | A;
}
```
A more efficient implementation can be seen in the `zlib` source code or `js-adler32`. Check [Wikipedia](https://en.wikipedia.org/wiki/Adler-32#Example_implementation) for more info!

# Further Reading
- [deflate (Wikipedia)](https://en.wikipedia.org/wiki/Deflate)
- [DEFLATE Compressed Data Format Specification version 1.3 (RFC)](https://www.rfc-editor.org/rfc/rfc1951)
- [gzip (Wikipedia)](https://en.wikipedia.org/wiki/Gzip)
- [GZIP file format specification version 4.3 (RFC)](https://www.rfc-editor.org/rfc/rfc1952)
- [zlib (Wikipedia)](https://en.wikipedia.org/wiki/Gzip)
- [ZLIB Compressed Data Format Specification version 3.3 (RFC)](https://www.rfc-editor.org/rfc/rfc1950)
- [Adler-32 (Wikipedia)](https://en.wikipedia.org/wiki/Adler-32)
