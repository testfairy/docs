## Strict Storage Security

TestFairy allows enterprise clients with sensitive data and strict security requirements, to use their own CDN for storage.

This means that apps are uploaded via API to the company's CDN, and TestFairy only keeps the URL to the app. 

Note: In these cases, the *NEW UPLOAD* button is disabled.

This also means that all of the app artifacts (IPA and APK files) are stored on a self-managed S3 bucket, and in order to upload files, you will have to use the [Upload API](https://docs.testfairy.com/API/Upload_API.html) and provide pre-signed URLs to an artficat for processing.

For more information please [contact TestFairy Support](https://testfairy.com/contact)
