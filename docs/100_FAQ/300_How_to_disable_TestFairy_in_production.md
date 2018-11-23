TestFairy is a platform with many use-cases. Some enterprises use the platform during their development, some use it to record user experiences to improve their product, others run it in production to assist in customer support. 

The SDK is very modular and is built to handle the your needs and your company's needs.

This document talks about how to exclude the TestFairy SDK from production builds. It was designed for enterprises who use TestFairy throughout development and QA cycles, but would like to remove TestFairy SDK when building production releases.

### Excluding from iOS production releases

#### Option 1: Calling [TestFairy begin] only in DEBUG

Without a call to [TestFairy begin], the SDK is not initialized. An uninitialized SDK won't consume any memory, won't open sockets, and won't catch uncaught exceptions. Even though it does not impact your app in any way, the SDK is still linked with your app. This is the easiest option.

##### Objective-C
```Objective-C
#ifdef DEBUG
[TestFairy begin:@"APP_TOKEN"];
#endif
```

##### Swift
```Swift
#if DEBUG
TestFairy.begin("APP_TOKEN")
#endif
```

If your publishing workflow has multiple build schemes or you plan to implement such phases, please proceed to [this post](https://blog.testfairy.com/ios-build-schemes-explained/) to learn how to do that. 

We suggest defining a compiler flag for each scheme you have to enable the SDK for schemes relevant to testing like below.

##### Objective-C
```Objective-C
#if defined(DEBUG)
[TestFairy begin:@"APP_TOKEN"];
#elif defined(SCHEME1)
[TestFairy begin:@"APP_TOKEN"];
#elif defined(SCHEME2)
[TestFairy begin:@"APP_TOKEN"];
#else
// Don't initialize the SDK
#endif
```

##### Swift
```Swift
#if DEBUG
TestFairy.begin("APP_TOKEN")
#elseif SCHEME1
TestFairy.begin("APP_TOKEN")
#elseif SCHEME2
TestFairy.begin("APP_TOKEN")
#else
// Don't initialize the SDK
#endif
```

If you are also worried about reducing the app size in your final release build, proceed to Option 2.

#### Option 2: Configure link options in a scheme for App Store

A common pattern we see from our customers is having a dedicated scheme for App Store. Meaning there's a Debug, Release and App Store (and maybe others.)

The link phases that are explained in the integration document only apply to Debug and Release schemes, and can be excluded from the App Store scheme.

This solution still requires use of `#ifdef` of `#if` as before, but can also completely omit the library from being linked with the app.

Navigate to project build settings and locate **Excluded Source File Name** option. Expand the list and find the build scheme you want to exclude TestFairy from. Double click the row add two entries to the excluded file list, one for **TestFairy.h**, one for **libTestFairy.a** files. 

Try building your project. If the compilation fails, locate the lines where TestFairy is used and wrap them with `#ifdef` or `#if` directives explained in Option 1.

### Excluding from Android production releases

#### Option 1: Calling [TestFairy begin] only in Debug mode.

Your Gradle variants can alter the code path of your app. Use debug flavor to call TestFairy.begin, and release flavor to emit this call. 

Without any calls to any of the TestFairy SDK, Proguard will eventually remove the entire compiled code from the result classes.dex and the final APK.

#### Option 2: Use a class loader

Android allows loading classes into memory on-the-fly. This is for advanced developers. You can use Android's ClassLoader to load TestFairy class into memory only on a Debug build. 


