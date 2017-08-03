### About Debug Symbols (dSYMs)
* TestFairy can show you a crash reports to help you identify the place in the code that is causing a problem.
* TestFairy requires your app's debugs symbols (dSYMs) to clearly show you the names of the methods in your code.
* DSYM files are created by Xcode when you build your app and there are a couple of ways to upload them to TestFairy (we'll explain in a minute).

Let's get started.

### Setup your environment to upload DSYMs automatically
* We recommended uploading dSYMs straight from Xcode: [Upload DSYMs from Xcode](/iOS_SDK/Uploading_dSYMs_(Xcode).html).
* If you build with Jenkins follow these instructions: [Upload DSYMs form Jenkins](/iOS_SDK/Uploading_dSYMs_(Jenkins).html).
* If you are using Xamarin: [There are also specific instructions for Xamarin](https://docs.testfairy.com/Platforms/Xamarin.html)
* If you are not using Xcode: [Use a dSYM upload script](/iOS_SDK/Uploading_dSYMs_(script).html).

### Handling missing DSYMs
If you are seeing a message in TestFairy about missing DSYMs or if your build is Bitcode enabled, follow these instructions to locate and upload DSYMs: [Handling Missing dSYMs](/iOS_SDK/Handling_Missing_dSYMs.html)
