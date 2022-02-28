The distribution process starts once you have uploaded an app.

For Android apps, see [Upload Apps](https://docs.testfairy.com/Getting_Started/Upload_Apps.html).

If you are distributing an iOS app:
  * Using an enterprise certificate, the process is identical to the Android distribution.
  * Using an ad-hoc certificate, see [Adding UDIDs to iOS development profile](https://docs.testfairy.com/iOS_SDK/Adding_UDIDs_to_iOS_development_profile.html).

If you're distributing a MacOS app, zip the app (before zipping, the file extension will be `.app`; after zipping, it will be `.zip`) and then follow the process described in [Upload Apps](https://docs.testfairy.com/Getting_Started/Upload_Apps.html).

Distributing your app is a simple process:

  ![upload process](/img/upload-process-1.png)

You will have to decide if you want testers to log in to their accounts prior to download, or to let anyone with the link download the app.

The distribution process described above can be used for pre-registered testers or testers invited to specific builds.

## Email Invitations
Inviting your testers via email can be done by pre-inviting them, or by adding them to a build.

### Pre-Invitation
Pre-invite testers by adding them to the testers list on the [TESTERS](https://app.testfairy.com/testers/) tab of the dashboard.

![inviting testers to a build](/img/getting-started/invite-testers-from-build-1.png)

Pre-inviting can be used when iOS apps are distributed to specific devices without an enterprise certificate. It is also commonly used if you have an in-house testing team.

### Adding to a Specific Build
You can add a tester's email to a specific build in the empty email box at the bottom of the testers list.

![add tester email](/img/getting-started/invite-testers-from-build-2.png).

This will send them an email with a download link and can be done with Android and iOS apps that are signed with enterprise certificates. It is also commonly used if you have an in-house testing team and want to add them to several builds and apps.

## Landing Pages

You can build a community of testers or distribute your app by using a pre-designed landing page (see [Landing Pages](https://docs.testfairy.com/App_Distribution/Landing_Pages.html)). The link to a landing page can be sent to testers to download your app. The download link on the landing page can also be secured by login, which will require the testers to log in before downloading the app.

## Testers Dashboard

The **Testers Dashboard** is where a tester can view the apps they were invited to test. This view is available to all testers in the system, but developers can switch from this view to the full dashboard view by using the **View as Developer** menu item.

## Permissions

Permissions are used to manage app distribution to groups of testers/users, and are defined for each app (and all its builds), so all testers that are part of a group can download all of the app's builds.

Permissions are based on defined groups of testers (see [Managing Testers](https://docs.testfairy.com/Testers/Managing_Testers.html)).

Once you have defined the groups, the groups will be displayed on the **Permissions** page.

![permissions](/img/app_distribution/permissions-screen-1.png)

Selecting the checkbox of a group makes the app (and all its builds) available for that group (and hence all its testers).
The app is then displayed on the **Testers Dashboard** and can be downloaded by the testers. Deselecting a group checkbox will remove the app from the **Testers Dashboard** for testers in that group.

### Production

**Note:** Auto-Update must be disabled for apps that are running in production.
