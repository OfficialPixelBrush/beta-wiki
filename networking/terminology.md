---
title: Terminology
layout: home
nav_order: 1
parent: Networking
---

# Terminology
This page will explain terminology used throughout this entire section of the wiki, mainly to make describing certain concepts as easy and unambiguous as possible.

| Term | Meaning |
| :--- | :--- |
| Clientbound | Sent from the Server to the Client |
| Serverbound | Sent from the Client to the Server |
| Server | The piece of software that is responsible for communicating with and handling clients. Its job is to ensure serverbound data is legal and to simulate the world around the connected players |
| Client | The piece of software run by the user that is responsible for communicating with the server, handling packets, displaying the world to the user and forwarding user input to the server |
| Player | The entity that acts on the inputs of the user |
| Entity | A pickup, mob, painting or clientbound player |

# Spaces
Spaces describe where and how coordinates are expressed within the world.

## Block space
Limited to signed 32-Bit Integers (`-2,147,483,648` to `2,147,483,647`) along the horizontal axes and a signed 8-Bit Integer (limited, `0` to `127`) along the vertical axis. This space defines the grid that the blocks of Minecraft adhere to.

## Player space
Limited to signed 64-Bit doubles (1.7E +/- 308). This space defines the positions of players on the server-side and is what causes the jerky movement as one approaches the edge of the world due to a loss of floating-point precision.

## Entity space
Limited to signed 28.4 fixed-point* numbers (`-67,108,864` to `67,108,863.9688`) along all axes. This space defines the positions of all entities in the world. The 4 lowest bits are used for in-block precision, meaning that within each block an entity has a decimal precision of 1/32nd of a Block (0.03125 Blocks).

<sup>*Sent as a signed 32-Bit Integer</sup>