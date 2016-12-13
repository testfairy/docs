### Version 1.8.1
Released 2016-12-13

* [NEW] Improved startup time
* [NEW] Detect button and table cell selections
* [NEW] Improved feedback experience

### Version 1.8.0
Released: 2016-08-25

* [BUGFIX] Improve SDK startup time
* [BUGFIX] Send screenshots during feedback on iPads
* [BUGFIX] Send Correlation ID before or after `begin` is invoked

### Version 1.7.9
Released: 2016-07-20

* [BUGFIX] Hide keyboard when submitting feedback
* [BUGFIX] Fixed leaking ViewController references
* [BUGFIX] Remove `SCRCException` messages from log

### Version 1.7.8
Released: 2016-06-28

* [NEW] Added setScreenName 
* [NEW] Screen name is sent with every user feedback
* [BUGFIX] Hide keyboard when feedback is sent
* [BUGFIX] In rare cases, crashes before session started recording, were lost.

### Version 1.7.6
Released: 2016-05-31

* [NEW] Added `[TestFairy setScreenName]` which allows developers to give screenshots a custom name
* [BUGFIX] Added upload-dsym.sh to cocoapods
* [BUGFIX] Fixed crashing on `begin` when certain dependencies were found

### Version 1.7.4
Released: 2016-04-07

* [NEW] When dismissing the 'Update Available' dialog, session will be recorded on old build

### Version 1.7.2
Released: 2016-04-01

* [NEW] Optimized network performance and reduced battery consumption
* [NEW] Notifications upon device shake, feedback dialog shown, feedback sent, and feedback dialog dismissed
* [NEW] A timeline event when switching UIViewControllers
* [BUGFIX] Fixed slowness when initializing SDK on certain UIKit apps

### Version 1.7.0
Released: 2016-03-16

* [BUGFIX] Prevent crashes during keyboard rendering
* [BUGFIX] Fixed a race-condition when rendering keyboard in video

### Version 1.6.7
Released: 2016-03-10

* [BUGFIX] Fixed didViewAppear from not being called

### Version 1.6.6
Released: 2016-03-08

* [NEW] Grab HTTP status code from monitored network requests
* [NEW] Show events in TestFairy when a new UIViewController appears 
* [NEW] Added option `TFSDKEnableCrashReporterKey` to disable crash handler
* [BUGFIX] Protect against multiple calls to `[TestFairy begin]`
* [BUGFIX] Fixed `CLTilesManagerClient` warnings in logs

### Version 1.6.4
Released: 2016-02-15

* [BUGFIX] Removed dependency on WKWebView framework

### Version 1.6.2
Released: 2016-02-11

* [NEW] Support hiding DOM elements in WKWebView
* [NEW] Added a popup message when a feedback has successfully been sent

### Version 1.6.0
Released: 2016-01-25

* [NEW] Monitor network requests and traffic
* [NEW] Hide elements within a UIWebView using CSS selectors
* [NEW] Inspect UI view hierarchy in screenshots
* [NEW] Collect Intercom log events and user registrations
* [NEW] Set alternative server endpoint for on-premise hosting
* [BUGFIX] Fixed shake for feedback detection
* [BUGFIX] Fixed crashes during screenshots

### Version 1.5.7
Released: 2015-12-07

* [NEW] Users can now draw on a screenshot when submitting a feedback.

### Version 1.5.6
Released: 2015-11-09

* [NEW] Users can now input their email address when filing a feedback.
* [BUGFIX] Added "extern" for trait key constants for ObjC++.

### Version 1.5.5
Released: 2015-11-05

* [NEW] Added constants for identifying users. Available traits include name, gender, birthday, phone number, signup date and age.
* [NEW] Custom attributes can also be assigned to sessions. Please visit the relevant reference document.
 
### Version 1.5.3
Released: 2015-10-26

* [NEW] Improve shake-for-feedback detection accuracy.
* [NEW] Added `identify:` and `identify:traits:` for identifying your users.

### Version 1.5.2
Released: 2015-10-25

* [BUGFIX] Fixed BITCODE when using with App Thinning.
* [BUGFIX] Fixed warnings regarding precompiled headers.

### Version 1.5.0
Released: 2015-10-01

* [NEW] Support BITCODE.
* [NEW] Support for Appcelerator Titanium.
* [BUGFIX] Crash handler fixes and support for iOS 9.
* [BUGFIX] Support paths with spaces in upload-dsym.sh script.
* [BUGFIX] Changed parameter name of begin from `apiKey` to `appToken`.
* [BUGFIX] Fixed rendering keyboard in video under iOS 9.

### Version 1.4.8
Released: 2015-08-13

* [BUGFIX] Better handling modal controllers when creating video.

### Version 1.4.6
Released: 2015-07-16

* [BUGFIX] Fixed crash when launching XCode 7 simulator in 64-bit mode.

### Version 1.4.5
Released: 2015-07-14

* [NEW] App responsiveness, measure how occupied is the main thread.
* [NEW] Get main thread's stack trace if thread is unresponsive.
* [NEW] Custom gestures for in-app feedback, such as two-fingers swipe left.
* [UPDATE] In-app feedback dialog is now a pushed ViewController, and not just a view.
* [BUGFIX] Handles iOS 8 orientations better.
* [BUGFIX] Fixed race condition crashes when events are added via off-main thread.

### Version 1.4.4
Released: 2015-05-07

* [NEW] New method `version` returns human readable version code, such as @"1.4.4".
* [NEW] Notification callback when session started, [see example](http://blog.testfairy.com/testfairy-loves-xamarin-insights/).
* [BUGFIX] Better detection of Xamarin framework.

### Version 1.4.2
Released: 2015-04-20

* [NEW] Added `sendUserFeedback` method for custom-implementation of feedback dialog.

### Version 1.4.0
Released: 2015-03-25

* [NEW] Capture screenshots programmatically with [`takeScreenshot`](https://app.testfairy.com/reference/ios/Classes/TestFairy.html#//api/name/takeScreenshot) method.
* [NEW] `TFLog()` and `TFLogv()` for remote logging.
* [BUGFIX] Support spaces in project names in upload-dsym.sh.
* [BUGFIX] Moved cpu and memory samplers off main thread.

### Version 1.3.7
Released: 2015-03-17

* [BUGFIX] Renamed symbol `kNetworkReachabilityChangedNotification` to avoid collision.

### Version 1.3.5
Released: 2015-03-01

* [BUGFIX] Fixed feedback dialog orientation under iOS 8.
* [BUGFIX] Removed symbols that were exported from other SDKs as well.

### Version 1.3.4
Released: 2015-02-19

* [BUGFIX] Fixed race-condition in iOS 6.0.

### Version 1.3.0
Released: 2015-02-09

* [BUGFIX] Fixed random crash when rendering keyboard in video.
* [BUGFIX] Find the right window to record in multi-window apps.
