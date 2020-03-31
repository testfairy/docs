### Managing Landing pages

Landing pages are the most common way to distribute apps to your testers.
Every TestFairy app has a landing page that is created automatically.

If you do not want a landing page you can disable it on the landing page settings page for that specific app:

![disable landing page](/img/landing-pages-on-off.png)


The visibility of a landing page is defined in the **Landing Page Settings** page inside your app page, in the **dashboard**: 


![landing page settings](/img/app_distribution/landing_pages/landing-page-fields.png)


* **Landing page URL:** the URL that is automatically generated for each landing page. It is possible to change the last part after the / - slash, to a different string if available.

* **App version:** indicates which version of the app will be downloaded from the landing page.

* **Visability:**  there are 3 ways to allow access to the download page: 
  * _Open Beta (Anyone can download)_ - download is possible to anybody who can see the page. Needed when **Recruit Page** is being used.
  * _Closed Beta (Testers required to login)_ - you must have a TestFairy account (as a tester or admin) in order to see the page (and download the app).

* **App description:** A description you add to the landing page for testers instructions or other information. Can be formatted in <a href=https://guides.github.com/features/mastering-markdown/ target=_blank >Markdown</a>.

* **Add release notes:** Do you want to include the release notes detailed when you loaded the app on the landing page?
* **Add custom CSS:**  see [here](https://docs.testfairy.com/FAQ/Landing_Page_Customization.html) for customizing the appearance of the landing page.


Once you make changes to the settings you need to save them so they take effect. You can preview the changes using the `Preview landing page` button.

#### Recruiting testers - Recruit Page  

In case you want to use a recruitment process for testers press the `Open Recruit Page` Button - it will open a landing page with an email field where testers can add their email. 

The email address testers add will be added to your testers tab and a signup request email will be sent to the admin of the account asking him to approve the download.

Once she approves the download (via her testers dashboard) the tester receives a **New build** email which invites him to download the app's new build.
 
One can send out the page URL, but make sure to change the permissions to _Open Beta_ so the page will be visible to all recipients of the URL.
