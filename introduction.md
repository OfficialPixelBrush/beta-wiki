---
description: This page serves as a small introduction to the Wiki. What, Why and How.
---

# Introduction

This page serves as a small introduction to the Wiki. What, Why and How.

## Why Beta 1.7.3?

[Beta 1.7.3](https://minecraft.wiki/w/Java_Edition_Beta_1.7.3) is one of the last versions that people consider to be part of Minecraft's "Golden Age", where times between updates were often just a few days or weeks, and the community and scope of the game were much smaller.

In addition to that, Beta 1.7.3 is much simpler to grasp and play around with than modern Minecraft. Everything is a lot more primitive and basic, so anyone can make their own implementation more easily.

## What is the Wiki for?

The Technical Beta Wiki serves as a specification and documentation of Minecraft, as it was in version [Beta 1.7.3](https://minecraft.wiki/w/Java_Edition_Beta_1.7.3), the last version before work on the [Adventure Update](https://minecraft.wiki/w/Adventure_Update) began.

It also aims to provide a helping hand for anyone who's interested in writing their own compatible client or server, similar to the projects seen on the [projects page](./projects).

## What is the Wiki not for?

The Technical Beta Wiki isn't trying to be a way for people to pirate Minecraft, even if it'd take an unreasonable amount of effort to write a full-on reimplementation with just the Wiki.

The Wiki also isn't trying to be an exact spec. Things like rendering and chunk management were implemented rather poorly in the original game, so perpetuating a poor implementation would be detrimental to all who'd read it.

OpenGL 1.1 is deprecated, so explaining exactly how certain things were done with it wouldn't make much sense. Not to mention that this'd make info on the Wiki useless to anyone who wants to use a different rendering backend, such as Vulkan.

Things like terrain generation, while technically sub-optimal, are kept as accurate as possible, since it's rather interesting to figure out how and why those landscapes of yesteryear came about through nothing but math.

## How should the Wiki be used?

However you like!

In the end, this whole page is just a spec for an ancient version of Minecraft. You're free to completely disregard what's written on any of the pages and just have fun with it!

Solve the problems your way! Write a custom world generator! Write a new network protocol that only your servers and clients understand! Have fun!

## What's the legal stance of all this?

It depends on who you ask. None of us are lawyers, but for all we know we're sitting in a legal gray area that Mojang or Microsoft haven't been bothered by enough just yet.

As long as nobody is trying to sell their Beta 1.7.3-compatible client, we're decently sure it'll be fine. Nowadays they seem rather open to their game being pried apart and poked at.

For more legal-related things, please check out the [Legal page](./legal).

## How can I help?

In any way you can! Found a neat behavior or mechanic that hasn't been documented yet? Feel free to do so! Check out the [contributing page](./CONTRIBUTING) for more info!

## Where do I start?

This is a very, **very** open-ended question. The wiki is mainly meant for technically minded folks, i.e. people who want to reverse engineer the game or write their own Clients/Servers.

Snoop around some pages and see if you find anything that looks interesting, then figure out if it's something you can poke at!

If you **need** an idea: Try to write your own server from scratch! Check out the [bare minimum that's needed for a client to log on](./networking/behavior/login-sequence#minimal-login).
