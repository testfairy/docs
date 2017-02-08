
TestFairy allows the developer to correlate sessions to app specific information such as users, server-sessions or events.   
This is useful in cases where sessions are anonymous and or when sessions are related to server activities that are critical to understanding test behaviour.

Furthermore, TestFairy allows identifying the user with traits such as name, email, phone number or custom fields. These will later be available for the developer to search upon, or review when looking at a specific session recording.

### Usage

*First, please make sure you have integrated the [TestFairy SDK](Integrating_Android_SDK.html)*

Identifying a session meaning sending a correlation-id, and optionally, a map of key-value properites. Note: `correlation-id` parameter may be an empty string.

`TestFairy.identify(String correlationId);`

`TestFairy.identify(String correlationId, Map<String, Object> traits);`

A few pre-defined traits are provided, these include:

- *IDENTITY_TRAIT_NAME*
- *IDENTITY_TRAIT_EMAIL_ADDRESS*
- *IDENTITY_TRAIT_PHONE_NUMBER*

For the full traits list, please review the [class reference](https://app.testfairy.com/reference/android/com/testfairy/TestFairy.html) document.

## Example 1: Identify by Correlation ID and email address
```
  Map<String, Object> traits = new HashMap<String, Object>();
  traits.put(TestFairy.IDENTITY_TRAIT_EMAIL_ADDRESS, "john@example.com");
  TestFairy.identify("25F127E0-0894-3604-A557-7FAAE481898F", traits);
```

## Example 2: Identify only by email address

```
  Map<String, Object> traits = new HashMap<String, Object>();
  traits.put(TestFairy.IDENTITY_TRAIT_EMAIL_ADDRESS, "john@example.com");
  TestFairy.identify("", traits);
```

## Example 3: Identify by nultiple custom traits

```
  Map<String, Object> traits = new HashMap<String, Object>();
  
  traits.put(TestFairy.IDENTITY_TRAIT_NAME, "Johnny Bonny");
  traits.put(TestFairy.IDENTITY_TRAIT_EMAIL_ADDRESS, "john@example.com");
  traits.put(TestFairy.IDENTITY_TRAIT_PHONE_NUMBER, "+1-850-245-5655");
  traits.put("custom.is_using_advanced_mode", "true");
  traits.put("custom.total_game_play_hours", 314);
  traits.put("custom.amount_spent_in_game", 864.30);
  TestFairy.identify("", traits);
```

### Code snippet: Grabbing the user's email address

The following code snippet will match the first valid email account and send that out as a identity trait:

```
Map<String, Object> traits = new HashMap<String, Object>();
Account[] accounts = AccountManager.get(MainActivity.this).getAccounts();
for (Account account : accounts) {
	if (Patterns.EMAIL_ADDRESS.matcher(account.name).matches()) {
		traits.put(TestFairy.IDENTITY_TRAIT_EMAIL_ADDRESS, account.name);
		break;
	}
}

TestFairy.identify("my-correlation", traits);
```

Remember that you are required to add the `GET_ACCOUNTS` permission to your *AndroidManifest.xml* file:
```
<uses-permission android:name="android.permission.GET_ACCOUNTS" />
```
