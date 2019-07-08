## How does auto-update work?
TestFairy Auto-Update allows developers to push new app versions automatically, in order to make sure that all users are on the latest version of their app. When a new version is set to auto-update, all users with older versions will see a notification next time they use the app, suggesting to update.

### How to configure auto-update in the dashboard?
In order for the auto-update to work, Your app must include the [TestFairy SDK](https://docs.testfairy.com/SDK/Adding_The_SDK_To_Your_App.html) in your application.

There are 3 ways of configure auto-update for a specific build:

#### Option 1. On Upload 

When uploading a new app or version, check the auto-update checkbox.

![TestFairy build settings ](/img/auto-update-img2.png)

#### Option 2. In Build Settings

After build is uploaded, open [build settings](https://docs.testfairy.com/Getting_Started/App_Build_Settings.html), and under **App Distribution**, check the Auto-Update checkbox.

![TestFairy build settings ](/img/auto-update-img1.png)

#### Option 3. Configure auto-update via upload API

When uploading a new build via our [upload api](https://docs.testfairy.com/API/Upload_API.html) set the `auto-update` parameter to `on` .

### How to Verify which app is set to auto-update ?

Open your app and look at the list of builds. The right column has an icon of a rownded arrow indicating this is the auto-update version.

![](/img/auto-update-dashboard-place.png)


### What will be the user experience on auto-update ?

- Auto-Update will upgrade all the previous installations of an app to the selected version. 
- When your app starts, the SDK will check if a new version is available and is marked for auto update.
- If so, the user will see a message telling him that a new version is ready and asking him to update:
![auto update message](/img/app_distribution/auto-update-msg.png)


- If the user agrees, the new version will download and install on his device. 
- If the user declines the old version of the app will load. The message will again display when the app is loaded again.

### Reasons that auto update may fail

Here are some reasons when auto-update of an app may fail:
* The version number and name of the new build are **the same** as the old one. Auto-update will only work when versions are **different**.
* The TestFairy SDK must be integrated into Both versions for auto-update to work.
* (in Android) The sign certificate of each version must be the same. If an app is not signed with the same certificate TestFairy cant perform the auto-update action.


### A method to force auto update

Occasionally you will want all testers of an app to only test the latest version released. In this case you can use the following method to make sure users and testers **can not** run older versions of the app and must upgrade to the version marked as auto-update.

The classes used are named [`sessionStateListener`](https://docs.testfairy.com/reference/android/com/testfairy/SessionStateListener.html#SessionStateListener--) → `onAutoUpdateDismissed` in **Android** and [`testFairySessionStateDelagate`](https://app.testfairy.com/reference/ios/Protocols/TestFairySessionStateDelegate.html) → `autoUpdateDismissed` in **iOS**.
These methods get the result of the pop up message displayed to the user asking to update. You can then write code to perform the action of your choice.


### How to downgrade you app?

Auto-update works only in cases where version **is unique** and the new version was uploaded to TestFairy **after** the old version. The version number or code of the app is not important, only the __upload date__.

Therefore, in order to downgrade an app you will need to do the following work around process:
   (Assuming you want to downgrade from version 1.5 to 1.4)

   * **Re-upload** version 1.4 to TestFairy using a new version name (1.41 for instance).
   * Mark it as an **auto-update** version.

This will cause the system to perform an auto-update of version 1.5 to version 1.41 thus in effect **downgrading** your app to version 1.4.


----------





