TestFairy can show you crash reports to help you identify the place in the code that is causing a problem. TestFairy crash reports are easier to understand when they show actual debug symbols instead of addresses.

TestFairy requires your app's debug symbols (dSYMs) to clearly show you the names of the methods in your code. DSYM files are created by Xcode when you build your app. There are a couple of ways to upload them to TestFairy (see below).

* [Generate Symbols in Xcode](#generate-symbols)
* [Uploading Symbols to TestFairy](#upload-symbols)
	* [How to upload multiple dSYMs](#multiple-symbols)
	* [Fatal: Can't find .dSYM folder!](#fatal-dsym)
* [Handling missing DSYMs](#missing-symbols)
	* [Locating dSYMs on your hard-drive](#locate-missing-dsym)
	* [Locating dSYMs for Bitcode builds](#bitcode-dsym)

#  <a name="generate-symbols"></a>Generate Symbols in Xcode

First, make sure your Xcode project is configured to generate the debug symbols:

1. Click on your project and select Build-Settings.
2. In the search box, type "Debug Information Format".
3. Click on "Debug Information Format" and select "DWARF with dSYM File"
![alt dsym](https://docs.testfairy.com/img/ios/dsym-upload/dsym.png)

#  <a name="upload-symbols"></a>Uploading Symbols to TestFairy

<p>In order to upload symbols to TestFairy, you'll need to have your <strong>UPLOAD_API_KEY</strong> ready, which can be found from your <a href="https://app.testfairy.com/settings/#apikey" target="_blank">user preferences page</a>.</p>

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">

		<a data-w-tab="tab-xcode" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;"  href="#xcode">
			<div>Xcode</div>
		</a>

		<a data-w-tab="tab-upload-api" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#upload-api">
			<div>Upload API</div>
		</a>

		<a data-w-tab="tab-upload-script" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#upload-script">
			<div>Upload Script</div>
		</a>

		<a data-w-tab="tab-build-settings" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#build-settings">
			<div>Build Settings</div>
		</a>

		<a data-w-tab="tab-jenkins" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#jenkins">
			<div>Jenkins</div>
		</a>

		<a data-w-tab="tab-xamarin-studio" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#xamarin-studio">
			<div>Xamarin Studio</div>
		</a>
	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-xcode" class="w-tab-pane w--tab-active">
			<p>A simple Build Phase script can automatically upload the compressed .dSYM file for future symbolication</p>

			<ol>
				<li>
					<div>
						<div>In Xcode, click on your project in the left sidebar, then click on <strong>Build Phases</strong>.</div>
						<p><img src="../../img/ios/dsym-upload/step1.png" alt="alt"><br></p>
					</div>
				</li>

				<li>
					<div>
						<div>
							Click on <strong><em>plus sign</em></strong> on the left and select <strong>New Run Script Build Phase</strong>
						</div>
						<p><img src="../../img/ios/dsym-upload/step2.png" alt="alt"><br></p>
					</div>
				</li>

				<li>
					<div>
						<div>
							Open the newly added <strong>Run Script</strong> and add this line at the bottom:
						</div>

						<pre><code class="language-sh hljs bash">sh <span class="hljs-string">"<span class="hljs-variable">${SRCROOT}</span>/TestFairy/upload-dsym.sh"</span> UPLOAD_API_KEY
						</code></pre>

						<p>If you're using <strong>Cocoapods</strong>, you will have to use a different path to <code>upload-dsym.sh</code> You can use either:</p>

						<pre><code class="language-sh hljs bash">sh <span class="hljs-string">"<span class="hljs-variable">${SRCROOT}</span>/Pods/TestFairy/upload-dsym.sh"</span> UPLOAD_API_KEY
						</code></pre>

						<p>or</p>

						<pre><code class="language-sh hljs bash">sh <span class="hljs-string">"<span class="hljs-variable">${PODS_ROOT}</span>/TestFairy/upload-dsym.sh"</span> UPLOAD_API_KEY
						</code></pre>

						<p>If you're using <strong>Carthage</strong>, you will have to use a different path to <code>upload-dsym.sh</code></p>

						<pre><code class="language-sh hljs bash">sh <span class="hljs-string">"<span class="hljs-variable">${SRCROOT}</span>/Carthage/Build/iOS/TestFairySDK.framework/upload-dsym.sh"</span> UPLOAD_API_KEY
						</code></pre>

						<div>
							<p>Make sure the specified path includes the upload-dsym.sh file.</p>
							<p>Make sure to replace <strong>UPLOAD_API_KEY</strong> with the your secret upload API key, found in the <a href="https://app.testfairy.com/settings/#apikey">Settings</a> page.</p>
							<p><img src="../../img/ios/dsym-upload/step3.png" alt="alt"></p>
						</div>
					</div>
				</li>
			</ol>

		</div>

		<div data-w-tab="tab-upload-api" class="w-tab-pane">
			<p>We recommend uploading dSYM files together with the app build files.<br>
			Use our upload API and add the dSYM files when the app is ready for distribution and testing.<br>
			</p>
			<ol>
				<li>
					<p>Create a zip file from the contents of your symbols directory. The best way to locate this path can be found <a href="#missing-symbols">here</a>.</p>

					<p>For example, the following command creates a zip file called <code>symbols.zip</code> from the symbols of my ‘Hi’ app and stores it in the <code>/tmp</code> directory.</p>

					<p><code>zip -r /tmp/symbols.zip<br>
					~/Library/Developer/Xcode/DerivedData/Hi/Build/Products/Debug-iphoneos/Hi.app.dSYM/*</code></p>
				</li>
				<li>
					<p>Run the upload command:
					</p>

					<p><code>curl https://app.testfairy.com/api/upload \<br>
					 &nbsp;&nbsp;&nbsp;-F api_key='UPLOAD_API_KEY' \ <br>
					 &nbsp;&nbsp;&nbsp;-F file='YOUR IPA FILE GOES HERE' \ <br>
					 &nbsp;&nbsp;&nbsp;-F symbols_file='YOUR ZIPPED SYMBOLS FILE GOES HERE' \ <br>
					 &nbsp;&nbsp;&nbsp;-F metrics='cpu,network,logcat' \ <br>
					&nbsp;&nbsp;&nbsp;-F testers_groups='friends,beta' \ <br>
					&nbsp;&nbsp;&nbsp;-F notify='on'</code></p>
				</li>
			</ol>
			<p></p>
			<p>If you need further instructions regarding our upload API, <a href="/API/Upload_API.html">read about it here</a></p>
		</div>

		<div data-w-tab="tab-upload-script" class="w-tab-pane">
			<p>If you are not planning to upload your app to TestFairy and you are not using Xcode, follow these instrucitons to upload your debug symbols:<br></p>
			<ol>
				<li>
					<p>Locate your DSYM_PATH directory. The best way to locate this path can be found <a href="#missing-symbols">here</a>.</p>
				</li>
				<li>
					Download the upload dSYM script from <a href="https://s3.amazonaws.com/testfairy/sdk/upload-dsym.sh">here</a>
				</li>
				<li>
					<p>Run this script:</p>
					<p><code>./upload-dsym.sh -f UPLOAD_API_KEY -p DSYM_PATH</code></p>
				</li>
			</ol>

			<p>Once you run the script it will compress the symbols directory and upload the symbols to TestFairy.</p>
		</div>

		<div data-w-tab="tab-build-settings" class="w-tab-pane">
			<p>If you upload apps straight from the TestFairy dashboard, upload your debug symbols from the build-settings page. Here is how you do it:</p>
			<ol>
				<li>
					<p>Create a zip file from the contents of your symbols directory. The best way to locate this path can be found <a href="#missing-symbols">here</a>.</p>

					<p>For example, the following command creates a zip file called <code>symbols.zip</code> from the symbols of my ‘Hi’ app and stores it in the <code>/tmp</code> directory.</p>

					<p><code>zip -r /tmp/symbols.zip<br>
					~/Library/Developer/Xcode/DerivedData/Hi/Build/Products/Debug-iphoneos/Hi.app.dSYM/*</code></p>
				</li>
				<li>
					<p>Login to TestFairy and go to the "App Overview" page by clicking the name of your app.</p>
				</li>
				<li>
					<p>Enter the build overview page by clicking on the build you wish to upload symbols for
				(If you only have one build, you will not see a list of builds, but rather land directly on the correct build overview page).
					</p>
				</li>
				<li>
					<p>Click on 'Build-Settings' from the top menu, then select the 'Symbolication' section.</p>
				</li>
				<li>
					<p>Select the zip files with the dSYM you just created and click "Upload"</p>
				</li>
			</ol>
		</div>

		<div data-w-tab="tab-jenkins" class="w-tab-pane">
			<p>If you have never used the TestFairy Jenkins plugin before, see the <a href="https://wiki.jenkins-ci.org/display/JENKINS/TestFairy+Plugin" target="_blank">installation instructions.</a>. Once set up, Xcode will build your app on the Jenkins server, and upload the app's symbols.</p>

			<ol>
				<li>
					<div>
						<div>Open Xcode on the machine that runs on Jenkins, click on your project in the left sidebar, then click on <strong>Build Phases</strong>.</div>
						<p><img src="../../img/ios/dsym-upload/step1.png" alt="alt"><br></p>
					</div>
				</li>

				<li>
					<div>
						<div>
							Click on <strong><em>plus sign</em></strong> on the left and select <strong>New Run Script Build Phase</strong>
						</div>
						<p><img src="../../img/ios/dsym-upload/step2.png" alt="alt"><br></p>
					</div>
				</li>

				<li>
					<div>
						<div>
							Open the newly added <strong>Run Script</strong> and add this line at the bottom:
						</div>
						<pre><code class="language-sh hljs bash">sh <span class="hljs-string">"<span class="hljs-variable">$SRCROOT</span>/TestFairy/upload-dsym.sh"</span> UPLOAD_API_KEY
						</code></pre>
						<div>
							<p>Make sure the specified path includes the upload-dsym.sh file.</p>
							<p>Make sure to replace <strong>UPLOAD_API_KEY</strong> with the your secret upload API key, found in the <a href="https://app.testfairy.com/settings/#apikey">Settings</a> page.</p>
							<p><img src="../../img/ios/dsym-upload/step3.png" alt="alt"></p>
						</div>
					</div>
				</li>
			</ol>
		</div>

		<div data-w-tab="tab-xamarin-studio" class="w-tab-pane">
			<p>If you are using Xamarin, please refer to instructions in <a href="/Platforms/Xamarin.html">this page</a>.</p>
		</div>

	</div>

</div>

##  <a name="multiple-symbols"></a>How to upload multiple dSYMs

You can upload multiple dSYMs per build. Some developers have frameworks developed in-house, and these frameworks make it to the final .IPA file. In order to upload dSYM in your framework project, just repeat the above steps using pointing to your framework's settings.

##  <a name="fatal-dsym"></a>Fatal: Can't find .dSYM folder!

If while compiling you get the error `Fatal: Can't find .dSYM folder!`, your project is not configured to [generate debug symbols](#generate-symbols).

#  <a name="missing-symbols"></a>Handling missing DSYMs

If you see a message in TestFairy about missing DSYMs or if you've published your app to the AppStore with Bitcode enabled, follow these instructions to locate and upload DSYMs.

##  <a name="locate-missing-dsym"></a>Locating dSYMs on your hard-drive

If your build is missing dSYMs, you can find them and upload them manually to TestFairy.

1. Login to TestFairy and go to the App overview page by clicking the name of your app.
2. Click on the name of your app build to reach the build overview page.
3. Click on 'Settings' from the Build menu, then select the 'Symbolication' section.
4. This section lists several required UUIDs (representing binary app builds for different device architecture or binary builds for frameworks you're using). To see crash reports with your classes and method names, you'll need to upload dSYMs for each UUID that is specified as required.
5. Open a command line terminal and run the following command to locate the DSYMs folder name for one of the listed required UUIDs (replace '<UUID>' with the actual UUID string):
    ```sh
    mdfind "com_apple_xcode_dsym_uuids == <UUID>" | grep dSYM
    ```
6. Create a zip file with the content of the DSYM directory (you can call the zip file any name you like)
	```
	zip -r /tmp/symbols.zip <YOUR_DSYM_LOCATION>/*
	 ```
7. Proceed to upload the zip as described [here](#upload-symbols).

If you can't locate your dSYMS using `mfind`, follow these instructions:

1. In Xcode, open the organizer window.
2. Control-Click the relevant build, and select "Show in Finder".
3. In Finder, Control-Click the archive and select "Show Package Contents".
4. The archive will contain a folder called dSYM.
5. Create a zip with the contents of the folder and proceed to upload the zip to TestFairy as explained [here](#upload-symbols).

##  <a name="bitcode-dsym"></a>Locating dSYMs for Bitcode builds.

If you enabled Bitcode for your build and released it to the store or submitted to TestFlight, take note that Apple will generate new dSYMs for your app and you'll need to download the new dSYMs from Xcode, and then upload them to TestFairy.

1. In Xcode, open the organizer window.
2. Click on the relevant build.
3. From the right side menu, click "download dSYMs".
4. Manually upload the dSYMs to TestFairy, [as described here](#upload-symbols)
