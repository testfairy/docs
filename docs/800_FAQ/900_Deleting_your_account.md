
At TestFairy we understand that at some point you may want to delete your data. As much as we are sad to see you leaving us, we will help you make it happen.

First, this document is for __developers__, users who uploaded apps to TestFairy, added the TestFairy SDK to their app, and invited testers to their project. If you are a __tester__, please contact the developer who invited you their project and ask to be removed. If you are a developer, please continue reading.

### How to delete your developer account:

In order to delete your TestFairy account please follow these steps:

  1. Start by removing all the other admins from your account. Log in, go to the [Team](https://app.testfairy.com/settings/cpanel/) menu at the top right, select all admins in the account and remove them:
  
  ![](/img/FAQ/delete-account-01.png)

  2. Once all admins are removed go to your [Account Preferences](https://app.testfairy.com/settings/account/) → Account section and at the bottom of the screen press the `Delete my account` button
  
  ![](/img/FAQ/delete-account-02.png)
  
  ![](/img/FAQ/delete-account-03.png)
  
Your account is now deleted.

### How to delete the data of one of your testers:

TestFairy helps developers record videos showing how users used their apps. In order to be able to track the sessions of a specific user, you must call __setUserId()__ with a unique identifier that can help you locate your sessions. 
If one of your testers asked you to delete their data please do the following.

1. Remove the tester from your [testers list](https://app.testfairy.com/testers)

2. Search for the [sessions](https://app.testfairy.com/search) of this user and delete them one by one.

If you did not call setUserId() or you don't have any other way to locate the specific sessions that need to be deleted, please delete the builds that were used by the user.

