---
description: This page is here to explain certain distance-related effects that occur as the player ventures further from spawn. Many of these have already been covered by the Minecraft Wiki in much greater detail, so this will serve as a Beta-focused backup for those that prefer a localized explanation.
---

# Distance effects

This page is here to explain certain distance-related effects that occur as the player ventures further from spawn. Many of these have already been covered by the Minecraft Wiki in much greater detail, so this will serve as a Beta-focused backup for those that prefer a localized explanation.

## Farlands

See the [quirks page section on the Farlands](./quirks#farlands).

## Movement stutter

As one goes farther from spawn, blocks seem to update their position less and less frequently.

Originally I suspected this was caused by the players position using a `double`, but it turns out that has more than enough precision.

The actual issue is entirely visual, and caused by an OpenGL `float` transform only having 32-bit precision, which shows visible precision issues much earlier than a `double` transform, which has 64-bit precision.

For more info, check out the [data types page](../technical/data-types#further-reading).
