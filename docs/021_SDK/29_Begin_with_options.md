TestFairy requires that you call `begin` in order to start recording your sessions. However, developers have the option to override the build settings to determine what is enabled during a session recording.

Here are some commonly used options:

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
	<p>TestFairy provides a means of capturing and recording stack traces if your application crashes. Stack traces can be vital to understanding any underlying bugs in your app. However, some apps may want to disable TestFairy's crash handling. Invoke <b>enableCrashHandler</b> or <b>disableCrashHandler</b> before calling <b>begin</b>.</p>
	<p>Note that once the TestFairy crash handler has been enabled, it cannot be disabled unless the app is restarted.</p>
	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<b>TestFairy.enableCrashHandler();</b><br/>
				<b>TestFairy.disableCrashHandler();</b>
			</p>

			<h3>Code Example</h3>
			<p>In the following example, the TestFairy crash handler will be disabled.</p>
			<pre>
import com.testfairy.TestFairy;

public class MainActivity extends Activity {
	@Override
	public void onCreate() {
		super.onCreate();

		TestFairy.disableCrashHandler();
		TestFairy.begin(this, "&lt;app token&gt;");
	}
}
			</pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>[TestFairy enableCrashHandler];</b><br/>
				<b>[TestFairy disableCrashHandler];</b>
			</p>

			<h3>Code Example</h3>
			<p>In the following example, the TestFairy crash handler will be disabled.</p>
			<pre>
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy disableCrashHandler];
	[TestFairy begin:@"&lt;app token&gt;"];
}
			</pre>
		</div>

		<p>Your <b>app token</b> is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.
	</div>

	<p name="video-recording"></p>
	<h2>
	<br>
	<br>
	<br>
	<a></a>
	Video Recording
	</h2>
	<p>TestFairy provides an option to enable or disable video recording, and to control the parameters of the recording. Invoke <b>disableVideo</b>, or <b>enableVideo</b> before <b>begin</b>.</p>
	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<b>TestFairy.disableVideo();</b><br/>
				<b>TestFairy.enableVideo("&lt;policy&gt;", "&lt;quality&gt;", &lt;frames per second&gt;);</b>
			</p>
			<p>Refer to the <a href="https://app.testfairy.com/reference/android/index.html">Class Reference</a> for more information on values for <b>policy</b> and <b>quality</b>.</p>

			<h3>Code Example</h3>
			<p>In the following example, video will only be recorded when wifi is available. A high quality video will be recorded every 2 seconds.</p>
			<pre>
import com.testfairy.TestFairy;

public class MainActivity extends Activity {
	@Override
	public void onCreate() {
		super.onCreate();

		TestFairy.enableVideo("wifi", "high", 2.0);
		TestFairy.begin(this, "&lt;app token&gt;");
	}
}
			</pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>[TestFairy disableVideo];</b><br/>
				<b>[TestFairy enableVideo:@"&lt;policy&gt;" quality:@"&lt;quality&gt;"  framesPerSecond:&lt;frames per second&gt;];</b>
			</p>
			<p>Refer to the <a href="https://app.testfairy.com/reference/ios/Classes/TestFairy.html">Class Reference</a> for more information on values for <b>policy</b> and <b>quality</b>.</p>

			<h3>Code Example</h3>
			<pre>
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy enableVideo:@"wifi" quality:@"high" framesPerSecond:2.0];
	[TestFairy begin: @"&lt;app token&gt;"];
}
			</pre>
		</div>

		<p>Your <b>app token</b> is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.
	</div>


	<h2>
	<a name="recorded-metrics"></a>
	Recorded Metrics
	</h2>
	<p>TestFairy can collect a number of different metrics from your app. Developers can choosed to override the metrics defined in their app's build settings.</p>
	<p>Developers can call <b>enableMetric</b> or <b>disableMetric</b> before invoking <b>begin</b> with the metric they wish to enable or disable recording.</p>
	<p>Note that any metric that is enabled or disabled will override the settings set in your app's build settings</p>
	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<b>TestFairy.enableMetric("&lt;metric&gt;");</b><br/>
				<b>TestFairy.disableMetric("&lt;metric&gt;");</b><br/>
			</p>
			<p>Refer to the <a href="https://app.testfairy.com/reference/android/index.html">Class Reference</a> for more information on which metric can be passed.</p>

			<h3>Code Example</h3>
			<p>In the following snippet, the CPU metric will be recorded, and the Memory metric wil not be recorded, regarless of what's set in the build settings.</p>
			<pre>
