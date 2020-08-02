<a name="top"></a>

* [My app crashes while offline, will I get the report?](#crashes-offline)
* [Will crashes be caught even after a session stopped recording?](#crashes-after-stop)
* [Which architectures are supported?](#ios-archs)
* [Which iOS platforms are supported?](#ios-platforms)
* [Am I required to use the TestFairy SDK?](#ios-sdk-required)
* [How do I fix "App could not be installed at this time"?](#ios-app-could-not-be-installed)
* [Why do I see sessions by "User-1"?](#ios-whats-user-1)
* [Why does an app icon disappear right after download?](#ios-app-icon-disappears)
* [Why linking fails with `ld: symbol(s) not found for architecture arm64`?](#ios-symbol-not-found)
* [What's the error "You must rebuild it with bitcode enabled (Xcode setting ENABLE_BITCODE)"?](#ios-bitcode-error)
* [Push notifications work when installed from Xcode, but not with TestFairy. Why?](#ios-push-notificatios-xcode)
* [What is the difference between in-house and enterprise certificates?](#ios-in-house-or-enterprise)
* [Main Thread Checker: UI API called on a background thread: -\[UIView drawViewHierarchyInRect:afterScreenUpdates:\]](#main-thread-checker)

### <a name="crashes-offline"></a>My app crashes while offline, will I get the report?

Yes.

TestFairy keeps crashes on disk if it can't send them immediately. The next time the app runs, TestFairy will send out the saved crash reports and attach them to the appropriate sessions.

### <a name="crashes-after-stop"></a>Will crashes be caught even after a session stopped recording?

Yes.

Session max-duration controls how much of the session will be recorded. Many developers won't be interested in video recording beyond the initial 10 minutes. Crashes are caught regardless of the max-duration limit.

In cases where a crash happens beyond the max-duration limit, the report will be attached to the session, along with the part that was recorded.

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

TestFairy SDK is a static library, therefore it runs on any platform that uses XCode for compilation. For ease of integration, TestFairy is also available as:

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

The TestFairy platform is used for both distribution and for analytics. You can use either both, or just one of them.

App distribution does not require integration of the TestFairy SDK and provides an easy-to-use platform for sending iOS IPA files to testers and colleagues in your enterprise. Simply upload an Ad Hoc or Enterprise signed IPA files and send e-mail invitation to the selected testers.

Using analytics requires integration of the SDK. This is a 2-minute task that involves adding just a single line of code to your project. With analytics enabled, you will able to see a video recording of your app being used, as well as receive logs from the device, analyse usage with checkpoints or loading view controllers and much much more. For more information, please follow the [integration manual](http://docs.testfairy.com/iOS_SDK/Integrating_iOS_SDK.html).

[Back to top](#top)

### <a name="ios-app-could-not-be-installed"></a>How do I fix "App could not be installed at this time"?

**"App could not be installed at this time"** is a generic error when iOS cannot install the download app on the device. The reasons vary, and may be one of these:

* The device's UDID is not included in the provisioning profile.
* Not enough disk space for installation on device.
* The device's architecture (eg. ARMv7) is not supported by the app.
* The device's operating system version (eg. 7.0) is too low for the app.
* The device's platform mismatches (eg. iPad app on an iPhone.)
* Enterprise team is not included in prefix in embedded.mobileprovision file.
* App is not signed with an Ad Hoc or Enterprise (in-house) certificate.

TestFairy has a **Troubleshooting** tool to guide the tester or developer through the debugging of such problems. Simply visit ![https://my.testfairy.com/my/troubleshooting]https://my.testfairy.com/my/troubleshooting using Safari on your iOS device and follow the instructions.

If all this fails, please contact support by click on the **Support** button in your account page. Try to get the [system logs](/iOS_SDK/Exporting_Ad_Hoc_IPA.html#xcode-system-logs) from the device if possible as this makes debugging this sorts of problems a lot easier. We do our best to help debug causes and improve our one-of-a-kind Troubleshooting tool.

[Back to top](#top)

### <a name="ios-whats-user-1"></a>Why do I see sessions by "User-1"?

When using the TestFairy iOS SDK, all sessions are anonymous. Without access to device information, TestFairy cannot tell what's the email address of the tester.

It *does* know how to associate sessions by the same testers to the same "User-1". Using a token that is stored when the first session is created, TestFairy can identify sessions by the same tester.

Furthermore, TestFairy supports ***correlationId***. This identifier is any string that makes sense to the developer (you). It can be an email address of the tester, their Facebook id number, or an identifier in your own database. Using the SDK, simply call `[TestFairy setCorrelationId:@"my-id-00000000"];`, and this identifier will show in all reports, instead of the generic User-1 values. Use this correlationId as you see fit.

[Back to top](#top)

### <a name="ios-app-icon-disappears"></a>Why does an app icon disappear right after download?

When downloading an iOS app, the iOS operating system will show a progress during downloading and installation. This progress looks like an analog clock, an empty circle becoming full.

After installation completes, the system then checks if the app is alread installed on the device. If it does, it replaces the old app with the version recently downloaded. You may have this app icon in a different screen tab, or maybe inside a folder.

Tip: Pull down the view to reveal the Spotlight search dialog. You can type the name of the app, and it will locate it on your device, regardless of screen tab or folder.

[Back to top](#top)

### <a name="ios-symbol-not-found"></a>Why does linking fail with `ld: symbol(s) not found for architecture arm64`?</a>

On various Xcode project configurations, you might receive the following error when linking with TestFairy:

```
"_OBJC_CLASS_$_TestFairy", referenced from:
ld: symbol(s) not found for architecture arm64
```

For those projects, please add `libTestFairy.a` as a framework in your Build Settings.

[Back to top](#top)

### <a name="ios-bitcode-error"></a>What's the error "You must rebuild it with bitcode enabled (Xcode setting ENABLE_BITCODE)"?

Xcode7 introduced a new feature (virtual architecture) called `Bitcode`. This is a short for LLVM Bitcode, which is a virtual machine architecture Xcode uses as an intermediate platform for compilation. Instead of compiling apps to armv7, armv7s, arm64 - Xcode can now create a single architecture and the AppStore will generate optimized binaries for mobiles. This will greatly reduce the IPA filesize as an iPhone6+ user won't be downloading the binaries needed for iPhone4, etc.

To compile an app with `bitcode`, it is required that all libraries and frameworks used will have bitcode enabled as well. Alternatively, you can disable ENABLE_BITCODE in your Xcode project. As of October 2015, it is not required by Apple for app submittion, but might be required in the future.

TestFairy iOS SDK version 1.5.0 has bitcode flag enabled, which solves this problem. Simply upgrading the SDK will resolve this error in compilation.

[Back to top](#top)

### <a name="ios-push-notificatios-xcode"></a>Push notifications work when installed from Xcode, but not with TestFairy.
Why?

TestFairy's SDK does not make any changes to your executable or IPA. A very common problem we have been seeing, is that developers make a mistake and develop using sandbox, and release using a production app's environment. Please make sure your configuration is the same for production and adhoc/in-house releases.

[Back to top](#top)

### <a name="ios-in-house-or-enterprise"></a>What is the difference between in-house and enterprise certificates?

These two are the same. When exporting an IPA from within Xcode, you export for Enterprise Development, but in some cases on iTunes Connect, this is refered as In-House.

[Back to top](#top)

### <a name="main-thread-checker"></a>Main Thread Checker: UI API called on a background thread: -[UIView drawViewHierarchyInRect:afterScreenUpdates:]

Xcode introduced a runtime checker to catch calls to UI method that are only meant to be called from the main thread. Our iOS SDK currently heavily leverages some APIs that fall under this category. If this checker is enabled, you will see a warning in the Console not unlike the one you can see below.

```
Main Thread Checker: UI API called on a background thread: -[UIView drawViewHierarchyInRect:afterScreenUpdates:]
PID: 7067, TID: 6554424, Thread name: (none), Queue name: com.apple.root.utility-qos, QoS: 17
Backtrace:
4   TestApp                             0x0000000104aa70bf -[TFScreenRecorder render:] + 3727
5   TestApp                             0x0000000104aa5a28 __65-[TFScreenRecorder performCreateSavableImageSingleTime:callback:]_block_invoke + 168
6   libdispatch.dylib                   0x000000010c21e7ab _dispatch_call_block_and_release + 12
7   libdispatch.dylib                   0x000000010c21f7ec _dispatch_client_callout + 8
8   libdispatch.dylib                   0x000000010c22b61d _dispatch_root_queue_drain + 1353
9   libdispatch.dylib                   0x000000010c22b076 _dispatch_worker_thread3 + 132
10  libsystem_pthread.dylib             0x000000010c743169 _pthread_wqthread + 1387
11  libsystem_pthread.dylib             0x000000010c742be9 start_wqthread + 13
```

In some cases, developers have enabled the `Pause on issues` option which causes either tests to fail, or Xcode to breakpoint on the line in question. Currently the only workaround is to turn off the `Pause on issues` option in Xcode under the scheme's Run configuration on the Diagnostics tab. You can see the option below.

![alt](/img/ios/sdk/disable-pause-on-issue.png)

[Back to top](#top)
