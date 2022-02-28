TestFairy requires that you call `begin` in order to start recording your sessions. However, developers have the option to override the build settings to determine what is enabled during a session recording.

Some commonly used options:

* [Crash Reporting](#crash-reporting)
* [Video Recording](#video-recording)
* [Recorded Metrics](#recorded-metrics)
* [Max session Length](#max-session-length)

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
		<a name="crash-reporting"></a>
		Crash Reporting
	</h2>
	<p>TestFairy provides a means of capturing and recording stack traces if your application crashes. Stack traces can be vital to understanding any underlying bugs in your app. However, some apps may want to disable TestFairy's crash handling. Invoke <code>enableCrashHandler</code> or <code>disableCrashHandler</code> before calling <code>begin</code>.</p>
	<p>Once the TestFairy crash handler has been enabled, it cannot be disabled unless the app is restarted.</p>
	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<code>TestFairy.enableCrashHandler();</code><br/>
				<code>TestFairy.disableCrashHandler();</code>
			</p>

			<h3>Code Example</h3>
			<p>In the following example, the TestFairy crash handler will be disabled.</p>
			<pre><code class="java">
import com.testfairy.TestFairy;

public class MyApplication extends Application {
	@Override
	public void onCreate() {
		super.onCreate();

		TestFairy.disableCrashHandler();
		TestFairy.begin(this, "&lt;app token&gt;");
	}
}
</code></pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<code>[TestFairy enableCrashHandler];</code><br/>
				<code>[TestFairy disableCrashHandler];</code>
			</p>

			<h3>Code Example</h3>
			<p>In the following example, the TestFairy crash handler will be disabled.</p>
			<pre><code class="objectivec">
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy disableCrashHandler];
	[TestFairy begin:@"&lt;app token&gt;"];
}
</code></pre>
		</div>

		<p>Your <b>app token</b> is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.
	</div>

	<div id="video-recording">
	<br>
	<br>
	<br>
	</div>
	<h2>
	Video Recording
	</h2>
	<p>TestFairy provides an option to enable or disable video recording, and to control the parameters of the recording. Invoke <code>disableVideo</code>, or <code>enableVideo</code> before <code>begin</code>.</p>
	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<code>TestFairy.disableVideo();</code><br/>
				<code>TestFairy.enableVideo("&lt;policy&gt;", "&lt;quality&gt;", &lt;frames per second&gt;);</code>
			</p>
			<p>Refer to the <a href="https://app.testfairy.com/reference/android/index.html">Class Reference</a> for more information on values for <b>policy</b> and <b>quality</b>.</p>

			<h3>Code Example</h3>
			<p>In the following example, video will only be recorded when wifi is available. A high quality video will be recorded every 2 seconds.</p>
			<pre><code class="java">
import com.testfairy.TestFairy;

public class MyApplication extends Application {
	@Override
	public void onCreate() {
		super.onCreate();

		TestFairy.enableVideo("wifi", "high", 2.0);
		TestFairy.begin(this, "&lt;app token&gt;");
	}
}
</code></pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<code>[TestFairy disableVideo];</code><br/>
				<code>[TestFairy enableVideo:@"&lt;policy&gt;" quality:@"&lt;quality&gt;"  framesPerSecond:&lt;frames per second&gt;];</code>
			</p>
			<p>Refer to the <a href="https://app.testfairy.com/reference/ios/Classes/TestFairy.html">Class Reference</a> for more information on values for <b>policy</b> and <b>quality</b>.</p>

			<h3>Code Example</h3>
			<pre><code class="objectivec">
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy enableVideo:@"wifi" quality:@"high" framesPerSecond:2.0];
	[TestFairy begin: @"&lt;app token&gt;"];
}
</code></pre>
		</div>

		<p>Your app token is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.
	</div>


	<h2>
	<a name="recorded-metrics"></a>
	Recorded Metrics
	</h2>
	<p>TestFairy can collect a number of different metrics from your app. Developers can choose to override the metrics defined in their app's build settings.</p>
	<p>Developers can call <code>enableMetric</code> or <code>disableMetric</code> before invoking <code>begin</code> with the metric they wish to enable or disable recording.</p>
	<p>Note that any metric that is enabled or disabled will override the settings set in your app's build settings</p>
	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<code>TestFairy.enableMetric("&lt;metric&gt;");</code><br/>
				<code>TestFairy.disableMetric("&lt;metric&gt;");</code><br/>
			</p>
			<p>Refer to the <a href="https://app.testfairy.com/reference/android/index.html">Class Reference</a> for more information on which metric can be passed.</p>

			<h3>Code Example</h3>
			<p>In the following snippet, the CPU metric will be recorded, and the Memory metric will not be recorded, regardless of what's set in the build settings.</p>
			<pre><code class="java">
