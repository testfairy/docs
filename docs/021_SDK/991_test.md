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

public class MyApplication extends Application {
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
