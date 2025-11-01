---
title: MathHelper
nav_order: 4
layout: home
parent: Technical
---

# MathHelper
{: .no_toc }
MathHelper is a small collection of functions that act as small wrappers or cheaper versions of more complex operations.

1. TOC
{:toc}

## Sin/Cos LUT
Sine and cosine are made faster by being read from a lookup table, which is computed on startup.
It has 2^16 entries.

```cpp
for (int i = 0; i < 65536; ++i)
    table[i] = std::sin(i * M_PI * 2.0f / 65536);
```

## Sine
Sine is gotten by indexing into the LUT.
```cpp
return SIN_TABLE[int(x * 10430.378f) & 0xFFFF]
```

## Cosine
Cosine is also gotten by indexing into the LUT, but shifted over
```cpp
return SIN_TABLE[int(x * 10430.378f + 16384.0f) & 0xFFFF]
```

## The multiplier
The multiplier comes from the formula `( 2^16) / (PI * 2)`(?).

{: .missing }
> TODO: Add other MathHelper entries!