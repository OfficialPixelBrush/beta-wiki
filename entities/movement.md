---
order: 15
description: Documents how entity movement and physics are implemented.
---

# Movement

This page documents how entity movement and physics are implemented.

> [!WARNING]
> This page is a work-in-progress and may not be fully accurate.

## Tick Logic

```java
// converts strafe/forward input into a velocity impulse along the entity's facing direction
void applyInput(float strafe, float forward, float acceleration) {
    float length = sqrt((strafe * strafe) + (forward * forward));

    if (length < 0.01) {
        return;
    }

    if (length < 1.0) {
        length = 1.0;
    }

    strafe /= length;
    forward /= length;

    velocity.x += (strafe * cos(yaw) - forward * sin(yaw)) * acceleration;
    velocity.z += (forward * cos(yaw) + strafe * sin(yaw)) * acceleration;
}

// moves the entity by the given vector, handling cobwebs, sneaking, block collisions, and fall state
void move(Vector3f movement) {
    ySize *= 0.4;

    if (inCobweb) {
        inCobweb = false;
        movement.x *= COBWEB_HORIZONTAL_DRAG;
        movement.y *= COBWEB_VERTICAL_DRAG;
        movement.z *= COBWEB_HORIZONTAL_DRAG;
        velocity = Vector3f.ZERO;
    }

    Vector3f original = movement.copy();

    if (onGround && sneaking) {
        movement = sneakClipMovement(movement);
    }

    movement = resolveCollisions(movement, original);
    updateFallState(movement.y);
}

// accumulates fall distance while airborne and deals damage on landing
void updateFallState(float movedY) {
    if (onGround) {
        if (fallDistance > FALL_DAMAGE_FLOOR) {
            dealDamage(ceil(fallDistance - FALL_DAMAGE_FLOOR));
        }

        fallDistance = 0;
    } else if (movedY < 0) {
        fallDistance -= movedY;
    }
}

// handles movement while submerged; drag differs between water and lava
void moveInFluid(float drag) {
    applyInput(moveStrafe, moveForward, FLUID_ACCELERATION);
    move(velocity);

    velocity *= drag;
    velocity.y -= FLUID_GRAVITY;

    // swim upward when pressing into a wall
    if (isCollidedHorizontally && isLiquidAt(velocity.x, velocity.y + 0.6, velocity.z)) {
        velocity.y = FLUID_WALL_BOOST;
    }
}

// main per-tick movement update: reads input, applies jumping, dispatches to the appropriate movement path
void tick() {
    // input axes are decayed every tick before new input is added
    moveForward *= INPUT_DECAY;
    moveStrafe *= INPUT_DECAY;

    // read raw keyboard state (player only; mobs set these in their AI code)
    moveForward += (forward ? 1 : 0) - (back ? 1 : 0);
    moveStrafe += (left ? 1 : 0) - (right ? 1 : 0);

    if (sneaking) {
        moveForward *= SNEAK_SPEED_MODIFIER;
        moveStrafe *= SNEAK_SPEED_MODIFIER;
    }

    if (jumping) {
        if (inWater || inLava) {
            velocity.y += FLUID_JUMP_BOOST;
        } else if (onGround) {
            velocity.y = JUMP_VELOCITY;
        }
    }

    if (inWater) {
        moveInFluid(WATER_DRAG);
    } else if (inLava) {
        moveInFluid(LAVA_DRAG);
    } else {
        // friction depends on the block underfoot; slippery blocks reduce both braking and acceleration
        float friction = onGround
            ? belowBlock.slipperiness * HORIZONTAL_FRICTION
            : HORIZONTAL_FRICTION;

        // acceleration is tuned so that on normal ground (slipperiness 0.6) it equals exactly 0.1
        float acceleration = onGround
            ? 0.1 * (NORMAL_FRICTION_CUBED / (friction * friction * friction))
            : AIR_ACCELERATION;

        applyInput(moveStrafe, moveForward, acceleration);

        if (onLadder) {
            velocity.x = clamp(velocity.x, -LADDER_MAX_HORIZONTAL, LADDER_MAX_HORIZONTAL);
            velocity.y = max(velocity.y, sneaking ? LADDER_SNEAK_DESCENT : -LADDER_MAX_DESCENT);
            velocity.z = clamp(velocity.z, -LADDER_MAX_HORIZONTAL, LADDER_MAX_HORIZONTAL);
            fallDistance = 0;
        }

        move(velocity);

        // climb upward when pressing into a ladder
        if (isCollidedHorizontally && onLadder) {
            velocity.y = LADDER_WALL_BOOST;
        }

        velocity.y -= GRAVITY;
        velocity.x *= friction;
        velocity.y *= VERTICAL_FRICTION;
        velocity.z *= friction;
    }
}
```

