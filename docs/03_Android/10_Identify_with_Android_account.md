TestFairy allows the developer to correlate sessions with specific users.

Since Android has built-in user accounts, it might be useful for some developers to push the Android account ID into the TestFairy API.

The following example shows how to find the first account, validate it as an email address and push it into TestFairy as a UserID.

```java
Account[] accounts = AccountManager.get(MainActivity.this).getAccounts();
for (Account account : accounts) {
	if (Patterns.EMAIL_ADDRESS.matcher(account.name).matches()) {
		TestFairy.setUserId(account.name);
		break;
	}
}
```

Remember that you are required to add the `GET_ACCOUNTS` permission to your *AndroidManifest.xml* file:
```xml
<uses-permission android:name="android.permission.GET_ACCOUNTS" />
```

### Related Articles
[Identifying users on iOS](https://docs.testfairy.com/iOS_SDK/Identifying_Your_Users.html)
[Identifying users on Android](https://docs.testfairy.com/Android/Identifying_your_users.html)
