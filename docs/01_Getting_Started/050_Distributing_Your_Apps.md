## Distributing your apps
The distribution process starts with loading your apps to Testfairy.
* If you have an Android app simply go to your dashboard and follow the instructions in the [Upload](https://docs.testfairy.com/Getting_Started/Upload.html) section.
* If you are distributing an iOS app with an [enterprise certificate](https://developer.apple.com/programs/ios/enterprise/) the process is identical to the the android distribution. __Ad-hoc__ certificate iOS apps require some preparations described [here](https://docs.testfairy.com/iOS_SDK/Adding_UDIDs_to_iOS_development_profile.html).


After you have an app loaded you can start distributing it to your testers. Distributing your app is a simple process:

![upload process](/img/upload-process-1.png)
 
- You will only need to decide if you want testers to login (verify) their account prior to download or just let anybody with the link download your app.  


The distribution process described above can be done with a pre-registered list of testers or with invitations to testers that are sent for a specific build.


### Email invitations
Inviting your testers via email is done in two ways: 
1. Pre-inviting them by adding them to your testers list in the [TESTERS](https://app.testfairy.com/testers/) tab of the dashboard in advance, and then inviting them to the build in the invite testers menu of a specific build.
[]()
The pre invitation is used when iOS apps are distributed to specific devices when you don't use an enterprise certificate. It is also commonly used when you have an in house testing team.
2. Adding their email to a specific build at the empty email box at the bottom of the testers list ![](/img/getting-started/distribute-single-tester-1.png). This will send them an email with a download link and can be done with Android and iOS apps that are signed with an [enterprise certificate](https://developer.apple.com/programs/ios/enterprise/). It is also commonly used when you have an in house testing team and want to add them to several builds and different apps. 

This action will send them an email with a download link and can be done with Android and iOS apps that are signed with an enterprise certificate. It is commonly used when you have a one time tester of a specific app. 



### Landing pages
You can also build a community of testers or distribute you app by using our pre-designed [landing page](https://docs.testfairy.com/App_Distribution/Landing_Pages.html). The landing pages link can be sent to testers for downloading you apps. The download link in the landing page can also be secured by login (opt-in) requiring the testers to log in before downloading your app.


### Testers dashboard
The [tester dashboard](https://my.testfairy.com/) is the place where tester see all the apps they were invited to test.
This view is available to all testers in the system. Developer can switch from this view to the full dashboard view with the `view as developer` menu item.
