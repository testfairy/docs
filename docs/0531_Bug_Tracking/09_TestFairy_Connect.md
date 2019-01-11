
## What is TestFairy Connect?

TestFairy Connect is proxy server installed on-premise, designed to help companies connect their bug tracking systems running behind firewall (JIRA Server, TFS), with the TestFairy cloud.

## How to Install TestFairy Connect (video tutorial)

<iframe width="560" height="315" src="https://www.youtube.com/embed/SdEHd8jNsOM" frameborder="0" allowfullscreen></iframe>


## How does it work?

The key part of TestFairy Connect is the agent service (TFC Agent) that runs on a system, also behind that firewall, connecting to TestFairy's web app and to your bug tracking system.

![Overview](/img/testfairy-connect/0-overview.png)

This article details the requirements and steps to setting up TestFairy Connect. 
For more articles relating to this subject, check out the following links:

- [Installing on Linux or Mac](/TestFairy_Connect/Installing_on_Linux_or_Mac.html)
- [Configuring Team Foundation Server](/TestFairy_Connect/Configuring_TFS.html)
- [Configuring JIRA with OAuth](/TestFairy_Connect/Configuring_JIRA_with_OAuth.html)
- [Configuring JIRA with Basic Auth](/TestFairy_Connect/Configuring_JIRA.html)


## Prerequisites
* Node.js 6
* Git 1.7+

For Team Foundation Server (TFS) integration, please refer to [that documentation](https://docs.testfairy.com/TestFairy_Connect/Configuring_TFS.html) for additional requirements. 

## Installation

Installation is done via npm. Please run the following command in a folder for your TestFairy Connect installation:

 ```
 npm install git+https://github.com/testfairy/testfairy-connect.git
 ```

## Configuration

To configure TestFairy Connect, run the following line and follow the on-screen instructions:
```
 node node_modules/testfairy-connect/service.js configure [-f /path/to/config.json]
```

You'll need the following data:

* TestFairy API key (found at [https://app.testfairy.com/settings/api-key/](https://app.testfairy.com/settings/api-key/).
* The URL to your bug system.
* Name of ticket type (JIRA issue or TFS workitem) to be created by TestFairy Connect.
* In the case of a JIRA basic authentication - valid credentials for a bug system user.
* In the case of a JIRA oauth authentication - admin access to JIRA/the ability to manage Application Links (as described in the configuration wizard script).

By default, your configuration file `config.json` is located in `.testfairy-connect` under the running user's home directory: `~/.testfairy-connect/config.json`

If the optional `-f` parameter is omitted, TestFairy Connect will use the default location.

## Running TestFairy Connect

To start the TestFairy Connect agent, use the following command:

 ```
 node node_modules/testfairy-connect/service.js run [-f /path/to/config.json]
 ```
If the optional `-f` parameter is omitted, TestFairy Connect will use the default location: /path/to/user/home/.testfairy-connect/config.json
    

## Congratulations!

You now have TestFairy Connect installed and configured.


