### Managing Landing pages

TestFairy Landing pages allow you to easily distribute apps to testers.
Every TestFairy app has a landing page that is created automatically.
Landing page can be disabled at the top of the landing page settings page.

![disable landing page](/img/landing-pages-on-off.png)


![landing page settings](/img/app_distribution/landing_pages/landing-page-fields.png)


* **Landing page URL:** The URL that is automatically generated for each landing page. The last token of the url is configurable.

* **App version:** Indicates which version of the app will be shown. You can choose to always show the latest version, always show the auto-update version, or freeze on a specific version.

* **Visability:**  
  * _Open Beta (Anyone can download)_ - Landing page is visible to anybody.
  * _Closed Beta (Testers required to login)_ - Users must log in in order to see the page.

* **App description:** A description you add to the landing page for testers instructions or other information. Can be formatted in <a href=https://guides.github.com/features/mastering-markdown/ target=_blank >Markdown</a>.

* **Add release notes:** Check in order to automatically include [release notes](/App_Distribution/Release_Notes.html) in landing page

* **Add custom CSS:**  Check in order to add custom CSS, for [landing page customization](https://docs.testfairy.com/FAQ/Landing_Page_Customization.html)


Once you make changes to the settings you need to save them so they take effect. You can preview the changes using the `Preview landing page` button.

#### Recruitment Pages

Recruitment pages allow you to easily let users request to join your testing project. 

When users signup, they will show up in your account in "Pending Apprvoal" status and you will get an email allowing you to approve or reject these users. Once approved they will get an email inviting them to download the app.

* In order for recruitment pages to work, visibility must be in "open beta" mode.

* Users who sign up and approved will atuamatically be added to a testers group called "recruit".

* in case your app is an iOS app signed with an ad-hoc certificate, users will first get an email asking them to register their device and only after they register, you will get an email with their UDID.

* It is possible to automatically approve all users who signup, please contact us to enable this option for your account.

 
