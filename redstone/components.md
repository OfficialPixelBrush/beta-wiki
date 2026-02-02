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

{: .missing }
> TODO

## Redstone Repeater

### Metadata values
A repeater uses it's 4-Bit values for 2 things, the lower 2-bits determine the orientation,
while the upper 2-bits determine the delay of the repeater.

| Value | Delay (ticks) | Metadata value |
| --- | --- | --- |
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