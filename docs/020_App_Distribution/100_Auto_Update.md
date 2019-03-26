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

### How to downgrade?

Auto-update works only in cases where version is unique and the new version was uploaded *after* the old version. The version number is not important, only the upload date.
Therefore, in order to downgrade users from version 1.5 to 1.4, please re-upload version 1.4 with a new name (1.41?) and mark it as an auto-update version.

### What will be the user experience on auto-update

Auto-Update will upgrade all the previous installations of this app to the current version. 
When your app starts, the SDK will check if a new version is available and is marked for auto update.
If so, the user will see a message telling him that a new version is ready and if asking him if he wants to updated.
If the user agrees, the new version will download and install on his device. 

### In what cases auto update may not work?

Here are some reasons when auto-update of an app will not work:
* The version of the new build is the same as the old one. Auto-update will only work when versions are different.
* Both versions must have the TestFairy SDK integrated into them.
* (in Android) The certificates of each version must be the same.

----------
