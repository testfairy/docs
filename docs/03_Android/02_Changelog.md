### Version 1.9.16
Released 2019-10-15

* [IMPROVEMENT] Removed legacy http client dependency.

### Version 1.9.15
Released 2019-10-07

* [BUGFIX] Feedback form would freeze under rare conditions.

### Version 1.9.14
Released: 2019-09-24

* [IMPROVEMENT] Android 10 support.
* [IMPROVEMENT] TestFairy SDK no longer requires external storage permissions for auto-update.
* [BUGFIX] Flutter now shows screenshots in feedback form.
* [BUGFIX] Automatic disabling of screenshots during low memory conditions.

### Version 1.9.13
Released: 2019-08-01

* [BUGFIX] Fixed cases of missing screenshots upon feedback.

### Version 1.9.12
Released: 2019-07-31

* [NEW] Added `TestFairy.disableAutoUpdate()` to be able to ignore new version prompts.
* [IMPROVEMENT] Trying to add audio before begin() now properly shows a warning.
* [BUGFIX] Fixed a bug where dismissing the auto update dialog sometimes caused a crash.
* [BUGFIX] Fixed a crash that occurs when the screen size changes in Unity.

### Version 1.9.11
Released: 2019-07-29

* [NEW] Support for hidden views in Flutter.
* [BUGFIX] Fix for a rare concurrent modification exception in sensors.

### Version 1.9.10
Released: 2019-07-15

* [NEW] New method logThrowable(String stacktrace).
* [BUGFIX] Auto-update dialog is now deferred if app is in background.
* [BUGFIX] Fixed missing sessions after consecutive stop/start calls.
* [BUGFIX] Fixed a crash due to accessibility enabled TextViews.
* [BUGFIX] Shorten long stack traces caused by stack-overflow exception prior to sending.

### Version 1.9.9
Released: 2019-07-03

* [NEW] Added installCrashHandler() to enable TestFairy as a crash handler, without Insights or Feedback.

### Version 1.9.8
Released: 2019-05-29

* [BUGFIX] Support for AppBar in screenshots.

### Version 1.9.7
Released: 2019-04-08

* [NEW] Support for end-to-end encryption using RSA public key. Please see docs.
* [BUGFIX] Added support for Android Q.

### Version 1.9.4
Released: 2019-02-13

* [NEW] Support for sending diagnostic audio recordings using addAudioRecording().

### Version 1.9.3
Released: 2019-02-12

* [IMPROVEMENT] Persistentcy of session attributes.
* [IMPROVEMENT] Handled out of rare memory allocation errors.

### Version 1.9.0
Released: 2019-01-20

* [NEW] New network layer, resulting in a much smaller SDK footprint.
* [BUGFIX] Timestamp for feedbacks sent while offline has been corrected.

### Version 1.8.1
Released: 2018-08-30
* [NEW] New and improved network code.

