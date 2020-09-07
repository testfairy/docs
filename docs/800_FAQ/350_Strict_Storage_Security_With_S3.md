## Strict Storage Security

TestFairy Allows Enterprise clients with sensitive data and strtict security requirements, to usea their own CDN for sotrage.

This means that apps are uploaded via API to the company CDN, and TestFairy gets the app url. 

In these cases, the *NEW UPLOAD* button is disabled.

This also means that all of the app artifcats (IPA and APK files) are stored on a self-managed S3 bucket, and in order to upload files, you will have to use the [Upload API](https://docs.testfairy.com/API/Upload_API.html) and provide presigned URLs to an artficat for processing.

For more information please [contact TestFairy Support](https://testfairy.com/contact)
