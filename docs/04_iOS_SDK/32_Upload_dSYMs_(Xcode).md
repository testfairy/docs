### Setup Xcode to create debug symbols
1. In Xcode, click on your project and select Build-Settings.
2. In the search box, type “Debug Information Format”.
3. Click on “Debug Information Format” and select “DWARF with dSYM File”
![alt dsym](https://docs.testfairy.com/img/ios/dsym-upload/dsym.png)

### Setup Xcode to upload dSYMs for every build

1. In Xcode, click on your project in the left sidebar, then click on **Build Phases**.

![alt](../../img/ios/dsym-upload/step1.png)

2. Click on ***plus sign*** on the left and select **New Run Script Build Phase**

![alt](../../img/ios/dsym-upload/step2.png)

3. Open the newly added **Run Script** and add this line at the bottom:

```sh
sh "$SRCROOT/TestFairy/upload-dsym.sh" UPLOAD_API_KEY
```
Makue sure the specified path include the upload-dsym.sh file.

Make sure to reply **UPLOAD_API_KEY** with the your secret upload api key, found in the [Settings](https://app.testfairy.com/settings/) page.

![alt](../../img/ios/dsym-upload/step3.png)

##### Fatal: Can't find .dSYM folder!

If while compiling you get the error `Fatal: Can't find .dSYM folder!`, it could be that your project is not configured to generate debug symbols.
Please perform the following actions:

1. Click on your project and select Build-Settings.

2. In the search box, type “Debug Information Format”.

3. Click on “Debug Information Format” and select “DWARF with dSYM File”
![alt dsym](https://docs.testfairy.com/img/ios/dsym-upload/dsym.png)
