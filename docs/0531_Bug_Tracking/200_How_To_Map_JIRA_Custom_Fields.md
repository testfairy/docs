## How to map JIRA custom fields?

First you will need to connect a JIRA account. Follow the [instructions here](https://docs.testfairy.com/Bug_Tracking/JIRA_Cloud.html)

Choose one of your apps you want to connect and press the `Activate` button.

![jira projects](/img/bug-tracking/jira-connect-proj-map1.png)

Here you can configure the JIRA fields:

![fields configuration](/img/bug-tracking/jira-proj-fileds-config.png)

In the JIRA configuration screen choose the project (**Project Key**) you want to connect:

![jira project](/img/bug-tracking/jira-project-select.png)

Once the project is selected, select the issue type you want to configure:

![jiras issue](/img/bug-tracking/issue-type-select.png)

If you want to first test the connection to the JIRA project you can Press the `TEST` button to validate the JIRA issue creation.

You will get a pop-up window with the response. Make sure you get a valid JIRA link.
In case you get a **PENDING** response check the connection configuration.

![test success](/img/bug-tracking/jira-connect-test-ok.png)

Each **Issue type** has different fields associated with it:

* **Name** - the field name.
* **Type** - the type of field as defined in the JIRA system. 
* **Value** - the values from the JIRA system (* in addition to predefined fixed values and  -Dynamic value-, see below)
* **Required?** - is the field required or optional.

<!---[jira values](/img/bug-tracking/jira-values-drop-down1.png)--->

![](/img/bug-tracking/jira-requiered-fildes-mark.png)

When defining fields in the Configure Fields window follow the below conventions:
- When you choose a field from a drop down this field as is (text) will be populated in the corresponding JIRA field in the issue opened.

![values drop down](/img/bug-tracking/jira-values-drop-down.png)

- You can also choose from the fixed predefined values in the list below:
  * `{user.id}` - the UserId of the session running.
  * `{session.timestamp}` - the timestamp of the session.
  * `{session.url}` - the url of the session on the TestFairy dashboard.
  * `{session.ipAddress}` - the IP address of the device running the session.
  * `{device.os}` - the running device OS
  * `{device.model}` - the device model of the handset
  * `{device.osVersion}` - the OS version on the device (if the iPhone is running version IOS 12 value=12) 
  * `{app.name}` - the app name.
  * `{app.version}`  - the _versionName_ or _CFBundleShortVersionString_ of the build. example: 1.7.0
  * `{app.fullVersion}` - the _versionName_ + (_versionCode_ or _CFBundleVersion_) of the build. example: 1.7.0 (1700)
  * `{feedback.timestamp}` - the timestamp of the feedback (absolute)
  * `{feedback.relTimestamp}` - relative timestamp of the feedback (mm:ss) since session started

In order to use these values add them to the `-Dynamic value-` field that opens when you select the **-Dynamic value-** option like so:

![fixed values](/img/bug-tracking/jira-fixed-attr-popup.png)

- You can also add attributes that are defined in your apps code to the `-Dynamic value-` field. The structure of a dynamic field is as follows: `{attr.[attribute_name]||[default_value]}`
  * `attribite_name` - is the name of the Teasfairy attribute set in the code by the `TestFairy.setAttribute` function. What passes to the JIRA is the value of this attribute.
  * `default_value` -  for each attribute you can set a default value so if you receive a null or wrong attribute value from the code (not possible in this field in JIRA) the default value will instead be passed to JIRA.

![attribute setting](/img/bug-tracking/jira-dynamic-attr-setattr.png)
