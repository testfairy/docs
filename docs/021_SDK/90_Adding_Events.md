Events are used to provide insights into how testers use your apps. They can help you keep track of when a tester reaches key points in your app, such as visiting the in-app store.

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;"  href="#android">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-ios-objc" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#ios-objc">
			<div>iOS</div>
		</a>
		<a data-w-tab="tab-react-native" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#react-native">
			<div>React Native</div>
		</a>

	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>To add an event to your timeline:</p>
			<p>
				<code>TestFairy.addEvent("&lt;event name&gt;");</code>
			</p>

			<h3>Code Example</h3>
			<pre>
public class MyActivity extends Activity {
	private void onPurchaseComplete() {
		TestFairy.addEvent("Purchase OK");
	}
}
			</pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>To add an event to your timeline:</p>
			<p>
				<code>[TestFairy addEvent:@"&lt;event name&gt;"];</code>
			</p>

			<h3>Code Example</h3>
			<pre>
@implementation ViewController
- (void)viewDidLoad {
	[super viewDidLoad];
	[TestFairy addEvent:@"Purchase OK"];
	//...
}
// ...
@nd
			</pre>
		</div>

		<div data-w-tab="tab-react-native" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>To add an event to your timeline:</p>
			<p>
				<code>TestFairy.addEvent("&lt;event name&gt;");</code>
			</p>

			<h3>Code Example</h3>
			<pre>
const TestFairy = require('react-native-testfairy');
var MyComponent = React.createClass({
    componentDidMount: function() {
        TestFairy.addEvent("Purchase OK");
    }
});
			</pre>
		</div>

	</div>
</div>
