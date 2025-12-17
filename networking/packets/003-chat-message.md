---
title: "0x03: Chat Message"
nav_order: 4
layout: home
parent: Packets
---

# Chat Message

| Packet ID | Direction |
| --------- | --------- |
| `0x03`    | Both      |

The client will send this packet when the "enter" key is pressed after typing a chat message. The vanilla server will parse this chat message to see if it starts with the character `"/"`, at which point it will assume the chat message to be a command. Otherwise, it will send it to the other players in the server. The server can also colorize chat messages by prepending the section sign and the color code to the message (e.g. `§cR§6a§ei§an§bb§9o§dw`). See [Plancke's website](https://plancke.io/tools/color/) for all the color codes. Text styles cannot be sent.

{: .warning }
> A client sending the vanilla server a chat message longer than 119 characters might cause the client to be kicked.

## Both

| Field   | Type     | Description             |
| ------- | -------- | ----------------------- |
| Message | String16 | The message being sent |


## Example Packet

| Field | Value | 
| --- | --- |
| Message | "\<Notch\> Hello world!" |