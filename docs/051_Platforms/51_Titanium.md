Skip to content
This repository
Search
Pull requests
Issues
Gist
 @yairba
 Unwatch 5
  Star 0
 Fork 2 testfairy/docs
 Code  Issues 0  Pull requests 0  Projects 0  Pulse  Graphs  Settings
Branch: master Find file Copy pathdocs/docs/05_Integrations/10_Titanium.md
a84435f  on Aug 11, 2016
@gmegidish gmegidish Replaced APP_API with APP TOKEN
1 contributor
RawBlameHistory     
50 lines (30 sloc)  2.29 KB
The TiTestFairy Module extends the Appcelerator Titanium Mobile framework with the TestFairy Android and iOS SDKs. The TestFairy SDK allows integration with TestFairy to give you a better understanding of how your app performs on real devices. It tells you when and how people are using your app, and provides you with any metric you need to optimize for better user experience and better code.

Installation

Simply add the following lines to your tiapp.xml file:
<modules>
    <module platform="iphone">com.testfairy.titestfairy</module> 
</modules>
Download the latest release.

Add the module to your Titanium Mobiles

“Help” -> "Install Mobile Module..."
or by unzipping the contents of the module zip file into your Titanium/modules/iphone or Titanium/modules/android folders.
Include the module in your code and use it:

    var TiTestFairy = require('com.testfairy.titestfairy');
    TiTestFairy.begin("<APP TOKEN>");
NOTE: Replace 'APP TOKEN' with your token, taken from the user preferences page.

For more detailed code examples take a look at the example app.

Reference

TiTestFairy.version; - Returns the version of the TestFairy SDK.

TiTestFairy.setCorrelationId(correlationId) - Set an identifier that can be looked up through dashboard.

TiTestFairy.pushFeedbackController() - Present a feedback dialog to the user.

TiTestFairy.sendUserFeedback(string) - Send a feedback on behalf of the user. Call when using a in-house feedback view controller with a custom design and feel. Feedback will be associated with the current session.

TiTestFairy.updateLocation(locations) - Mark geo location at this point (to be used with navigator.geolocation.getCurrentPosition).

TiTestFairy.checkpoint(checkpointName) - Mark a checkpoint in session.

TiTestFairy.pause() - Pauses the current session until resume() is called.

TiTestFairy.resume() - Resumes a paused session.

TiTestFairy.sessionUrl() - Returns the address of the recorded session on TestFairy's developer portal. Will return nil if recording not yet started.

TiTestFairy.takeScreenshot() - Takes a screenshot.
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
