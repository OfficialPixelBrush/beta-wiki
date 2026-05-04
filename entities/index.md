---
order: 35
---

# Entities

Entities are non-block creatures that don't align to the block grid.

## Base Entity

All entities have the following properties, though usually more. These are just the most important ones. In brackets you can find their respective default values.

| Field     | Type    | Description                                                        |
| --------- | ------- | ------------------------------------------------------------------ |
| Entity ID | Integer | The ID of the entity (`0`)                                         |
| X         | Double  | The X position of the entity                                       |
| Y         | Double  | The Y position of the entity                                       |
| Y-Offset  | Float   | The eye height of the entity (`0.0`)                               |
| Z         | Double  | The Z position of the entity                                       |
| Yaw       | Float   | Absolute rotation on the X Axis, in degrees                        |
| Pitch     | Float   | Absolute rotation on the Y Axis, in degrees                        |
| On Ground | Boolean | `false` for walking/swimming, `true` for jumping/falling (`false`) |
| Width     | Float   | The width of the entities bounding box (`0.6`)                     |
| Height    | Float   | The height of the entities bounding box (`1.8`)                    |
| Air       | Integer | The amount of air the entity has (`300`)                           |
| Max Air   | Integer | The maximum amount of air the entity can have (`300`)              |
| Fire      | Integer | How many ticks the entity will continue to burn (`0`)              |

> [!NOTE]
> Some entries are left out for the sake of brevity, such as the previous position and rotation values or their chunk coordinates.

### Position

The `(X,Y,Z)` coordinate defines where its lowest, center-most point is. For the player, this is on the ground between their feet.

### Y-Offset/Stance

The Y-Offset, also called "stance" on wiki.vg, defines the eye-height of the entity. It is relative to the Y-Position.

| Entity  | Y-Offset |
| ------- | -------- |
| Default | `0.0`    |
| Player  | `1.62`   |

### Width and Height

The width and height define the size of the bounding box that Minecraft uses for its collision.

| Entity  | Width | Height |
| ------- | ----- | ------ |
| Default | `0.6` | `1.8`  |

::: tip MISSING
TODO: Other bounding box sizes
:::

## Living Entities

Living entities are a subset of entities that have more properties.

| Field      | Type                        | Description                              |
| ---------- | --------------------------- | ---------------------------------------- |
| Health     | Integer                     | The health of the entity (`10`)          |
| Move Speed | Float                       | The movement speed of the entity (`0.7`) |
| Age        | The age of the entity (`0`) |

> [!NOTE]
> Most mobs overwrite the health value to be `20`

### Health

| Entity  | Health |
| ------- | ------ |
| Default | `10`   |
| Player  | `20`   |
| Mobs    | `20`   |
| Wolf    | `8`    |

### Move Speed

| Entity        | Move Speed |
| ------------- | ---------- |
| Default       | `0.7`      |
| Player        | `0.6`      |
| Spider        | `0.8`      |
| Wolf          | `1.1`      |
| Zombie        | `0.5`      |
| Zombie Pigman | `0.5`      |

::: tip MISSING
TODO: attackStrength of most mobs is still missing
:::