import com.testfairy.TestFairy;

public class MyApplication extends Application {
	@Override
	public void onCreate() {
		super.onCreate();

		TestFairy.enableMetric("cpu");
		TestFairy.disableMetric("memory");
		TestFairy.begin(this, "&lt;app token&gt");
	}
}
</code></pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<code>[TestFairy enableMetric:@"&lt;metric&gt;"];</code><br/>
				<code>[TestFairy disableMetric:@"&lt;metric&gt;"];</code>
			</p>
			<p>Refer to the <a href="https://app.testfairy.com/reference/ios/Classes/TestFairy.html">Class Reference</a> for more information on which metric can be passed.</p>

			<h3>Code Example</h3>
			<p>In the following snippet, the CPU metric will be recorded, and the Memory metric wil not be recorded, regardless of what's set in the build settings.</p>
			<pre><code class="objectivec">
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy enableMetric:@"cpu"];
	[TestFairy disableMetric:@"memory"];
	[TestFairy begin: @"&lt;app token&gt"];
	// ...
}
</code></pre>
		</div>
		<p>Your <b>app token</b> is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.
	</div>


	<h2>
	<a name="max-session-length"></a>
	Max Session Length
	</h2>
	<p>TestFairy only records for a fixed period of time. Developers can override the maximum recording period by calling <code>setMaxSessionLength</code> before calling <code>begin</code>.</p>
	<p>Note that the value passed into this method must be less than or equal to the value defined in the build settings. A value larger than the one in the build settings will be ignored.</p>
	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<code>TestFairy.setMaxSessionLength(&lt;session length in seconds&gt;);</code>
			</p>

			<h3>Code Example</h3>
			<pre><code class="java">
import com.testfairy.TestFairy;

public class MyApplication extends Application {
	@Override
	public void onCreate() {
		super.onCreate();

		TestFairy.setMaxSessionLength(10 * 60); // Record for 10 minutes
		TestFairy.begin(this, "&lt;app token&gt;");
	}
}
</code></pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<code>[TestFairy setMaxSessionLength:&lt;session length in seconds&gt;];</code>
			</p>

			<h3>Code Example</h3>
			<pre><code class="objectivec">
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy setMaxSessionLength:(10 * 60)]; // Record for 10 minutes
	[TestFairy begin:@"&lt;app token&gt;"];
}
</code></pre>
		</div>
		<p>Your app token is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.
	</div>


	<h2>
	<a name="video-recording"></a>
	Feedback Form
	</h2>
	<p>TestFairy provides an option to enable or disable feedback collection. Invoke <code>disableFeedbackForm</code>, or <code>enableFeedbackForm</code> before <code>begin</code>.</p>
	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<code>TestFairy.disableFeedbackForm();</code><br/>
				<code>TestFairy.enableFeedbackForm("&lt;method&gt;");</code>
			</p>
			<p>Refer to the <a href="https://app.testfairy.com/reference/android/index.html">Class Reference</a> for more information on values for <code>method</code>.</p>

			<h3>Code Example</h3>
			<p>In the following example, feedback will be enabled when the device is shook.</p>
			<pre><code class="java">
import com.testfairy.TestFairy;

public class MyApplication extends Application {
	@Override
	public void onCreate() {
		super.onCreate();

		TestFairy.enableFeedbackForm("shake");
		TestFairy.begin(this, "&lt;app token&gt;");
	}
}
</code></pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<code>[TestFairy disableFeedbackForm];</code><br/>
				<code>[TestFairy enableFeedbackForm:@"&lt;method&gt;"];</code>
			</p>
			<p>Refer to the <a href="https://app.testfairy.com/reference/ios/Classes/TestFairy.html">Class Reference</a> for more information on values for <code>method</code>.</p>

			<h3>Code Example</h3>
			<p>In the following example, feedback will be enabled when the user either shakes or takes a screenshot on the device.</p>
			<pre><code class="objectivec">
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy enableFeedbackForm:@"shake|screenshot"];
	[TestFairy begin: @"&lt;app token&gt;"];
}
</code></pre>
		</div>

		<p>Your app token is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.
	</div>

</div>
