### Version 1.29.3
Released 2021-09-23

* [BUGFIX] Return value from map when using `TestFairySelectFeedbackFormField`

### Version 1.29.2
Released 2021-06-14

* [NEW] Support Turkish, German, Dutch and French
* [BUGFIX] Identify Firebase Crashlytics crashes.

### Version 1.29.1
Released 2021-05-18

* [BUGFIX] Edge-case crashing around shaking for feedback

### Version 1.29.0
Released 2021-05-11

* [NEW] Removed usage of `identifierForVendor `

### Version 1.28.7
Released 2021-04-27

* [BUGFIX] Fix simulator compilation error `___llvm_profile_runtime `

### Version 1.28.6
Released 2021-04-26

* [BUGFIX] Fix crashes with touches after calling stop
* [NEW] Minimum Xcode support set to 12

### Version 1.28.5
Released 2021-04-13

* [BUGFIX] Save Custom Feedback form values when capturing screenshots
* [BUGFIX] Remove session attributes from feedback validation

### Version 1.28.4
Released 2021-04-08

* [BUGFIX] File integrity of files attached with `attachFile`

### Version 1.28.3
Released 2021-04-05

* [BUGFIX] Set cursor to beginning of the placeholder in custom feedback TextAreas.
* [BUGFIX] Fix crashing with TextAreas in custom feedback.
* [BUGFIX] Set default values for TextArea and Spinner selections in custom feedbacks
* [NEW] Move feedback capture icon anywhere on screen.

### Version 1.28.2
Released 2021-03-18

* [NEW] Allow moving the record button when capturing screenshots for feedback
* [BUGFIX] Improved double tap detection

### Version 1.28.1
Released 2021-03-08

* [NEW] Minor speed improvements
 
### Version 1.28.0
Released 2021-03-03

