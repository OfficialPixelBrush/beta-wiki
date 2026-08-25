---
order: 15
---

# Networking

These pages will cover everything there is to explain about networking in the context of Beta Minecraft. It's recommended to look at the [data types](../technical/data-types) that Minecraft makes use of before proceeding, in addition to the [terminology page](/general/terminology).

## Terminology Clarifications

| Term                 | Meaning                                                                                                                                                                                      |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (`S->C`) Clientbound | Sent from the server to the client                                                                                                                                                           |
| (`C->S`) Serverbound | Sent from the client to the server                                                                                                                                                           |
| Server               | The piece of software that is responsible for communicating with and handling clients. Its job is to ensure serverbound data is legal and to simulate the world around the connected players |
| Client               | The piece of software run by the user that is responsible for communicating with the server, handling packets, displaying the world to the user and forwarding user input to the server      |
| Player               | The entity that acts on the inputs of the user                                                                                                                                               |
| Entity               | A pickup, mob, painting or clientbound player                                                                                                                                                |
