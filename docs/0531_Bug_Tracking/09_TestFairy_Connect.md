
## What is TestFairy Connect?

TestFairy Connect is proxy server installed on-premise, designed to help companies connect their bug tracking systems running behind firewall (JIRA Server, TFS), with the TestFairy cloud.

## How does it work?

The key part of TestFairy Connect is the agent service (TFC Agent) that runs on a system, also behind that firewall, connecting to TestFairy's web app and to your bug tracking system.

![Overview](/img/testfairy-connect/0-overview.png)


## How to Install TestFairy Connect (video tutorial)

<iframe width="560" height="315" src="https://www.youtube.com/embed/SdEHd8jNsOM" frameborder="0" allowfullscreen></iframe>


## Prerequisites
* Node.js 6
* Git 1.7+


## Installation

Installation is done via npm. Please run the following command in a folder for your TestFairy Connect installation:

```
sudo npm install -g git+https://github.com/testfairy/testfairy-connect.git
```

## Configuration

To configure TestFairy Connect, run the following line and follow the on-screen instructions:


```
 testfairy-connect configure [-f /path/to/config.json]
```

You'll need the following data:

* TestFairy API key (found at [https://[your-subdomain].testfairy.com/settings/api-key/](https://[your-subdomain].testfairy.com/settings/api-key/)
* The URL to your bug system.
* Name of ticket type (JIRA issue or TFS workitem) to be created by TestFairy Connect.
* In the case of a JIRA basic authentication - valid credentials for a bug system user.
* In the case of a JIRA oauth authentication - admin access to JIRA/the ability to manage Application Links (as described in the configuration wizard script).

By default, your configuration file `config.json` is located in `.testfairy-connect` under the running user's home directory: `~/.testfairy-connect/config.json`

If the optional `-f` parameter is omitted, TestFairy Connect will use the default location.

## Running TestFairy Connect

To start the TestFairy Connect agent, use the following command:


```
testfairy-connect start [-f /path/to/config.json]
```

If the optional `-f` parameter is omitted, TestFairy Connect will use the default location: /path/to/user/home/.testfairy-connect/config.json
    
    
## Stop TestFairy Connect
To stop the TestFairy Connect agent, use the following command:
```
testfairy-connect stop
```

## Congratulations!

You now have TestFairy Connect installed,
Please go to [Bug System Settings](https://app.testfairy.com/settings/bug-system/) and select "TestFairy Connect".


