## TestFairy Connect

In order to connect TestFairy to JIRA Server that is installed on-prem, start by [installing TestFairy Connect](/Bug_Tracking/TestFairy_Connect.html)

## Configure TestFairy Connect to work with JIRA Server

This guide explains how to configure the TestFairy Connect agent to work with an on-premise JIRA using basic-authentication (user/password-token) or OAuth.

#### Using the wizard

Start the wizard by typing the following command in your terminal or command prompt:

```sh
$ testfairy-connect configure
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
  
  	- Somtimes, depending on your user definitions in JIRA, you may need to use an API token as your password. You can creat one here: <a hfer="https://id.atlassian.com/manage/api-tokens" target="_blank">https://id.atlassian.com/manage/api-tokens</a>
	
- **Please enter HTTP proxy server address, leave empty if none:**
  
  If you require HTTP proxy to access this JIRA server, please send it here. For example, http://user@10.0.0.1:8080.
  
#### Congratulations!

When done, the configuration wizard will display the success message: **Successfully connected to issue tracker.**

Congratulations, you have successfully configured TestFairy Connect with JIRA using basic authentication. Next, [start the agent from command line](https://docs.testfairy.com/Bug_Tracking/TestFairy_Connect.html)


---------------------------------

## Configure JIRA Custom Fields



In this document we will address how to configure custom fields and set default values when creating new JIRA issues.

When creating issues, TestFairy automatically fills the `summary` and `description` fields with information about the crash or feedback. But sometimes, you will want to assign default values to other fields, or pre-populate custom fields. For example, you would like to always set `Environment` to `Production app` and a custom field `Source` to `Tester feedback`.


## Configure JIRA with OAuth

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

 



