### The TestFairy Jenkins plugin

If you did not use the TestFairy Jenkins plugin before, see the [installation instructions.](https://wiki.jenkins-ci.org/display/JENKINS/TestFairy+Plugin)

### <a name="setup">Setup Xcode to create debug symbols</a>

Open Xcode on the machine that runs Jenkis and follow these instructions:

1. Click on your project and select Build-Settings.
2. In the search box, type "Debug Information Format".
3. Click on "Debug Information Format" and select "DWARF with dSYM File"
![alt dsym](https://docs.testfairy.com/img/ios/dsym-upload/dsym.png)

### Setup Xcode to upload DSYMs for every build

If your Jenkins is configured to build your app, it will pickup that build phases configured on Xcode and run them as well.

Open Xcode on the machine that runs Jenkis and follow these instructions:

1. Click on your project in the left sidebar, then click on **Build Phases**.

![alt](../../img/ios/dsym-upload/step1.png)

2. Click on ***plus sign*** on the left and select **New Run Script Build Phase**

![alt](../../img/ios/dsym-upload/step2.png)

3. Open the newly added **Run Script** and add this line at the bottom:

```sh
sh "$SRCROOT/TestFairy/upload-dsym.sh" UPLOAD_API_KEY
```
Makue sure the specified path include the upload-dsym.sh file.

Make sure to replace **UPLOAD_API_KEY** with the your secret Upload API key, found in the [Settings](https://app.testfairy.com/settings/) page.

![alt](../../img/ios/dsym-upload/step3.png)

##### Fatal: Can't find .dSYM folder!

If while compiling you get the error `Fatal: Can't find .dSYM folder!`, it could be that your project is not configured to generate debug symbols. [Here is how you setup Xcode to generate dSYMs](setup)
