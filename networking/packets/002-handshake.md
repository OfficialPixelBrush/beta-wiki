---
title: "0x02: Handshake"
nav_order: 3
layout: home
parent: Packets
---

# Handshake

| Packet ID | Direction |
| --------- | --------- |
| `0x02`    | Both      |

This is the first packet that is sent after the connection to the server is made.

## Clientbound

| Field           | Type     | Description                             |
| --------------- | -------- | --------------------------------------- |
| Connection Hash | String16 | A unique per-connection hash, or `"-"` |

The vanilla server will set the hash to `"-"` if online mode is disabled, which will prevent the client from doing name authentication.

## Serverbound

| Field    | Type     | Description                      |
| -------- | -------- | -------------------------------- |
| Username | String16 | The name of the connecting user  |

## Example Packets

### Clientbound

| Field | Value | 
| --- | --- |
| Connection Hash | "2e66f1dc032ab5f0" |

### Serverbound

| Field | Value | 
| --- | --- |
| Username | "Notch" |