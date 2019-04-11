![testfairy dashboard](/img/dashboard/testfairy-dashboard.gif)


## TestFairy dashboard

The TestFairy dashboard is where you see all the information about the apps you have loaded to the service.


It includes a list of all apps with each app definsions, the latest sessions recorded in your account, and seperate tabs for crashes, feedbacks and [insights](https://docs.testfairy.com/TestFairy_Dashboard/Insights.html).


You can also [load apps](https://docs.testfairy.com/Getting_Started/Upload_Apps.html) using the `NEW UPLOAD` button and manage your [account preferences](https://docs.testfairy.com/Getting_Started/Account_Preferences.html) and [team members](https://docs.testfairy.com/Getting_Started/Adding_And_Managing_Users.html).

### `DASHBOARD` tab 

The top bar has the general statistics of your account - number of sessions, crashes, apps, testers and users.


#### Apps table
Contains the list all the apps loaded to the system. 
The app in display is the last version loaded.

It details the app name and bundle ID, is it snd iOS or android app, latest version name & number, and some details about how many sessions, builds, crashes and issues were logged for the app. it 
You also see the date the last build was loaded to the system and the date the latest session was logged. 

The last column holds a link to the apps landing page if the app was loaded to the system.

#### Recent Sessions
A list of the recent sessions logged in the system.


### `TESTERS` tab
Contains the list of your testers and assigned apps. See the [managing testers](https://docs.testfairy.com/Testers/Managing_Testers.html) page for a details.

### `CRASHES` (Beta) tab
Contains a list of all crashes aggregated buy stack trace. You can filter the list by app, version and timeframe.
Each crash is aggregated after symbolication (if possible) and appears in a separate line. It is possible that unsymbolicated crashes will appear in separate lines, one for each crash.

### `USER FEEDBACK` tab
Contains all user feedback submitted using the [shake to report](https://docs.testfairy.com/SDK/Getting_Feedback.html) functionality. The feedback is linked to the session in which it was created and contains the screenshot, text the user entered  and the reporter email (which can be different from the user identified in the session).
Each issue can be linked to a bug tracking system by pressing the CREATE BUG button in the ISSUE column. Apps that are already connected to a bug tracking system will display the issue link/number inside the button. Pressing the button will open the issue in the bug tracking system. 


