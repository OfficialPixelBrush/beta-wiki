---
title: Effects
layout: home
nav_order: 4
parent: Networking
---

# Effects
These are the sound/particle effects present in the vanilla client.

Some of these effects also have additional metadata available as an integer in the [Effect packet](packets/061-effect).

| Value | Purpose           | Metadata use              | Type             |
| :---- | :---------------- | :------------------------ | :--------------- |
| 1000  | Button Click      |                           | Sound            |
| 1001  | Button Click 2    |                           | Sound            |
| 1002  | Bow shot          |                           | Sound            |
| 1003  | Door open/close   |                           | Sound            |
| 1004  | Fire Extinguisted |                           | Sound            |
| 1005  | Music Disk        | 13 `2256`, cat `2257`   | Sound            |
| 2000  | Smoke             | Direction[\*]              | Particle         |
| 2001  | Block Break       | Block ID                  | Particle + Sound |

{: .missing }
> [\*]Smoke direction still needs to be figured out