### Version 1.8.0
Released: 2018-08-19
* [NEW] `TestFairy.getDistributionStatus(...)` to query about the distribution status of this build, [Read More..](https://app.testfairy.com/reference/android/).
* [NEW] Support `org.apache.http.legacy` Android P.
* [IMPROVEMENT] Auto Update will open web browser if package install permissions are missing.

### Version 1.7.6
Released: 2018-07-19
* [NEW] Support adaptive icons for Android O.

### Version 1.7.5
Released: 2018-07-18
* [BUGFIX] Fix a rare crash that was happening on Android O during an auto update if the app has no REQUEST_INSTALL_PACKAGES permission.   

### Version 1.7.4
Released: 2018-06-21
* [NEW] Remove tests layouts files from the SDK.
* [BUGFIX] Fix session attributes in case of crash and no active TestFairy session.

### Version 1.7.3
Released: 2018-06-14
* [NEW] Programmatically enable / disable [Crash Reporting](https://docs.testfairy.com/SDK/Begin_with_options.html#crash-reporting).
* [NEW] Programmatically controll [Video Recording](https://docs.testfairy.com/SDK/Begin_with_options.html#video-recording).
* [NEW] Programmatically controll [Recorded metrics](https://docs.testfairy.com/SDK/Begin_with_options.html#recorded-metrics).
* [NEW] Programmatically controll [Session length](https://docs.testfairy.com/SDK/Begin_with_options.html#max-session-length).
* [NEW] Session attributes will be attached into a crash & feedback even if there is no TestFairy session.


### Version 1.7.1
Released: 2018-05-22
* [NEW] Added new API method `didLastSessionCrash`
* [NEW] Programmatically enabled/disable feedback form

### Version 1.7.0
Released: 2018-05-02

* [BUGFIX] Auto Update bug fix for new Android versions

### Version 1.6.4
Released: 2018-04-09

* [NEW] Developers can programmatically display feedback form using `showFeedbackForm`

### Version 1.6.3
Released: 2018-03-18

* [NEW] Developer can now disable crash handler by using option `enableCrashReporter`.
* [NEW] Views that are out of screen do not make it to Inspect View Tree to improve performance.
* [BUGFIX] Descendants of hidden views do not make it to Inspect View Tree.
* [BUGFIX] Improved `hideView` performance.

### Version 1.6.2
Released: 2018-02-22

* [BUGFIX] hideView performance.

### Version 1.6.1
Released: 2018-02-14

* [BUGFIX] Hidden buttons do not appear in timeline.

### Version 1.6
Released: 2018-02-02

* [BUGFIX] In rare cases, feedback with no screenshot would crash.

### Version 1.5.15
Released: 2018-01-22

* [IMPROVEMENT] TestFairy.log() function can be used even if logcat is disabled in the build settings.

### Version 1.5.14
Released: 2018-01-21

* [NEW] TestFairy Network support added [see Log Network](https://docs.testfairy.com/Android/Log_Network.html).

### Version 1.5.9
Released: 2018-01-10

* [NEW] `TestFairy.logThrowable(Throwable)` added, it will send Throwable to TestFairy. [More information](https://app.testfairy.com/reference/android/)
* [IMPROVEMENT] We improved the video recording during a crash, now you can see the latest frame of your app during and after the crash.
* [IMPROVEMENT] We filter out redundant logs, which will not be sent to the server. This will reduce redundant work from your app.

### Version 1.5.8
Released: 2018-01-07

* [IMPROVEMENT] Performance improvements.
* [IMPROVEMENT] @Deprecated IDENTITY_TRAIT_*


### Version 1.5.7
Released: 2017-12-12

* [BUGFIX] Capture main stacktrace for ANR detection
* [BUGFIX] Handle null Views when calling `hideView`
* [BUGFIX] Add framework detection
* [BUGFIX] Crashes with Auto Update Activity

### Version 1.5.5
Released: 2017-08-28

* [NEW] Upload files associated with your session with our new API.

### Version 1.5.4
Released: 2017-08-13

* [IMPROVEMENT] Performance improvements.
* [IMPROVEMENT] `TestFairy.setServerEndpoint` can get a simple url format (for example "app.testfairy.com").

### Version 1.5.3
Released: 2017-08-02

* [BUGFIX] Minor bug fix for enterprise users when calling `TestFairy.setServerEndpoint`.

### Version 1.5.2
Released: 2017-07-04

* [NEW] Support for offline feedbacks, in case of no connectivity the feedbacks will be stored to disk, it will be sent at the beginning of the next session.
* [NEW] Support for server url redirect (only for private clouds).

### Version 1.5.1
Released: 2017-06-26

* [IMPROVEMENT] Fix gradle build warning

### Version 1.5.0
Released: 2017-05-28

* [BUGFIX] Fix getNetworkInfo crash on Android 7.

### Version 1.4.17
Released: 2017-05-09

* [BUGFIX] Fix video recording for Cordova.

### Version 1.4.16
Released: 2017-04-25

* [IMPROVEMENT] Touch recorder support for android 7
* [IMPROVEMENT] Minor security fixes for Veracode approval

### Version 1.4.15
Released: 2017-04-23

* [NEW] Button clicks will be recorded and visible in session Overview timeline.
* [IMPROVEMENT] User interactions will be recorded even if the view recorder is disabled.
* [BUGFIX] Fix wrong app name issue.

### Version 1.4.14
Released: 2017-04-09

* [New API] Use `TestFairy.setUserId(String userId)` to tell as who is the current user, it will help you to find the user in the TestFairy dashboard. [More information](https://app.testfairy.com/reference/android/).
* [New API] Use `TestFairy.setAttribute(String key, String value)` to add additional data to the current session. [More information](https://app.testfairy.com/reference/android/).
* [BUGFIX] Correlation ID fixes related to session timing and session update.

### Version 1.4.13
Released: 2017-03-06

* [BUGFIX] Fixed WebView screenshot capturing bug (Android 5 or later).

### Version 1.4.12
Released: 2017-03-02

* [BUGFIX] Fix missing logs from some Android 5 devices.

### Version 1.4.10
Released: 2017-02-19

* [NEW] Inspect element will show dialogs and toasts.
* [IMPROVEMENT] Logs will be recorded only after the session started, timestamp and sorting are improved.

### Version 1.4.8
Released: 2017-02-02

* [NEW] Callback when a session has started.

### Version 1.4.7
Released: 2017-01-19

* [BUGFIX] Improved VisualSupport.
* [BUGFIX] Increased buffers to help app with log bursts.

### Version 1.4.6
Released: 2017-01-12

* [NEW] Support for VisualSupport.

### Version 1.4.5
Released: 2016-12-27

* [IMPROVEMENT] Minor performance improvement on inspect element component.

### Version 1.4.4
Released: 2016-12-15

* [IMPROVEMENT] Auto Update is supported for Android 7 and targetSdkVersion > 23 .

### Version 1.4.3
Released: 2016-11-29

* [BUGFIX] Fix sessions that was detected as on background from the first seconds.

### Version 1.4.2
Released: 2016-11-28

* [BUGFIX] Fix a bug related to TextureView screenshot while the app in the background.

### Version 1.4.0
Released: 2016-11-21

* [NEW] We added an API for stopping sessions, so you can stop and restart session according to your own specific logic [See java doc](https://app.testfairy.com/reference/android/).
* [BUGFIX] We fixed a minor memory-leak.

### Version 1.3.11
Released: 2016-11-06

* [BUGFIX] Fix double start session issue

### Version 1.3.10
Released: 2016-10-26

* [IMPROVEMENT] - Auto Update behaviour improved for apps that has services.

### Version 1.3.9
Released: 2016-09-29

* [IMPROVEMENT] When there is no connection and tester tries to send a feedback, an error messgae is shown.
* [IMPROVEMENT] Multiple clicks on the send feedback button will send it only once.
* [BUGFIX] NullPointerException exceptions fixed

### Version 1.3.8
Released: 2016-09-20

* [BUGFIX] Drawing on feedback screenshot will work on devices with disabled animation.

### Version 1.3.7
Released: 2016-09-19

* [NEW] A new session can be created when app is back in foreground.

### Version 1.3.5
Released: 2016-08-30

* [BUGFIX] Feedback module can now be initialized without an existing activity.

### Version 1.3.4
Released: 2016-08-08

* [NEW] Adaptive screenshot interval - When heavy work detected on the UI thread, screenshot interval is increased automatically.


### Version 1.3.3
Released: 2016-08-07

* [BUGFIX] Fix auto update and feedback for React Native.
* [BUGFIX] Fix auto update and feedback for Unity.
* [BUGFIX] Fix auto update and feedback for Adobe Air.
* [BUGFIX] Fix auto update and feedback for Xamarin.
* [BUGFIX] Fix auto update and feedback for PhoneGap/Cordova.
* [BUGFIX] Fix auto update and feedback for Titanium.


### Version 1.3.2
Released: 2016-07-20

* [BUGFIX] Attach screenshot checkbox behaviour

### Version 1.3.1
Released: 2016-07-17

* [NEW] New UI for feedback module.
* [NEW] Added an option to add screenshot to feedbacks and have screenshots sent to JIRA automatically.
* [NEW] Added an option to draw on screenshot.
* [NEW] Feedback now contains screen name (actvity name).
* [NEW] Screen Name (activity name) is now sent to JIRA automatically via API.
* [IMPROVE] Improved Logcat reader performance.

### Version 1.2.10
Released: 2016-06-21

* [NEW] Added confirmation dialog before auto update.
* [BUGFIX] Support for >2GB apk auto-update downloads.
* [BUGFIX] Cancel download during auto update.

### Version 1.2.9
Released: 2016-06-09

* [NEW] Added log() method, to send logs to TestFairy without passing logcat.
* [BUGFIX] Word-wrapping when filing in a feedback.
* [BUGFIX] Changing orientation during 'Would you like to provide feedback' dialog disabled it.
* [BUGFIX] Fixed hints in feedback form under certain Android themes.

### Version 1.2.8
Released: 2016-06-01

* [BUGFIX] Feedback dialog fixed.

### Version 1.2.7
Released: 2016-05-31

* [NEW] `ACCESS_WIFI_STATE` is no longer mandatory, [More information](http://docs.testfairy.com/Android/Integrating_Android_SDK.html#permissions).
* [NEW] Detect sessions recorded from an Android service.
* [NEW] `TestFairy.setScreenName(String screenName)` function added, for more information [SDK reference](http://app.testfairy.com/reference/android/com/testfairy/TestFairy.html#setScreenName(java.lang.String)).
* [NEW] `TestFairy.addEvent(String event)` added to the SDK, `TestFairy.addCheckpoint()` is deprecated.
* [BUGFIX] Session videos are now supported on Android N.

### Version 1.2.5
Released: 2016-05-24

* [BUGFIX] All Proguard warnings are fixed.

### Version 1.2.4
Released: 2016-05-01

* [NEW] Customize feedback form with optional/mandatory email field.
* [NEW] Request callback from feedback form upon success, failure or cancellation.
* [NEW] Optionally configure a URL to open instead of built-in feedback form. [More information](http://docs.testfairy.com/Android/Customizing_feedback_dialog.html).

### Version 1.2.3
Released: 2016-04-24

* [BUGFIX] Fixed memory leak on switching activities.

### Version 1.2.2
Released: 2016-04-21

* [NEW] Auto-update builds if newer is available.
* [NEW] Auto-update detects non-upgradable builds (ie, downloaded from Play Store).
* [NEW] User can decide not to upgrade, and keep sending metrics on old build.
* [BUGFIX] Fixed warnings when using Proguard.

### Version 1.1.0
Released: 2016-04-07

* INITIAL NON-BETA RELEASE.
