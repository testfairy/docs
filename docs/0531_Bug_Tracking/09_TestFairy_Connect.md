
## What is TestFairy Connect?

TestFairy Connect is proxy server installed on-premise, designed to help companies connect their bug tracking systems running behind firewall (JIRA Server, RFS), with the TestFairy cloud.

## How to Install TestFairy Connect (video tutorial)

<iframe width="560" height="315" src="https://www.youtube.com/embed/SdEHd8jNsOM" frameborder="0" allowfullscreen></iframe>


## How does it work?

The key part of TestFairy Connect is the agent service (TFC Agent) that runs on a system, also behind that firewall, connecting to TestFairy's web app and to your bug tracking system.

![Overview](/img/testfairy-connect/0-overview.png)


This article details the requirements and steps to setting up TestFairy Connect. 
For more articles relating to this subject, check out the following links:

- [Installing on Windows](/TestFairy_Connect/Installing_on_Windows.html)
- [Installing on Linux or Mac](/TestFairy_Connect/Installing_on_Linux_or_Mac.html)
- [Configuring Team Foundation Server](/TestFairy_Connect/Configuring_TFS.html)
- [Configuring JIRA with OAuth](/TestFairy_Connect/Configuring_JIRA_with_OAuth.html)
- [Configuring JIRA with Basic Auth](/TestFairy_Connect/Configuring_JIRA.html)


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


--------
## How to Install TestFairy Connect on Windows Server

The steps below will guide you through installing and configuring your TestFairy Connect environment:

- Step 1: [Install the required software](#Installed_required_software)
- Step 2: [Configure config.json file](#Configure_config_json)
- Step 3: [Start the TestFairy Connect service](#Start_the_testfairy_connect_service)

<a name="Install_required_software"></a>
## Step 1: Install the required software

TestFairy Connect is written in nodejs. You will also need the TFS Power Tools, which are available for free download.

- (NodeJS) Go to [https://nodejs.org/en/download/current/](https://nodejs.org/en/download/current/) and download the Windows installation
- If you don't have Visual Studio set up on this computer, you need to install it. *TFS Power Tools* depends on it to access the TFS server. You can download the Community Edition for free at [https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx](https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx)
- Download and install `TFS Power Tools`
  - TFS 2015: [https://visualstudiogallery.msdn.microsoft.com/898a828a-af00-42c6-bbb2-530dc7b8f2e1](https://visualstudiogallery.msdn.microsoft.com/898a828a-af00-42c6-bbb2-530dc7b8f2e1)
  - TFS 2013: [https://visualstudiogallery.msdn.microsoft.com/f017b10c-02b4-4d6d-9845-58a06545627f](https://visualstudiogallery.msdn.microsoft.com/f017b10c-02b4-4d6d-9845-58a06545627f)
  - TFS 2012: [https://visualstudiogallery.msdn.microsoft.com/b1ef7eb2-e084-4cb8-9bc7-06c3bad9148f](https://visualstudiogallery.msdn.microsoft.com/b1ef7eb2-e084-4cb8-9bc7-06c3bad9148f)
- Download the the TestFairy Connect zip package from [https://github.com/testfairy/testfairy-connect/releases/latest](https://github.com/testfairy/testfairy-connect/releases/latest)
- Unzip the downloaded package into a new folder. For example, you can name that folder "TestFairy-Connect".
  
<a name="Configure_config_json"></a>
## Step 2: Configure `config.json` file

TestFairy Connect's configuration file is a simple json file you can open any text editor (like Notepad) to update the settings.

- Create a folder named `.testfairy-connect` in your user's home directory (for example: /Users/GilM/.testfairy-connect)
- Paste the same configuration file from http://docs.testfairy.com/TestFairy_Connect/Configuring_TFS.html into `.testfairy-connect\config.json`
- Edit the `config.json` file and update it to your settings. Please refer to [Configuring TFS](http://docs.testfairy.com/TestFairy_Connect/Configuring_TFS.html) for more information on this subject.

<a name="Start_the_testfairy_connect_service"></a>
## Step 3: Start the service

After installing and configuring the service, it is time to start the service. You can start TestFairy Connect either manually in a Powershell, or as a Windows Service.

- Open Windows Powertools or Terminal in the folder where you unpacked the zip file, and run:
```
node node_modules\testfairy-connect\service.js
```

If all the configuration are correct, you will see a "**TestFairy Connect is ready**" log. If you have an error, please follow the on-screen instructions.

## Congratulations!

You now have TestFairy Connect installed and configured, behind your firewall, to work with your Team Foundation Server service.


---------


## Tutorials:

- [TestFairy Connect with On-Premise JIRA](https://www.youtube.com/watch?v=SdEHd8jNsOM)