### Knockback

```java
// applies an impulse pushing the entity away from its attacker
void applyKnockback(Vector3f direction) {
    velocity *= KNOCKBACK_VELOCITY_DAMPENING;
    velocity.x -= direction.x * HORIZONTAL_KNOCKBACK;
    velocity.z -= direction.z * HORIZONTAL_KNOCKBACK;
    velocity.y = min(velocity.y + VERTICAL_KNOCKBACK, VERTICAL_KNOCKBACK);
}
```

---

## Constants

| Name                         | Value        | Description                                                                                                                                               |
| ---------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GRAVITY`                    | `0.08`       | Subtracted from `velocity.y` every tick after the move, before friction is applied                                                                        |
| `VERTICAL_FRICTION`          | `0.98`       | `velocity.y` is multiplied by this every tick after gravity, producing a terminal velocity (~3.92 blocks/tick downward)                                   |
| `HORIZONTAL_FRICTION`        | `0.91`       | Base horizontal drag; used directly in air and multiplied by block slipperiness on the ground                                                             |
| `JUMP_VELOCITY`              | `0.42`       | `velocity.y` set to this on jump (~1.25 block jump height)                                                                                                |
| `FLUID_JUMP_BOOST`           | `0.04`       | Added to `velocity.y` each tick the jump key is held while in a fluid, allowing the entity to swim upward                                                 |
| `FALL_DAMAGE_FLOOR`          | `3`          | Falls of this many blocks or fewer deal no damage; each block beyond this deals 1 point                                                                   |
| `STEP_HEIGHT`                | `0.5`        | Maximum height the entity can step up automatically without jumping                                                                                       |
| `DEFAULT_BLOCK_SLIPPERINESS` | `0.6`        | Slipperiness value assigned to most blocks; ice uses higher values, reducing friction and acceleration                                                    |
| `NORMAL_FRICTION_CUBED`      | `0.16277136` | `(DEFAULT_BLOCK_SLIPPERINESS * HORIZONTAL_FRICTION)^3`; used as a normalization constant so ground acceleration equals exactly `0.1` on normal blocks     |
| `AIR_ACCELERATION`           | `0.02`       | Input acceleration while airborne; much lower than on the ground, giving the entity limited air control                                                   |
| `INPUT_DECAY`                | `0.98`       | `moveForward` and `moveStrafe` are multiplied by this every tick before new input is added; distinct from friction, which acts on velocity after the move |
| `SNEAK_SPEED_MODIFIER`       | `0.3`        | `moveForward` and `moveStrafe` are multiplied by this while sneaking, reducing ground speed                                                               |

### Fluids

| Name                 | Value  | Description                                                        |
| -------------------- | ------ | ------------------------------------------------------------------ |
| `WATER_DRAG`         | `0.8`  | Per-tick velocity multiplier in water                              |
| `LAVA_DRAG`          | `0.5`  | Per-tick velocity multiplier in lava                               |
| `FLUID_GRAVITY`      | `0.02` | Gravity applied per tick while submerged (replaces `GRAVITY`)      |
| `FLUID_ACCELERATION` | `0.02` | Input acceleration while in water or lava                          |
| `FLUID_WALL_BOOST`   | `0.3`  | `velocity.y` set to this when pressing into a wall while submerged |

### Ladders

| Name                    | Value  | Description                                               |
| ----------------------- | ------ | --------------------------------------------------------- |
| `LADDER_MAX_HORIZONTAL` | `0.15` | `velocity.x`/`velocity.z` clamped to ± this on a ladder   |
| `LADDER_MAX_DESCENT`    | `0.15` | Maximum downward speed on a ladder                        |
| `LADDER_SNEAK_DESCENT`  | `0.0`  | Downward speed locked to this while sneaking on a ladder  |
| `LADDER_WALL_BOOST`     | `0.2`  | `velocity.y` set to this when pressing into a ladder wall |

### Cobwebs

| Name                     | Value  | Description                                           |
| ------------------------ | ------ | ----------------------------------------------------- |
| `COBWEB_HORIZONTAL_DRAG` | `0.25` | Horizontal movement is multiplied by this in a cobweb |
| `COBWEB_VERTICAL_DRAG`   | `0.05` | Vertical movement is multiplied by this in a cobweb   |

### Knockback

| Name                           | Value | Description                                                        |
| ------------------------------ | ----- | ------------------------------------------------------------------ |
| `KNOCKBACK_VELOCITY_DAMPENING` | `0.5` | All velocity is halved before the knockback impulse is applied     |
| `HORIZONTAL_KNOCKBACK`         | `0.4` | Horizontal knockback impulse magnitude                             |
| `VERTICAL_KNOCKBACK`           | `0.4` | Added to `velocity.y` on knockback; result is capped at this value |
