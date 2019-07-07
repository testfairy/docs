## The TestFairy crash handler

In order to use the TestFairy SDK as a crash handler without any other TestFairy feature, please use the code samples below.


<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
    <div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
      <a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;" href="#android">
        <div>Android</div>
      </a>
      <a data-w-tab="tab-ios-objc" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#ios-objc">
        <div>iOS-Objc-C</div>
      </a>
      <a data-w-tab="tab-ios-swift" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#ios-swift">
        <div>iOS-Swift</div>
      </a>
    </div>

    
    <div class="docs-tabs-content w-tab-content">
      <div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
        <h3>Syntax</h3>
        <p>
          <b>TestFairy.installCrashHandler(this, "APP_TOKEN");</b>
        </p>

        <h3>Code Example</h3>
        
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
        </p>

        <h3>Code Example</h3>
        
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
        </p>

        <h3>Code Example</h3>
        
        <pre>
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

	func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
		TestFairy.installCrashHandler("APP_TOKEN");
	}

}
	</pre>
      </div>

      
    </div>
  </div>
