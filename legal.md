---
title: Legal Disclaimer
layout: home
nav_order: 65
last_modified_date: 17-02-2026
---

# Legal Disclaimer

{: .warning }
> No lawyer or other kind of legal professional has touched this page. Please take anything said on it with a huge grain of salt!

## Legality of the Project

The wiki, in its attempt to document Beta 1.7.3 as closely and accurately as possible, has made and will continue to make use of decompiled code, which is derivative of the original .jar binary file that Mojang provides.

Some pages still contain snippets of info or pseudocode that closely resemble the decompiled source code they're based on. These should be rewritten sooner or later to avoid any trouble for anyone who wants to make a fully FOSS reimplementation of the Beta 1.7.3 spec.

## What parts are safe?

Most parts of the wiki were written with no insight into the decompiled code, and are thus perfectly safe for any FOSS projects.

### Partially Safe
The following is a list of pages that were created while directly referencing the decompiled Beta 1.7.3 code but they do not show any decompiled or pseudocode that resembles the decomp. They may contain numbers or algorithms that were taken directly from the decomp.

- [Entities/Pathfinding](./entities/pathfinding)
- [Redstone](./redstone/components)
- [Worlds/Population](./worlds/population)
- [Worlds/Map Item](./worlds/mapItem)

### Potentially Unsafe
The following is a list of pages that were created while directly referencing the decompiled Beta 1.7.3 code, and thus may cause issues if any code on them is directly referenced and implemented as it currently directly showcases parts that're based on decompiled code.

- [Worlds/Biomes](./worlds/biomes)
- [Worlds/Generation](./worlds/generation)

All other pages were either based on already public knowledge, i.e. things that were documented on the Minecraft Wiki or the wiki.vg Archive, done through Black box reverse engineering or simply explaining it in a way that seems obvious.