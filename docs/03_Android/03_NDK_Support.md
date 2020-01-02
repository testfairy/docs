TestFairy SDK can also report crashes initiated from native code such as C/C++. For projects with such requirements, please setup your dependencies like this and you are good to go.

* Add the SDK and NDK support extension to your app module.
```
    dependencies {
        implementation 'testfairy:testfairy-android-sdk:1.+@aar'
        implementation 'com.testfairy.ndk:testfairy-android-ndk:1.+@aar'
    }
```

* Call `TestFairy.begin()` or `TestFairy.installCrashHandler()` as usual.

## Uploading Crash Symbols

Android projects using native libraries are likely to turn on compiler flags which strip symbol names from the final binaries. In release builds, these configurations result in crash reports with illegible stack trace lines. In order to reveal the symbols in a stripped build's crash report, you must upload a collection of your symbols to TestFairy.

1. Install [TestFairy](https://github.com/testfairy/testfairy-gradle-plugin) gradle plugin. 
2. Sync your project. Make sure you have a correct API key set in the plugin configuration. To find your API key, please refer to your [preferences](https://app.testfairy.com/settings) page.
3. Run `./gradlew testfairyNdkRelease` in your project root. If you have multiple variants for your project, run the command for each variant like this: `./gradlew testfairyNdkDebug`, `./gradlew testfairyNdkMyVariant` etc.
4. Optionally, upload your APK with the following command: `./gradlew testfairyRelease`.
