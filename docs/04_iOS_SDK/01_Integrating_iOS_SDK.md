<iframe width="854" height="480" src="https://www.youtube.com/embed/DhRX5UukvPM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Integrating the TestFairy SDK into your app helps you better understand how your app performs on real devices. It tells you
when and how people are using your app, and provides you with any metrics you may need to optimize your user experience and code.

You get to:

* Track app use.
* Handle crashes and report to server.
* Record screen video and other metrics.
* Understand user flow, using checkpoints.
* Grab NSLogs from client and report to server.
* Automatically update if a new build is available (Ad Hoc only.)

## Add the SDK

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-manual" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;" href="#manual">
			<div>Manual</div>
		</a>
		<a data-w-tab="tab-cocoapods" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#cocoapods">
			<div>Cocoapods</div>
		</a>
		<a data-w-tab="tab-carthage" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#carthage">
			<div>Carthage</div>
		</a>
	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-manual" class="w-tab-pane w--tab-active">
			<ol>
				<li>Download the framework from our <a href="https://app.testfairy.com/sdk/ios/" target="_blank">Download page</a>.</li>
				<li><p>Unzip files and drag them into your project tree.</p>
					<blockquote>
					  <p><img src="https://app.testfairy.com/images/app/sdk/tutorial-unzip-files.png" alt="alt"></p>
					</blockquote>

					<p>Make sure <strong>Copy items if needed</strong> is checked when dragging files to your project.</p>

					<blockquote>
					  <p><img src="https://docs.testfairy.com/img/ios/sdk/copy-items-if-needed.png" alt="alt"></p>
					</blockquote>
				</li>
				<li><p>Add the following frameworks:<br>
					</p>
					<p><ul>
					<li>In Xcode, select the project file from the project navigator, 
						on the left side of the project window.</li>
					<li>Show Projects and Target List.</li>
					<li>In the project settings editor, select the target to which you would like to add 						frameworks.</li>
					<li>Select the “Build Phases” tab, and click the small triangle next to “Link Binary 						With Libraries” to view all of the frameworks in your application.</li>
					</ul></p>
					<ul>
					<li><code>CoreMedia.framework</code></li>
					<li><code>CoreMotion.framework</code></li>
					<li><code>AVFoundation.framework</code></li>
					<li><code>SystemConfiguration.framework</code></li>
					<li><code>OpenGLES.framework</code></li>
					</ul><p>
					<img class="instruction-gif" width="500" src="https://doa2yz3uy4ty4.cloudfront.net/images/app/header/xcode-demo-1.gif"></p>
				</li>
			</ol>
		</div>

		<div data-w-tab="tab-cocoapods" class="w-tab-pane">
			<p>Add the <em>TestFairy</em> pod to your Podfile by inserting the following line where applicable:</p>
			<pre>
				<code class=" hljs bash">pod <span class="hljs-string">'TestFairy'</span></code>
			</pre>
		</div>

		<div data-w-tab="tab-carthage" class="w-tab-pane">
			<p>Once you have Carthage installed, you can begin adding frameworks to your project. Note that Carthage only supports dynamic frameworks, which are <strong>only available on iOS 8 or later</strong> (or any version of OS X).<br></p>
			<ol>
				<li>Add <code>github "testfairy/testfairy-carthage"</code> to your Cartfile.</li>
				<li>Run <code>carthage update</code>. </li>
				<li>On your application targets’ “General” settings tab, in the “Linked Frameworks and Libraries” section, drag and drop the TestFairy framework from the [Carthage/Build][] folder on disk.</li>
			</ol>
			<p><img src="../../img/ios/carthage/carthage_1.png" alt=""><br></p>
			<ol>
				<li><p>On your application targets’ “Build Phases” settings tab, click the “+” icon and choose “New Run Script Phase”. Create a Run Script in which you specify your shell (ex: <code>bin/sh</code>), add the following contents to the script area below the shell:</p>

				<pre><code class="language-sh hljs perl">/usr/<span class="hljs-keyword">local</span>/bin/carthage copy-frameworks
				</code></pre>

				<p>and add the paths to the TestFairySDK frameworks under “Input Files”, e.g.:</p>

				<pre><code class=" hljs bash"><span class="hljs-variable">${SRCROOT}</span>/Carthage/Build/iOS/TestFairySDK.framework
				</code></pre></li>
			</ol>
			<p><img src="../../img/ios/carthage/carthage_2.png" alt=""></p>
		</div>

	</div>
</div>

### Initialize the SDK

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-ios-objc" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;" href="#ios-objc">
			<div>Objective-C</div>
		</a>
		<a data-w-tab="tab-ios-swift" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#ios-swift">
			<div>Swift</div>
		</a>
	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-ios-objc" class="w-tab-pane w--tab-active">
			<ol>
				<li><p>Open your <strong>AppDelegate.m</strong> file.</p></li>
				<li>
					<p>Add this code to your app:</p>
					<iframe frameborder="0" width="100%" height="200" src="https://app.testfairy.com/sdk/ios/iframe"></iframe>
				</li>
			</ol>
		</div>

		<div data-w-tab="tab-ios-swift" class="w-tab-pane">
			<ol>
			<li>
				<p>Create an Objective-C bridging header</p>
				<p>Since this process only needs to be done once per project, if you have already done so, just update your bridging header file.</p>

				<ul>
					<li>Right-click on your project, select <code>New File...</code></li>
					<li>Select <code>Header File.h</code></li>
					<li>Save as <code>Bridging.h</code> in your project</li>
					<li>Click on <code>Bridging.h</code> to open it in editor</li>
					<li>Add the following line to the code: </li>
				</ul>

				<pre><code class=" hljs java">#<span class="hljs-keyword">import</span> <span class="hljs-string">"TestFairy.h"</span></code></pre>

				<p>Update Build Settings with the new bridging header:</p>

				<ul>
					<li>Click on your project</li>
					<li>Select <em>Build Settings</em> tab</li>
					<li>Select the "All" filter, in order to find <em>Swift Compiler - Code Generation</em>: <em>Objective-C Bridging Header</em></li>
					<li>Edit <em>Swift Compiler - Code Generation</em>: <em>Objective-C Bridging Header</em> (double-click to edit).</li>
					<li>Drag "Bridging.h" from the source tree onto the edit box opened</li>
				</ul>
			</li>
			<li><p>Open your <strong>AppDelegate.swift</strong> file.</p></li>
			<li>
				<p>Add this code to your app:</p>
				<iframe frameborder="0" width="100%" height="200" src="https://app.testfairy.com/sdk/ios-swift/iframe"></iframe>
			</li>
		</ol>
		</div>

	</div>
</div>

### Class Reference

[https://app.testfairy.com/reference/ios/Classes/TestFairy.html](https://app.testfairy.com/reference/ios/Classes/TestFairy.html)

### Troubleshooting

For more information about common problems when integrating the iOS SDK, please visit our [FAQ page](https://docs.testfairy.com/FAQ.html)

### Related documentation

* [Upload iOS dSYM files to TestFairy](/iOS_SDK/Uploading_dSyms_to_TestFairy.html)
