TestFairy allows developers to log items with a session, without logging to the console output. In some cases, there are work arounds that allow you to wrap the TestFairy remote logging method in a way that will both log to the console and to the session.

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-ios" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;">
			<div>iOS</div>
		</a>
		<a data-w-tab="tab-cordova" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;">
			<div>Cordova</div>
		</a>
		<a data-w-tab="tab-react-native" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;">
			<div>React Native</div>
		</a>
		<a data-w-tab="tab-nativescript" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;">
			<div>Nativescript</div>
		</a>
		<a data-w-tab="tab-xamarin" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;">
			<div>Xamarin</div>
		</a>
		<a data-w-tab="tab-unity" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;">
			<div>Unity</div>
		</a>
		<a data-w-tab="tab-adobe-air" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;">
			<div>Adobe Air</div>
		</a>
		<a data-w-tab="tab-titanium" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;">
			<div>Titanium</div>
		</a>
	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
      <p>
				<b>TestFairy.log("&lt;tag&gt;", "&lt;message&gt;");</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
import com.testfairy.TestFairy;

TestFairy.log("Tag", "Hello, TestFairy!");
      </pre>
		</div>

		<div data-w-tab="tab-ios" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<b>TFLog(@"&lt;message with format&gt;", &lt;arguments&gt;);</b><br />
				<b>[TestFairy log:@"&lt;message&gt;"];</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
#import "TestFairy.h"

TFLog(@"Hello, %@", @"TestFairy!");
[TestFairy log:@"Hello, TestFairy!"];
      </pre>
		</div>

		<div data-w-tab="tab-cordova" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<b>TestFairy.log("&lt;message&gt;");</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>
TestFairy.log("Hello, TestFairy!");
      </pre>

			<p>We recommend wrapping all <b>log</b> statements with a custom method, which will output to both the console and to TestFairy sessions. One suggestion we have is to add a method that looks like this:</p>
			<pre>
var _testfairyConsoleLog = console.log;
console.log = function(message) {
	_testfairyConsoleLog(message);
	TestFairy.log(message);
}
			</pre>
		</div>

		<div data-w-tab="tab-react-native" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<b>TestFairy.log("&lt;message&gt;");</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
const TestFairy = require('react-native-testfairy');

TestFairy.log("Hello, TestFairy!");
      </pre>

			<p>We recommend wrapping all <b>log</b> statements with a custom method, which will output to both the console and to TestFairy sessions. One suggestion we have is to add a method that looks like this:</p>
			<pre>
var _testfairyConsoleLog = console.log;
console.log = function(message) {
	_testfairyConsoleLog(message);
	TestFairySDK.log(message);
}
			</pre>
		</div>


		<div data-w-tab="tab-nativescript" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<b>TestFairySDK.log("&lt;message&gt;");</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
import { TestFairySDK } from 'nativescript-testfairy';

TestFairySDK.log("Hello, TestFairy!");
      </pre>

			<p>We recommend wrapping all <b>log</b> statements with a custom method, which will output to both the console and to TestFairy sessions. One suggestion we have is to add a method that looks like this:</p>
			<pre>
var _testfairyConsoleLog = console.log;
console.log = function(message) {
	_testfairyConsoleLog(message);
	TestFairySDK.log(message);
}
			</pre>
		</div>

		<div data-w-tab="tab-xamarin" class="w-tab-pane">
			<p>We recommend wrapping all <b>TFLog</b> statements with a custom method, which will output to both the console and to TestFairy sessions. One suggestion we have is to add a method that looks like this:</p>

      <h3>Code Example</h3>

      <pre>
// Be sure to import TestFairy
using TestFairyLib;

public static void Log(string format, params object[] arg)
{
    using (var nsFormat = new NSString(string.Format(format, arg)))
    {
        CFunctions.TFLog(nsFormat.Handle, "");
        Console.WriteLine(string.Format(format, arg));
    }
}
      </pre>

			<p>Now, you can log statements using this call:</p>
			<pre>
Log("Hello {0}", "World");
			</pre>
		</div>

		<div data-w-tab="tab-unity" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<b>TestFairy.log("&lt;message&gt;");</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
using TestFairyUnity;

TestFairy.log("Hello, TestFairy!");
      </pre>
		</div>

		<div data-w-tab="tab-adobe-air" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<b>AirTestFairy.log("&lt;message&gt;");</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
import com.testfairy.AirTestFairy;

AirTestFairy.log("Hello, TestFairy!");
      </pre>
		</div>

		<div data-w-tab="tab-titanium" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<b>TiTestFairy.log("&lt;message&gt;");</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
var TiTestFairy = require('com.testfairy.titestfairy');

TiTestFairy.log("Hello, TestFairy!");
      </pre>
		</div>

	</div>
</div>
