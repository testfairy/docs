Integrating the TestFairy SDK into your app allows better understanding of how your app performs on real devices. It tells you
when and how people are using your app, and provide you with any metric you need to optimize for better user experience and better code.

## Installation

<!--
[ ![Download](https://api.bintray.com/packages/testfairy/testfairy/testfairy/images/download.svg) ](https://bintray.com/testfairy/testfairy/testfairy/_latestVersion)
-->

1. Add the SDK to your build.gradle
   ```
      dependencies {
          compile 'testfairy:testfairy-android-sdk:1.+@aar'
      }
   ```
   make sure you have jcenter() repository included.


2. Add Testfairy to your main activity's `onCreate`:
   ```
   import com.testfairy.TestFairy;

   public class MainActivity extends Activity {

       @Override
       public void onCreate() {
           TestFairy.begin(this, YOUR_APP_TOKEN); // e.g "0000111122223333444455566667777788889999";
       }
   ```

3. (Optional) If you have *Proguard* enabled, please add this snippet to your proguard rules file (eg `proguard-rules.pro`, `proguard.cfg` or others):
   ```
   -keep class com.testfairy.** { *; }
   -dontwarn com.testfairy.**
   -keepattributes Exceptions, Signature, LineNumberTable
   ```

## Class Reference

[https://app.testfairy.com/reference/android/](https://app.testfairy.com/reference/android/)
   
## Upgrading

TestFairy is constantly improving and updating the Android SDK. It is generally good idea to always use the latest SDK, but it is up the developer.

If you used the compile dependency: `testfairy:testfairy-android-sdk:1.+@aar`, then you might be using the latest. You can always have Gradle to fetch latest by running the command: `gradlew --refresh-dependencies`

Otherwise, if you are using a fixed version, for example: `testfairy:testfairy-android-sdk:1.2.4@aar`, then you will have to update the version manually.

List of changes is available in the [Android SDK Changelog](http://docs.testfairy.com/Android/Changelog.html).
   
## <a name="permissions"></a>Additional Permissions (Optional)

TestFairy can record additional insights that require specific permissions. Below is a list of permissions needed for each metric:

#### Logs - ```android.permission.READ_LOGS``` (Optional)

In order to automatically upload device logs (logcat) to your account, please add the permission ```android.permission.READ_LOGS```.
Please make sure you check the Log coolection checkbox in project settings under insights. This can be done after the app was uploaded or the first session performed.

#### Tracking Battery Usage - ```android.permission.BATTERY_STATS``` (Optional)

In order to automatically upload battery status to your account, please add the permission ```android.permission.BATTERY_STATS```. 
The general battery status will be tracked, as well as the time when phone was connected or disconnected from charger.

#### Tracking Phone Signal - ```android.permission.READ_PHONE_STATE``` (Optional)

In order to automatically upload phone signal to your account, please add the permission ```android.permission.READ_PHONE_STATE```. 
The phone signal graph shows the GSM Signal Strength, with valid values (0-31, 99). 0 equals -113 dBm or less and 31 equals -51 dBm or more. For more information, please read GSM standard TS 27.007, section 8.5

#### Tracking Wi-Fi Signal - ```android.permission.ACCESS_WIFI_STATE``` (Optional)

In order to automatically upload wifi status to your account, please add the permission ```android.permission.ACCESS_WIFI_STATE```. 
The wifi signal will be tracked. 

## File Size
The size of the SDK is 302KB

<br><br>
Maybe you want to read also [Manual integration with Eclipse and Ant](http://docs.testfairy.com/Android/Manual_integration_with_Eclipse_and_Ant.html).

