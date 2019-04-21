## How does auto-update work?
TestFairy Auto-Update allows developers to push new app versions automatically, in order to make sure that all users use the latest version of their app. When a new version is set to auto-update, all users using older versions will see a notification next time they use the app, suggesting to update.

### How to configure auto-update in the dashboard?
In order for the auto-update to work, Your app must include the [TestFairy SDK](https://docs.testfairy.com/SDK/Adding_The_SDK_To_Your_App.html) in your application.

There are 3 ways of configure auto-update for a specific build:

#### Option 1. Upload 

When uploading an app, check the auto-update checkbox.

![TestFairy build settings ](/img/auto-update-img2.png)

#### Option 2. Build Settings

After build is uploaded, open build settings, and under App Distribution, check the auto-update checkbox.

![TestFairy build settings ](/img/auto-update-img1.png)

### How to configure auto-update in the API?

When uploading a new build via our [upload api](https://docs.testfairy.com/API/Upload_API.html) set the `auto-update` parameter to `on` .

### How to Verify which app is set to auto-update ?

Open your app and look at the list of builds. The right column has an icon for the auto-update version.

![](/img/auto-update-dashboard-place.png)


### What will be the user experience on auto-update

Auto-Update will upgrade all the previous installations of this app to the current version. 
When your app starts, the SDK will check if a new version is available and is marked for auto update.
If so, the user will see a message telling him that a new version is ready and if asking him if he wants to update.
If the user agrees, the new version will download and install on his device. 

### In what cases auto update may not work?

Here are some reasons when auto-update of an app will not work:
* The version of the new build is the same as the old one. Auto-update will only work when versions are different.
* Both versions must have the TestFairy SDK integrated into them.
* (in Android) The certificates of each version must be the same.


### How to force auto update?

Sometimes you will want to make sure all testers of an app are only testing on the latest version released. In this case you can use the following method to make sure users and testers cant run older versions of the app and must upgrade to the version marked as auto-update.

The classes used are named [`sessionStateListener`](https://docs.testfairy.com/reference/android/com/testfairy/SessionStateListener.html#SessionStateListener--) → `onAutoUpdateDismissed` in **Android** and [`testFairySessionStaeteDelagate`](https://app.testfairy.com/reference/ios/Protocols/TestFairySessionStateDelegate.html) → `autoUpdateDismissed` in **iOS**.
These methods get the result of the pop up message displayed to the user asking to update. You can then write code to perform the action of your choice.


#### Code examples

Below  are 2 code examples:

[iOS](https://gist.github.com/vijaysharm/a220a3474622176b06a88f65fbb4d34f)

```
/*
This example shows how to use getDistributionStatus method in the TestFairy SDK.
 getDistributionStatus queries the server about the app version currently running on device, and checks
 to see if "Distribution" is set to "Enabled" in Build Settings page.
 The example below will close the app if the distribution was disabled. If there is a newer version of
 this app uploaded to TestFairy, and it is set to "Distribution" => "Enabled", then the code will open a url to
 the new version, offloading to the operating system to install the app.
*/
```

```[TestFairy getDistributionStatus:appToken callback:^(NSDictionary<NSString *,NSString *> *response, NSError *error) {
 if (error != nil) {
   if ([@"enabled" isEqualToString:[response objectForKey:@"status"]]) {
     NSString *urlString = [response objectForKey:@"autoUpdateDownloadUrl"];
     NSURL *url = [NSURL URLWithString:urlString];
     if (url != nil) {
       [[UIApplication sharedApplication] openURL:url];
     }
   }
 }
}];
```

[Android](https://gist.github.com/gmegidish/a0268805dc9fd74759454e1013145a80)

```
/*
This example shows how to use getDistributionStatus() method in the TestFairy SDK.
getDistributionStatus queries the server about the app version currently running on device, and checks
to see if "Distribution" is set to "Enabled" in Build Settings page.
The example below will close the app if the distribution was disabled. If there is a newer version of
this app uploaded to TestFairy, and it is set to "Distribution" => "Enabled", then the code will open
a browser and start downloading the APK of the new version, before quitting the process.
*/

TestFairy.getDistributionStatus(this, APP_TOKEN, new DistributionStatusListener() {
	@Override
	public void onResponse(DistributionStatus status) {
	
		Log.v("Sample", "Got distribution status response:");
		Log.v("Sample", "   isEnabled: " + status.isEnabled());
		Log.v("Sample", "   isAutoUpdateAvailable: " + status.isAutoUpdateAvailable());
		Log.v("Sample", "   getAutoUpdateDownloadUrl: " + status.getAutoUpdateDownloadUrl());



		if (status.isAutoUpdateAvailable()) {
			// there is an auto update available, launch browser
			String url = status.getAutoUpdateDownloadUrl();
			Intent intent = new Intent(Intent.ACTION_VIEW);
			intent.setData(Uri.parse(url));
			startActivity(intent);
			// close this activity, and leave app
			finishAffinity();
		}
		// there is no auto-update available
		if (!status.isEnabled()) {
			// distribution is not allowed, and there's no auto update available either
			finishAffinity();
		}
	}
});
```

### How to downgrade you app?

Auto-update works only in cases where version **is unique** and the new version was uploaded to TestFairy **after** the old version. The version number or code of the app is not important, only the __upload date__.

Therefore, in order to downgrade an app you will need to do the following work around process:
   (Assuming you want to downgrade from version 1.5 to 1.4)

   * **Re-upload** version 1.4 to TestFairy using a new version name (1.41 for instance).
   * Mark it as an **auto-update** version.

This will cause the system to perform an auto-update of version 1.5 to version 1.41 thus in effect **downgrading** your app to version 1.4.


----------



