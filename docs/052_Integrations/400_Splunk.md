TestFairy can integrate with Splunk to provide better insights into your mobile apps. This document explains how to export the app logs from TestFairy and import them into your Splunk installation.

#### Exporting logs

Use the [TestFairy Fetch Session Tool](https://github.com/testfairy/testfairy-fetch-sessions) tool to download log files for a specific project.

```
npm install -g --link git+https://github.com/testfairy/testfairy-fetch-sessions.git

testfairy-fetch-sessions --endpoint "acme.testfairy.com" --user "john@example.com" --api-key "0123456789abcdef" --project-id=1000 --logs
```

The logs are downloaded to a folder named `testfairy-sessions` with a directory structure as follows:

![Alt](/img/integrations/splunk/splunk-1.png)

Note that the directory which contains the `session.log` file is also the session identifier. You can use this value to set the _Host_ value later on.

#### Importing logs into Splunk

In your Splunk forwarder, under the settings menu, select _Add Data_:

![Alt](/img/integrations/splunk/splunk-2.png)

Select the _Monitor_ option:

![Alt](/img/integrations/splunk/splunk-3.png)

Select _Files & Directories_:

![Alt](/img/integrations/splunk/splunk-4.png)

With _Files & Directories_ selected, browse to the directory where the log files were downloaded. It's best to point to the top-level `testfairy-sessions` incase you have multiple projects that you'd like to monitor.

![Alt](/img/integrations/splunk/splunk-5.png)

After clicking _Next_, on the _Input Settings_ page, set the _Host_ using the _Segment in path_. Use the directory segment which contains the `session.log` file.

![Alt](/img/integrations/splunk/splunk-6.png)

This will help you search and create search queries based on a specific session.

Create a query where the `host=<session id>` to see logs related to a given session.

![Alt](/img/integrations/splunk/splunk-7.png)
