---
title: "0x02: Pre-Login"
description: Initializes the login process
order: 3
---

# Pre-Login

| Packet ID | Direction | Mojang Name      | MCP Name           |
| --------- | --------- | ---------------- | ------------------ |
| `0x02`    | Both      | `PreLoginPacket` | `Packet2Handshake` |

This is the first packet that is sent after the connection to the server is made.

## Clientbound

| Field     | Type     | Description                                        |
| --------- | -------- | -------------------------------------------------- |
| Server Id | String16 | A unique per-connection 64-bit hex integer, or `-` |

The vanilla server will set the hash to `-` if online mode is disabled, which will prevent the client from doing name authentication.

## Serverbound

| Field    | Type     | Description                     |
| -------- | -------- | ------------------------------- |
| Username | String16 | The name of the connecting user |

> [!NOTE]
> The username sent here is not used by the Notchian Server whatsoever, as in, it doesn't get checked for special characters or used for authentication later during the login packet. It sometimes gets hijacked by mods like OrnitheMC to tell the server which mods the client is using. As a result it's best to either ignore the username or to reject any Clients that send it with a proper disconnect message.

## Example Packets

### Clientbound

| Field     | Value              |
| --------- | ------------------ |
| Server Id | `2e66f1dc032ab5f0` |

### Serverbound

| Field    | Value   |
| -------- | ------- |
| Username | `Notch` |
