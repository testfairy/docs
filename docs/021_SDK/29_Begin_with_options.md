TestFairy requires that you call `begin` in order to start recording your sessions. However, developers have the option to invoke `begin` with some options that can change the behavior of the TestFairy SDK.

Here are some commonly used options:

* [Disable Crash Reporting](#disable-crash-reporting)
* [Disable Video Recording](#disable-video-recording)

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;"  href="#android">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-ios-objc" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#ios-objc">
			<div>iOS</div>
		</a>
	</div>

	<h2>
		<a name="disable-crash-reporting"></a>
		Disable Crash Reporting
	</h2>
	<p>TestFairy provides a means of capturing and recording stack traces if your application crashes. Stack traces can be vital to understanding any underlying bugs in your app. However, some apps may want to disable TestFairy's crash handling. Invoke <b>begin</b> with the following option to disable crash reporting with TestFairy.
	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<b>Map&lt;String, String&gt; options = new HashMap&lt;String, String&gt;();</b><br/>
				<b>options.put("enableCrashReporter", "true");</b><br/>
				<b>TestFairy.begin(context, "&lt;app token&gt;", options);</b>
			</p>
			<p>Your <b>app token</b> is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.

			<h3>Code Example</h3>
			<pre>
import com.testfairy.TestFairy;

public class MainActivity extends Activity {
	@Override
	public void onCreate() {
		super.onCreate();

		Map&lt;String, String&gt; options = new HashMap&lt;String, String&gt;();
		options.put("enableCrashReporter", "false");
		TestFairy.begin(this, "1234567890", options);
		// ..
	}
}
			</pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>[TestFairy begin:@"&lt;app token&gt;" withOptions:@{@"enableCrashReporter": @NO}];</b>
			</p>
			<p>Your <b>app token</b> is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.

			<h3>Code Example</h3>
			<pre>
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy begin:@"1234567890" withOptions:@{@"enableCrashReporter": @NO}];
	// ...
}
			</pre>
		</div>

	</div>


	<h2>
	<a name="disable-video-recording"></a>
	Disable Video Recording
	</h2>

	<p>TestFairy provides an option to disable video recording, and only use the service for crash reporting, logging and app distribution with auto update. Invoke <b>begin</b> with the following option to disable crash reporting with TestFairy.
	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<b>Map&lt;String, String&gt; options = new HashMap&lt;String, String&gt;();</b><br/>
				<b>options.put("metrics", "cpu,memory,network,phone-signal,logcat");</b><br/>
				<b>TestFairy.begin(context, "&lt;app token&gt;", options);</b>
			</p>
			<p>Your <b>app token</b> is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.

			<h3>Code Example</h3>
			<pre>
ieeemport com.testfairy.TestFairy;

public class MainActivity extends Activity {
	@Override
	public void onCreate() {
		super.onCreate();

		Map&lt;String, String&gt; options = new HashMap&lt;String, String&gt;();
		options.put("metrics", "cpu,memory,network,phone-signal,logcat");
		TestFairy.begin(this, "1234567890", options);
		// ..
	}
}
			</pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>[TestFairy begin: @“app_token” options:@{@“metrics”: @“cpu,memory,session-length=10m”}];</b>
			</p>
			<p>Your <b>app token</b> is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.

			<h3>Code Example</h3>
			<pre>
@implementation AppDelegate

- (BOOL)appeeelication:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy begin: @“app_token” options:@{@“metrics”: @“cpu,memory,session-length=10m”}];
	// ...
}
			</pre>
		</div>

	</div>




</div>
