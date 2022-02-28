Global account settings can be managed on the **Preferences** page.

<img src="../../img/app/preferences-link.png"/>

The first two menu items are your SDK and API app tokens.

### SDK Token
![ alt app-token](../../img/app/app-token.png)

Your app token is used to initialize the [TestFairy SDK](https://docs.testfairy.com/SDK/Adding_The_Testfairy_SDK_To_Your_App.html).

### API Key
![ alt api-key](../../img/app/api-key.png)

You can use the TestFairy API to directly upload builds and invite testers. For more information, see [Upload API](https://docs.testfairy.com/API/Upload_API.html).

### Notifications
The notifications options are used to define what type of messages you want to receive about new builds, crashes, and user feedback.

![notifications](/img/app/preferences/account-settings-3.png)

### Integrations
You can integrate your TestFairy account with different services to customize and streamline your work processes.

* SMTP and Gmail - See [SMTP and Gmail](https://docs.testfairy.com/Integrations/SMTP_and_Gmail.html) for information about connecting your SMTP email server or your Gmail account. This ensures the emails you send from your TestFairy account will be sent from the email account you used to register.

* Slack - See [Slack](https://docs.testfairy.com/Integrations/Slack.html) for information about integrating your Slack account with TestFairy.

* Zendesk - See [ZenDesk](https://docs.testfairy.com/Integrations/Zendesk.html) for information about integrating your Zendesk account with TestFairy.

* Webhooks - You can use TeftFairy webhooks to connect to services. See [Microsoft Teams](https://docs.testfairy.com/Integrations/Microsoft_Teams.html) for more information.

![integrations](/img/app/preferences/account-settings-4.png)

### Bug Systems
You can connect your bug system to TestFairy to report bugs directly to your [Jira Cloud](https://docs.testfairy.com/Bug_Tracking/JIRA_Cloud.html), [GitHub](https://docs.testfairy.com/Bug_Tracking/Github.html), or [Trello](https://docs.testfairy.com/Bug_Tracking/Trello.html) account.

![bug systems](/img/app/preferences/account-settings-5.png)

### Email Templates
TestFairy lets you customize the invitation emails it sends. This feature is available only if you use a custom email server (see [SMTP and Gmail](https://docs.testfairy.com/Integrations/SMTP_and_Gmail.html) for more information).

The email is HTML based and can use custom tags.

![email templates](/img/app/preferences/account-settings-6.png)

### Security
* **Require user login before app download** - If you want testers to first login to their tester account prior to downloading your app.
* **Require [Google] Sign on for all users** - Users must sign in using a Google email address.
* ``[after adding SAML/Single Sign-on]`` (optional) - Grants access to all apps to testers who sign in with SSO.

#### SAML/Single Sign-On
Here you can add the [SSO](https://docs.testfairy.com/Single_Sign-On/SSO.html) metadata definitions file. When you add SAML/Single Sign-On, the file will contain your ID, URL and x509 certificate.

![security](/img/app/preferences/account-settings-7.png)

### <a name="account"></a>Account

The **Account** menu provides access to the following settings:

* First and last name
* Company name
* Subdomain
* User name and password
* Timezone

![account](/img/app/preferences/account-settings-8.png)

### Billing

Here you will see your account invoices.

![billing menu](/img/app/preferences/account-settings-9.png)

### Users Whitelist

Allows recording of specific users, instead of recording all user sessions. This is useful in cases in which customer support teams want to record users who are having issues.

![whitelist](/img/app/preferences/account-settings-10.png)
