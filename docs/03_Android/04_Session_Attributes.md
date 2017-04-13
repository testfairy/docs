TestFairy can collect additional information in your session that can help you generate better insights. 

### Syntax

`TestFairy.setAttribute("<key>", "value")`;

The first value is a string `key` to help you search for the attribute in your session. The second paramter `value` is any string value for the attribute associated with the session. Neither value can be nil. These attributes are available later in the session recording page, is available via API, and is searchable.

### Example

```
TestFairy.setAttribute("name" "John Snow");
TestFairy.setAttribute("phone" "+672-14-5109");
TestFairy.setAttribute("age" "20");
TestFairy.setAttribute("favorite_color" "blue");
```

It will mark this session with the values above, so when you review the recording, you have more information about the person running the app.

### Notes

1. `setAttribute` may be called many times. 
2. You may call `setAttribute` before or after `begin`.
3. You can only store a maximum of 64 keys. The keys can be a maximum of 64 characters. The values can have a maximum of 1000 characters.
