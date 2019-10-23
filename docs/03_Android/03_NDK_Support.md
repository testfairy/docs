TestFairy SDK can also report crashes initiated from native code such as C/C++. For projects with such requirements, please setup your dependencies like this and you are good to go.

1. Add the SDK and NDK support extension to your app module.
```
    dependencies {
        implementation 'testfairy:testfairy-android-sdk:1.+@aar'
        implementation 'com.testfairy.ndk:testfairy-android-ndk:1.+@aar'
    }
```

2. Call `TestFairy.begin()` or `TestFairy.installCrashHandler()` as usual.
