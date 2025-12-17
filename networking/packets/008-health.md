---
title: "0x08: Set Health"
nav_order: 9
layout: home
parent: Packets
---

# Set Health

| Packet ID | Direction   |
| --------- | ----------- |
| `0x08`    | Clientbound |

This is sent to the player to increase/decrease their health.

## Clientbound

| Field  | Type  | Description                                      |
| ------ | ----- | ------------------------------------------------ |
| Health | Short | `20` for full health and `0` to kill the player |

## Example Packet

| Field | Value | 
| --- | --- |
| Health | `20` |
