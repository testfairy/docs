The TestFairy enterprise suite can be installed on a private cloud on any AWS location in the US, Europe, Asia or South America. Servers can be protected by custom firewall rules allowing access only from your offices, according to your security policy.

# Set your endpoint

Once you've got your private cloud setup, make sure to get the URL endpoint your apps will direct all of its data towards. This URL must be passed into the SDK before the `begin` method is called.

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu">
		<a data-w-tab="tab-ios" class="docs-tab w-inline-block w-tab-link w--current">
			<div>iOS</div>
		</a>
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-cordova" class="docs-tab w-inline-block w-tab-link">
			<div>Cordova</div>
		</a>
		<a data-w-tab="tab-react-native" class="docs-tab w-inline-block w-tab-link">
			<div>React Native</div>
		</a>
		<a data-w-tab="tab-nativescript" class="docs-tab w-inline-block w-tab-link">
			<div>Nativescript</div>
		</a>
		<a data-w-tab="tab-xamarin" class="docs-tab w-inline-block w-tab-link">
			<div>Xamarin</div>
		</a>
		<a data-w-tab="tab-unity" class="docs-tab w-inline-block w-tab-link">
			<div>Unity</div>
		</a>
		<a data-w-tab="tab-adobe-air" class="docs-tab w-inline-block w-tab-link">
			<div>Adobe Air</div>
		</a>
		<a data-w-tab="tab-titanium" class="docs-tab w-inline-block w-tab-link">
			<div>Titanium</div>
		</a>
	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
      <p>
        <b>TestFairy.setServerEndpoint("&lt;your private cloud url here&gt;");</b><br />
      </p>
      <h3>Code Example</h3>
			<p>
				Note: It's important that you include a trailing slash `/` in your URL. Following is a concrete example of this:
			</p>
      <pre>
			TestFairy.setServerEndpoint("https://my-subdomain.testfairy.com/services/");
			TestFairy.begin(context, "&lt;your app token here&gt;");
      </pre>
		</div>

		<div data-w-tab="tab-ios" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
        <b>[TestFairy setServerEndpoint:@"&lt;your private cloud url here&gt;"];</b><br />
      </p>
      <h3>Code Example</h3>
			<p>
				Note: It's important that you include a trailing slash `/` in your URL. Following is a concrete example of this:
			</p>
      <pre>
			[TestFairy setServerEndpoint:@"https://your-subdomain.testfairy.com/services/"];
			[TestFairy begin:@"&lt;your app token here&gt;"];
      </pre>
		</div>

		<div data-w-tab="tab-cordova" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
        <b>TestFairy.setServerEndpoint("&lt;your private cloud url here&gt;");</b><br />
      </p>
      <h3>Code Example</h3>
			<p>
				Note: It's important that you include a trailing slash `/` in your URL. Following is a concrete example of this:
			</p>
      <pre>
			TestFairy.setServerEndpoint("https://my-subdomain.testfairy.com/services/");
			TestFairy.begin("&lt;your app token here&gt;");
      </pre>
		</div>

		<div data-w-tab="tab-react-native" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
        <b>TestFairy.setServerEndpoint("&lt;your private cloud url here&gt;");</b><br />
      </p>
      <h3>Code Example</h3>
			<p>
				Note: It's important that you include a trailing slash `/` in your URL. Following is a concrete example of this:
			</p>
      <pre>
			TestFairy.setServerEndpoint("https://my-subdomain.testfairy.com/services/");
			TestFairy.begin("&lt;your app token here&gt;");
      </pre>
		</div>


		<div data-w-tab="tab-nativescript" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
        <b>TestFairy.setServerEndpoint("&lt;your private cloud url here&gt;");</b><br />
      </p>
      <h3>Code Example</h3>
			<p>
				Note: It's important that you include a trailing slash `/` in your URL. Following is a concrete example of this:
			</p>
      <pre>
			TestFairy.setServerEndpoint("https://my-subdomain.testfairy.com/services/");
			TestFairy.begin("&lt;your app token here&gt;");
      </pre>
		</div>

		<div data-w-tab="tab-xamarin" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
        <b>TestFairy.SetServerEndpoint ("&lt;your private cloud url here&gt;");</b><br />
      </p>
      <h3>Code Example</h3>
			<p>
				Note: It's important that you include a trailing slash `/` in your URL. Following is a concrete example of this:
			</p>
      <pre>
			TestFairy.SetServerEndpoint ("https://my-subdomain.testfairy.com/services/");
			TestFairy.Begin ("&lt;your app token here&gt;");
      </pre>
		</div>

		<div data-w-tab="tab-unity" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
        <b>TestFairy.setServerEndpoint("&lt;your private cloud url here&gt;");</b><br />
      </p>
      <h3>Code Example</h3>
			<p>
				Note: It's important that you include a trailing slash `/` in your URL. Following is a concrete example of this:
			</p>
      <pre>
			TestFairy.setServerEndpoint("https://my-subdomain.testfairy.com/services/");
			TestFairy.begin("&lt;your app token here&gt;");
      </pre>
		</div>

		<div data-w-tab="tab-adobe-air" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
        <b>TestFairy.setServerEndpoint("&lt;your private cloud url here&gt;");</b><br />
      </p>
      <h3>Code Example</h3>
			<p>
				Note: It's important that you include a trailing slash `/` in your URL. Following is a concrete example of this:
			</p>
      <pre>
			TestFairy.setServerEndpoint("https://my-subdomain.testfairy.com/services/");
			TestFairy.begin("&lt;your app token here&gt;");
      </pre>
		</div>

		<div data-w-tab="tab-titanium" class="w-tab-pane">
			<h3>Syntax</h3>
      <p>
        <b>TiTestFairy.setServerEndpoint("&lt;your private cloud url here&gt;");</b><br />
      </p>
      <h3>Code Example</h3>
			<p>
				Note: It's important that you include a trailing slash `/` in your URL. Following is a concrete example of this:
			</p>
      <pre>
			TiTestFairy.setServerEndpoint("https://my-subdomain.testfairy.com/services/");
			TiTestFairy.begin("&lt;your app token here&gt;");
      </pre>
		</div>

	</div>
</div>
