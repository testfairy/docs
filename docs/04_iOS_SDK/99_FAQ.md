<a name="top"></a>

* [My app crashes while offline, will I get the report?](#crashes-offline)
* [Will crashes be caught even after session stopped recording?](#crashes-after-stop)
* [Which architectures are supported?](#ios-archs)
* [Which iOS platforms are supported?](#ios-platforms)
* [Am I required to use the TestFairy SDK?](#ios-sdk-required)
* [How do I fix "App could not be installed at this time"?](#ios-app-could-not-be-installed)
* [Why do I see sessions by "User-1"?](#ios-whats-user-1)
* [Why does app icon disappear right after download?](#ios-app-icon-disappears)
* [Why linking fails with `ld: symbol(s) not found for architecture arm64`?](#ios-symbol-not-found)
* [What's "You must rebuild it with bitcode enabled (Xcode setting ENABLE_BITCODE)" error?](#ios-bitcode-error)
* [Push notifications work when installed from Xcode, but not with TestFairy. Why?](#ios-push-notificatios-xcode)
* [What is the difference between in-house and enterprise certificates?](#ios-in-house-or-enterprise)

### <a name="crashes-offline"></a>My app crashes while offline, will I get the report?

Yes.

TestFairy keeps crashes on disk if it can't send them immediately. The next time the app runs, TestFairy will send out the saved crash reports and attach them to the appropriate sessions.

### <a name="crashes-after-stop"></a>Will crashes be caught even after session stopped recording?

Yes.

Session max-duration controls how much of the session will be recorded. Many developer won't be interested in video recording beyond the first 10 minutes. Crashes are caught regardless the max-duration limit.

In cases when the crash happened beyond the max-duration limit, the report will be attached to the session that was recorded.

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

[Back to top](#top)

### <a name="ios-bitcode-error"></a>What's "You must rebuild it with bitcode enabled (Xcode setting ENABLE_BITCODE)" error?

Xcode7 introduced a new feature (virtual architecture) called `Bitcode`. This is a short for LLVM Bitcode, which is a virtual machine architecture Xcode uses as an intermediate platform for compilation. Instead of compiling apps to armv7, armv7s, arm64 - Xcode can now create a single architecture and the AppStore will generate optimized binaries for mobiles. This will greatly reduce the IPA filesize as an iPhone6+ user won't be downloading the binaries needed for iPhone4 and vice-versa.

To compile an app with `bitcode`, it is required that all libraries and frameworks used will have bitcode enabled as well. Alternatively, you can disable ENABLE_BITCODE in your Xcode project. As of October 2015, it is not required by Apple for app submittion, but might be required in the future.

TestFairy iOS SDK version 1.5.0 has bitcode flag enabled and solves this problem. Simply upgrading the SDK will resolve this error in compilation.

[Back to top](#top)

### <a name="ios-push-notificatios-xcode"></a>Push notifications work when installed from Xcode, but not with TestFairy.
Why?

TestFairy's SDK does not make any changes to your executable or IPA. A very common problem we have been seeing, is that developers make a mistake and develop using sandbox, and release using production aps environment. Please make sure your configuration is the same for production and adhoc/in-house releases.

[Back to top](#top)

### <a name="ios-in-house-or-enterprise"></a>What is the difference between in-house and enterprise certificates?

These two are the same. When exporting an IPA from within Xcode, you export for Enterprise Development, but in some cases on iTunes Connect, this is refered as In-House.

[Back to top](#top)
