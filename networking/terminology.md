---
title: Terminology
layout: home
nav_order: 2
parent: Networking
---

# Terminology
{: .no_toc }
This page will explain terminology used throughout this entire section of the wiki, mainly to make describing certain concepts as easy and unambiguous as possible.

1. TOC
{:toc}

{: .note }
> A lot of this terminology is unique to this wiki. You likely won't see them used in many other places, except projects that utilized this wiki.

## Clarifications

| Term | Meaning |
| :--- | :--- |
| (`S->C`) Clientbound | Sent from the Server to the Client |
| (`C->S`) Serverbound | Sent from the Client to the Server |
| Server | The piece of software that is responsible for communicating with and handling clients. Its job is to ensure serverbound data is legal and to simulate the world around the connected players |
| Client | The piece of software run by the user that is responsible for communicating with the server, handling packets, displaying the world to the user and forwarding user input to the server |
| Player | The entity that acts on the inputs of the user |
| Entity | A pickup, mob, painting or clientbound player |

# Spaces
Spaces describe where and how coordinates are expressed within the world.

## Block space
Limited to signed 32-Bit Integers (`-2,147,483,648` to `2,147,483,647`) along the horizontal axes and a signed 8-Bit Integer (limited, `0` to `127`) along the vertical axis. This space defines the grid that the blocks of Minecraft adhere to.

## Player space
Limited to signed 64-Bit doubles (`1.7E +/- 308`). This space defines the positions of players on the server-side and is what causes the jerky movement as one approaches the edge of the world due to a loss of floating-point precision.

## Entity space
Limited to signed 28.4 fixed-point* numbers (`-67,108,864.0` to `67,108,863.9688`) along all axes. This space defines the positions of all entities in the world. The 4 lowest bits are used for in-block precision, meaning that within each block an entity has a decimal precision of 1/32nd of a Block (0.03125 Blocks).

<sup>*Sent as a signed 32-Bit Integer</sup>

Additionally, rotation data is often quantized to only a single 8-Bit Byte, following this formulata.
```python
byte(( value / 360.0 ) * 255.0)
```
This can be reversed too.
```python
(( float(value) / 255.0 ) * 360.0)
```

| Quantized Angles |
| : --- : |
| ![](quantizedAngles.svg) |