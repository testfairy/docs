The TiTestFairy Module extends the Appcelerator Titanium Mobile framework, with the TestFairy Android and iOS SDKs. The TestFairy SDK enables integration with TestFairy to give you a better understanding of how your app performs on real devices. It tells you when and how people are using your app, and provides you with any metric you may need to optimize your user experience and code.

## Installation

* Simply add the following lines to your `tiapp.xml` file:
```xml
<modules>
	<module platform="iphone">com.testfairy.titestfairy</module>
</modules>
```

* Download the [latest release.](https://github.com/testfairy/ti.testfairy/releases/latest/)
  * Be sure to either download either the Android (com.testfairy.titestfairy-android-2.1.3.zip) or the iOS (com.testfairy.titestfairy-iphone-2.1.3.zip) depending on the platform you're targeting.

* Add the module to your Titanium Mobiles
  - “Help” -> "Install Mobile Module..."
  - or by unzipping the contents of the module zip file into your `Titanium/modules/iphone` or `Titanium/modules/android` folders.

* Include the module in your code and use it:

```javascript
	var TiTestFairy = require('com.testfairy.titestfairy');
	TiTestFairy.begin("<APP TOKEN>");
```

NOTE: Replace 'APP TOKEN' with your token, which can be found in the [user preferences page](https://app.testfairy.com/settings/#app-token).

For more detailed code examples take a look at our [example app](https://github.com/testfairy/ti.testfairy/blob/feat-readme/example/app.js).

## Usage

### Identifying your users

See the [SDK Documentation](https://docs.testfairy.com/SDK/Identifying_Your_Users.html#titanium) for more information.

### Session Attributes

See the [SDK Documentation](https://docs.testfairy.com/SDK/Session_Attributes.html#titanium) for more information.

### Remote Logging

See the [SDK Documentation](https://docs.testfairy.com/SDK/Remote_Logging.html#titanium) for more information.

## Reference

`TiTestFairy.version;` - Returns the version of the TestFairy SDK.

`TiTestFairy.setCorrelationId(correlationId)` - Sets an identifier that can be looked up through dashboard.

`TiTestFairy.pushFeedbackController()` - Present a feedback dialog to the user.

`TiTestFairy.sendUserFeedback(string)` - Send a feedback on behalf of the user. Call when using a in-house feedback view controller with a custom design and feel. Feedback will be associated with the current session.

`TiTestFairy.updateLocation(locations)` - Mark geo location at this point (to be used with `navigator.geolocation.getCurrentPosition`).

`TiTestFairy.checkpoint(checkpointName)` - Mark a checkpoint in session.

`TiTestFairy.pause()` - Pauses the current session until resume() is called.

`TiTestFairy.resume()` - Resumes a paused session.

`TiTestFairy.sessionUrl()` - Returns the address of the recorded session on TestFairy's developer portal. Will return nil if recording has not started yet.

`TiTestFairy.takeScreenshot()` - Takes a screenshot.
