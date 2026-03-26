---
order: 70
description: Weather is used to make the world of Minecraft feel more dynamic and realistic.
---

# Weather

Weather is used to make the world of Minecraft feel more dynamic and realistic.

## Rain

Thunder has a chance to start after `12000-180000` ticks, and end after `12000-24000` ticks. It's only toggled when the internal timers have reached zero.

## Thunder

Thunder has a chance to start after `12000-180000` ticks, and end after `3600-15600` ticks. It's only toggled when the internal timers have reached zero.

## Interpolation

Both rain and thunder are linearly interpolated when starting and stopping, with a rate of `0.01` per tick, meaning it takes `5` seconds for either rain or thunder to fully start up or end.

## Further reading

- [Game Event Packet](../networking/packets/070-game-event)
- [Lightning Bolt Packet](../networking/packets/071-lightning-bolt)
