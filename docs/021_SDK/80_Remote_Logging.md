TestFairy allows developers to log items with a session, without logging to the console output. In some cases, there are work arounds that allow you to wrap the TestFairy remote logging method in a way that will both log to the console and to the session.

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
		<a data-w-tab="tab-xamarin" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#xamarin">
			<div>Xamarin</div>
		</a>
		<a data-w-tab="tab-unity" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#unity">
			<div>Unity</div>
		</a>
		<a data-w-tab="tab-adobe-air" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#adobe-air">
			<div>Adobe Air</div>
		</a>
		<a data-w-tab="tab-titanium" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#titanium">
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

			<p>We recommend sending all calls to <code>NSLog</code> to TestFairy so you can continue to use <code>NSLog</code> and see all your log statements in your session.</p>
			<p>To enable sending logs to TestFairy, you will have to redefine <code>NSLog</code> using a macro with the following lines (This macro allows you to continue using NSLog in your code, while also adding the logs to the  matching session in TestFairy).</p>

			<p><strong>Changing your Prefix Header</strong></p>
			<pre><code class=" hljs cs"><span class="hljs-preprocessor">#import "TestFairy.h"</span>
<span class="hljs-preprocessor">#<span class="hljs-keyword">define</span> NSLog(s, ...) do { NSLog(s, ##__VA_ARGS__); TFLog(s, ##__VA_ARGS__); } while (0)</span>
</code></pre>
			<ol>
			<li>Either add the above line to a global header in your project, accessible to every class file</li>
			<li>Update or create a Prefix Header (.pch) for your project. If you do not have a PCH file in your project, you can follow the steps in the next section</li>
			</ol>
			<p><strong>Creating a new Prefix Header</strong></p>
			<p>If your project doesn’t already include a Prefix Header (.pch), follow these steps to add it:<br></p>
			<ol>
				<li>Create a new file under iOS &gt; Other &gt; PCH File.</li>
				<li>Name your file “PCH file”.</li>
				<li>Add these two lines of code to the file:<br>
				<code>#import "TestFairy.h"<br/>
				#define NSLog(s, ...) do { NSLog(s, ##__VA_ARGS__); TFLog(s, ##__VA_ARGS__); } while (0)</code></li>
				<li><p>From the Project Navigator, select your project and the corresponding target.</p></li>
				<li><p>Project &gt; Build Settings &gt; Search: "Prefix Header".</p></li>
				<li><p>Under "Apple LLVM 7.0" you will get the Prefix Header key.</p></li>
				<li><p>Type the path of the file, for example: "$(SRCROOT)/$(PROJECT_NAME)/ProjectName-Prefix.pch". Please note that your file may be at a different location.</p></li>
				<li><p>Make sure the option "Precompile Prefix Header" is set to YES.</p></li>
				<li><p>Clean your project, and rebuild.</p></li>
			</ol>
		</div>

		<div data-w-tab="tab-ios-swift" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<b>TestFairy.log("&lt;message&gt;")</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>
TestFairy.log("Hello, TestFairy!")
      </pre>

			<p>We recommend wrapping all <b>print</b> statements with a custom method, which will output to both the console and to TestFairy sessions. One suggestion we have is to create a new file named <code>TestFairyLog.swift</code> in your source path, and add the following to the contents of the file:</p>
<pre><code class=" hljs cs"><span class="hljs-comment">//</span>
<span class="hljs-comment">//  TestFairyLog.swift</span>
<span class="hljs-comment">//</span>
<span class="hljs-comment">//  Copyright © TestFairy. All rights reserved.</span>
<span class="hljs-comment">//</span>

import Foundation

<span class="hljs-keyword">public</span> func <span class="hljs-title">print</span>(_ format: String, _ args: CVarArg...) {
    <span class="hljs-keyword">let</span> message = String(format: format, arguments:args)
    print(message);
    TFLogv(message, getVaList([]))
}
</code></pre>
			<p>This will print any output to both the Xcode console, and to the active session on TestFairy.</p>
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
