## App Builds table

Each app **Builds table** contains a list of all the apps builds and thier details:

![Builds Table](/img/dashboard/builds-table.png)

- **VERSION** - the builds name and version - see App versioning for more details.

- **SESSIONS** - the number of sessions logged for this build - number is linked to the Insights tab

- **CRASHES** - number of logged crashes for this build version - linked to the CRASHES Tab.

- **DOWNLOADS** - number of download for this build.

- **FEEDBACKS** - number of feedbacks for this build - linked to the FEEDBACKS Tab.

- **UPLOADED** - when was this build loaded to the system.

- **TAGS** - short words describing the build - can be edited in the build settings menu and are searchable in the `Search` field at the top of the table. See below for more info.

- **BUILD STATUS** - Contains indicators for the build status 
  - Build not loaded to the system - ![](/img/dashboard/status-icon-app-not-uploaded.png)  
  - Video is dissabled - ![](/img/dashboard/status-icon-no-video.png) 
  - Build has metadata - ![](/img/dashboard/status-icon-metadata.png)
  - Build has release notes - ![](/img/dashboard/status-icon-comment.png).

- Settings button ![](/img/dashboard/ic_settings_black.png) - Pressing it opens the build settings menu.


### Tags

Tags are labels attached to builds for identification or to give additional searchable information about them.

The text may contain spaces and more than one word. 

One can add tags to a build by adding them on upload using the [Upload API](https://docs.testfairy.com/API/Upload_API.html) or edit them in the [Build Settings](https://docs.testfairy.com/Getting_Started/App_Build_Settings.html) menu.
They can be searched with the `Search` box at the top of the Builds page.


### Metadata

Metadata is information specificly related to this build. 

It is defined once when the build is added to testfairy via [Upload API](https://docs.testfairy.com/API/Upload_API.html) and can not be changed after the build is loaded. 

The format of defining it is **matadata.key=value** for example `metadata.branch=master`. 
Only the **value** can be searched with the `Search` box at the top of the Builds table.


### Deleting builds and apps

In case you want to delete a build from the system select the checkbox next to it and at the bottom dropdown menu (**More Actions…**) choose `Delete Build`.

To delete the whole app you need to select all its builds in the top checkbox and then in the **More Actions…** choose `Delete Build`.

