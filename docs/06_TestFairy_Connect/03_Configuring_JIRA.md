
## Configuration

This guide explains how to configure the TestFairy Connect agent to work with an on-premise JIRA using basic-authentication (user/password.)

If your organization is using OAuth or SSO services, you might need to use TestFairy Connect with OAuth authentication.

#### Using the wizard

Start the wizard by typing the following command in your terminal or command prompt:

```sh
$ node node_modules/testfairy-connect/service.js configure
```

**Welcome to TestFairy Connect configuration wizard.**

- What is your TestFairy API Key?
   - Please put your Upload API key here, you can access it via the [Settings Page](https://app.testfairy.com/settings/#api-key)
- What kind of issue tracking system will you use with TestFairy Connect?
   - Choose "JIRA"
- What is your JIRA URL (e.g. https://example.atlassian.net)?
   - Please provide the url address of your JIRA server. Don't forget to include the http:// or https:// prefix.
- How shall TestFairy Connect authenticate to JIRA? 
   - Choose "basic"
- What is the type of JIRA issues to be created using TestFairy Connect? 
   - Please choose to appropriate issuetype used in your JIRA. By default, JIRA uses "Bug", but it varys on project type. Other examples are "Defect" or "Task".
- JIRA username:
   - Please enter your JIRA login username
- JIRA password:
   - And your JIRA login password
- Please enter HTTP proxy server address, leave empty if none: 
   - If you require HTTP proxy to access this JIRA server, please send it here. For example, http://user@10.0.0.1:8080.
   
When done, the configuration wizard will display the success message: **Successfully connected to issue tracker.**

Congratulations! You have successfully configured TestFairy Connect with JIRA using basic authentication. Next, [start the agent from command line](https://docs.testfairy.com/TestFairy_Connect/Installing_on_Linux_or_Mac.html)

