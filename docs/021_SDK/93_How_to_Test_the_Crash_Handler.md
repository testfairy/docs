<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-ios-objc" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#ios-objc"><div>iOS - ObjC</div></a>
		<a data-w-tab="tab-ios-swift" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#ios-swift"><div>iOS - Swift</div></a>
	</div>

	<h2>Causing a crash</h2>
	<p>Want to try out TestFairy's world class crash handler? Use the TestFairy library to invoke a crash, in your app, and see the stacktrace in your app's session.</p>
	<div class="docs-tabs-content w-tab-content">

		<div data-w-tab="tab-ios-objc" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<b>[TestFairy crash];</b>
			</p>
			<p><strong>Note</strong>: Available starting iOS SDK version 1.19.8

			<h3>Code Example</h3>
			<pre><code class="objectivec">
#import "ViewController.h"
#import "TestFairy.h"

@implementation ViewController
- (void)viewDidLoad {
    [super viewDidLoad];

    UIButton* button = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    button.frame = CGRectMake(50, 50, 100, 30);
    [button setTitle:@"Crash" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(crashApp:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
}

- (IBAction)crashApp:(id)sender {
    [TestFairy crash];
}

@end
</code></pre>
		</div>

		<div data-w-tab="tab-ios-swift" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>TestFairy.crash()</b>
			</p>
			<p><strong>Note</strong>: Available starting iOS SDK version 1.19.8
				
			<h3>Code Example</h3>
			<pre><code class="swift">
import UIKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        let button = UIButton(type: .roundedRect)
        button.frame = CGRect(x: 50, y: 50, width: 100, height: 30)
        button.setTitle("Crash", for: [])
        button.addTarget(self, action: #selector(self.crashApp(_:)), for: .touchUpInside)
        view.addSubview(button)
    }

    @IBAction func crashApp(_ sender: AnyObject) {
        TestFairy.crash()
    }
}
</code></pre>
		</div>

	</div>
</div>
