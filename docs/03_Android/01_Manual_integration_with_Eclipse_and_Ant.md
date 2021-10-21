One of the key strengths of TestFairy's SDK, is the ease of installation. Our *.aar* archive updates the *AndroidManifest.xml* file with the minimum required permissions and activities. In some cases, you would more likely want to include the *.aar* archive as an offline dependency. Such cases are when you want to isolate your build phases from the public internet for security purposes.

Please follow these steps to integrate TestFairy's Android SDK in your project:

- [Download](https://maven.testfairy.com/latest/testfairy-android-sdk.aar) the latest *.aar* archive from our maven.

- Copy this .aar file into a directory called `libs` in your project. If you don't have such a directory, please create one in your source root.

- Modify your project level `build.gradle` like this:
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

- Include TestFairy SDK in your app module's `build.gradle` like this:
```
dependencies {
   implementation(name:'testfairy-android-sdk-1.12.13', ext:'aar')
}
```

- Add Testfairy to your main applications's `onCreate()`:
```
import com.testfairy.TestFairy;

public class MyApplication extends Application {

   @Override
   public void onCreate() {
       super.onCreate();
       TestFairy.begin(this, YOUR_APP_TOKEN); // e.g "SDK-XXXX";
   }
```

- (Optional) If you need NDK crash reporting, please follow steps #1 to #4 with [this library](http://maven.testfairy.com/com/testfairy/testfairy-android-ndk/1.12.13/testfairy-android-ndk-1.12.13.aar) as well.

## Class Reference

[TestFairy Class Reference](https://app.testfairy.com/reference/android/)
