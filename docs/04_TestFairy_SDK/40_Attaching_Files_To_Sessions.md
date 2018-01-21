TestFairy allows developers to attach files to sessions. As a developer, you can upload up to 5 files to a given session, with a maximum size of 15MB per file. Files must be local to the device.
Be sure to check the device logs if there were any problems uploading files.

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;" href="#android">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-ios" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#ios">
			<div>iOS</div>
		</a>
	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
      <p>
        To attach a file to a session, all you need to do is call the static instance method attachFile in the TestFairy class:
      </p>
      <p>
        <b>File file = ...</b><br />
        <b>TestFairy.attachFile(file);</b><br />
      </p>
      <h3>Code Example</h3>
      <pre>
File file = new File("/path/to/file.txt");
TestFairy.attachFile(file);
      </pre>
		</div>

		<div data-w-tab="tab-ios" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				To attach a file to a session, all you need to do is call the static instance method attachFile in the TestFairy class:
			</p>
			<p>
				<b>NSURL *file = ...</b><br />
				<b>[TestFairy attachFile:file];</b><br />
			</p>

			<h3>Code Example</h3>
			<pre>
NSURL *file = [NSURL fileURLWithPath:"/path/to/file.txt"];
[TestFairy attachFile:file];
			</pre>
		</div>

	</div>
</div>
