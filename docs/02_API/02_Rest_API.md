#### About

This is the reference document for the TestFairy REST API. This API allows the developer to access and interact with TestFairy
data remotely.

#### Getting Started

Getting started with the REST API is easy, and can be done from command line and with any programming language. Let's begin with a simple example. We will start by listing all our projects.

A project is either an iOS app or an Android app (two apps with the same package name but on different platforms are considered two projects.)

<pre>
curl -u "john@example.com:00001234cafecafe" "https://api.testfairy.com/api/1/projects/"
</pre>

In the example above, you can see that our user is `john@example.com` and the API key is `0001234cafecafe`. This user authentication token is required for all requests to the REST server.

**Your API key is private**, please do not share it or post it on public code repositories or forums. To find your API key, please refer to [https://app.testfairy.com/settings](https://app.testfairy.com/settings).

<hr />

#### [api/1/projects](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get all projects
	</span>
	<code>GET /api/1/projects/</code>
</div>
<div class="method-description hidden">
	Returns a list of all projects (iOS and Android apps) in this account.<br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok",
	"projects": [
		{
			"id": "19-groupshot",
			"self": "/projects/19-groupshot",
			"name":"GroupShot",
			"packageName":"com.groupshot",
			"platform":"Android"
		}
	]
}</pre>
</div>

<hr />

#### [api/1/projects/{project-id}/builds/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get all builds in a project
	</span>
	<code>GET /api/1/projects/{project-id}/builds/</code>
</div>
<div class="method-description hidden">
	Get all builds in a specific project. Each build is a distinct version that was either uploaded, or created by the TestFairy SDK.<br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok",
	"builds": [
		{
			"id": 2820564,
			"self": "/projects/2197059-mainactivity/builds/2820564",
			"appName": "My Mobile Application",
			"originalFilename": "my-mobile-application-release.apk",
			"fileSize": 129153,
			"uploadDate": "2017-12-20 22:03:00",
			"version": "1.0",
			"sessions": 14,
			"crashes": 3
		}
	]
}
</pre>
</div>

<hr />

#### [api/1/projects/{project-id}/builds/{build-id}/crashes/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> List all crashes in build
	</span>
	<code>GET /api/1/projects/{project-id}/builds/{build-id}/crashes/</code>
</div>
<div class="method-description hidden">
	Get all crashes in a specific build. These crashes ungrouped, meaning, the same stack trace may appear multiple times (one for each session).<br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok",
	"crashes": [
		{
			"sessionId": 50571690,
			"testerEmail": "john@testfairy.com",
			"message": "android.content.ActivityNotFoundException: Unable to find explicit activity class {com.testfairy.apps.sample/com.testfairy.apps.sample.MemoryTest}; have you declared this activity in your AndroidManifest.xml?",
			"stackTrace": "android.content.ActivityNotFoundException: Unable to find explicit activity class {com.testfairy.apps.sample/com.testfairy.apps.sample.MemoryTest}; have you declared this activity in your AndroidManifest.xml? at android.app.Instrumentation.checkStartActivityResult(Instrumentation.java:1794) at android.app.Instrumentation.execStartActivity(Instrumentation.java:1512) at android.app.Activity.startActivityForResult(Activity.java:3917) at android.app.Activity.startActivityForResult(Activity.java:3877) at android.app.Activity.startActivity(Activity.java:4200) at android.app.Activity.startActivity(Activity.java:4168) at com.testfairy.apps.sample.MainActivity$14.onClick(MainActivity.java:187) at android.view.View.performClick(View.java:5198) at android.view.View$PerformClick.run(View.java:21147) at android.os.Handler.handleCallback(Handler.java:739) at android.os.Handler.dispatchMessage(Handler.java:95) at android.os.Looper.loop(Looper.java:148) at android.app.ActivityThread.main(ActivityThread.java:5417) at java.lang.reflect.Method.invoke(Native Method) at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:726) at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:616) "
		}
	]
}
</pre>
</div>

<hr />

#### [api/1/projects/{project-id}/builds/{build-id}/sessions/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> List all recorded sessions in build
	</span>
	<code>GET /api/1/projects/{project-id}/builds/{build-id}/sessions/</code>
</div>
<div class="method-description hidden">
	Get metadata for all sessions recorded for a specific build.<br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok",
	"sessions": [
		{
			"id": 1,
			"self": "/projects/2197059-demoapp/builds/4867553/sessions/1",
			"startTime": "2017-01-22 16:42:40",
			"duration": "15:01",
			"testerEmail": "john@testfairy.com",
			"device": "Samsung - Samsung Galaxy S8",
			"ipAddress": "23.100.122.175",
			"crashed": false,
			"countryName": "United States",
			"countryCode": "us"
		}
	]
}
</pre>
</div>

<hr />

#### [api/1/projects/{project-id}/builds/{build-id}/sessions/{session-id}/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get session data, events and logs
	</span>
	<code>GET /api/1/projects/{project-id}/builds/{build-id}/sessions/{session-id}/</code>
</div>
<div class="method-description hidden">
	Get metadata (and optionally data) for a specific session.<br />

	<table>
	<tr>
		<th style="width: 160px;"><b>parameter</b></th>
		<th style="width: 100px;"><b>type</b></th>
		<th><b>description</b></th>
	</tr>
	<tr>
		<td>fields</td>
		<td><em>string</em></td>
		<td>
			Possible values: "meta", "logs", "events"<br />
			Default value: "meta" <br/>
			Use "events" to load all events, screenshots, touches and other metrices. Use "logs" to fetch
			only logs. When loading logs, response will be application/text.
		</td>
	</tr>
	</table>

	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok",
	"session": {
		"id": 1,
		"sessionStartTime": "2017-01-22 16:42:40",
		"duration": "15:01",
		"testerEmail": "john@testfairy.com",
		"device": "Samsung - Samsung Galaxy S8",
		"ipAddress": "23.100.122.175",
		"crashed": false
	}
}
</pre>
</div>

<hr />

#### [api/1/testers/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> List all testers
	</span>
	<code>GET /api/1/testers/</code>
</div>
<div class="method-description hidden">
	List all testers in this account.<br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok",
	"testers": [
		{
			"email": "john@testfairy.com",
			"deviceCount": 3
		},
		{
			"email": "alice@testfairy.com",
			"deviceCount": 1
		}
	]
}</pre>
</div>

<div class="method">
	<span>
		<button class="expand">▶</button> Add a new tester
	</span>
	<code>POST /api/1/testers/</code>
</div>
<div class="method-description hidden">
	Add a new tester to account. Optionally can add them to a group, and optionally send an invitation email.<br />

	<table>
	<tr>
		<th style="width: 160px;"><b>parameter</b></th>
		<th style="width: 100px;"><b>type</b></th>
		<th><b>description</b></th>
	</tr>
	<tr>
		<td>email</td>
		<td><em>string</em></td>
		<td>
			One or more emails, separated by commas, to add to your account.
		</td>
        </tr>
	<tr>
		<td>group</td>
		<td><em>string</em></td>
		<td>
			Assign tester or testers to this tester-group. Will create one if no such group exists.
			Default value: none<br />
		</td>
	</tr>
	<tr>
        	<td>allow-all</td>
        	<td><em>string</em></td>
        	<td>
        		Allow these testers to see all apps, including apps that will be uploaded in the future?
        		Default value: false<br />
        	</td>
        </tr>
	</table>

	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok"
}
</pre>
</div>

<hr />

<style>h4 {margin-bottom: 30px;}</style>