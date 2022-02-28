
The **Builds** page displays a list of all the builds for the app. For each build you can view the following information:

![Builds Table](/img/dashboard/builds-table.png)

- **VERSION** - The build name and version.

- **SESSIONS** - The number of sessions logged for the build. The number is linked to the **INSIGHTS** tab.

- **CRASHES** - The number of logged crashes for the build version. The number is linked to the **CRASHES** tab.

- **DOWNLOADS** - The number of downloads for the build.

- **FEEDBACKS** - The amount of feedback received for the build. The number is linked to the **FEEDBACK** tab.

- **UPLOADED** - When the was build uploaded.

- **TAGS** - Tags can be edited in the build settings menu and are searchable.

- **BUILD STATUS**
  - Build is not loaded into the system ![](/img/dashboard/status-icon-app-not-uploaded.png)  
  - Video is disabled ![](/img/dashboard/status-icon-no-video.png)
  - Build is defined as auto-update ![](/img/dashboard/status-icon-auto-update.png)
  - Build has metadata ![](/img/dashboard/status-icon-metadata.png)
  - Build has release notes ![](/img/dashboard/status-icon-comment.png)
  - Build distribution is disabled ![](/img/dashboard/ic_close_black_36.png)
  - Build was signed with a different certificate than the previous build ![](/img/dashboard/ic_error_red_48dp.png)
  - Build does not contain the TestFairy SDK ![](/img/dashboard/status-icon-no-sdk.png)

- Settings button - Opens the **Build Settings** menu.

Builds that are starred (![](/img/dashboard/star-yellow.png)) are displayed at the top of the table regardless of the upload order.

### Tags

Tags are labels attached to builds for identification that provide additional searchable information. Tag text may contain spaces and more than one word.

You can add tags to a build during upload using the Upload API, or edit them in the **Build Settings** menu. They are searchable in the `Search` box at the top of the **Builds** page.

### Metadata

Metadata is specific information about a build. It is defined when the build is uploaded via Upload API and cannot be changed after the build is uploaded.

The format of the metadata is **metadata.key=value** (for example, `metadata.branch=master`). Only the value is searchable in the `Search` box at the top of the **Builds** table.

### Deleting Builds and Apps

To delete a build from the system, select the checkbox and, in the **More Actions…** dropdown, click **Delete Build**.

To delete an app, select all of its builds and, in the **More Actions…** dropdown, click **Delete Build**.
