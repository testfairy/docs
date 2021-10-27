<!-- # Build Settings -->

<!-- ![ alt build-settings-btn](../../img/app/build-settings-btn.png) -->

Every build of an app has its own settings, but some of the definitions are shared by all the builds.


To access the build settings page:
1. In TestFairy, in the left navigation panel, click **APPS**.

![Build settings navigation](/img/getting-started/build-settings/build-settings-nav.png)

1. Next to the app whose build settings you want to view, click the settings icon.

![Settings icon](/img/getting-started/build-settings/build-settings-icon.png)

### App Distribution

![App Distribution](/img/getting-started/build-settings/build-settings-app-dist.png)

* App Distribution - Can be enabled or disabled. When disabled, the app cannot be installed and pending invitations will expire.

* Auto-Update - When enabled, users of previous versions of the app will be notified in the app about a new version, and the new version will be downloaded automatically. No email notification will be sent. See [Auto Update](https://docs.testfairy.com/App_Distribution/Auto_Update.html) for more information.

* Release Notes - Information included in this text box will appear in email invitations, on landing pages, and in the tester dashboard at my.testfairy.com. Release notes can be entered and modified via Upload API, during app upload in the TestFairy UI, and on this page. See [Release Notes](https://docs.testfairy.com/App_Distribution/Release_Notes.html) for more information.

* Metadata - Details received from __Continuous integration (CI)__ systems that upload the build to the TestFairy dashboard. Metadata cannot be edited.

* Tags - Comma-separated text that can be added to builds. Tags can contain spaces.

* Landing Page - The link to the landing page. Click **Configure** to change the landing page for this build. See [Landing Pages](https://docs.testfairy.com/App_Distribution/Landing_Pages.html) for more information.

### Insights

![Insights](/img/getting-started/build-settings/build-settings-insights.png)

* Recording - Can be enabled, disabled, or enabled only when WiFi is on. This setting is global and overrides all other recording settings.

* Session - The maximum length of a session recording.

* Video - Can be enabled or disabled. Changing video settings can help decrease network overload

* Metrics - Selecting the **Application logcat** check box enables collecting app logs from the device.

### Bug reporting

![Bug Reporting](/img/getting-started/build-settings/build-settings-bug-reporting.png)

* In-App Bug Reporting - When in-app reporting is enabled, testers can shake their device to submit feedback. See [Submitting User Feedback](https://docs.testfairy.com/Testers/Submitting_User_Feedback.html) for more information.

* Bug System - Displays the Jira project that is connected to the app, if any.

### Versions

![Versions](/img/getting-started/build-settings/build-settings-versions.png)

* Upload History - If multiple versions of the app have been uploaded, the details of those uploads will be displayed here.

### More

![More](/img/getting-started/build-settings/build-settings-more.png)

* App Information - Displays the PackageName, Version number, Version Code, File size, and Certificate Signature of the app. 
