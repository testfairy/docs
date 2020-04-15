An Android application package (APK) consists of compiled classes, app resources and the APK signature. When you install an APK to your device, all these files will be copied to their designated places and will be verified for their integrity.

If anything goes wrong during this process, you will be shown the following error:

![](/img/android/sdk/app_not_installed.png)

There are a few possible reasons for this.

1. __An app with the same package name with a different signature may already be installed.__

* Delete the app from your device and try again.

In order to prevent this error in the future, make sure you always sign your consecutive builds with the same signature. If changing the signature was intentional, it is recommended the communicate the change with your testers so that they can uninstall the app with deprecated signature before proceeding with the installation.

2. __Device is running out of storage.__

* Free up some space and try again.

Installing an APK requires at least twice the space consumed by the package plus total uncompressed space consumed by the app files.

3. __Device does not allow installation from unknown sources.__

* Go to the __Settings__ app and locate "Install Unknown Apps" under __Privacy/Security__ settings. Enable the permission for the app which you use to install your APK. In most cases, this is the app being updated, a file manager or the browser.

Old Android devices expose this setting under a single toggle named "Install App from Unknown Sources".

4. __Android 7+ may not install apps signed only with the v1 signature scheme.__

Allthough this is not a globally defined default, some Android configurations do not allow installation of APKs that doesn't contain a v2 signature.

* If you build your app via Android Studio's __Generate Signed Bundle / Apk__ command, make sure you tick the v2 signature checkbox as well as v1 to include both signatures in the final APK.

![](/img/android/sdk/generate_v1_v2_sign.png)

* If you sign your app via gradle CLI, make sure you include the following settings in your *app/build.gradle* script.

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

Once you sign the app, you can verify that both signatures are included by running the following command in your build tools folder (*$ANDROID_HOME/build-tools/x.y.z*).

`./apksigner verify --print-certs -v path/to/app.apk`

The expected output looks like this:

```
Verifies
Verified using v1 scheme (JAR signing): true
Verified using v2 scheme (APK Signature Scheme v2): true
```

Check out [Android docs](https://source.android.com/security/apksigning/v2) to learn more about v2 signatures.
