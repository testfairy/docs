Events are used to provide insights on the how testers use your apps.

These can help you keep track of when a tester reaches key points in your app, such as visiting the in-app store.

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;"  href="#android">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-react-native" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#react-native">
			<div>React Native</div>
		</a>

	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>To add an event to your timeline, all you need to do is this:</p>
			<p>
				<b>TestFairy.addEvent("<event name>");</b>
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

		<div data-w-tab="tab-react-native" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>To add an event to your timeline, all you need to do is this:</p>
			<p>
				<b>TestFairy.addEvent("<event name>");</b>
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

By adding the line above, a new column in your [Build Coverage Report](http://docs.testfairy.com/Getting_Started/Testing_Reports.html) page will appear, titled according to the event (in this case "Purchase OK").

Please remember that events are rendered in a table, consider using indicative names and keep them short.
