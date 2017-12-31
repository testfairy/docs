
## How does it work?

TestFairy Connect is designed to help developers integrate bug tracking systems running behind a firewall with their 
TestFairy account.

The key part of TestFairy Connect is the agent service (TFC Agent) that runs on a system, also behind a firewall, connecting TestFairy's web app and your bug tracking system.

## Prerequisites

* nodejs 4.2+
* git 1.7+

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

* TestFairy API key (found at [https://app.testfairy.com/settings/#api-key](https://app.testfairy.com/settings/#api-key).
* The URL to your bug system.
* Name of ticket type (JIRA issue or TFS workitem) to be created by TestFairy Connect.
* In the case of a JIRA basic authentication - valid credentials for a bug system user.
* In the case of a JIRA oauth authentication - admin access to JIRA/the ability to manage Application Links (as described in the configuration wizard script).

By default, your configuration file `config.json` is located in `.testfairy-connect` under the running user's home directory. 

- On linux/Mac: `~/.testfairy-connect/config.json`
- On Windows: `C:\Users\MyUser\.testfairy-connect\config.json`

If the optional `-f` parameter is omitted, TestFairy Connect will use the default location.

## Running TestFairy Connect

To start the TestFairy Connect agent, use the following command:

 ```
 node node_modules/testfairy-connect/service.js run [-f /path/to/config.json]
 ```
If the optional `-f` parameter is omitted, TestFairy Connect will use the default location: /path/to/user/home/.testfairy-connect/config.json
    
## (Optionally) Starting TestFairy Connect as a Windows Service

Upon installation, you'll find ```TestFairy Connect``` in your *Windows Services* console. Upon successful configuration,
you can try starting the service from the Services console.
    

## Supported issue trackers specific stuff

### JIRA Custom Fields

If you have required custom fields in your JIRA setup, you must specify them, so that TestFairy Connect can send 
some defaults when creating an issue. Please modify your configuration file to include custom fields like this:

Example ```config.json```:
   
```json
    {
        "testfairy": {
            ...
        },
        "issueTracker": {
            "type": "jira",
            ...
            "customFields": [
				{
					"projectKey": "PROJECT-1",
					"fields": [
						{
							"key": "customfield_10001",
							"defaultValue": "default value"
						},
						{
							"key": "customfield_10002",
							"defaultValue": "default value"
						}
					]
				}
            ]
        }
    }
```
You'll need an entry under `customFields` for each project requiring custom fields.



### Team Foundation Server (TFS)

#### Additional Requirements
* In order to connect to a working TFS server, the machine running the TestFairy Connect agent must have Visual Studio installed. For a free version of Visual Studio, please look at [Visual Studio Express](https://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx)

* The machine running the TFC Agent must have [Microsoft Visual Studio Team Foundation Server 2015 Power Tools](https://visualstudiogallery.msdn.microsoft.com/898a828a-af00-42c6-bbb2-530dc7b8f2e1) installed.

* In order to successfully integrate with TFS, the user running the TFC Agent must have write access to the TFS project collection.
It might be a good idea to create a Windows user called e.g. testfairyconnect, with permissions to both run the agent and create issues in TFS.


