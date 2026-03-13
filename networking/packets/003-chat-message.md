---
title: 0x03: Chat Message
description: Represents a chat message being sent by a player or the server.
order: 4
---

# Chat Message

| Packet ID | Direction | Mojang Name  |
| --------- | --------- | ------------ |
| `0x03`    | Both      | `ChatPacket` |

The client will send this packet when the "enter" key is pressed after typing a chat message. The vanilla server will parse this chat message to see if it starts with the character `"/"`, at which point it will assume the chat message to be a command. Otherwise, it will send it to the other players in the server.

The server can also colorize chat messages by prepending the section sign and the color code to the message (e.g. `§cR§6a§ei§an§bb§9o§dw` -> <span style="color: rgb(255, 85, 85); --darkreader-inline-color: var(--darkreader-text-ff5555, #ff5555);" data-darkreader-inline-color="">R</span><span style="color: rgb(255, 170, 0); --darkreader-inline-color: var(--darkreader-text-ffaa00, #ffb31a);" data-darkreader-inline-color="">a</span><span style="color: rgb(255, 255, 85); --darkreader-inline-color: var(--darkreader-text-ffff55, #ffff55);" data-darkreader-inline-color="">i</span><span style="color: rgb(85, 255, 85); --darkreader-inline-color: var(--darkreader-text-55ff55, #55ff55);" data-darkreader-inline-color="">n</span><span style="color: rgb(85, 255, 255); --darkreader-inline-color: var(--darkreader-text-55ffff, #55ffff);" data-darkreader-inline-color="">b</span><span style="color: rgb(85, 85, 255); --darkreader-inline-color: var(--darkreader-text-5555ff, #5593ff);" data-darkreader-inline-color="">o</span><span style="color: rgb(255, 85, 255); --darkreader-inline-color: var(--darkreader-text-ff55ff, #ff55ff);" data-darkreader-inline-color="">w</span>). See [Plancke's website](https://plancke.io/tools/color/) for all the color codes. Text styles cannot be sent.

> [!WARNING]
> A client sending the vanilla server a chat message longer than 119 characters might cause the client to be kicked.

## Both

| Field   | Type     | Description            |
| ------- | -------- | ---------------------- |
| Message | String16 | The message being sent |

## Example Packet

| Field   | Value                  |
| ------- | ---------------------- |
| Message | `<Notch> Hello world!` |
