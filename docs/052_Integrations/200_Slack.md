## One click integration

TestFairy integrates with Slack seamlessly, providing human-readable, real-time notifications for your selected events. 


* Head over to your [TestFairy Dashboard](https://app.testfairy.com), and select **"Account Preferences"** from the top-right menu. 

![preferences](/img/app/preferences-link.png)


* Select _Integrations_ from the menu, then click the _Add integration_ button.

![Slack Integration](/img/app/preferences/account-settings-4.png)


* Enter the domain of your slack account:

![slack domain](/img/integrations/slack/slack-domain-1.png)


* This determines where your notifications will appear. You may select an existing channel, or create a new channel. Choose your channel and select **"Authorize"**.

![Authorize channel](http://docs.testfairy.com/img/integrations/slack/slack-1c.png)


* You will be returned to your TestFairy page with the _URL_ and _Events_ already filled in and selected. 
Press the `Test URL` to test the webhook. 
Select _Save webhook_ to add and confirm the slack integration.

![result](/img/integrations/slack/slack-1d.png)


* Success! You will now receive notifications in your Slack channel.

![slack message](/img/integrations/slack/slack-message-preview.png)


**Note** Integrations require a paid account, click [here](https://www.testfairy.com/pricing) for more information.

## Manual Integration


In case you need to create a manual integration with slack follow these steps:


* Follow this link to the slack __Incoming WebHooks__ app: https://slack.com/apps/A0F7XDUAZ-incoming-webhooks


* If you do not have the app installed in your workspace then press `Add to Slack` to add it.

![](/img/integrations/slack/slack-manualint-1.png)


* After adding the app choose the slack channel you want to post the messages in and press the `Add Incoming Webhooks Integration` button.

![](/img/integrations/slack/slack-manualint-2.png)


* In the next screen you will need the __Webhook URL__ link.

![](/img/integrations/slack/slack-manualint-3.png)


* Copy this link and go to the Integrations menu and press the `Add Integration` button for __Slack__.

![](/img/integrations/slack/slack-manualint-4.png)


* Paste the Webhook URL into the URL field and then `Save webhook`.
![](/img/integrations/slack/slack-manualint-5.png)


* Success! You will now receive notifications in your Slack channel.
