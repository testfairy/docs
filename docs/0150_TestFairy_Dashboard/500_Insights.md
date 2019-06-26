
<!---<iframe width="854" height="480" src="https://www.youtube.com/embed/i8crsqfJAFA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>)--->

<iframe width="800" height="600" frameborder="0" allowfullscreen="true" style="box-sizing: border-box; margin-bottom:5px; max-width: 100%; border: 1px solid rgba(0,0,0,1); background-color: rgba(255,255,255,0); box-shadow: 0px 2px 4px rgba(0,0,0,0.1);" src="https://testfairy.fleeq.io/l/4vaf26t35u-pd0iztdypt"></iframe>


The **INSIGHTS** tab has information on all the crashes and sessions that were recorded in your apps.
When you first navigate to it you will see a list of the latest crashes in the system.

### Preset filters
The **Preset Segments** column on the left contains three preset filters:

  - ![](https://app.testfairy.com/images/app/header/ic_report_black_24dp_1x.png) Crashes - list of all crashes in the last month
  - ![](https://8640586.testfairy.com/images/app/header/status-icon-anr.png) Slow Session - all slow sessions in the last month
  - ![](https://8640586.testfairy.com/images/app/header/status-icon-comment.png) Received Feedback - all session with feedback in the last month

### General Filters
For filtering the items in the list use the filters located at the top:

![filters](/img/getting-started/insights/insights-filter-1.png)

You can see all apps in your account or filter only one of them:

![](/img/getting-started/insights/insights-filter-app-name.png)

You can see all versions of the app you just filtered or a specific version.

![](/img/getting-started/insights/insights-filter-app-version.png)

You can also filter the timeframe of the list you want.

![](/img/getting-started/insights/insights-time-frame.png)

The list below will be filtered according to what you selected.

### Attribute filters
In addition to the general filters you can add filters of **session attributes**. In order to do this first select an attribute from the list of available attributes:

![](/img/getting-started/insights/attribute-filter.png)

  - The basic attributes types (User, Session, Location, Device) are default for any session in testfairy.

### Custom attributes filters
If you add [custom attributes](https://docs.testfairy.com/SDK/Session_Attributes.html) to your apps session you will see them here and be able to filter according to their values:

![](/img/getting-started/insights/custome-attributes.png)

  - This is an **extremely powerful** tool that can help you identify specific sessions and filter them in the multitude of sessions in your app, especially if you are running testfairy in a large scale internal app or in production.
  
  - **Please note** - when you define values for this field do not use characters other than text or numbers (a-z A-Z 0-9) like `/` `"` `-` as they can not be searched on in this field. Alternatively, if you **do** have these characters you can search only for seperate parts of the text without them. (for example: {attr1="dady-1270"} the `-` is not searchable so you can search for `dady` **or** `1270`.


After you select an attribute you add a logical expression and type a value in the text field:

![](/img/getting-started/insights/atribute-filter-logical.png)

The result is shown in the table.

You can add another line of attribute filter with the `+` sign or save this filter by pressing the `Save Segment` button. After giving it a name it will appear in the list of **Custom Segments** in the left column.

![](/img/getting-started/insights/filter-name.png)
