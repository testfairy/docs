### About Debug Symbols (dSYMs)

* TestFairy can show you crash reports to help you identify the place in the code that is causing a problem.
* TestFairy requires your app's debug symbols (dSYMs) to clearly show you the names of the methods in your code.
* DSYM files are created by Xcode when you build your app. There are a couple of ways to upload them to TestFairy (see below).

### Setup your environment to upload DSYMs automatically

* We recommended uploading dSYMs straight from Xcode: [Upload DSYMs from Xcode](/iOS_SDK/Upload_dSYMs_(Xcode).html).
* If you build with Jenkins follow these instructions: [Upload DSYMs form Jenkins](/iOS_SDK/Upload_dSYMs_(Jenkins).html).
* If you are using Xamarin: [There are also specific instructions for Xamarin](https://docs.testfairy.com/Platforms/Xamarin.html)
* If you are not using Xcode: [Use a dSYM upload script](/iOS_SDK/Upload_dSYMs_(script).html).

### Handling missing DSYMs

If you see a message in TestFairy about missing DSYMs or if you've published your app to the AppStore with Bitcode enabled, follow these instructions to locate and upload DSYMs: [Handling Missing dSYMs](/iOS_SDK/Handling_Missing_dSYMs.html)
