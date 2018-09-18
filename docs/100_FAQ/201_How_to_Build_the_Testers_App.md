TestFairy provides [private cloud](https://docs.testfairy.com/SDK/Private_Cloud_Integration.html) users to create their own copy of the TestFairy Testers App for either [Android](https://play.google.com/store/apps/details?id=com.testfairy.app&hl=en_US) or [iOS](https://itunes.apple.com/ca/app/testfairy/id977307991?mt=8).

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;"  href="#android">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-ios-objc" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#ios-objc">
			<div>iOS</div>
		</a>
	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<p>
			In order to build the app for Android, you should first checkout the project from <a target="_blank" href="https://github.com/testfairy/testers-app-android">GitHub</a>. Once checked out, you must simply update the following line
			<pre>private static final String BASE_URL = "&ltprivate cloud url&gt";</pre> found in the <a target="_blank" href="https://github.com/testfairy/testers-app-android/blob/master/TestFairyApp/src/main/java/com/testfairy/app/MainActivity.java#L54">MainActivity.java</a> to match the URL of your private cloud.
			</p>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<p>
			In order to build the app for iOS, you should first checkout the project from <a target="_blank" href="https://github.com/testfairy/testers-app-ios">GitHub</a>. Once checked out, you must simply update three files to match the URL of your private cloud.
				<ul>
					<li>
						<a target="_blank" href="https://github.com/testfairy/testers-app-ios/blob/master/src/config.xml#L10">App config</a>
						<pre>
&ltcontent src="&ltprivate cloud url&gt" /&gt
						</pre>
					</li>
					<li>
						<a target="_blank" href="https://github.com/testfairy/testers-app-ios/blob/master/platforms/ios/TestFairy/config.xml#L29">Deployed config</a>
						<pre>
&ltcontent src="&ltprivate cloud url&gt" /&gt
						</pre>
					</li>
					<li>
						<a target="_blank" href="https://github.com/testfairy/testers-app-ios/blob/master/src/platforms/ios/TestFairy/Classes/MainViewController.m#L32">MainViewController</a>
						<pre>
#define kCookieURL @"&ltprivate cloud url&gt/register-notification-cookie/?token="
						</pre>
					</li>
				</ul>
			</p>
		</div>
	</div>
</div>
