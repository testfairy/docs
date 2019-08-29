### Managing Testers

To see all the testers you have for your app, invite new testers or import/export a list of testers, click on the **TESTERS** tab.

![ alt upload](../../img/app/invite-testers.png)

### Inviting Testers by Email

To invite testers by email click on the `Add Testers` Button. 
In the list box add tester emails  - one for each row.

You can also select a Group for the testers in the list or just leave it blank (see **Managing tester groups** below).
After you finished press the `Add Testers` button below the list to complete the process.

You can add testers manually or [import lists of testers](https://app.testfairy.com/testers/import/) in csv format.

______        
###### **Note for iOS only**
  If you are **not** using an [iOS Enterprise certificate](https://developer.apple.com/programs/ios/enterprise/), you  will need to get the UDID's of your testers' devices before sending them your app.   
         When you invite new testers by email, your testers will get an email asking them to register their device. Once they click on the registration link, you will get an email with their UDID and their device details will be added to your [testers page](https://app.testfairy.com/testers).  
         For more information about how to add UDIDs to provisioning profiles please read [this guide](http://docs.testfairy.com/iOS_SDK/Adding_UDIDs_to_iOS_development_profile.html).
______

![ alt upload](../../img/app/invite-testers2.png)

### <a id="managing-testers"></a> Managing tester invitations from landing pages 

In case a landing page is defined as **Opt-In** testers are required to register before they get download access to the build.

_The registration process is as follows:_
  - The tester enters his/her email address in a pop up box when she tries to download the app from the landing page.
  - The account manager/owner then gets an email saying there is a new tester asking for permissions. He also sees the new tester in the invite testers table of the build that is defined in the landing page and there she can approve the tester.
  - Once the tester is approved she gets an email with a download link to the app.

In **closed beta** the manager/owner defines testers that can download the app in the build settings. Any other tester that is not predefined in the build settings can't download the app.



### Managing tester groups

You can also divide testers to **groups** to add more structure and organise your testing efforts. 
In order to create a group click in the GROUPS text-box and then on `Create new group...`
Choose a group name and pree OK. The tester you clicked in his group will be assigned the group you just created.

![alt tester group](../../img/app/tester-groups-1.png)

Tester groups help you manage the invitation process to your apps. If you want to invite a number of testers that are all under the same group simply filter the list of testers according to that group and then select all and invite them.

![alt invite group](/img/app/tester-group-2.png)

In order to delete a group you will first have to delete all its mentions in the GROUPS field. Delete the group by pressing the x next to its name. Once you have delete all its occurrences it will be deleted. Refresh the page to make sure it was deleted.

![ alt delete group](../../img/app/delete-group.png)


 
**What you should read next:** [How To Analyze Test Results](How_To_Analyze_Test_Results.html).
