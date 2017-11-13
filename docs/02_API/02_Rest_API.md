#### About

This is the reference document for the TestFairy REST API. This API allows the developer to access and interact with TestFairy
data remotely.

#### Getting Started

Getting started with the REST API is easy, and can be done from command line and with any programming language. Let's begin with a simple example. We will start by listing all our projects.

A project is either an iOS app or an Android app (two apps with the same package name but on different platforms are considered two projects.)

```
curl -u john@example.com:00001234cafecafe "https://api.testfairy.com/api/1/projects/"
```

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

<hr />

#### [api/1/projects/{project-id}/builds/{build-id}/crashes/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> List all crashes in build
	</span>
	<code>GET /api/1/projects/{project-id}/builds/{build-id}/crashes/</code>
</div>

<hr />

#### [api/1/projects/{project-id}/builds/{build-id}/sessions/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> List all recorded sessions in build
	</span>
	<code>GET /api/1/projects/{project-id}/builds/{build-id}/sessions/</code>
</div>

<hr />

#### [api/1/projects/{project-id}/builds/{build-id}/testers/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get invitation status for build
	</span>
	<code>GET /api/1/projects/{project-id}/builds/{build-id}/testers/</code>
</div>

<hr />

#### [api/1/projects/{project-id}/builds/{build-id}/sessions/{session-id}/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get session data, events and logs
	</span>
	<code>GET /api/1/projects/{project-id}/builds/{build-id}/sessions/{session-id}/</code>
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

<hr />

<style>h4 {margin-bottom: 30px;}</style>