---
title: Authentication
layout: home
nav_order: 10
parent: Networking
---

# Authentication
{: .no_toc }
Authentication is used to ensure a client is who they claim to be. This process is done via the [Handshake Packet](./packets/002-handshake.md).

1. TOC
{:toc}

## Offline mode
Offline mode is super simple, since it completely circumvents the authentication system. Instead of a hash, the server just sends a `-` which the client receives and then just continues logging in with.

## Online mode
Online mode depends on the Minecraft website backend, which shut down long ago. For accuracy and historical preservation reasons we'll talk about how the system worked. After that, we'll go over the relevant sections with how they can be made to work nowadays, with services like the Betacraft Proxy.

### Acquire Client Session Id
This is a parameter that's passed in by the launcher.

{: .missing }
> TODO

### Generate Server Hash
First, the server generates a server id. For this it uses a random object to generate a `long`, then it turns this into a hex string. This is passed onto the client.

### Client Attempts Login
On the client side, with the server-generated hash, a URL is constructed.

```
http://www.minecraft.net/game/joinserver.jsp?user=USERNAME&sessionId=SESSION_ID&serverId=SERVER_ID
```

The name of the player, the current session id and the generated server id/hash are passed in.

If this endpoint returns `ok`, the client resumes the login sequence. Otherwise, `disconnect.loginFailedInfo` is emitted and the client disconnects.

### Server Double-checks Login
The server does something similar as the client, double-checking if the username is actually valid.

```
http://www.minecraft.net/game/checkserver.jsp?user=USERNAME&serverId=SERVER_ID
```

If this endpoint returns `YES`, the server finishes up the login sequence. Otherwise, the client is kicked with the message `Failed to verify username!`.

### Betacraft Proxy

{: .missing }
> TODO