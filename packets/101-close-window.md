# Close Window
| Packet ID | Direction |
| --- | --- |
| `0x65` | Both |

This packet is sent by the client when closing an inventory window, and by the server when an inventory is forcibly closed, such as a chest being destroyed.

## Both
| Field | Type | Description |
| --- | --- | --- |
| Window ID | Integer | The incremental ID of the window. Ranges from 0 to 99. |

<details>
    <summary>Example Packet</summary>

| Field | Value | 
| --- | --- |
| Window ID | 49 |
</details>