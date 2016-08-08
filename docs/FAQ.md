<a name="top"></a>

* General
  * [How do I re-invite a tester?](#reinvite-tester)
  * [How do I disable video recording?](#disable-video)
  * [How do I add some text to the e-mail sent to testers?](#add-comment)

* Crashes
  * [My app crashes while offline, will I get the report?](#crashes-offline)
  * [Will crashes be caught even after session stopped recording?](#crashes-after-stop)

* Android Platform
  * [What is an APK?](#what-is-apk)
  * [Which architectures are supported?](#android-archs)
  * [What is "instrumentation"?](#what-is-instrumentation)
  * [Where is the keyboard in the captured video?](#android-keyboard)
  * [Why isn't TestFairy recording any videos?](#android-no-videos)

* iOS Platform
  * [Which architectures are supported?](#ios-archs)
  * [Which iOS platforms are supported?](#ios-platforms)
  * [Am I required to use the TestFairy SDK?](#ios-sdk-required)
  * [How do I fix "App could not be installed at this time"?](#ios-app-could-not-be-installed)
  * [Why do I see sessions by "User-1"?](#ios-whats-user-1)
  * [Why does app icon disappear right after download?](#ios-app-icon-disappears)
  * [Why linking fails with `ld: symbol(s) not found for architecture arm64`?](#ios-symbol-not-found)
  * [What's "You must rebuild it with bitcode enabled (Xcode setting ENABLE_BITCODE)" error?](#ios-bitcode-error)

### <a name="crashes-offline"></a>My app crashes while offline, will I get the report?

Yes. 

TestFairy keeps crashes on disk if it can't send them immediately. The next time the app runs, TestFairy will send out the saved crash reports and attach them to the appropriate sessions.

[Back to top](#top)

### <a name="disable-video"></a>How do I disable video recording?

Video recording is configurable when uploading a new build, and even after it's live and has been distributed to others.

When uploading a build, TestFairy lets you control if the device screen should be recorded, if it should be recorded only if the user is connected to WIFI, and even set various parameters regarding the quality.

After the build has been uploaded, you still get control over these parameters. Simply visit the settings page by clicking 'Settings' in your build page, and then update the parameters accordingly.

[Back to top](#top)

### <a name="add-comment"></a>How do I add some text to the e-mail sent to testers?

When inviting testers to a build, you have an option to supply a comment. This may be instructions of how to use your app, the changelog from your code versioning system, or anything that might help you get better results from this testing.

Simply visit the build page, and click `Distribution` and select `Invite testers by e-mail`. At the bottom there's a checkbox for enabling outgoing e-mail, and a textbox for supplying the comment. When done, just click `Invite selected testers`.

[Back to top](#top)

### <a name="crashes-after-stop"></a>Will crashes be caught even after session stopped recording?

Yes.

Session max-duration controls how much of the session will be recorded. Many developer won't be interested in video recording beyond the first 10 minutes. Crashes are caught regardless the max-duration limit. 

In cases when the crash happened beyond the max-duration limit, the report will be attached to the session that was recorded.

[Back to top](#top)

### <a name="reinvite-tester"></a>How do I re-invite a tester?

There are two types of invitations in TestFairy. The first is, *inviting tester to your account*, which sends an email to the tester, asking them to register their iOS device (if needed). The second type is *inviting tester to a specific build*, where the email being sent contains a download link.

To re-invite a tester into your account, and ask them to register an iOS device, simply click on the "Testers" tab at the top, then click on "Add Testers", fill the details and submit. Make sure "Send email" checkbox is checked.

To re-invite a tester to a specific build, and tell the system to send another email, open the project and the specific build you want to invite testers to, then click "Distribution" and select "Invite testers by email". In the list below you will see the tester you want to re-invite. Just check the checkmark next to their name, and click "Invite selected testers". Again, please make sure you have "Send email" checkbox checked.

[Back to top](#top)

### <a name="what-is-apk"></a>What is an APK?

APK stands for Android PacKage. Simply put, it's a .zip file with a different extension and it contains all the files of the app. Compilation process results with an APK, and this can be installed on physical Android devices or emulators.

The .APK file contains many files, these can be viewed with an archiver such as WinZIP, WinRAR or The Unarchiver.

[Back to top](#top)

### <a name="what-is-instrumentation"></a>What is "instrumentation" ?

Instrumentation is process where code is added into an existing program (or app) in order to monitor, trace, benchmark and debug.

TestFairy uses instrumentation in Android to provide the app developer with a wide range of monitoring capabilities without the need to write a single line of code.

This procedure is done in real-time during an upload of an APK file. During the process, TestFairy will add instructions to monitor calls to (for example) startActivity, GPS location updates, audio record buffer callbacks and others. Each can be enabled and disabled by the developer when uploading a build, using the checkboxes customizations. 

[Back to top](#top)

### <a name="android-archs"></a>Which architectures are supported?

TestFairy supports every architecture Android platform supports. This includes ARM, x86 and mips.

[Back to top](#top)

### <a name="android-keyboard"></a>Where is the keyboard in the captured video?

TestFairy captures the screen display generated by your app. In Android, the keyboard belongs to another process, and is rendered onto the screen using a system service.

This means that TestFairy (nor your app,) has access to the pixels or what is being rendered by that process. TestFairy will not be able to record another process's video display.

If your app is a keyboard service itself, you will only see the keyboard, and not the app that is using it. For the exact same reason.

[Back to top](#top)

### <a name="android-no-videos"></a>Why isn't TestFairy recording any videos?

When uploading an APK via the web interface, TestFairy can automatically use instrumentation, and add our SDK to your app. This is very useful for Product and QA Managers who don't have access to the code or can change it. With instrumentation, there is no SDK to integrate. However, TestFairy cannot instrumented in cases of multidex or instant-run. For these, you will have to integrate the SDK.

[Back to top](#top)

### <a name="ios-archs"></a>Which architectures are supported?

TestFairy iOS SDK supports the following architectures (CPUs):

* ARMv7
* ARMv7s
* ARM64
* i386 (simulator)
* x86_64 (simulator)
* BITCODE

[Back to top](#top)

### <a name="ios-platforms"></a>Which iOS platforms are supported?

TestFairy SDK is a static library, thus it runs on any platform that uses XCode for compilation. For ease of integration, TestFairy is also available as:

* Cocoapods
* Xamarin binding (both 32-bit and 64-bit)
* .NET assembly (.DLL)
* .NET assembly via NuGET package
* Xamarin binding through Xamarin Component Store
* Unity plugin
* Adobe Air Extension (.ANE)
* PhoneGap / Cordova plugin
* Titanium 
* React-Native

[Back to top](#top)

### <a name="ios-sdk-required"></a>Am I required to use the TestFairy SDK?

TestFairy platforms is for both distribution and for analytics. You can use both, and you can also use just one of them.

App distribution does not require integration of the TestFairy SDK and provides an easy-to-use platform for sending iOS IPA files to testers and colleagues in your enterprise. Simply upload an Ad Hoc or Enterprise signed IPA files and send e-mail invitation to the selected testers.

Analytics require integration of the SDK. This is a 2-minutes task and it involves adding just a single line of code to your project. With analytics enabled, you will able to see a video recording when your app is being used, as well as receive logs from the device, analyse usage by checkpoints or loading of view controllers and much much more. For more information, please follow the [integration manual](http://docs.testfairy.com/iOS_SDK/Integrating_iOS_SDK.html).

[Back to top](#top)

### <a name="ios-app-could-not-be-installed"></a>How do I fix "App could not be installed at this time"?

**"App could not be installed at this time"** is a generic error when iOS cannot install the download app on the device. The reasons vary, and may be one of these:

* Device's UDID is not included in the provisioning profile.
* Not enough disk space on device to install.
* Device's architecture (eg. ARMv7) is not supported by the app.
* Device's operating system version (eg. 7.0) is too low for the app.
* Device's platform mismatches (eg. iPad app on an iPhone.)
* Enterprise team not included in prefix in embedded.mobileprovision file.
* App is not signed with an Ad Hoc or Enterprise (in-house) certificate.

TestFairy has a **Troubleshooting** tool to guide the tester or developer through the debugging of such problems. Simple visit https://my.testfairy.com/my/troubleshooting using Safari on your iOS device and follow the instructions. 

If all fails, please contact support by click on **Support** button in your account page. We do our best to help debug causes and improve our one-of-a-kind Troubleshooting tool.

[Back to top](#top)

### <a name="ios-whats-user-1"></a>Why do I see sessions by "User-1"?

When using the TestFairy iOS SDK, all sessions are anonymous. Without access to device information, TestFairy cannot tell what's the email address of the tester.

It *does* know to associate sessions by the same testers to the same User-1. Using a token that is stored when the first session was created, TestFairy can identify sessions by the same tester.

Furthermore, TestFairy support ***correlationId***. This identifier is any string that makes sense to the developer (you). It can be an email address of the tester, their Facebook id number, or an identifier in your own database. Using the SDK, simply call `[TestFairy setCorrelationId:@"my-id-00000000"];`, and this identifier will show in all reports, instead of the generic User-1 values. Use this correlationId as you see fit.

[Back to top](#top)

### <a name="ios-app-icon-disappears"></a>Why does app icon disappear right after download?

When downloading an iOS app, the iOS operating system will show a progress during downloading and installation. This progress looks like an analog clock, an empty circle becoming full.

After installation completes, the system then looks if the app being installed, is alread installed on the device. If it does, it replaces the old app, with the version recently downloaded. You may have this app icon in a different screen tab, or maybe inside a folder. 

Tip: Pull down the view to reveal the Spotlight search dialog. You can type the name of the app, and it will locate it on your device, regardless of screen tab or folder.

[Back to top](#top)

### <a name="ios-symbol-not-found"></a>Why linking fails with `ld: symbol(s) not found for architecture arm64`?</a>

On various Xcode project configurations, you might be receiving the following error when linking with TestFairy:

```
"_OBJC_CLASS_$_TestFairy", referenced from:
ld: symbol(s) not found for architecture arm64
```

For those projects, please add `libTestFairy.a` as a framework in your Build Settings.

### <a name="ios-bitcode-error"></a>What's "You must rebuild it with bitcode enabled (Xcode setting ENABLE_BITCODE)" error?

Xcode7 introduced a new feature (virtual architecture) called `Bitcode`. This is a short for LLVM Bitcode, which is a virtual machine architecture Xcode uses as an intermediate platform for compilation. Instead of compiling apps to armv7, armv7s, arm64 - Xcode can now create a single architecture and the AppStore will generate optimized binaries for mobiles. This will greatly reduce the IPA filesize as an iPhone6+ user won't be downloading the binaries needed for iPhone4 and vice-versa.

To compile an app with `bitcode`, it is required that all libraries and frameworks used will have bitcode enabled as well. Alternatively, you can disable ENABLE_BITCODE in your Xcode project. As of October 2015, it is not required by Apple for app submittion, but might be required in the future.

TestFairy iOS SDK version 1.5.0 has bitcode flag enabled and solves this problem. Simply upgrading the SDK will resolve this error in compilation. 

[Back to top](#top)


