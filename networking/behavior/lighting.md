---
order: 20
description: The actions that describe how a client and server negotiate to connect.
---

# Lighting

Neither of the block update-related packets, [Set Block](../packets/053-set-block) or [Set Multiple Blocks](../packets/052-set-multiple-blocks), contain lighting information.
As such, lighting cannot be updated directly, and is instead calulated
on the client as blocks are placed or broken.

This is done for two reasons.
1. Sending multiple block updates just to update lighting data would be incredible wasteful from a bandwidth usage perspective
2. Since the client uses the exact same lighting engine, the resulting lighting should be the exact same

The only exception to the "no lighting data" rule is the [chunk](../packets/051-chunk) packet,
which comes with the full chunk data, including lighting.

## Further reading
- [Lighting (Rendering)](/rendering/lighting)