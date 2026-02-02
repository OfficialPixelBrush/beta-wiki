---
title: Components
nav_order: 5
layout: home
parent: Redstone
---

# Components
{: .no_toc }
This page will document how individual redstone components operate,
a lot of these will have significant overlap.

1. TOC
{:toc}

## Redstone Dust

{: .missing }
> TODO

## Redstone Torch
Redstone Torches act as boolean NOT gates. They have a response delay of `2` gameticks.

### Placement
All surrounding blocks are ticked when a Redstone Torch is placed or removed, but only when it's active. An inactive torch does not update surrounding blocks.

### Metadata values
A torch uses it's 4-Bit values for it's orientation.

| Metadata value | Appearance |
| --- | --- |
| `0` | - |
| `1` | Attached to -X (Facing East) |
| `2` | Attached to +X (Facing West) |
| `3` | Attached to -Z (Facing South) |
| `4` | Attached to +Z (Facing North) |
| `5` | Attached to -Y (Facing Up) |
| `6-15` | - |

This, in turn, is used to determine where to check for a power source.

### Burnout
Redstone Torches keep an internal list of update times. After `100` gameticks, an update entry will expire. If more than `8` updates occur within those `100` gameticks, the torch burns out.

It turns itself on again after the number of queued updates drops below `8` again.

{: .missing }
> TODO

## Redstone Repeater
Redstone Repeaters act as Diodes. Additionally, they can be configured to delay a redstone signal by `2`, `4`, `6` or `8` gameticks.

### Metadata values
A repeater uses it's 4-Bit values for 2 things, the lower 2-bits determine the orientation,
while the upper 2-bits determine the delay of the repeater.

| Value | Delay (ticks) | Metadata value |
| :---: | :---: | :---: |
| `0` | `2` | `00xx` |
| `1` | `4` | `01xx` |
| `2` | `6` | `10xx` |
| `3` | `8` | `11xx` |

### Ticking
When the neighbor of a repeater updates, the following choice is made.

| Is Powered | Receiving Power |  |
| --- | --- | --- |
| ❌ | ❌ | - |
| ❌ | ✅ | Schedules block update in `delay` ticks |
| ✅ | ❌ | Schedules block update in `delay` ticks |
| ✅ | ✅ | - |

When the repeater is then ticked, it first checks if it's receiving power from either Redstone dust or any other powered block.
on its input side. From there it branches off into the following.

```cpp
// Power off behavior
if (isPowered && !isReceivingPower) {
    SetBlock(BLOCK_REPEATER_OFF);
    return;
}
// Power on behavior
if (!isPowered) {
    SetBlock(BLOCK_REPEATER_ON);
    if (!isReceivingPower)
        ScheduleUpdate(BLOCK_REPEATER_ON, delay);
}
```

## Piston

{: .missing }
> TODO

## Sticky Piston

{: .missing }
> TODO