You can upload an app to TestFairy in two ways:
* Via the TestFairy UI (see below)
* Via the TestFairy API (see [Upload API](https://docs.testfairy.com/API/Upload_API.html))

## Supported Platforms
TestFairy supports uploading and distributing the following types of applications:
  * Android: To distribute Android apps with TestFairy, apps must be packaged as an `.apk` file.
  * iOS: iOS apps can be signed with __AdHoc__, __Development__, or __Enterprise__ certificates. To distribute iOS apps with TestFairy, apps must be packaged as an `.ipa` file.
  * MacOS: iOS apps can be signed with __AdHoc__, __Development__, or __Enterprise__ certificates. MacOS apps are bundled as `.app` files, however, To distribute MacOS apps with TestFairy, the `.app` files must be packaged as a `.zip` file.

## Uploading via the TestFairy UI
1. In TestFairy, in the top navigation, click **NEW UPLOAD**.

![NEW UPLOAD](/img/getting-started/upload/new-upload-nav.png)

1. In the **Upload New File** window, navigate to and select the file to upload.

![Select file to upload](/img/getting-started/upload/upload-select-file.png)

1. Click **Start Upload**.

![Start Upload](/img/getting-started/upload/upload-start-upload.png)

1. When the app has uploaded successfully, you can enable or disable certain settings before completing the upload process:
  * In-app feedback - Enables/disables the "shake to report" feature in your app. When enabled, users can shake their device to send a feedback report, along with a video recording, screenshots, logs, and metrics of the testing session.
  * Auto-Update - When enabled, users of previous versions of the app will be notified in the app about a new version, and the new version will be downloaded automatically. No email notification will be sent.
  * Text box - Add release notes, descriptions of updates or changes, or any other information that testers should be aware of.

![Upload settings](/img/getting-started/upload/upload-settings.png)

  :::note
  These settings are only accessible if you have added the TestFairy SDK to the app.
  :::

For more information about build settings, see [App Build Settings](https://docs.testfairy.com/Getting_Started/App_Build_Settings.html).

### Updating an App

To update a build you have already loaded, without changing the version, upload the new file (with the same name). The new file will override the old build without creating a new version of the app.

### Uploading a New Version

To upload a build that is a new version of an existing app, upload the new version of the file. TestFairy will identify that both apps have the same package name (bundle identifier) and group them together in the same project (app).
