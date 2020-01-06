### Distributing Lumberyard Apps

### Android

Requirements:
* Lumberyard and Android SDK installed on Windows

#### Step 1 - Download Android SDK Components

Use Android's **SDK Manager** to download following components:

* Google Play APK Expansion Library
* Google Play Licensing Library
* Android SDK Platform-Tools
* Android SDK Tools

#### Step 2 - Download and Setup Lumberyard Components

Run Lumberyard's **Setup Assistant**.

If you haven't installed Lumberyard core, click *Custom Install* and verify the engine root path is correct.

On the *Getting Started* page, enable the following items.

* Google Play APK Expansion Library
* Google Play Licensing Library
* Android SDK Platform-Tools
* Android SDK Tools

On the *Required Software* section, install and configure paths for the following items.

* Android Native Development (NDK)
* Android Software Development Kit (SDK) Tools
* Java SE Development Kit (JDK) - Make sure you use the official Java SE 8 from Oracle or Java SE 8 OpenJDK reference implementation. Other JDK releases won't work and you will have WAF errors during clean builds.

#### Step 3 - Enable OpenGL ES 3.X for Lumberyard

Close the editor and all of its componenets. Then, open *lumberyard_version\dev\AssetProcessorPlatformConfig.ini* in a text to make the following changes.

* Remove the semicolon before `es3=enabled` to enable it. Your development platform gets enabled automatically, so you don't have to enable `pc` or `osx_gl` unless they are required by your custom build schemes.

```
[Platforms]
;pc=enabled
es3=enabled
;ios=enabled
;osx_gl=enabled
```

#### Step 4 - Generate Android Studio Project

* Run **Project Configurator** to activate your current project.

* Using a command line app or terminal, navigate to *lumberyard_version\dev` folder.

* Run `lmbr_waf.bat configure` to generate your Android Studio project if you haven't already.

#### Step 5 - Generate Shaders for Release

* Build, deploy, and run your app on an Android device by using Lumberyard Editor's Deployment Tool Plugin.

* In your app, explore every area in every level to ensure that all shader permutations required for the app are generated. Exit the app when you are finished.

* Once you complete exploring all included levels, close the app.

* Embed the shader pak files into your app or put them in a remotely accessible location for your app. Pak files are located in *lumberyard_version\dev\Build\es3\game_project_name\*. For more details, please refer to [this](https://docs.aws.amazon.com/lumberyard/latest/userguide/android-shaders-building.html).


#### Step 6 - Build

* Using a command line app or terminal, navigate to *lumberyard_version\dev` folder.

* Determine your build's target CPU architecture. (i.e armv8)

* Determine your build's type. (i.e profile, debug, release)

* Run the following command to build your APK. Make sure you the CPU arch and build type is set correctly in the following command.

```
lmbr_waf.bat -p all build_android_armv8_clang_release --package-projects-automatically=True
```

#### Step 7 - Upload to TestFairy

Once your APK is built, you can choose your following upload method to finalize distribution. Make sure the correct CPU architecture is set for the project binaries path.

To upload with curl, run the following command in *lumberyard_version\dev\BinAndroid<CPU_ARCH>Clang* folder. Make sure your APK name is set correctly.

```
curl https://upload.testfairy.com/api/upload -F api_key='your_api_key' -F file=@ProjectName.apk
```

Optionally, you can download and use [TestFairy command line uploader](https://github.com/testfairy/command-line-uploader) if you don't have curl installed.
