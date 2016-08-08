
### REST API Endpoint

`GET https://app.testfairy.com/api/1/`

### Parameters (Required)
 - `email` Your email.
 - `api_key` Your API application key. See https://app.testfairy.com/settings for details.

### Functions

 - `list projects`
	get a list of all projects.
	for example: [https://app.testfairy.com/api/1/projects](https://app.testfairy.com/api/1/projects?pretty)
 - `list builds`
	get a list of all builds.
	for example: https://app.testfairy.com/api/1/projects/(projectId-projectName)/builds/
 - `list sessions`
	get a list of all sessions.
	for example: https://app.testfairy.com/api/1/projects/(projectId-projectName)/builds/(buildId)/sessions/
 - `get session`
	get a session data.
	for example: https://app.testfairy.com/api/1/projects/(projectId-projectName)/builds/(buildId)/sessions/(sessionId)
 - `list crashes`
	get a list of all crashes.
	for example: https://app.testfairy.com/api/1/projects/(projectId-projectName)/builds/(buildId)/crashes
 - `list testers`
	get a list of all testers.
	for example: [https://app.testfairy.com/api/1/testers](https://app.testfairy.com/api/1/testers?pretty)
 - `add testers`
 	add one or more testers, and assign them to a group.
 - `get testers`
	get a list of all build testers.
	for example: https://app.testfairy.com/api/1/projects/(projectId-projectName)/builds/(buildId)/testers

### Error Codes

In case of an error, TestFairy will return a JSON with `status` => `fail` and `code` with one of the values
listed below. An additional human-readable error message is supplied, with regards to cause of the specific error.

| Code | Reason             |
|-----:|:-------------------|
|    1 | Missing parameters |
|  104 | User not found     |
|  106 | No permissions     |

### Example Request (CURL)
```sh
curl -u "david@gmail.com:abcde" "https://app.testfairy.com/api/1/search?loaded=home&notLoaded=away"
```

### Example Response
```json
{
	"status": "ok",
	"sessions":[
        		{
        			"id":"8",
        			"sessionStartTime":"2014-05-28 11:49:00",
        			"duration":"17:54:09",
        			"testerEmail":"tester@gmail.com",
        			"device":"LG - Optimus L5 II",
        			"ipAddress":"10.10.10.10",
        			"crashed":false,
        			"activities":[
        				"com.example.HelloActivity"
        			],
        			"checkpoints":[
        				"home"
        			]
        		}
        	]
}
```

### Example Request (CURL)
```sh
curl -u "david@gmail.com:abcde" "https://app.testfairy.com/api/1/testers" -F email=mario@gmail.com -F group=family 
```

### Example Response
```json
{
	"status": "ok",
	"testers":[
		"mario@gmail.com"
	]
}
```
