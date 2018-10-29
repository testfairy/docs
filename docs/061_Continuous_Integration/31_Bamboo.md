
Continious integration with Bamboo is easy to set up, and when ready, allows you to deliver up-to-date releases to your beta-testers and co-workers. 

### Installation

1. Log in to your Bamboo server
2. Click on the **cogs icon** and select `Add-ons`
3. Click `find new add-ons` link, and install the *TestFairy Uploader* add-on.

![Alt](https://docs.testfairy.com/img/integrations/bamboo/bamboo_00.png)

Now that you have the add-on installed on your server, we will configure it with our `upload API key`. You can find this API key in your **Preferences Page** at [https://app.testfairy.com/settings/](https://app.testfairy.com/settings/).

In your Android or iOS job, create a new task, and pick `TestFairy Uploader` from *Deployment* category.
![Alt](https://docs.testfairy.com/img/integrations/bamboo/bamboo_01.png)

Now configure the API key as so:
![Alt](https://docs.testfairy.com/img/integrations/bamboo/bamboo_02.png)

Notice you must provide the path to the compiled .IPA or .APK file, and optionally list group names of testers for sending out email invitations.

Vôila!
