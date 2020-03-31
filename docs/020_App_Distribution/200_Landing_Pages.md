### Managing Landing pages

TestFairy Landing pages allow you to easily distribute apps to testers.
Every TestFairy app has a landing page that is created automatically.
Landing page can be disabled at the top of the landing page settings page.

![disable landing page](/img/landing-pages-on-off.png)


![landing page settings](/img/app_distribution/landing_pages/landing-page-fields.png)


* **Landing page URL:** The URL that is automatically generated for each landing page. It is possible to change the last part after the / - slash, to a different string if available.

* **App version:** Indicates which version of the app will be downloaded from the landing page.

* **Visability:**  
  * _Open Beta (Anyone can download)_ - Landing page is visible to anybody.
  * _Closed Beta (Testers required to login)_ - Users must log in in order to see the page.

* **App description:** A description you add to the landing page for testers instructions or other information. Can be formatted in <a href=https://guides.github.com/features/mastering-markdown/ target=_blank >Markdown</a>.

* **Add release notes:** Check in order to automatically include [release notes](/App_Distribution/Release_Notes.html) in landing page

* **Add custom CSS:**  Check in order to add custom CSS, for [landing page customization](https://docs.testfairy.com/FAQ/Landing_Page_Customization.html)


Once you make changes to the settings you need to save them so they take effect. You can preview the changes using the `Preview landing page` button.

#### Recruiting testers - Recruit Page  

In case you want to use a recruitment process for testers press the `Open Recruit Page` Button - it will open a landing page with an email field where testers can add their email. 

The email address testers add will be added to your testers tab and a signup request email will be sent to the admin of the account asking him to approve the download.

Once she approves the download (via her testers dashboard) the tester receives a **New build** email which invites him to download the app's new build.
 
One can send out the page URL, but make sure to change the permissions to _Open Beta_ so the page will be visible to all recipients of the URL.
