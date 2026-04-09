---
order: 15
description: The behaviors observed when a player enters or moves with a Minecart.
---

# Minecarts and Rails

The behaviors observed when a player enters or moves with a Minecart.

::: tip MISSING
- All of the Minecart behavior from a secondary perspective
- Minecart pushing behavior
- Furnace & Chest Minecarts
- Powered & Activator Rails
:::

## A player places a Minecart

In this situation, the player is looking at a rail block.

| Direction | Packet | Data |
| --- | --- | --- |
| `C->S` | PlaceBlock (0x0F) | x=68; y=71; z=-12; Face=1; Item=`328`(<TextureSwatch texture_name="items/minecart" label="Minecart"/>); Amount=0; Damage=0;  |
| `C->S` | Animation (0x12) | EID=46 (Player); Animation=1 (Swing Arm);  |
| `S->C` | SpawnObject (0x17) | EID=100; Type=`10`(<TextureSwatch texture_name="items/minecart" label="Minecart"/>); x=2192; y=2299; z=-368; Owner EID=0;  |
| `S->C` | EntityVelocity (0x1C) | EID=100; x Velocity=0; y Velocity=0; z Velocity=0;  |

## A player enters a Minecart

| Direction | Packet | Data |
| --- | --- | --- |
| `C->S` | InteractWithEntity (0x07) | EID (Sender)=46 (Player); EID (Target)=100 (Minecart); Left-Click=0; |
| `C->S` | PlayerPositionAndRotation (0x0D) | x=0.0; y=-999.00; cameraY=-999.0; z=0.0; yaw=183.90; pitch=0.60; onGround=false; |
| `S->C` |  AddPassenger (0x27) | EID (passenger)=46 (Player); EID (vehicle)=100 (Minecart); |


## Player in a Minecart

As long as a player is inside of a Minecart, their vertical position and camera-Y/stance will be reported as `-999.00`.

| Direction | Packet | Data |
| --- | --- | --- |
| `C->S` | PlayerPositionAndRotation (0x0D) | x=-0.02; y=-999.00; cameraY=-999.00; z=0.01; Yaw=-298.61; Pitch=40.20; OnGround=0;  |
| `S->C` | EntityPositionAndRotation (0x21) | EID=46 (Player); x=-1.00; y=65.00; z=3.00 (Minecart position); Yaw=-298.61; Pitch=40.20; |

This applies to all packets that transmit the players position. Rotation is transmitted as normal. The client keeps sending the position and rotation packet until the Minecart is exited. To indicate to other players where the player in Minecart is looking, use the EntityPositionAndRotation packet, send only yaw and pitch and use the Minecart's x,y,z position instead of the player ones. Because EntityPositionAndRotation packet triggers a walking animation, it is recommended to only send it when yaw and pitch are different.

::: tip MISSING
Other clients presumably do not receive the superfluous position data,
as they *probably* update the position of passenger players automatically.
Please verify!
:::

## A player exits a Minecart

| Direction | Packet | Data |
| --- | --- | --- |
| `C->S` | InteractWithEntity (0x07) | EID (Sender)=46 (Player); EID (Target)=100 (Minecart); Left-Click=0;  |
| `S->C` | AddPassenger (0x27) | EID (passenger)=46 (Player); EID (vehicle)=-1;  |