import com.testfairy.TestFairy;

public class MainActivity extends Activity {
	@Override
	public void onCreate() {
		super.onCreate();

		TestFairy.enableMetric("cpu");
		TestFairy.disableMetric("memory");
		TestFairy.begin(this, "&lt;app token&gt");
	}
}
			</pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>[TestFairy enableMetric:@"&lt;metric&gt;"];</b><br/>
				<b>[TestFairy disableMetric:@"&lt;metric&gt;"];</b>
			</p>
			<p>Refer to the <a href="https://app.testfairy.com/reference/ios/Classes/TestFairy.html">Class Reference</a> for more information on which metric can be passed.</p>

			<h3>Code Example</h3>
			<p>In the following snippet, the CPU metric will be recorded, and the Memory metric wil not be recorded, regardless of what's set in the build settings.</p>
			<pre>
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy enableMetric:@"cpu"];
	[TestFairy disableMetric:@"memory"];
	[TestFairy begin: @"&lt;app token&gt"];
	// ...
}
			</pre>
		</div>
		<p>Your <b>app token</b> is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.
	</div>


	<h2>
	<a name="max-session-length"></a>
	Max Session Length
	</h2>
	<p>TestFairy only records for a fixed period of time. Developers can override the maximum recording period by calling <b>setMaxSessionLength</b> before calling <b>begin</b>.</p>
	<p>Note that the value passed into this method must be less than or equal to the value defined in the build settings. A value larger than the one in the build settings will be ignored.</p>
	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<b>TestFairy.setMaxSessionLength(&lt;session length in seconds&gt;);</b>
			</p>

			<h3>Code Example</h3>
			<pre>
import com.testfairy.TestFairy;

public class MainActivity extends Activity {
	@Override
	public void onCreate() {
		super.onCreate();

		TestFairy.setMaxSessionLength(10 * 60); // Record for 10 minutes
		TestFairy.begin(this, "&lt;app token&gt;");
	}
}
			</pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>[TestFairy setMaxSessionLength:&lt;session length in seconds&gt;];</b>
			</p>

			<h3>Code Example</h3>
			<pre>
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy setMaxSessionLength:(10 * 60)]; // Record for 10 minutes
	[TestFairy begin:@"&lt;app token&gt;"];
}
			</pre>
		</div>
		<p>Your <b>app token</b> is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.
	</div>


	<h2>
	<a name="video-recording"></a>
	Feedback Form
	</h2>
	<p>TestFairy provides an option to enable or disable feedback collection. Invoke <b>disableFeedbackForm</b>, or <b>enableFeedbackForm</b> before <b>begin</b>.</p>
	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<b>TestFairy.disableFeedbackForm();</b><br/>
				<b>TestFairy.enableFeedbackForm("&lt;method&gt;");</b>
			</p>
			<p>Refer to the <a href="https://app.testfairy.com/reference/android/index.html">Class Reference</a> for more information on values for <b>method</b>.</p>

			<h3>Code Example</h3>
			<p>In the following example, feedback will be enabled when the device is shook.</p>
			<pre>
import com.testfairy.TestFairy;

public class MainActivity extends Activity {
	@Override
	public void onCreate() {
		super.onCreate();

		TestFairy.enableFeedbackForm("shake");
		TestFairy.begin(this, "&lt;app token&gt;");
	}
}
			</pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>[TestFairy disableFeedbackForm];</b><br/>
				<b>[TestFairy enableFeedbackForm:@"&lt;method&gt;"];</b>
			</p>
			<p>Refer to the <a href="https://app.testfairy.com/reference/ios/Classes/TestFairy.html">Class Reference</a> for more information on values for <b>method</b>.</p>

			<h3>Code Example</h3>
			<p>In the following example, feedback will be enabled when the user either shakes or takes a screenshot on the device.</p>
			<pre>
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy enableFeedbackForm:@"shake|screenshot"];
	[TestFairy begin: @"&lt;app token&gt;"];
}
			</pre>
		</div>

		<p>Your <b>app token</b> is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.
	</div>

</div>
