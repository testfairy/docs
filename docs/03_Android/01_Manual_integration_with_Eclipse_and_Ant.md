One of the key strengths of TestFairy's SDK, is the ease of installation. Our *.aar* archive updates the *AndroidManifest.xml* file with the minimum required permissions and activities. In some cases, you would more likely want to include the *.aar* archive as an offline dependency. Such cases are when you want to isolate your build phases from the publich internet for security purposes.

Please follow these steps to integrate TestFairy's Android SDK in your project:

1. Download the latest *.aar* archive from [our maven](http://maven.testfairy.com/com/testfairy/testfairy-android-sdk/1.12.13/testfairy-android-sdk-1.12.13.aar).

2. Copy this .aar file into a directory called `libs` in your project. If you don't have such a directory, please create one in your source root.

3. Modify your project level `build.gradle` like this:
```
allprojects {
   repositories {
      ...
      
      flatDir {
          dirs 'libs'
      }
   }
}

```

4. Include TestFairy SDK in your app module's `build.gradle` like this:
```
dependencies {
   implementation(name:'testfairy-android-sdk-1.12.13', ext:'aar')
}
```

5. Add Testfairy to your main applications's `onCreate()`:
```
import com.testfairy.TestFairy;

public class MyApplication extends Application {

   @Override
   public void onCreate() {
       super.onCreate();
       TestFairy.begin(this, YOUR_APP_TOKEN); // e.g "SDK-XXXX";
   }
```

6. (Optional) If you need NDK crash reporting, please follow steps #1 to #4 with [this library](http://maven.testfairy.com/com/testfairy/testfairy-android-ndk/1.12.13/testfairy-android-ndk-1.12.13.aar) as well.

## Class Reference

[TestFairy Class Reference](https://app.testfairy.com/reference/android/)
