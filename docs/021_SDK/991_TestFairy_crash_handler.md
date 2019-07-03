## The TestFairy crash handler

The TestFairy crash handler is used in case you do not need the full functionality of the TestFairt=y platform but want to install a simple and effective crash handler to log crashes from your app.

Below are the install instructions and code samples.


<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
    <div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
      <a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;" href="#android">
        <div>Android</div>
      </a>
      <a data-w-tab="tab-ios-objc" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#ios-objc">
        <div>iOS</div>
      </a>
      <a data-w-tab="tab-ios-swift" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#ios-swift">
        <div>iOS</div>
      </a>
    </div>

    <h2>
		<a name="crash-handler"></a>
		Crash Handler
	  </h2>
    <p>TestFairy provides a means of capturing and recording stack traces if your application crashes. The crash Handler collects crashes and displays them as sessions in the TestFairy Dashboard</p>
    <div class="docs-tabs-content w-tab-content">
      <div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
        <h3>Syntax</h3>
        <p>
          <b>TestFairy.installCrashHandler(context, "APP_TOKEN");</b>
          <br/>
          <b>TestFairy.installCrashHandler(context, "APP_TOKEN");</b>
        </p>

        <h3>Code Example</h3>
        <p>In the following example, the TestFairy crash handler will be disabled.</p>
        <pre>
import com.testfairy.TestFairy;

public class MyApplication extends Application {
	@Override
	public void onCreate() {
		super.onCreate();

		TestFairy.installCrashHandler(context, "APP_TOKEN");
	}
}
			</pre>
      </div>
      <div data-w-tab="tab-ios-objc" class="w-tab-pane">
        <h3>Syntax</h3>
        <p>
          <b>[TestFairy installCrashHandler:@"APP_TOKEN"];</b>
          <br/>
          <b>[TestFairy installCrashHandler:@"APP_TOKEN"];</b>
        </p>

        <h3>Code Example</h3>
        <p>In the following example, the TestFairy crash handler will be disabled.</p>
        <pre>
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[TestFairy installCrashHandler:@"APP_TOKEN"];
}
			</pre>
      </div>
      <div data-w-tab="tab-ios-swift" class="w-tab-pane">
        <h3>Syntax</h3>
        <p>
          <b>TestFairy.installCrashHandler("APP_TOKEN")</b>
          <br/>
          <b>TestFairy.installCrashHandler("APP_TOKEN")</b>
        </p>

        <h3>Code Example</h3>
        <p>In the following example, the TestFairy crash handler will be disabled.</p>
        <pre>
@implementation AppDelegate

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
	TestFairy.installCrashHandler("APP_TOKEN");
}
			</pre>
      </div>

      <p>Your <b>app token</b> is available from your <a href="https://app.testfairy.com/settings#apptoken" target="_blank">account preferences</a> once logged in.
    </div>
  </div>
