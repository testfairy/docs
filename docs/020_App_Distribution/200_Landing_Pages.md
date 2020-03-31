### Managing Landing pages

Landing pages are the most common way to distribute apps to your testers.
Every app in testfairy, by default, has a landing page that is automatically generated once you upload an app to testfairy via the various app loading ways.

If you do not want a landing page you can disable it on the landing page settings page for that specific app:


![dissable landing page](/img/landing-pages-on-off.png)


The Settings of a landing page are defined in the Landing Page Settings page inside your app page in the app dashboard: 


![landing page settings](/img/app_distribution/landing_pages/landing-page-fields.png)


* **Landing page URL:** the URL that is automatically generated for each landing page. It is possible to change the last part after the / - slash, to a different string if available.

* **App version:** indicates which version of the app will be downloaded from the landing page.

* **Permission:**  there are 3 ways to allow access to the app download: 
  * _Open Beta (Anyone can download)_ - download is possible to anybody who can see the page. Needed when **Recruit Page** is being used.
  * _Closed Beta (Testers required to login)_ - you must have a TesfFairy account (as a tester or admin) in order to see the page (and download the app).

* **App description:** A description you can add to the landing page to give your testers instructions or other information. Can be formatted in <a href=https://guides.github.com/features/mastering-markdown/ target=_blank >Markdown</a>.

* **Add release notes:** do you want to include the release notes detailed when you loaded the app on the landing page?
* **Add custom CSS:**  see [here](https://docs.testfairy.com/FAQ/Landing_Page_Customization.html) for customizing the appearance of the landing page.


Once you make changes to the settings you need to save them for them to take effect. You can preview the changes using the `Preview landing page` button.

#### Recruiting testers - Recruit Page  

In case you want to use a recruitment process for testers press the `Open Recruit Page` Button - it will open a landing page with an email field where testers can add thier email. 

The email address testers add will be added to your testers tab and a signup request email is sent to the admin of the account asking him to approve the download.
Once she approves the download (via her testers dashboard) the tester receives a New build email which invites him to download the apps new build.
 
One can send out the page URL, but make sure to change the permissions to _Open Beta_ so the page will be visable to all recipiants of the URL.  
