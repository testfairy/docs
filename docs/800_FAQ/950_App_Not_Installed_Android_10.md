Are are having problem instalaing an app on Android 10, and getting an error message "App not installed"?

![](/img/android/sdk/app_not_installed.png)

Here are a few possible reasons:

# Is the app already installed on your device?

It might be that an app with the same package name that has a different signature is already be installed on your device. Android does not allow different signatures for the same package name. In order to solve that, please delete the app from your device and try again.

In order to prevent this error in the future, please make sure you always sign your consecutive builds with the same signature. If changing the signature was intentional, you can go ahead and change the package name as well, or just communicate the change with your testers and ask them to uninstall the app with deprecated signatures before proceeding with the installation.

# Is the device out of storage?

 This is easy to solve. Free up some space and try again.

Installing an app requires at least twice the space consumed by the APK package plus total uncompressed space consumed by the app files.

# Does the device allow installation from unknown sources?

By default Android allows installation only from the Play Store. In order to allow installation of apps from other sources, open the __Settings__ app and locate "Install Unknown Apps" under __Privacy/Security__ settings. Enable the permission for the app which you use to install your APK. In most cases, this is the app being updated, a file manager or the browser. Old Android devices expose this setting under a single toggle named "Install App from Unknown Sources".

# Does the problem happen only on Android 10?

If you can install your app on old Andrdoids without a problem, and only new versions (Android 10?) gives you a hard time, it might be related to your signature. 

Although this is not a globally defined default, some Android manufactures (Google and others) require signing apps with a v2 signature and may not allow installing apps signed only with the v1 signature scheme.

If you build your app via Android Studio's __Generate Signed Bundle / Apk__ command, make sure you tick the v2 signature checkbox as well as v1 to include both signatures in the final APK.

![](/img/android/sdk/generate_v1_v2_sign.png)

  * If you prefer signing your app during a build automatically, make sure you include the following settings in your *app/build.gradle* script.

```
android {
    defaultConfig {
        ...
    }

    signingConfigs {
        debug {
            v1SigningEnabled true
            v2SigningEnabled true

            // Add debug keystore credentials here
        }

        release {
            v1SigningEnabled true
            v2SigningEnabled true

            // Add release keystore credentials here
        }
    }
}
```

## How to verify if an app is signed with v1 or v2?

In order to verify that both signatures are included in the APK by running the following command inside your build tools folder (*$ANDROID_HOME/build-tools/x.y.z*).

`./apksigner verify --print-certs -v path/to/app.apk`

The expected output looks like this:

```
Verifies
Verified using v1 scheme (JAR signing): true
Verified using v2 scheme (APK Signature Scheme v2): true
```

Check out [Android docs](https://source.android.com/security/apksigning/v2) to learn more about v2 signatures.
