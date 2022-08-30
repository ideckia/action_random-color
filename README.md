# Action for ideckia: Random color

## Definition

Generate random color

## Properties

| Name | Type | Default | Description | Possible values |
| ----- |----- | ----- | ----- | ----- |
| set_text | Bool | true | Sets the text of the item with the HEX color | null |

## Example in layout file

```json
{
    "state": {
        "text": "action_random-color",
        "bgColor": "00ff00",
        "actions": [{
            "name": "random-color",
            "props": {
                "set_text": false
            }
        }]
    }
}
```