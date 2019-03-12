
If you don’t have an account yet, please <a href="http://www.testfairy.com/signup" target="_blank">sign up</a>. It's easy, and free!
If you have a TestFairy account, please <a href="https://app.testfairy.com/login" target="_blank">log in</a>.


<iframe width="600" height="450" frameborder="0" allowfullscreen="true" style="box-sizing: border-box; margin-bottom:5px; max-width: 100%; border: 1px solid rgba(0,0,0,1); background-color: rgba(255,255,255,0); box-shadow: 0px 2px 4px rgba(0,0,0,0.1);" src="https://testfairy.fleeq.io/l/wdtj0svxnh-xftb9kmde0"></iframe>


## <a id="Uploading"></a> Uploading Your Application

Once your account is created and verified, you are ready to upload your app.

Uploading is just as simple as it sounds! Just click on the **Upload** button on the top-right side of the upper menu, and follow the on-screen instructions.

![ alt upload](../../img/app/upload2.png)

We recommend using our <a href="http://docs.testfairy.com/Upload_API.html">Upload API</a> to enable our <a href="https://wiki.jenkins-ci.org/display/JENKINS/TestFairy+Plugin">Jenkins plugin</a>, <a href="#">Gradle plugin</a>, or <a href="https://github.com/testfairy/command-line-uploader" target="_blank">Command line uploader</a>. 

The code of our command line uploader, Jenkins and Gradle plugins is open source, so you can feel free to change and improve on it.

This guide will describe the manual upload process.


## Selecting Your Project Settings

You can define your testing settings right in the upload process:

-- **Auto-Update** - When auto update is enabled, users using previous versions of this app will get a notification about the new version next time they open up the app. The new version will be downloaded automatically, so the user doesn't have to actively download it. Please note that in this case no email notification will be sent to the testers.

-- **In-app reporting** - Check this box to enable/disable the "shake to report" feature in your app. When enabled, users can simply shake their device to send out a feedback report, along with a video recording, screenshots, logs and metrics of their testing session.

-- **Custom Comments** - Use this section to add release notes, describe the updated/changes and write about anything else you would like your testers to be aware of.

![ alt testfairy-upload](../../img/app/upload-settings.png)

Additional settings can be configured from the <a href="http://docs.testfairy.com/Getting_Started/Account_Settings.html">Project Settings</a> page.

 
## <a id="Uploading"></a> Updating an app

If you wish to update an app, all you have to do is simply upload it again, the same app with the same version. The new file will override the old file.

## <a id="Uploading"></a> Uploading a new version

If you wish to upload a new version of the same app, all you have to do is upload the new version the exact same way you've uploaded the old version. Our service will identify that both apps have the same package name (budle id) and group them together in the same project.



**What you should read next:** [How To Invite Testers](How_To_Invite_Testers.html).
