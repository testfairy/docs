<iframe src="https://embed.fleeq.io/l/k84b88ljvv-6tgpx1w80o" frameborder="0" allowfullscreen="true" style="width:800px; height: 600px;"></iframe>


Integrating the TestFairy SDK into your app can help you better understand how your app performs on real devices. It tells you when and how people are using your app, and provides you with any metrics you may need in order to optimize your user experience and code.

Both Java and Kotlin apps are supported.

- Changelog: View [changelog](http://docs.testfairy.com/Android/Changelog.html).
- Class reference: [https://docs.testfairy.com/reference/android/index.html](https://docs.testfairy.com/reference/android/index.html)

## Installation

<!-- Deprecated after Bintray
[ ![Download](https://api.bintray.com/packages/testfairy/testfairy/testfairy/images/download.svg) ](https://bintray.com/testfairy/testfairy/testfairy/_latestVersion)
-->

1. Add the SDK to your app module's build.gradle (eg. `app/build.gradle`)
```
    dependencies {
        implementation 'com.testfairy:testfairy-android-sdk:1.+@aar'
    }
```

2. Add the TestFairy maven repository to your project's build.gradle (eg. `PROJECT_ROOT/build.gradle`)
```
    buildscript {
        repositories {
            maven { url 'https://maven.testfairy.com' }
        }
    }
```

3. Add Testfairy to your main activity's `onCreate`:
<iframe frameBorder="0" width="100%" height="200" src="https://app.testfairy.com/sdk/android/iframe"></iframe>


## Proguard (optional)

If you have *Proguard* enabled, please add this snippet to your proguard rules file (eg `proguard-rules.pro`,   `proguard.cfg` or others):
```
 -keep class com.testfairy.** { *; }
 -dontwarn com.testfairy.**
 -keepattributes Exceptions, Signature, LineNumberTable
 -dontusemixedcaseclassnames
```


## Upgrading

TestFairy is constantly improving and updating the Android SDK. Generally, it's a good idea to always use the latest SDK.

Using version wildcards like “1.+@aar”, will automatically upgrade your TestFairy to the latest version. To refresh dependency, and force Gradle to download the latest version, please run the command: `gradlew --refresh-dependencies`

If you are using a fixed version, for example: `testfairy:testfairy-android-sdk:1.2.4@aar`, you will have to manually update the version.

A list of changes is available in the [Android SDK Changelog](http://docs.testfairy.com/Android/Changelog.html).

## How to Identify users (Optional)

Here is a quick example for an easy way to identify users by email address.
```
TestFairy.setUserId("john@example.com");
```
For more identification options [read this](https://docs.testfairy.com/SDK/Identifying_Your_Users.html)


## <a name="permissions"></a>Additional Permissions (Optional)

TestFairy can record additional insights that require specific permissions. Below is a list of permissions required for each metric:

#### Logs - ```android.permission.READ_LOGS``` (Optional)

In order to automatically upload device logs (logcat) to your account, please add the permission ```android.permission.READ_LOGS```.
Please make sure to check the **"Log collection"** checkbox found under the **"Insights"** tab in ["Build Settings"](https://docs.testfairy.com/Getting_Started/Version_Settings.html). This can be done after the app was uploaded or the first session performed.

#### Tracking Battery Usage - ```android.permission.BATTERY_STATS``` (Optional)

In order to automatically upload the battery status to your account, please add the permission ```android.permission.BATTERY_STATS```.
The general battery status will be tracked, as well as the time when the device was connected or disconnected from a charger.

#### Tracking Phone Signal - ```android.permission.READ_PHONE_STATE``` (Optional)

In order to automatically upload phone signal to your account, please add the permission ```android.permission.READ_PHONE_STATE```.
The phone signal graph shows the GSM Signal Strength, with valid values (0-31, 99). 0 equals -113 dBm or less and 31 equals -51 dBm or more. For more information, please read [GSM standard TS 27.007, section 8.5] (http://www.etsi.org/deliver/etsi_ts/127000_127099/127007/08.05.00_60/ts_127007v080500p.pdf)

#### Tracking Wi-Fi Signal - ```android.permission.ACCESS_WIFI_STATE``` (Optional)

In order to automatically upload the wifi status to your account, please add the permission ```android.permission.ACCESS_WIFI_STATE```.
The wifi signal will be tracked.

## File Size

The size of the TestFairy SDK is 500KB.

<br><br>
You might also like to read [Manual integration with Eclipse and Ant](http://docs.testfairy.com/Android/Manual_integration_with_Eclipse_and_Ant.html).

## Troubleshoot

`Could not GET 'https://jcenter.bintray.com/testfairy/testfairy-android-sdk/1.11.45/testfairy-android-sdk-1.11.45.pom'. Received status code 400`
`Could not GET 'https://jcenter.bintray.com/testfairy/testfairy-android-sdk/1.11.45/testfairy-android-sdk-1.11.45.pom'. Received status code 403`
`Could not GET 'https://jcenter.bintray.com/testfairy/testfairy-android-sdk/1.11.45/testfairy-android-sdk-1.11.45.pom'. Received status code 407`

If you see one of these when you include TestFairy SDK in your project, please make sure `jcenter()` is added to your list of maven repos in the project's *build.gradle* script.

```
// build.gradle

buildscript {
    repositories {
        jcenter()
        google()
    }
}
```
