**Note**: To enable to  feature, please reach out to support

TestFairy provides the ability to provide your own Google Cloud Storage bucket for storing your assets. This includes your apps for distribution, and session data.

## Google Cloud Bucket Settings

TestFairy requiress that buckets created in Google Cloud have a specific setting before data can be stored. Namely, the bucket **must** have _Fine-grain_ Access control. This is to allow TestFairy to manage the privacy level of individual files stored in Google Cloud. 

## Service Account Permissions

TestFairy requires credentials for a Service Account from Google Cloud in order to store asset data. The service account must have access to the storage bucket. While you are free to give this account any other permissiong, at minimum, TestFairy expects that the following permissions are available to the service account:

* storage.buckets.get
* storage.objects.create
* storage.objects.delete
* storage.object.get

Without these permissions, TestFairy may not work as expected. Export the credentials for the account into JSON format. 

## Configuring the Integration

Go to [settings](https://app.testfairy.com/settings/integrations), and select _Google Cloud Storage Integration_. 

![](/img/integrations/google-cloud-storage/01.png)
![](/img/integrations/google-cloud-storage/02.png)


With the bucket name and JSON credentials in hand, upload the JSON file and fill in the field for the bucket name.

![](/img/integrations/google-cloud-storage/03.png)

Once its uploaded, TestFairy will test the provided credentials prior to saving. 

![](/img/integrations/google-cloud-storage/04.png)

You should see the associated Project ID, and Service account on the integration page. Make sure the account matches the one in Google Cloud Console.

![](/img/integrations/google-cloud-storage/05.png)

At this poiint, your integration should be configured. All assets collected by TestFairy, including feedback, session data, crash reports and uploaded assets will be stored in your Google Storage bucket. 