## How to map JIRA custom fields?

First you will need to connect a JIRA account. Follow the [instructions here](https://docs.testfairy.com/Bug_Tracking/JIRA_Cloud.html)

![jira projects](/img/bug-tracking/jira-connect-proj-map.png)

![jira test](/img/bug-tracking/jira-connect-project-map.png)

Choose one of your apps to connect to a project and choose the project from the drop down. (this will be filled with your available projects in JIRA automatically)

Press the Test button to validate the JIRA issue creation.

You will get a pop=up window with the response. Make sure you get a valid JIRA link.
In case you get a **PENDING** response check the connection configuration.

![test sucsess](/img/bug-tracking/jira-connect-test-ok.png)

Once you have the connection all set press the **Configure** button:
The fields that are displayed reflect the fields from the different JIRA issue types as defined in your JIRA system. 
For example:

![confuguration window](/img/bug-tracking/jira-fileds-example.png)

The **Issue Type** field is drop down list of the different issue types define in the JIRA project you selected. (each project may have different issue types).

Choose one of the issue types and below you will see the fields associated with it:

* **Name** - the field name.
* **Type** - the type of filed as defined in the JIRA system. 
* **Value** - the values from the JIRA system (* in addition to predefined fixed values and  -Dynamic value-, see below)

![jira values](/img/bug-tracking/jira-values-drop-down1.png)

* **Required?** - is the field required or optional.

[](/img/bug-tracking/jira-requiered-fildes-mark.png)

When defining fields in the Configure Fields window follow the below conventions:
1. When you choose a field from a drop down this field as is (text) will be populated in the corresponding JIRA field in the issue opened.

![values drop down](/img/bug-tracking/jira-values-drop-down.png)

2. You can also choose from the fixed predefined values in the list below:
* `{user.id}` - the UserId of the session running.
* `{session.timestamp}` - the timestamp of the session.
* `{session.url}` - the url of the session on the TestFairy dashboard.
* `{device.os}` - the running device OS
* `{session.ipAddress}` - the IP address of the device running the session.
* `{app.name}` - the app name.
* `{app.version}`  - the _versionName_ of the build. example: 1.7.0
* `{app.fullVersion}` - the _versionName_ + _versionCode_ of the build. example: 1.7.0 (1700)

In order to use these values add them to the -Dynamic value- field that opens when you select the -Dynamic value- option like so:

![fixed values](/img/bug-tracking/jira-fixed-attr-popup.png)

3. You can also add attributes that are defined in your apps code to the -Dynamic value- field. The structure of a dynamic filed if as follows: `{attr.[attribite_name]||[default_value]}`
* `attribite_name` - is the name of the Teasfairy attribute set in the code by the `TestFairy.setAttribute` function. What passes to the JIRA is the value of this attribute.
* `default_value` -  for each attribute you can set a default value so if you receive a null or wrong attribute value from the code (not possible in this field in JIRA) the default value will instead be passed to JIRA.

![attribute setting](/img/bug-tracking/jira-dynamic-attr-setattr.png)

