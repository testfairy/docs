#### About

This is the reference document for the TestFairy REST API. This API allows the developer to access and interact with TestFairy data remotely.

#### Getting Started

Getting started with the REST API is easy, and can be done via command line with any programming language. Let's begin with a simple example. We will start by listing all our projects.

A project is either an iOS app or an Android app (two apps with the same package name but on different platforms are considered two projects.)

<pre>
curl -u "john@example.com:00001234cafecafe" "https://api.testfairy.com/api/1/projects/"
</pre>

In the example above, you can see that our user is `john@example.com` and the API key is `0001234cafecafe`. This user authentication token is required for all requests to the REST server.

**Your API key is private**, please do not share it or post it on public code repositories or forums. To find your API key, please refer to [your preferences page](https://app.testfairy.com/settings).

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
			"platform":"Android",
			"icon":"[URL TO APP ICON]"
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
			"id":8830728,
			"self":"/projects/6806100-myapplication/builds/8830728",
			"projectId":"6806100",
			"appName":"My Application",
			"appVersion":"DemoApp",
			"appVersionCode":"20",
			"appDisplayName":"My Application - DemoApp (20)",
			"iconUrl":"[APP ICON URL]",
			"appUrl":"[URL TO APK OR IPA FILE]",
			"sessions":6,
			"crashes":0,
			"testers":0,
			"feedbacks":0,
			"downloads":1,
			"uploadedAt":"2019-04-04 16:03:15",
			"uploadedVia":"[UPLOAD DETAILS]",
			"hasTestFairySdk":true,
			"insightsEnabled":true,
			"videoEnabled":true
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
			"id":"5310d26524a58cca5ecff143c956529b",
			"self":"/projects/6804250-drawmeafairy/builds/8674596/crashes/5310d26524a58cca5ecff143c956529b",
			"message":"com.testfairy.samples.drawmefairy.CrashActivity$MyCountDownTimer.onFinish (CrashActivity.java:41)",
			"occurrences":4
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
		"id":4426273741,
		"sessionStartTime":"2019-05-20 09:05:30",
		"duration":"00:27",
		"testerEmail":"blabla@ex.com",
		"device":"Xiaomi - Redmi S2",
		"ipAddress":"84.94.200.136",
		"crashed":false,
		"identity":{
			"correlationId":"blabla@ex.com",
			"attr3":"three",
			"attr4":"four",
			"attr1":"High",
			"attr2":"1.0",
			"attr5":"Version 1.0"
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
		"email":"rafael@testfairy.com",
		"invitationStatus":"1",
		"hasUdidAccess":true,
		"isBlocked":false,
		"allowAll":false,
		"hasPushToken":false,
		"emailBounce":null,
		"groups":[ 
			],
			"allDevices":[
			{
			"id":"29651071",
			"manufacturer":"Android-8.1.0",
			"name":null,
			"raw":null
			}
			],
			"appleDevices":[			
			{  
			"id":"178760",
			"manufacturer":"Apple",
			"name":"iPhone 5s",
			"udid":"f26c9479ad8c5275422d05c59fcd0b266c3731b5"
			},
			{  
			"id":"182637",
			"manufacturer":"Apple",
			"name":"iPad Mini 4",
			"udid":"42c5e7c45aa3df85ee4cd9e0c6a5d01bf202ed01"
			},
			{
			"email": "alice@testfairy.com"
			}
		]
	}
</pre>
</div>

<div class="method">
	<span>
		<button class="expand">▶</button> Add a new tester
	</span>
	<code>POST /api/1/testers/</code>
</div>
<div class="method-description hidden">
	Add a new tester to account. Optionally can add them to a group.<br />

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

#### [api/1/feedbacks/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get latest recorded feedbacks
	</span>
	<code>GET /api/1/feedbacks/</code>
</div>
<div class="method-description hidden">
	Get metadata for 100 of the latest feedbacks recorded. <br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok",
	"feedbacks": [
		{
			"recorded_at": "2018-08-01 04:14:46",
			"text": "Feedback working",
			"feedbackId": "54321",
			"screenshotUrl": "https://s3.amazonaws.com/feedback.jpg",
			"buildId": "1234",
			"projectId": "23456",
			"recordedAt":"2018-08-01 14:14:46",
			"source": "shake",
			"reported_by": "john@testfairy.com",
			"session_id": "8765432"
		}
	]
}
	</pre>
</div>

<hr />

<style>h4 {margin-bottom: 30px;}</style>
