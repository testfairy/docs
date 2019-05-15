TestFairy allows developers to log up to 5 exceptions or errors to a given session. **Note**: This does not mark the sessions as crashed, it will only log the exception or error to the session.

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;" href="#android">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-ios" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#ios">
			<div>iOS - Objective C</div>
		</a>
		<a data-w-tab="tab-ios-swift" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#ios-swift">
			<div>iOS - Swift</div>
		</a>
		<a data-w-tab="tab-cordova" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#cordova">
			<div>Cordova</div>
		</a>
		<a data-w-tab="tab-react-native" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#react-native">
			<div>React Native</div>
		</a>
		<a data-w-tab="tab-nativescript" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#nativescript">
			<div>Nativescript</div>
		</a>
	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<b>TestFairy.logThrowable(&lt;throwable exception&gt;);</b><br />
			</p>

			<h3>Code Example</h3>
			<pre>
// Be sure to import TestFairy
import com.testfairy.TestFairy;

TestFairy.logThrowable(new Throwable("Some Message"));
			</pre>
		</div>

		<div data-w-tab="tab-ios" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>[TestFairy logError:&lt;NSError&gt;];</b><br />
				<b>[TestFairy logError:&lt;NSError&gt; stacktrace:&lt;NSArray&lt;NSString&gt;&gt;];</b><br />
			</p>

			<h3>Code Example</h3>
			<pre>
// Be sure to import TestFairy
#import "TestFairy.h"

[TestFairy logError:[NSError errorWithDomain:@"com.your.domain" code:-1 userInfo:@{NSLocalizedDescriptionKey: @"Some Message"}]];
			</pre>
		</div>

		<div data-w-tab="tab-ios-swift" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>TestFairy.logError(&lt;NSError&gt;)</b><br />
				<b>TestFairy.logError(&lt;NSError&gt;, stacktrace:&lt;[String]&gt;)</b><br />
			</p>

			<h3>Code Example</h3>
			<pre>
let error = NSError(domain: "com.your.domain", code: -1, userInfo: [NSLocalizedDescriptionKey : "Some Message"])
TestFairy.logError(error)
			</pre>
		</div>


		<div data-w-tab="tab-cordova" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>TestFairy.logException(&lt;Error&gt;);</b><br />
			</p>

			<h3>Code Example</h3>
			<pre>
var error = new Error("Some Message");
TestFairy.logException(error);
			</pre>

			<p>We recommend adding a listener to the <b>window</b> to capture <b>error</b> statements, which will automatically send the exception to TestFairy sessions. One suggestion we have is to add a method that looks like this:</p>
			<pre>
window.addEventListener("error", function(e) {
	TestFairy.logException(e);
});
			</pre>
		</div>

		<div data-w-tab="tab-react-native" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>TestFairy.logException(&lt;Error&gt;);</b><br />
			</p>

			<h3>Code Example</h3>
			<pre>
// Be sure to import TestFairy
const TestFairy = require('react-native-testfairy');

var error = new Error("Some Message");
TestFairy.logException(error);
			</pre>

			<p>We recommend replacing the <b>Global Handler</b> with a custom method, which will automatically send the exception to TestFairy sessions. One suggestion we have is to add a method that looks like this:</p>
			<pre>
var ErrorUtils = require('ErrorUtils');
var originalGlobalHandler = ErrorUtils.getGlobalHandler();
ErrorUtils.setGlobalHandler((error, isFatal) => {
	TestFairy.logException(error);
	originalGlobalHandler.handleException(error, isFatal);
});
			</pre>
		</div>


		<div data-w-tab="tab-nativescript" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>TestFairySDK.logException(&lt;Error&gt;);</b><br />
			</p>

			<h3>Code Example</h3>
			<pre>
// Be sure to import TestFairy
import { TestFairySDK } from 'nativescript-testfairy';

var error = new Error("Some Message");
TestFairySDK.logException(error);
			</pre>

			<p>We recommend adding a listener to the <b>window</b> to capture <b>error</b> statements, which will automatically send the exception to TestFairy sessions. One suggestion we have is to add a method that looks like this:</p>
			<pre>
window.addEventListener("error", function(e) {
	TestFairy.logException(e);
});
			</pre>
		</div>

	</div>
</div>
