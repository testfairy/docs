TestFairy is a platform with many use-cases. Some enterprises use the platform during their development, some use it to record user experiences to improve their product, others run it in production to assist in customer support. 

The SDK is very modular and is built to handle the your needs and your company's needs.

This document talks about how to exclude the TestFairy SDK from production builds. It was designed for enterprises who use TestFairy throughout development and QA cycles, but would like to remove TestFairy SDK when building production releases.

### Excluding from iOS production releases

##### Option 1: Calling [TestFairy begin] only in DEBUG

Without a call to [TestFairy begin], the SDK is not initialized. It's not consuming any memory, doesn't open sockets, and doesn't catch uncaught exceptions. Even though it does not impact your app in any way, the SDK is still linked with your app. This is the easiest option.

```
#ifdef DEBUG
[TestFairy begin:@"APP_TOKEN"];
#endif
```

##### Option 2: Configure link options in an scheme for App Store

A common pattern we see from our customers is having a dedicated scheme for App Store. Meaning there's a Debug, Release and App Store (and maybe others.)

The link phases that are explained in the integration document only apply to Debug and Release schemes, and are missing from the App Store scheme.

This solution still requires use of `#ifdef` as before, but can also completely emit the library from being linked with the app.

### Excluding from Android production releases

##### Option 1: Calling [TestFairy begin] only in Debug mode.

    



