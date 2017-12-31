
In this document we will address how to configure custom fields and set default values when creating new JIRA issues.

When creating issues, TestFairy automatically fills the `summary` and `description` fields with information about the crash or feedback. But sometimes, you will want to assign default values to other fields, or pre-populate custom fields. For example, you would like to always set `Environment` to `Production app` and a custom field `Source` to `Tester feedback`.

#### Updating testfairy-connect.json

TestFairy Connect uses a json configuration file called `config.json`. Unless the path value overriden, the default path is `$HOME/.testfairy-connect/config.json`. To set default values to built-in fields and custom fields, add a `customFields` section inside `issueTracker`. Please review the screenshot below:

![Screenshot](https://docs.testfairy.com/img/testfairy-connect/jira-custom-fields.png)

Here is the full sample `config.json` file, for easy copy-pasting. This sample configuration will set `Affected Versions` (versions) to `Version 1.0` (id 10601), and `Environment` to the string `Lab testing`.

```json
{
	"testfairy": {
		"timeout": 1000,
		"apiKey": "0000000000000000000000000000000000000000",
		"URL": "https://app.testfairy.com/connect"
	},
	"issueTracker": {
		"type": "jira",
		"issueType": "Bug",
		"strictSSL": false,
		"username": "myusername",
		"password": "mypassword",
		"customFields": [
			{
				"projectKey": "DEMOAPP",
				"fields": [
					{
						"key": "versions",
						"defaultValue": [
							{"id": "10601"}
						]
					},
					{
						"key": "environment",
						"defaultValue": "Lab testing"
					}
				]
			}
		],
		"URL": "https://example.atlassian.net"
	}
}
```


#### Fetching custom fields IDs

When working with custom fields, JIRA requires you to send the key of the custom field, for example `customfield_10320`. The values of these custom fields may also have IDs of their own; for example, multiple selection fields. You can access the full raw scheme of your JIRA installation by reviewing the url below. Remember to replace the server address and `projectkeys` with your JIRA server address and JIRA project:

```
https://example.atlassian.net/rest/api/2/issue/createmeta?expand=projects.issuetypes.fields&projectKeys=DEMOAPP
```
