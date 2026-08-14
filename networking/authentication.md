---
order: 10
---

# Authentication

Authentication is used to ensure a client has a registered, paid account. This process is initiated via the [Pre-Login Packet](./packets/002-pre-login).

## Offline mode

Offline mode is super simple, since it completely circumvents the authentication system. Instead of a server Id, the server just sends a `-` which the client receives and then just continues logging in with.

## Online mode

Online mode depends on the Minecraft website backend, which shut down long ago. For accuracy and historical preservation reasons we'll talk about how the system worked. After that, we'll go over the relevant sections with how they can be made to work nowadays, with services like the Betacraft Proxy.

All requests here are just plain HTTP GET requests, since all necessary info is passed in via the URL Parameters.

### Acquire Client Session Id

The launcher needs to pass in two things the `username` (e.g. `Notch`) and the Session-Id, which is a long, arbitrary string that uniquely identifies the current session.

Historically it was accessed via the `login.jsp` endpoint.

```text
http://www.minecraft.net/game/login.jsp?user=USERNAME&password=PASSWORD
```

This will return a unique Session-Id.

### Generate Server Hash

First, the server generates a server ID. For this it uses a random object to generate a `long`, then it turns this into a hex string. This is passed onto the client via the [Pre-Login Packet](./packets/002-pre-login).

### Client Attempts Login

On the client side, after receiving the [Pre-Login Packet](./packets/002-pre-login) response from the Server, a URL is constructed with the name of the player, the clients session ID and the received server ID.

```text
http://www.minecraft.net/game/joinserver.jsp?user=USERNAME&sessionId=SESSION_ID&serverId=SERVER_ID
```

If this endpoint returns `ok`, the client resumes the login sequence. Otherwise, `disconnect.loginFailedInfo` is emitted and the client disconnects.

### Server Checks User Validity

The server now checks if the username is actually valid, and registered with the auth servers to join this Server.

```text
http://www.minecraft.net/game/checkserver.jsp?user=USERNAME&serverId=SERVER_ID
```

If this endpoint returns `YES`, the server finishes up the login sequence. Otherwise, the client is kicked with the message `Failed to verify username!`.

### Betacraft Proxy

The main reason the Proxy exists and needs to be used is because Minecrafts legacy Authentication Servers shut down long ago, and thus rendered any legacy launcher, client and server using online mode inoperable.

For that reason, the Betacraft Proxy needs to be used to redirect the traffic meant for `minecraft.net` to their reimplementation.

For versions between Alpha 1.2.0 and Beta 1.8.1, the following string needs to be added to your JVM settings.

```text
-Dhttp.proxyHost=betacraft.ee -Dhttp.proxyPort=11705 -Djava.util.Arrays.useLegacyMergeSort=true
```

These same values can be used in your code. Most HTTP request libraries offer fields for passing in Proxies. Below are some examples.

::: code-group

```python [Python]
import requests
proxies = {
  "http": "http://betacraft.ee:11705"
}
requests.get("http://www.minecraft.net/game/checkserver.jsp?user=foobar&serverId=2e66f1dc032ab5f0", proxies=proxies)
```

```cpp [C++]
// This assumes you've already go an instance of curl sitting around
// and are using it's easy functions
curl_easy_setopt(curl, CURLOPT_PROXY, "http://betacraft.ee");
curl_easy_setopt(curl, CURLOPT_PROXYPORT, 11705);
```

:::
