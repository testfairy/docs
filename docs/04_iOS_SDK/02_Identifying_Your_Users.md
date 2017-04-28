TestFairy can automatically detect sessions recorded by the same user, however, in many cases there is some additional information that would help you generate better insights. 

In order to set session level attributes associated with your user, please see the document on [Session Attributes](https://docs.testfairy.com/iOS_SDK/Session_Attributes.html).

### Syntax

`[TestFairy setUserId:@"<userId>"]`

Where `userId` is a string representing an association to your backend. We recommend passing values such as email, phone number, or user id that your app may use. This value may not be nil, and is searchable via API and web search.

### Example: Identify users by email address add Correlation Id

```
[TestFairy setUserId:@"john@example.com"]
```

It will mark this session with the values above, so when you review the recording, you have more information about the person running the app.

### Notes

1. `setUserId:` may be called many times. 
2. You may call `setUserId` before or after `begin`.

### Related Articles:

[Identifying users on Android](https://docs.testfairy.com/Android/Identifying_your_users.html)
