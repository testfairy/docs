
This page walks you through setting up TestFairy Connect on a Windows server, and hook it onto a Team Foundation Server.

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

