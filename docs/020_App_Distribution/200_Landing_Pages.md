
Landing pages give testers a convenient location from which they can access apps. Every app has a landing page that is created automatically, and they can be disabled from the landing page settings page.

![disable landing page](/img/landing-pages-on-off.png)

![landing page settings](/img/app_distribution/landing_pages/landing-page-fields.png)

* **Landing page URL** - The URL that is automatically generated for each landing page. The last token of the url is configurable.

* **App version** - Indicates which version of the app will be shown. You can choose to always show the latest version, always show the auto-update version, or freeze on a specific version.

* **Visability**  
  * Open Beta (Anyone can download) - The landing page is visible to everyone.
  * Closed Beta (Testers required to login) - Users must log in to see the landing page.

* **App description** - Used to include instructions or other information. Can be formatted in Markdown.

* **Add release notes** - When enabled, automatically includes release notes on the landing page (see [Release Notes](https://docs.testfairy.com/App_Distribution/Release_Notes.html)).

* **Add custom CSS** - When enabled, adds a custom CSS to the landing page (see [Landing Page Customization](https://docs.testfairy.com/FAQ/Landing_Page_Customization.html)).

Changes to settings won't take effect until you save them. You can preview the changes by clicking **Preview landing page**.

## Recruitment Pages

Recruitment pages allow users to request to join your testing project.

When users sign up, they will show up in your account as "Pending Approval," and you will get an email prompting you to approve or reject them. If approved, they will get an email prompting them to download the app.

In order for recruitment pages to work, visibility must be in "open beta" mode.

Users who sign up and are approved will automatically be added to a testers' group called "recruit".

If your app is an iOS app signed with an ad-hoc certificate, users will first get an email asking them to register their device and, only after they register, you will get an email with their UDID.

To enable the option to automatically approve all users who sign up, contact us.
