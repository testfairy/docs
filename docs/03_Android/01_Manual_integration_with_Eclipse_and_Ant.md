
One of the key strengths of TestFairy's SDK, is the ease of installation. Our *.aar* archive updates the *AndroidManifest.xml* file with the minimum required permissions and activities. However, in some cases, you would more likely want to include the *.jar* archive, rather than the .aar. Such cases are when you are controlling the permissions manually, when using *Ant*, or when working with *Eclipse*.

Please follow these steps to integrate TestFairy's Android SDK in your project:

1. Download the latest *.jar* archive from [bintray](https://dl.bintray.com/testfairy/testfairy/testfairy/testfairy-android-sdk/) and download the *.jar* archive from the latest version.

2. Copy this .jar file into your project, most likely into a directory called `libs`. If you don't have such a directory, please create one in your source root.

3. (Eclipse) You will need to add this *.jar* archive to `Referenced Libraries`. Right-click on the *.jar* archive and select `Build Path > Add to Build Path`.

4. Edit your *AndroidManifest.xml* file and add these permissions:
  ```
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
  ```

  Additional permissions are required for specific features in the SDK:
  ```
  // for auto-update feature
  <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>

  // for sending logs to testfairy
  <uses-permission android:name="android.permission.READ_LOGS" />

  // for tracking wifi signal
  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" /> 

  // for battery status
  <uses-permission android:name="android.permission.BATTERY_STATS" />  
  ```

5. Add this activity in your `<application>` section in *AndroidManifest.xml*:
  ```
  <activity android:name="com.testfairy.activities.ProvideFeedbackActivity" android:configChanges="orientation|screenSize" android:theme="@android:style/Theme.Holo.Light" />
  ```

6. Add Testfairy to your main applications's `onCreate`:
   ```
   import com.testfairy.TestFairy;

   public class MyApplication extends Application {

       @Override
       public void onCreate() {
           super.onCreate();
           TestFairy.begin(this, YOUR_APP_TOKEN); // e.g "0000111122223333444455566667777788889999";
       }
   ```

7. (Optional) If you have *Proguard* enabled, please add this snippet to your proguard rules file (eg `proguard-rules.pro`, `proguard.cfg` or others):
   ```
   -keep class com.testfairy.** { *; }
   -dontwarn com.testfairy.**
   -keepattributes Exceptions, Signature, LineNumberTable
   ```
8. (Optional) If you need NDK crashes enabled, please follow steps #2 and #3 with [this library](https://dl.bintray.com/testfairy/testfairy/com/testfairy/ndk/testfairy-android-ndk/) as well.

## Class Reference

[TestFairy Class Reference](https://app.testfairy.com/reference/android/)
