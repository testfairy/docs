TestFairy allows developers to hide specific views from the recorded video. As a developer, you may choose to hide one or more views from the video for security and privacy reasons.

For example, you might want to prevent all information related to credit card data from appearing in a session.

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;"  href="#android">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-ios" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#ios">
			<div>iOS</div>
		</a>
		<a data-w-tab="tab-react-native" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#react-native">
			<div>React Native</div>
		</a>
		<a data-w-tab="tab-nativescript" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#nativescript">
			<div>Nativescript</div>
		</a>
		<a data-w-tab="tab-xamarin" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#xamarin">
			<div>Xamarin</div>
		</a>
	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>To hide a view from video:</p>
			<p>
				<code>TestFairy.hideView(Integer.valueOf(R.id.my_view));</code><br />
				or<br />
				<code>TestFairy.hideView(View myView);</code>
			</p>

			<p>
				Replace <code>R.id.my_view</code> with the identifier of the view you wish to hide.
			</p>

			<h3>Code Example</h3>
			<pre>
public class MyActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.my_activity);

        TestFairy.hideView(findViewById(R.id.credit_card));
    }
}
			</pre>
		</div>

		<div data-w-tab="tab-ios" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				To hide a view from video, call the static instance method <code>hideView</code> in the TestFairy class:
			</p>

			<p>
				<code>UIView *view = ...</code><br />
				<code>[TestFairy hideView:view];</code><br />
			</p>

			<h3>Code Example</h3>
			<pre>
@interface MyViewController : UIViewController {
    IBOutlet UITextField *usernameView;
    IBOutlet UITextField *creditCardView;
    IBOutlet UITextField *cvvView;
}

@implementation MyViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    [TestFairy hideView:creditCardView];
    [TestFairy hideView:cvvView];
}
			</pre>
		</div>

		<div data-w-tab="tab-react-native" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				In order to hide views from your recorded session, you will need to pass a reference to a view to TestFairy. First, give the element to be hidden a ref attribute. For example:
			</p>

			<p>
				<b>&lt;Text ref="instructions"&gt;This will be hidden&lt;/Text&gt;</b>
			</p>

			<p>Next, in a component callback, such as componentDidMount, pass the reference ID back to TestFairy by invoking <code>hideView</code>.</p>

			<h3>Code Example</h3>
			<pre>
const TestFairy = require('react-native-testfairy');
var MyComponent = React.createClass({

    componentDidMount: function() {
        TestFairy.hideView(this.refs.instructions);
    },

    render: function() {
        return (&lt;Text ref="instructions"&gt;This will be hidden&lt;/Text&gt;);
    }
});
			</pre>
		</div>

		<div data-w-tab="tab-nativescript" class="w-tab-pane">
			<h3>Syntax</h3>
			<p><code>TestFairySDK.hideView(view);</code></p>

			<h3>Code Example</h3>
			<pre>
// in Nativescript
import { TestFairySDK } from 'nativescript-testfairy';

// in Javascript
var TestFairySDK = require('nativescript-testfairy').TestFairySDK;

TestFairySDK.hideView(view);
			</pre>
		</div>


		<div data-w-tab="tab-xamarin" class="w-tab-pane">
			<h3>Syntax</h3>
			<p><code>TestFairy.HideView (View view)</code> (Android)</p>
			<p><code>TestFairy.HideView (UIView view)</code> (iOS)</p>

			<h3>Code Example</h3>
			<pre>
// Be sure to import TestFairy
using TestFairyLib;

// On Android
View view = ...
TestFairy.HideView (view);

// On iOS
UIView view = ...
TestFairy.HideView (view);
			</pre>
		</div>

	</div>
</div>

## Sample Video

Below is a sample screen taken from a demo video. On the left, you can see what the app normally looks like. On the right, there is a screenshot taken with the "Card Number" EditText hidden by <code>testfairy-secure-viewid</code>.

<div>
	<img style="float:left; border: none; box-shadow: none;" src="../../img/ios/hidden_views/iphone-with-fields.png" width="400" />
	<img style="float:left; border: none; box-shadow: none;" src="../../img/ios/hidden_views/iphone-no-fields.png" width="400" />
</div>

<br clear="both"/>

### Notes

* Hidden views are removed before sending video.
* You may hide multiple views.
* You may add the same view multiple times, no checks needed.
