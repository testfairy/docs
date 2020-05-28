TestFairy is a platform with many use-cases. Some enterprises use the platform during their development, some use it to record user experiences to improve their product, others run it in production to assist in customer support.

The SDK is very modular and is built to handle the your needs and your company's needs.

This document talks about how to exclude the TestFairy SDK from production builds. It was designed for enterprises who use TestFairy throughout development and QA cycles, but would like to remove TestFairy SDK when building production releases.

### Excluding from iOS production releases

#### Option 1: Calling [TestFairy begin] only in DEBUG

Without a call to [TestFairy begin], the SDK is not initialized. An uninitialized SDK won't consume any memory, won't open sockets, and won't catch uncaught exceptions. Even though it does not impact your app in any way, the SDK is still linked with your app. This is the easiest option.

##### Objective-C
```
#ifdef DEBUG
[TestFairy begin:@"APP_TOKEN"];
#endif
```

##### Swift
```
#if DEBUG
TestFairy.begin("APP_TOKEN")
#endif
```

If your publishing workflow has multiple build schemes or you plan to implement such phases, please proceed to [this post](https://blog.testfairy.com/ios-build-schemes-explained/) to learn how to do that.

We suggest defining a compiler flag for each scheme you have to enable the SDK for schemes relevant to testing like below.

##### Objective-C
```
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
```
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

This solution still requires use of `#ifdef` or `#if` as before, but can also completely omit the library from being linked with the app.

Navigate to project build settings and locate **Excluded Source File Name** option. Expand the list and find the build scheme you want to exclude TestFairy from. Double click the row add two entries to the excluded file list, one for **TestFairy.h**, one for **libTestFairy.a** files.

Try building your project. If the compilation fails, locate the lines where TestFairy is used and wrap them with `#ifdef` or `#if` directives explained in Option 1.

### Excluding from Android production releases

#### Option 1: Calling TestFairy.begin() only in Debug mode.

Your Gradle variants can alter the code path of your app. Use debug flavor to call `TestFairy.begin()`, and release flavor to emit this call.

If you are not used to working with build variants, refer to [this post](https://blog.testfairy.com/create-a-custom-build-in-android/) the learn how.

In order for ProGuard to fully crop the TestFairy SDK from the final binary, you may use a wrapper class that differs in each of your flavors.

* Create a new Java folder for your **release** variant.
* Create a Java class somewhere in the shared (main) variant.
* Create the same package structure and Java class in the **release** variant as well.
* Put the code below into the Java class under **main/java**.
```
public class TestFairyWrapper {
  public static void begin(Activity activity, String apikey) {
    TestFairy.begin(activity, apikey);
  }
}
```
* Put the code below into the Java class under **release/java**.
```
public class TestFairyWrapper {
  public static void begin(Activity activity, String apikey) {
    // Do nothing
  }
}
```
* Call `TestFairyWrapper.begin()` in your main activity.

Without any calls to any of the TestFairy SDK, Proguard will eventually remove the entire compiled code from the result `classes.dex` and the final APK.

#### Option 2: Use a class loader

Android allows loading classes into memory on-the-fly. This is for advanced developers. You can use Java reflections to load TestFairy class into memory only on a Debug build.

Replace the code where you call `TestFairy.begin()` with the code below.

```
try {
    Class cls = Class.forName("com.testfairy.TestFairy");
    Method method = cls.getMethod("begin", android.content.Context.class, String.class);
    method.invoke(cls, this, "SDK-XXXXXXX");
} catch (Exception e) { /* ignore */ }
```

Then, in your `build.gradle` file, change the SDK dependency with `debugImplementation 'testfairy:testfairy-android-sdk:1.+@aar'` or any other version of your choosing.

#### Option 3: Use TestFairy Production SDK

If the reason why you need to exclude the SDK is to be able comply with app store terms, then you can integrate TestFairy Production SDK and enjoy the same capabilities as before. Production SDK is stripped from all automatic update and app distribution bytecode as advised by [Play Store Developer Distribution Agreement Article 4.5](https://play.google.com/about/developer-distribution-agreement.html).
