---
title: "0x0A: Player On Ground"
nav_order: 11
layout: home
parent: Packets
---

# Player On Ground

| Packet ID | Direction   |
| --------- | ----------- |
| `0x0A`    | Both |

This packet is sent to the server to determine if the player is on the ground or airborne.

{: .warning }
> This value is unreliable for fall damage and cheat detection as it can be spoofed by the client.

## Clientbound

| Field     | Type | Description                                        |
| --------- | ---- | -------------------------------------------------- |
| On Ground | Boolean | `false` for walking/swimming, `true` for jumping/falling |

{: .missing }
> It's currently untested what the client does when it receives an `OnGround` packet. Most likely it just resets its vertical velocity.

## Serverbound

| Field     | Type | Description                                        |
| --------- | ---- | -------------------------------------------------- |
| On Ground | Boolean | `false` for walking/swimming, `true` for jumping/falling |

## Example Packet

| Field | Value | 
| --- | --- |
| On Ground | `true` |