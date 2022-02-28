
Auto-update allows developers to push new app versions automatically, to make sure that all users are on the latest version of an app. When a new version is set to auto-update, all users with older versions will see a notification next time they use the app, prompting them to update.

**Note:** Auto-update cannot be used in production.

## Configuring Auto-Update
In order for auto-update to work, your app must include the TestFairy SDK (see [Adding The TestFairy SDK To Your App](https://docs.testfairy.com/SDK/Adding_The_Testfairy_SDK_To_Your_App.html)).

There are three ways of configure auto-update for a specific build:
* On upload
* In build settings
* Via Upload API

### On Upload

When uploading a new app or version, select the **Auto-Update** checkbox.

![TestFairy build settings ](/img/auto-update-img2.png)

### In Build Settings

After a build is uploaded, open the build settings and, under **App Distribution**, select the **Auto-Update** checkbox.

![TestFairy build settings ](/img/auto-update-img1.png)

### Via Upload API

When uploading a new build via the [upload api](https://docs.testfairy.com/API/Upload_API.html), set the `auto-update` parameter to `on` .

### Verifying Auto-Update Setting

To verify whether an app has auto-update enabled, open the app and look at the list of builds. The right column has an icon of a rounded arrow indicating this is the auto-update version.

![](/img/auto-update-dashboard-place.png)

### Using Auto-Update
When auto-update is enabled, all previous installations of an app will be upgraded to the selected version.

When your app is launched, the SDK will check if a new version is available and is marked for auto-update. If it is, the user will get a notification that a new version is ready and prompt them to update.

![auto update message](/img/app_distribution/auto-update-msg.png)

If the user agrees, the new version will download and install. If the user declines, the old version of the app will load. The user will be notified again the next time they launch the app.

### Reasons Auto-Update May Fail

Auto-update may fail for the following reasons:
* The version number and name of the new build are the same as the old one. Auto-update will only work when versions are different.
* The TestFairy SDK isn't integrated into both versions.
* (Android) The sign certificates for each version are different. If an app is not signed with the same certificate, TestFairy cant perform the auto-update.
* (iOS) The app wasn't signed with an ad-hoc or enterprise certificate.

### Forcing Auto-Update

Occasionally you will want all testers of an app to only test the latest version released. In this case you can use the following method to make sure users and testers cannot run older versions of the app and must upgrade to the version marked for auto-update.

The classes used are:
* Android - [`sessionStateListener`](https://docs.testfairy.com/reference/android/com/testfairy/SessionStateListener.html#SessionStateListener--) → `onAutoUpdateDismissed`
* iOS - [`testFairySessionStateDelagate`](https://app.testfairy.com/reference/ios/Protocols/TestFairySessionStateDelegate.html) → `autoUpdateDismissed`

### Downgrading an App

Auto-update works only in cases where the version is unique and the new version was uploaded after the old version. The version number or code of the app is not important, only the upload date.

Say you want to downgrade from version 1.5 to 1.4:
* Re-upload version 1.4 using a new version name (for example, 1.41).
* Enable auto-update for the new version.

This will prompt the system to perform an auto-update of version 1.5 to version 1.41, in effect downgrading your app to version 1.4.
