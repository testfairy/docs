
## TestFairy Dashboard

The TestFairy dashboard is where you see all the information about the apps you have loaded to the service. The left navigation panel includes the default APPS page, as well as SESSIONS, CRASHES, USER FEEDBACK, and BETA TESTERS page links. Below the navigation panel is a snapshot of your TestFairy usage.

![Left navigation panel](/img/dashboard/dashboard-left.png)

The top navigation includes a link to Sauce Labs, as well as ADD SDK, NEW UPLOAD, HELP & SUPPORT, and ACCOUNT links and menus.

![Top navigation panel](/img/dashboard/dashboard-top.png)

### APPS Page
The APPS page contains a table of all of the apps you have uploaded to TestFairy.

Columns:
* APP NAME
* OS
* LATEST VERSION
* BUILDS
* SESSIONS
* CRASHES
* ISSUES
* LATEST UPLOAD
* Run/Share/Send/Settings

![APPS Page](/img/dashboard/dashboard-apps.png)

### SESSIONS Page
The SESSIONS page contains the Live App Insights for the apps you have uploaded. For more information about insights, see [Insights](https://docs.testfairy.com/TestFairy_Dashboard/Insights.html)

![SESSIONS Page](/img/dashboard/dashboard-sessions.png)

### CRASHES Page
The CRASHES page contains a list of all crashes aggregated by stack trace. You can filter the list by app, version, and timeframe.

Each crash is aggregated after symbolication (if possible) and appears on a separate line. It is possible that unsymbolicated crashes will appear in separate lines, one for each crash.

![CRASHES Page](/img/dashboard/dashboard-crashes.png)

### USER FEEDBACK Page
The USER FEEDBACK page contains all user feedback submitted using the "shake to report" feaature (see [Getting Feedback](https://docs.testfairy.com/SDK/Getting_Feedback.html) for more information). The feedback is linked to the session in which it was created and contains a screenshot, the text the user entered, and the reporter's email address (which can be different from the user identified in the session).

Each issue can be linked to a bug tracking system by clicking **CREATE BUG** in the **ISSUE** column. Apps that are already connected to a bug tracking system will display the issue link/number, and clicking the link will open the issue in the bug tracking system.

![USER FEEDBACK Page](/img/dashboard/dashboard-user-feedback.png)

### BETA TESTERS Page
The BETA TESTERS page contains a list of your testers and assigned apps. See [Managing Testers](https://docs.testfairy.com/Testers/Managing_Testers.html) for more information.

![BETA TESTERS Page](/img/dashboard/dashboard-beta-testers.png)
