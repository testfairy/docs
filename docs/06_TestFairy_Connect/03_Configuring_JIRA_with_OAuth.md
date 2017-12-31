

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

 
