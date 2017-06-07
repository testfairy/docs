
TestFairy allows the developer to correlate sessions to app specific information such as users, server-sessions or events.   
This is useful in cases where sessions are anonymous and or when sessions are related to server activities that are critical to understanding test behaviour.

Furthermore, TestFairy allows identifying the user with traits such as name, email or phone number. These will later be available for the developer to search upon, or review when looking at a specific session recording.

In order to set session level attributes associated with your user, please see the document on [Session Attributes](https://docs.testfairy.com/Android/Session_Attributes.html).

### Usage

*First, please make sure you have integrated the [TestFairy SDK](Integrating_Android_SDK.html)*

Identifying a session meaning setting a unique identifier for your user.

`TestFairy.setUserId("<userId>")`

Where `userId` is a string representing an association to your backend. We recommend passing values such as email, phone number, or user id that your app may use. This value may not be nil, and is searchable via API and web search.

### Example: identify user by email

```
TestFairy.setUserId("john@example.com");
```


### Notes

1. `setUserId:` may be called many times. 
2. You may call `setUserId` before or after `begin`.

### Related Articles
[How to automatically identify users with Android Accounts](https://docs.testfairy.com/Android/Identify_with_Android_account.html)
[Identifying users on iOS](https://docs.testfairy.com/iOS_SDK/Identifying_Your_Users.html)
[TestFairy class reference](https://app.testfairy.com/reference/android/com/testfairy/TestFairy.html)
