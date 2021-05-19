If you don’t have an account yet, please <a href="http://www.testfairy.com/signup" target="_blank">sign up</a>. It's easy, and free!
If you have a TestFairy account, please <a href="https://app.testfairy.com/login" target="_blank">log in</a>.


<iframe width="800" height="600" frameborder="0" allowfullscreen="true" style="box-sizing: border-box; margin-bottom:5px; max-width: 100%; border: 1px solid rgba(0,0,0,1); background-color: rgba(255,255,255,0); box-shadow: 0px 2px 4px rgba(0,0,0,0.1);" src="https://testfairy.fleeq.io/l/wdtj0svxnh-xftb9kmde0"></iframe>


## <a id="Uploading"></a> Uploading Your Application

Once your account is created and verified, you are ready to upload your app.

Uploading is just as simple as it sounds! Just click on the **Upload** button on the top-right side of the upper menu, and follow the on-screen instructions.

![ alt upload](../../img/app/upload2.png)

We recommend using our <a href="https://docs.testfairy.com/API/Upload_API.html">Upload API</a> to enable our <a href="https://wiki.jenkins-ci.org/display/JENKINS/TestFairy+Plugin">Jenkins plugin</a>, <a href="#">Gradle plugin</a>, or <a href="https://github.com/testfairy/command-line-uploader" target="_blank">Command line uploader</a>. 

The code of our command line uploader, Jenkins and Gradle plugins is open source, so you can feel free to change and improve on it.

## Manual upload process.

### Supported Plaforms

  * **Android**: TestFairy supports uploading and distributing Android Applications. In order to distribute Android apps with TestFairy  apps must be packaged as a `.apk` file. 
  * **iOS**: TestFairy supports uploading and distributing iOS Applications. iOS apps can be signed with either __AdHoc__, __Development__ and __Enterprise__ certificates. In order to distribute iOS apps with TestFairy, apps must be packaged as an `.ipa` file. 
  * **MacOS**: TestFairy supports uploading and distributing iOS Applications. iOS apps can be signed with either __AdHoc__, __Development__ and __Enterprise__ certificates. MacOS apps are bundled as `.app` files, however, In order to distribute MacOS apps with TestFairy, those `.app` files must be zipped into a `.zip` file. 

### Choose your build file
In the first stage you need to choose the file you want to upload. it can be an **.ipa** (for iOS), **.apk** (for Android) or **.zip** (for MacOS)file.
![choose file](/img/getting-started/upload/upload-app-android-1.png)

### Selecting Your Project Settings

You can define your build settings right in the upload process:

-- **In-app reporting** - Check this box to enable/disable the "shake to report" feature in your app. When enabled, users can simply shake their device to send out a feedback report, along with a video recording, screenshots, logs and metrics of their testing session.

-- **Auto-Update** - When auto update is enabled, users using previous versions of this app will get a notification about the new version next time they open up the app. The new version will be downloaded automatically, so the user doesn't have to actively download it. Please note that in this case no email notification will be sent to the testers.

-- **Custom Comments** - Use this section to add release notes, describe the updated/changes and write about anything else you would like your testers to be aware of.

Please note: these settings are relevant only if you added our SDK to your app.

![ alt testfairy-upload](../../img/app/upload-settings.png)

More build settings available in the [Account_Settings](Account_Settings.html) page.

 
### <a id="Uploading"></a> Updating an app

If you wish to update a build you already loaded, all you have to do is simply upload the same file again - the same build with the same version. 

The new build file will override the old build **without** creating a new app version.

### <a id="Uploading"></a> Uploading a new version

If you wish to upload a new build - which is a new version of the same app, all you have to do is upload the new version in the exact same way you've uploaded the old version. Our service will identify that both apps have the same package name (bundle identifier) and group them together in the same project (app).


**What you should read next:** [Build Settings](https://docs.testfairy.com/Getting_Started/App_Build_Settings.html).
