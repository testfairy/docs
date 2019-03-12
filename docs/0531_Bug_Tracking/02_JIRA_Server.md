## TestFairy Connect
In order to connect TestFairy to JIRA Server that is installed on-prem, start by [installing TestFairy Connect](/Bug_Tracking/TestFairy_Connect.html)

## Configure TestFairy Connect to work with JIRA Server


This guide explains how to configure the TestFairy Connect agent to work with an on-premise JIRA using basic-authentication (user/password.)

If your organization is using OAuth or SSO services, you might need to use TestFairy Connect with OAuth authentication.

#### Using the wizard

Start the wizard by typing the following command in your terminal or command prompt:

```sh
$ node node_modules/testfairy-connect/service.js configure
```

**Welcome to TestFairy Connect configuration wizard.**

- **What is your TestFairy API Key?**

  Please put your Upload API key here, you can access it via the [Settings Page](https://app.testfairy.com/settings/#api-key)

- **What kind of issue tracking system will you use with TestFairy Connect?**
  
  Choose "JIRA"

- **What is your JIRA URL (e.g. https://example.atlassian.net)?**
  
  Please provide the url address of your JIRA server. Don't forget to include the http:// or https:// prefix.

- **How shall TestFairy Connect authenticate to JIRA?** 
  
  Please choose "basic"

- **What is the type of JIRA issues to be created using TestFairy Connect?**
  
  Please choose to appropriate issuetype used in your JIRA. By default, JIRA uses "Bug", but it varys on project type. Other examples are "Defect" or "Task".

- **JIRA username:**
  
  Please enter your JIRA login username

- **JIRA password:**
  
  And your JIRA login password

- **Please enter HTTP proxy server address, leave empty if none: **
  
  If you require HTTP proxy to access this JIRA server, please send it here. For example, http://user@10.0.0.1:8080.
  
#### Congratulations!

When done, the configuration wizard will display the success message: **Successfully connected to issue tracker.**

Congratulations, you have successfully configured TestFairy Connect with JIRA using basic authentication. Next, [start the agent from command line](https://docs.testfairy.com/Bug_Tracking/TestFairy_Connect.html)


---------------------------------

## Configure JIRA Custom Fields



In this document we will address how to configure custom fields and set default values when creating new JIRA issues.

When creating issues, TestFairy automatically fills the `summary` and `description` fields with information about the crash or feedback. But sometimes, you will want to assign default values to other fields, or pre-populate custom fields. For example, you would like to always set `Environment` to `Production app` and a custom field `Source` to `Tester feedback`.

#### Updating testfairy-connect.json

TestFairy Connect uses a json configuration file called `config.json`. Unless the path value is overriden, the default path is `$HOME/.testfairy-connect/config.json`. To set default values to built-in fields and custom fields, add a `customFields` section inside `issueTracker`. Please review the screenshot below:

![Screenshot](https://docs.testfairy.com/img/testfairy-connect/jira-custom-fields.png)

Here is the full `config.json` sample file, for easy copy-pasting. This sample configuration will set `Affected Versions` (versions) to `Version 1.0` (id 10601), and `Environment` to the string `Lab testing`.

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


## Configure JIRA with OAuth




### JIRA (using oAuth access token)

Example ```config.json```:
   
```json
    {
        "testfairy": {
            "timeout": 5000,
            "apiKey": "[as found under Upload API Key @ https://app.testfairy.com/settings]",
            "URL": "https://app.testfairy.com/connect"
        },
        "issueTracker": {
            "type": "jira",
            "issueType": "Bug",
            "URL": "http://localhost:2990/jira",
            "strictSSL": false,
            "oauth": {
				"consumer_key": "testfairy-connect",
				"private_key_path": "~/.ssh/jira_rsa", //path to your private key
				"access_token": "0000000000000000000000000000", //obtained from script in section below
				"access_token_secret": "0000000000000000000000000000000" //obtained from script in section below
			},
            "projects": ["PROJECT1", "PROJECT2"],
            "fieldMapping": {
                "status": "status",
                "summary": "summary",
                "description": "description"
            }
        }
    }
```

Please note that the `issueTracker.URL` setting should have a proper schema (https or http), port (if not default), and path to JIRA application included.

#### Access token & secret generation:

1. Obtain a keypair:
	```
	openssl genrsa -out jira_rsa 2048
	openssl rsa -in jira_rsa -pubout > jira_rsa.pub
	```
	
2. Configure JIRA the Application Link for TestFairy Connect integration.
In your browser, go to your JIRA Admin page, like http://localhost:2990/jira/plugins/servlet/applinks/listApplicationLinks. 
Enter 'url' or any string to use for Application Link identification.

  ![Create an Application Link](https://docs.testfairy.com/img/testfairy-connect/1-create-application-link.png)

  In the next screen, click 'Continue'.
  
  ![Continue](https://docs.testfairy.com/img/testfairy-connect/2-continue.png)

  ![Setup Application Link](https://docs.testfairy.com/img/testfairy-connect/3-setup-application-link.png)
  
  - Application Name: TestFairy
  - Application Type: Generic Application
  - Service Provider Name: TestFairy
  - Consumer Key: testfairy-connect
  - Shared Secret: [paste public key contents here]
  - Request Token URL: /plugins/servlet/oauth/request-token
  - Request Token URL: /plugins/servlet/oauth/access-token
  - Request Token URL: /plugins/servlet/oauth/authorize

  ![Verify Access Token](https://docs.testfairy.com/img/testfairy-connect/4-verify-access-token.png)

3. Run the token generation script found [here](https://docs.testfairy.com/js/download/oauth.js). Right-click to copy .js file path. 
	```
	wget [paste file path here]
	npm install oauth
	node oauth.js
	```
	
4. Update your config.json with `access_token` and `access_token_secret`.

 