* [NEW] Add Custom Field support in Feedback Form. See [Documentation](https://docs.testfairy.com/FAQ/Feedback_Form_Customizations.html) for more information
* [NEW] Add Feedback verification through `TestFairyFeedbackVerifier`
 
### Version 1.27.4
Released 2021-02-22

* [NEW] Dark Theme Support for Feedback

### Version 1.27.3
Released 2021-02-17

* [NEW] Added feedback content interceptor. Get a callback before a feedback is sent to server, and modify content or attributes if needed.

### Version 1.27.2
Released 2021-02-08

* [NEW] Added new `setTestFairyFeedbackOptions` which allows more ways to control the feedback form.
* [BUGFIX] Crash when device is shaken for feedback, but there's already an alert displayed. 

### Version 1.27.1
Released 2021-01-28

* [NEW] Support XCFramework and Swift Package Manager

### Version 1.27.0
Released 2021-01-18

* [NEW] Strip `armv7s` support

### Version 1.26.9
Released 2020-12-14

* [NEW] Understand which elements are hidden from screenshots in recorded session

### Version 1.26.8
Released 2020-11-23

* [NEW] Optimized rendering for Flutter

### Version 1.26.7
Released 2020-11-09

* [B UGFIX] Record overlay windows
* [BUGFIX] Fix log timestamp

### Version 1.26.6
Released 2020-10-27

* [BUGFIX] Shake handler and crash handler no longer installed when using `sendUserFeedback` with app token
* [BUGFIX] Improve bandwidth usage

### Version 1.26.5
Released 2020-10-14

* [BUGFIX] Do not install shake and crash handlers when calling `setUserFeedback` with app token

### Version 1.26.4
Released 2020-10-10

* [BUGFIX] Minor fix related to viewtree that includes a hidden view

### Version 1.26.3
Released 2020-10-07

* [NEW] Support capturing React Native touches

### Version 1.26.2
Released 2020-09-30

* [NEW] Perform email validation if email is mandatory in Feedback

### Version 1.26.1
Released 2020-09-14

* [NEW] Added `takeScreenshot` API with callback for captured image
* [NEW] Added `addUserInteraction` API to log interaction events on session timeline

### Version 1.26.0
Released 2020-09-07

* [BUGFIX] Fixed a bug when keyboard would tap slow
 
### Version 1.25.6
Released 2020-09-03

* [BUGFIX] Sending events relative to start time

### Version 1.25.5
Released 2020-08-27

* [NEW] Added `installFeedbackHandler` API. Allows for installing shake for feedback without recording session insights
* [NEW] Added new `addNetwork` API which allows passing in the request and response headers and body.

### Version 1.25.4
Released 2020-08-20

* [BUGFIX] Fixed crashes with events sent after session recording duration reached
* [BUGFIX] Sending events relative to start time

### Version 1.25.3
Released 2020-08-12

* [NEW] Improve screenshot capture for flutter

### Version 1.25.2
Released 2020-07-29

* [NEW] See taps handled on newly created UIWindows.
* [IMPROVEMENT] Improved timeline and events to understand app usage better.

### Version 1.25.1
Released 2020-07-19

* [NEW] Added new API `setFeedbackOptions`

### Version 1.25.0
Released 2020-07-15

* [BUGFIX] Fix video recording when Intercom window is visible

### Version 1.24.4
Released 2020-06-23

* [NEW] Added `setEncryptionPolicy` which allows you to control whether logs, or screenshot are encrypted

### Version 1.24.3
Released 2020-05-11

* [NEW] Support PencilKit if PencilKit.framework is included in app

### Version 1.24.2
Released 2020-04-01

* [BUGFIX] Ignore permissions when stripping architectures

### Version 1.24.1
Released 2020-03-17

* [BUGFIX] Hide hidden views from Timeline

### Version 1.24.0
Released 2020-03-08

* [NEW] Updated Feedback form
* [NEW] Introduced new API for requesting feedback with `startFeedback:intent:`. 

### Version 1.23.1
Released 2020-03-03

* [BUGFIX] Improved logging in SDK for debugging

### Version 1.23.0
Released 2020-02-27

* [NEW] Added `sendUserFeedback` with App token to send feedback without recording a session
* [BUGFIX] Fixed adaptive screen recording feature

### Version 1.22.1
Released 2020-02-24

* [BUGFIX] Layout in Feedback view
* [BUGFIX] Screenshot interval

### Version 1.22.0
Released 2020-02-05

* [NEW] Fixed Feedback View Interaction
* [BUFIX] Target Xcode 10.2

### Version 1.21.2
Released 2020-01-29

* [NEW] Added new API `addScreenshot`

### Version 1.21.1
Released 2020-01-21

* [BUGFIX] Fixed sending events when app is in background

### Version 1.21.0
Released 2019-12-16

* [NEW] `showFeedbackForm` with SDK token, optionally adding screenshot

### Version 1.20.9
Released 2019-12-02

* [BUGFIX] Fixed showing feedback view on iOS 12+

### Version 1.20.8
Released 2019-11-24

* [BUGFIX] Fix delayed feedback view presentation

### Version 1.20.7
Released 2019-11-19

* [BUGFIX] Allow users creating app-store releases to include `upload-dsym.sh` without `ITMS-90035` error.

### Version 1.20.6
Released 2019-11-18

* [NEW] Replace usage of `UIAlertView` with `UIAlertController`
* [BUGFIX] Show window based Feedback on iOS 13+

### Version 1.20.5
Released 2019-11-11

* [NEW] Include new `strip-architectures.sh` script

### Version 1.20.4
Released 2019-10-28

* [BUGFIX] Fixed order of events and screenshots in session timeline

### Version 1.20.3
Released 2019-10-23

* [NEW] Added `unhideView` API

### Version 1.20.2
Released 2019-10-10

* [BUGFIX] Fix associating session attributes with crash report

### Version 1.20.1
Released 2019-09-04

* [NEW] Removed support for hiding HTML elements from UIWebView. Only WKWebView is supported

### Version 1.20.0
Released 2019-07-31

* [NEW] Added `disableAutoUpdate`

### Version 1.19.9
Released 2019-07-22

* [BUGFIX] Better crash reports for ARM64e architectures

### Version 1.19.8
Released 2019-07-07

* [NEW] Added `[TestFairy crash]` for testing purposes.
* [BUGFIX] Handle empty status codes during network capturing

### Version 1.19.7
Released 2019-06-23

* [BUGFIX] Set fullscreen presentation mode for iOS 13 on Feedback Views
* [BUGFIX] Disable rendering screenshots on view controller animations

### Version 1.19.6
Released 2019-06-17

* [BUGFIX] Removed legacy code

### Version 1.19.5
Released 2019-06-06

* [NEW] Support for end-to-end encryption using RSA public key. Please see [docs](https://docs.testfairy.com/Security/End_to_End_Data_Encryption.html).
* [NEW] TestFairy Network support added see [Log Network](https://docs.testfairy.com/iOS_SDK/Log_Network.html).
* [BUGFIX] Calling `setUserId` after `stop` will send user ID to new session.

### Version 1.19.4
Released 2019-04-18

* [NEW] Initialize the TestFairy SDK with only crash handling with `[TestFairy installCrashHandler:]`
* [NEW] Allow for logging errors and stacktraces with `[TestFairy logError:stacktrace:]`
* [BUGFIX] Move UI calls for rendering keyboard off the render thread and onto main thread

### Version 1.19.3
Released 2019-03-26

* [NEW] Added `addNetwork` network monitoring interface. See [Class reference](https://app.testfairy.com/reference/ios/Classes/TestFairy.html) for more information.

### Version 1.19.2
Released 2019-03-07

* [BUGFIX] CPU peaking at 100% with video recording
* [BUGFIX] Hide keyboard from video recording under certain circumstances

### Version 1.19.1
Released 2019-03-03

* [NEW] Display Feedback on new window instead of on the current hierarchy.

### Version 1.19.0
Released 2019-01-31

* [NEW] Observe session state with `setSessionStateDelegate`
* [BUGFIX] Removed calls to `__NSCFURLLocalSessionConnection` and `__NSCFURLSessionConnection`.

### Version 1.18.1
Released 2018-11-27

* [BUGFIX] Handle language changes

### Version 1.18.0
Released 2018-11-12

* [NEW] New Feedback View
* [NEW] Support for Portuguese and Spanish
* [NEW] Support for `getDistributionStatus`
* [BUGFIX] Feedback timestamp in session dashboard

### Version 1.17.0
Released 2018-09-10

* [BUGFIX] Display Feedback form when an Action Sheet is on screen

### Version 1.16.3
Released 2018-09-03

* [BUGFIX] Minor security patch

### Version 1.16.2
Released 2018-08-13

* [BUGFIX] Include missing metadata when starting new session

### Version 1.16.1
Released 2018-08-12

* [BUGFIX] Include more meta-data when starting new session.

### Version 1.16.0
Released 2018-07-30

* [BUGFIX] setServerEndpoint stopped working under certain conditions. Now fixed.

### Version 1.15.1
Released 2018-07-05

* [BUGFIX] Remove logging of hidden views to console.
* [BUGFIX] Fix session attributes in case of crash or feedback with no active session.

### Version 1.15.0
Released 2018-06-14

* [NEW] Programmatically control recorded parameters with new methods `enableCrashHandler`/`disableCrashHandler`, `enableMetric`/`disableMetric`, `enableVideo`/`disableVideo`, `enableFeedbackForm`/`disableFeedbackForm`, `setMaxSessionLength`. See [Class Reference](/iOS_SDK/Class_Reference.html) for more information.

### Version 1.14.0
Released 2018-05-22

* [NEW] Added new API method `didLastSessionCrash`
* [BUGFIX] Fixed auto update dialog loop

### Version 1.13.4
Released 2018-05-09

* [NEW] Programmatically enabled/disable feedback form
* [BUGFIX] Warnings related to UI thread-only method calls

### Version 1.13.3
Released 2018-04-26

* [BUGFIX] Fixed integration problems in projects with Firebase/Performance kit
* [BUGFIX] Fixed detection of exceptions caught under latest Crashlytics version

### Version 1.13.2
Released 2018-04-20

* [NEW] Allow for shortened url in `setServerEndpoint`
* [BUGFIX] Fix hidden views with secure entry
* [BUGFIX] Improved startup time
* [BUGFIX] Exception when non-string type passed into `setUserId`

### Version 1.13.1
Released 2018-03-22

* [NEW] Prompt users for feedback after taking a screenshot!

### Version 1.13.0
Released 2018-03-20

* [NEW] See Battery statistics
* [NEW] See testers that dismiss app updates
* [BUGFIX] Remove hidden views from screenshot tree hierarchy
* [BUGFIX] Hide subviews from screenshots that are outside of parent frame

### Version 1.12.2
Released 2018-01-30

* [BUGFIX] Improved stability around network capture

### Version 1.12.1
Released 2018-01-03

* [NEW] Upload files associated with your session with our new API.
* [NEW] Capture screenshot on crash.

### Version 1.12.0
Released 2017-12-05

* [BUGFIX] Fixed library detection
* [BUGFIX] Limit Feedback collection until session starts

### Version 1.11.1
Released 2017-11-16

* [NEW] Improved bandwidth usage for video recording
* [BUGFIX] Security fixes in video recording
* [BUGFIX] Removed the use of `SCRCException` and `CLTilesManagerClient`

### Version 1.11.0
Released 2017-10-04

* [BUGFIX] Fixed warnings related to Main thread sanitizer

### Version 1.10.2
Released 2017-09-25

* [NEW] Improved Stability and performance around network capture with `NSURLConnection`
* [BUGFIX] Avoid over writing endpoint when `setServerEndpoint` is called

### Version 1.10.1
Released 2017-09-14

* [NEW] Improved Stability and performance
* [NEW] Improve memory management during video capture

### Version 1.10.0
Released 2017-08-02

* [BUGFIX] Fixed minor issue identifying simulators and production apps

### Version 1.9.4
Released 2017-07-17

* [NEW] Add `log` to TestFairy object for remote logging

### Version 1.9.3
Released 2017-07-09

* [NEW] Allow your testers to capture feedbacks while offline
* [NEW] Improved stability while capturing network data
* [NEW] Improved event collection
* [BUGFIX] Improved hidden views in video capture

### Version 1.9.2
Released 2017-06-05

* [NEW] Improved screen capture of web views that include hidden elements
* [BUGFIX] Fixed random crashes in network monitoring
* [BUGFIX] Fixed warnings about minimum sdk version. Now set to 7.0.

### Version 1.9.1
Released 2017-04-11

* [NEW] Use `[TestFairy setUserId]` to tell who is the current user, it will help you to find the user in the TestFairy dashboard
* [NEW] Use `[TestFairy setAttribute]` with key-value to add additional data to the current session
* [BUGFIX] Stability improvements
* [DEPRECATED] `identify` and `setCorrelationId`. These have been replaced with `setAttribute` and `setUserId` resepectively.

### Version 1.9.0
Released 2017-04-04

* [NEW] Updated Feedback View to include screenshot thumbnail
* [BUGFIX] Stability improvements

### Version 1.8.5
Released 2017-03-16

* [BUGFIX] Improvide SDK security

### Version 1.8.4
Released 2017-03-01

* [BUGFIX] Fixed regression allowing `identify` to be called after `begin`

### Version 1.8.3
Released 2017-02-21

* [NEW] New Relic integration
* [BUGFIX] Fixed issue where some screenshots attached during feedback were empty
* [BUGFIX] Reduced the number of network calls made
* [BUGFIX] Fixed toolbar spacing in feedback view controller
* [BUGFIX] Show TestFairy events in session timeline

### Version 1.8.2
Released 2017-01-26

* [NEW] Sessions can be stopped and restarted by invoking [TestFairy stop] and [TestFairy resume] respectively
* [NEW] When using Crashlytics and TestFairy together, you can now easily get to your TestFairy session from Crashlytics with an easy to follow link. You will also see a message in TestFairy on how you can find your stack trace in Crashlytics*
* [NEW] View network connection state on session timeline
* [NEW] View network request error code in session timeline
* [BUGFIX] Improved SDK security

* NOTE: `TestFairy begin` should be called before starting Crashlytics or Fabric

# All SDK versions below are not supported any more by TestFairy

### Version 1.8.1
Released 2016-12-13

* [NEW] Improved startup time
* [NEW] Detect UIButton clicks and table cell selections
* [NEW] Remember tester's email accross feedback submissions
* [BUGFIX] `updateLocations` failed to register coordinates in some cases

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
