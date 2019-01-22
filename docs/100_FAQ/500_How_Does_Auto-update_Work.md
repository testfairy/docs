## How does auto-update work?
TestFairy Auto-Update allows developers to push new app versions automatically, in order to make sure that all users use the latest version of their app. When a new version is set to auto-update, all users using older versions will see a notification next time they use the app, suggesting to update.

### How to configure auto-update in dashboard?
In order for the auto-update to work, Your app must include the [TestFairy SDK](https://docs.testfairy.com/SDK/Adding_The_SDK_To_Your_App.html) in your application.

There are 3 ways of configure auto-update for a specific build:

#### Option 1. Upload 

![TestFairy build settings ](/img/auto-update-img2.png)

#### Option 2. Build Settings

When you upload a new build via our online upload button ( ![](/img/new-upload-icon.png) ):

![TestFairy build settings ](/img/auto-update-img1.png)

### How to configure auto-update in API?

When you upload a new build via our [upload api](https://docs.testfairy.com/API/Upload_API.html):

   When you load via API set the `auto-update` parameter to `yes` when loading the build.




**Please note:** Auto-Update will upgrade all the previous installations of this app to the current version. 
When your app starts, the SDK will check if a new version is available and is marked for auto update.
If so, the user will see a message telling him that a new version is ready and if asking him if he wants to updated.
If the user agrees, the new version will download and install on his device. 
