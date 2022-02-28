TestFairy allows developers to correlate sessions to app-specific information such as users, server sessions, or events.
This is useful in cases where sessions are anonymous or when sessions are related to server activities that are critical to understanding test behavior.

Furthermore, TestFairy enables the identification of users with traits such as name, email, or phone number. These traits will later be available for the developer to search or review when looking at a specific session recording.

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;" href="#android">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-ios" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#ios">
			<div>iOS</div>
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
				<code>TestFairy.setUserId("&lt;userId&gt;");</code><br />
      </p>

			<p>Where <code>userId</code> is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID that your app may use. This value may not be nil, and is searchable via API and web search.</p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
import com.testfairy.TestFairy;

TestFairy.setUserId("john@example.com");
      </pre>
		</div>

		<div data-w-tab="tab-ios" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<code>[TestFairy setUserId:@"&lt;userId&gt;"];</code><br />
			</p>

			<p>Where <code>userId</code> is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID that your app may use. This value may not be nil, and is searchable via API and web search.</p>

			<h3>Code Example</h3>
			<pre>
// Be sure to import TestFairy
#import "TestFairy.h"

[TestFairy setUserId:@"john@example.com"];
			</pre>
		</div>

		<div data-w-tab="tab-cordova" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<code>TestFairy.setUserId("&lt;userId&gt;");</code><br />
      </p>

			<p>Where <code>userId</code> is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID that your app may use. This value may not be nil, and is searchable via API and web search.</p>

      <h3>Code Example</h3>
      <pre>
TestFairy.setUserId("john@example.com");
      </pre>
		</div>

		<div data-w-tab="tab-react-native" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<code>TestFairy.setUserId("&lt;userId&gt;");</code><br />
      </p>

			<p>Where <code>userId</code> is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID that your app may use. This value may not be nil, and is searchable via API and web search.</p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
const TestFairy = require('react-native-testfairy');

TestFairy.setUserId("john@example.com");
      </pre>
		</div>


		<div data-w-tab="tab-nativescript" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<code>TestFairySDK.setUserId("&lt;userId&gt;");</code><br />
      </p>

			<p>Where <code>userId</code> is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID that your app may use. This value may not be nil, and is searchable via API and web search.</p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
import { TestFairySDK } from 'nativescript-testfairy';

TestFairySDK.setUserId("john@example.com");
      </pre>
		</div>

		<div data-w-tab="tab-xamarin" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<code>TestFairy.SetUserId ("&lt;userId&gt;");</code><br />
      </p>

			<p>Where <code>userId</code> is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID that your app may use. This value may not be nil, and is searchable via API and web search.</p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
using TestFairyLib;

TestFairy.SetUserId ("john@example.com");
      </pre>
		</div>

		<div data-w-tab="tab-unity" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<code>TestFairy.setUserId("&lt;userId&gt;");</code><br />
      </p>

			<p>Where <code>userId</code> is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID that your app may use. This value may not be nil, and is searchable via API and web search.</p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
using TestFairyUnity;

TestFairy.setUserId("john@example.com");
      </pre>
		</div>

		<div data-w-tab="tab-adobe-air" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<code>AirTestFairy.setUserId("&lt;userId&gt;");</code><br />
      </p>

			<p>Where <code>userId</code> is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID that your app may use. This value may not be nil, and is searchable via API and web search.</p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
import com.testfairy.AirTestFairy;

AirTestFairy.setUserId("john@example.com");
      </pre>
		</div>

		<div data-w-tab="tab-titanium" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
				<code>TiTestFairy.setUserId("&lt;userId&gt;");</code><br />
      </p>

			<p>Where <b>userId</b> is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID that your app may use. This value may not be nil, and is searchable via API and web search.</p>

      <h3>Code Example</h3>
      <pre>
// Be sure to import TestFairy
var TiTestFairy = require('com.testfairy.titestfairy');

TiTestFairy.setUserId("john@example.com");
      </pre>
		</div>

	</div>
</div>

## Notes

* `setUserId:` may be called many times
* You may call `setUserId` before or after `begin`
