<iframe width="560" height="315" src="https://www.youtube.com/embed/E64kWHOMgVY" frameborder="0" allowfullscreen></iframe>

With TestFairy, symbolicating crash reports is easy as pie. A simple Build Phase script can automatically upload the compressed .dSYM file for future symbolicaton.

To enable automatic uploads of .dSYM file, please follow these steps:

#### Step 1:

In XCode, click on your project in the left sidebar, then click on **Build Phases**.

![alt](../../img/ios/dsym-upload/step1.png)

#### Step 2:

Click on ***plus sign*** on the left and select **New Run Script Build Phase**

![alt](../../img/ios/dsym-upload/step2.png)

#### Step 3:

Open the newly added **Run Script** and add this line at the bottom:

```sh
sh "$SRCROOT/TestFairy/upload-dsym.sh" UPLOAD_API_KEY
```

Make sure to reply **UPLOAD_API_KEY** with the your secret upload api key, found in the [Settings](https://app.testfairy.com/settings/) page.

![alt](../../img/ios/dsym-upload/step3.png)


