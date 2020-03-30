


<iframe src="https://embed.fleeq.io/l/0v2ir0nl2c-r169sigcks" frameborder="0" allowfullscreen="true" style="width:800px; height: 600px;"></iframe>


## Builds

The **Builds** page contains a list if all the builds for this app.

For each build you can see the following details:

![Builds Table](/img/dashboard/builds-table.png)


- **VERSION** - the build's name and version - see App versioning for more details.

- **SESSIONS** - the number of sessions logged for this build - number is linked to the Insights tab

- **CRASHES** - number of logged crashes for this build's version - linked to the CRASHES Tab.

- **DOWNLOADS** - number of downloads for this build.

- **FEEDBACKS** - number of feedbacks for this build - linked to the FEEDBACKS Tab.

- **UPLOADED** - when this was build loaded to the system.

- **TAGS** - short words describing the build - can be edited in the build settings menu and are searchable in the `Search` field at the top of the table. See below for more info.

- **BUILD STATUS** - Contains indicators for the build status: 
  - Build is not loaded into the system - ![](/img/dashboard/status-icon-app-not-uploaded.png)  
  - Video is disabled - ![](/img/dashboard/status-icon-no-video.png)
  - Build is defined as Auto-update - ![](/img/dashboard/status-icon-auto-update.png)
  - Build has metadata - ![](/img/dashboard/status-icon-metadata.png)
  - Build has release notes - ![](/img/dashboard/status-icon-comment.png)
  - Build distribution is disabled - ![](/img/dashboard/ic_close_black_36.png)
  - Build was signed with a different certificate than the previous build - ![](/img/dashboard/ic_error_red_48dp.png)
  - Build dose not contain the TestFairy SDK - ![](/img/dashboard/status-icon-no-sdk.png)

- Settings button ![](/img/dashboard/ic_settings_black.png) - Pressing it opens the build settings menu.

Builds that are stared ( ![](/img/dashboard/star-yellow.png) ) are listed at the top of the table regardless of the upload order.

### Tags

Tags are labels attached to builds for identification and give additional searchable information about them.

The text may contain spaces and more than one word. 

One can add tags to a build by adding them on upload using the [Upload API](https://docs.testfairy.com/API/Upload_API.html) or edit them in the [Build Settings](https://docs.testfairy.com/Getting_Started/App_Build_Settings.html) menu.
They can be searched with the `Search` box at the top of the Builds page.


### Metadata

Metadata is information specificly related to this build. 

It is defined once when the build is added to testfairy via [Upload API](https://docs.testfairy.com/API/Upload_API.html) and can not be changed after the build is loaded. 

The format of defining it is **metadata.key=value** For example, `metadata.branch=master`. 
Only the **value** can be searched with the `Search` box at the top of the Builds table.


### Deleting builds and apps

In case you want to delete a build from the system select the checkbox next to it and at the bottom dropdown menu (**More Actions…**) choose `Delete Build`.

To delete the whole app you need to select all its builds in the top checkbox and then in the **More Actions…** choose `Delete Build`.

