**Note**: To enable to  feature, please reach out to support

TestFairy provides the ability to upload your production app directory to the Google Play Store.

## Configuring the Integration

Go to [settings](https://app.testfairy.com/settings/integrations), and select _Google Play Store_. 

![](/img/integrations/google-play/03.png)

You need to upload credentials from Google Play in order to upload apps. You can get the credentials of the service account by going to into your Google Play Console, going into the Setup > API access. There should be a Service account listed in that section. You will need to use the same account and generate JSON Credentials for this account from Google Cloud

![](/img/integrations/google-play/01.png)

Once you have the JSON credentials, go back to the settings page, and upload the JSON file. Once the 

![](/img/integrations/google-play/04.png)

Once its uploaded, you should see the associated Project ID, and Service account on the integration page. Make sure the account matches the one in Google Play Console.

![](/img/integrations/google-play/05.png)

At this poiint, your integration should be configured for upload.

## Uploading

From any build page, click the Upload button.

![](/img/integrations/google-play/07.png)

You will see an upload dialog that summarizes what will be uploaded to Google Play Store. 

![](/img/integrations/google-play/08.png)

**Note**: TestFairy will not publish your app publically, it will upload it to the store in a draft state, and requires the owner of the app in google to make the app itself pubic.

After uploading, the dialog will display the uploaded state of the app.

![](/img/integrations/google-play/10.png)

If you go into Google Play Console, you should see your app listed in the "Release Overview" page.

![](/img/integrations/google-play/11.png)