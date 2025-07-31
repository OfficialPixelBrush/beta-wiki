---
title: "0x01: Login"
nav_order: 2
layout: home
parent: Packets
---

# Login

| Packet ID | Direction |
| --- | --- |
| `0x01` | Both |

This packet is sent after [Handshake](002-handshake.md) to finish logging in. The server is expected to kick the client if any fields are invalid or the client's protocol version does not match the server. The unused fields are also useful for negotiating mod support.

## Clientbound

| Field      | Type     | Description                             |
| ---------- | -------- | --------------------------------------- |
| Entity ID  | Integer  | The entity ID of the player.            |
| Unused     | String16 | This value is not sent by the server.   |
| World Seed | Long     | The random seed for terrain generation. |
| Dimension  | Byte     | The player's spawning dimension.        |

The player's dimension is specified as `0` for The Overworld and `-1` for The Nether.

## Serverbound

| Field            | Type     | Description                           |
| ---------------- | -------- | ------------------------------------- |
| Protocol Version | Integer  | The current protocol version is `14`. |
| Username         | String16 | The name of the connecting user.      |
| Unused           | Long     | This value is not sent by the client. |
| Unused           | Byte     | This value is not sent by the client. |

## Example Packets

### Clientbound

| Field | Value | 
| --- | --- |
| Entity ID | 1298 |
| Unused | "" |
| World Seed | 971768181197178410 |
| Dimension | 0 |

### Serverbound

| Field | Value | 
| --- | --- |
| Protocol Version | 14 |
| Username | "Notch" |
| Unused | 0 |
| Unused | 0 |