## SESSIONS Page

The **SESSIONS** page contains information about all of the sessions that were recorded in your apps.

### General Filters
To filter the items in the list, use the filters located at the top.

You can view all apps in your account or filter to only one of them:

![Apps filter](/img/dashboard/dashboard-sessions-all-apps.png)

You can view all versions of the app or a specific version:

![Versions filter](/img/dashboard/dashboard-sessions-all-versions.png)

You can also filter by timeframe:

![Timeframe filter](/img/dashboard/dashboard-sessions-timeframe.png)

### Attribute Filters
In addition to the general filters, you can also add attribute filters. First select an attribute from the list, and then add a logical expression or type a value in the text field.

You can add another attribute filter by clicking the `+` sign.

![Attribute filters](/img/dashboard/dashboard-sessions-attribute-filters.png)


#### Custom Attribute Filters
If you add custom attributes to your apps session, you will see them here and be able to apply them. See [Session Attributes](https://docs.testfairy.com/SDK/Session_Attributes.html) for more information.

![Custom attributes](/img/dashboard/dashboard-sessions-attributes-custom.png)

Custom attribute filters are an extremely powerful tool that can help you identify specific sessions and filter them from the multitude of sessions in your app. This is especially helpful if you are running TestFairy in a large-scale internal app or in production.

:::note
When you define values for this field, do not use characters other than text or numbers (such as `/` `"` `-`) as they cannot be searched in this field. If you do include these characters you can search only for the parts of the text without them. For example, in `{attr1="dada-1270"}` the `-` is not searchable, so you can only search for `dada` or `1270`.
:::
