
The **INSIGHTS** tab displays information about recorded crashes and sessions.

### Preset Filters
The **Preset Segments** column contains three preset filters:

  - Crashes - All crashes in the last month
  - Slow Session - All slow sessions in the last month
  - Received Feedback - All sessions with feedback in the last month

### General Filters
The following can be used to filter the list:

![filters](/img/getting-started/insights/insights-filter-1.png)

You can see all apps in your account or filter only one of them:

![](/img/getting-started/insights/insights-filter-app-name.png)

You can see all versions of the app you just filtered or a specific version.

![](/img/getting-started/insights/insights-filter-app-version.png)

You can also filter the timeframe of the list you want.

![](/img/getting-started/insights/insights-time-frame.png)

### Attribute Filters
In addition to general filters, you can also filter by **session attributes**.

![](/img/getting-started/insights/attribute-filter.png)

The default attributes are the basic attributes types (User, Session, Location, Device, etc.).

### Custom Attributes Filters
If you add [custom attributes](https://docs.testfairy.com/SDK/Session_Attributes.html) to your apps session you will see them here and be able to filter according to their values:

![](/img/getting-started/insights/custome-attributes.png)

This is an extremely powerful tool that can help you identify specific sessions and filter them out of the multitude of sessions in your app.

**Note:** When you define values for this field, do not use characters other than text or numbers (a-z A-Z 0-9), such as `/`, `"`, or `-`, as they are not searchable in this field. If you do use these characters, you can search only for the parts of the text without them (for example, in `{attr1="dada-1270"}` the `-` is not searchable, so you can only search for `dada` or `1270`.

After you select an attribute, you can add a logical expression and enter a value in the text field.

![](/img/getting-started/insights/atribute-filter-logical.png)

The result is shown in the table.

You can add another attribute filter by using a plus sign, or save a filter by clicking the **Save Segment** button. After entering name, the segment it will be displayed in the **Custom Segments** list.

![](/img/getting-started/insights/filter-name.png)
