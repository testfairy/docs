When seeing "User-1gf8d8ga" as the session User ID, it means that the user for this session was not identified.

In such cases, we generate a random username, in order to help you aggregate sessions by user.

In order to identify sessions and know which user used your app, please call the method `setUserId`. 

[See examples for using setUserId](https://docs.testfairy.com/SDK/Identifying_Your_Users.html)

__Before__ calling `setUserId` it looks like this:

![Before using setUserId](/img/faq-user-1-before.png)

In order to identify your sessions, simply call `setUserId`

__After__ calling `setUserId` it looks like that:

![After user setUserId](/img/faq-user-1-after.png)

For more information please read the SDK docs here: [Identifying Your Users](https://docs.testfairy.com/SDK/Identifying_Your_Users.html)

