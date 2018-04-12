
Streamline your build process and upload APKs or IPAs directly to TestFairy.

### Usage
[Command line uploader](https://github.com/testfairy/command-line-uploader/blob/master/testfairy-uploader.sh)

[Jenkins](https://plugins.jenkins.io/TestFairy)

[Gradle](https://github.com/testfairy/testfairy-gradle-plugin)

[Android Studio](http://docs.testfairy.com/Android/Uploading_with_Android_Studio.html)

[fastlane](https://docs.fastlane.tools/actions/testfairy/)

[Travis CI](http://docs.testfairy.com/Integrations/Travis_CI.html)

[CircleCI](https://circleci.com/docs/2.0/testing-ios/#testfairy)

[Bitrise](http://devcenter.bitrise.io/tutorials/deploy/deploy-to-testfairy-with-bitrise/)

[Visual Studio Team Services](https://docs.testfairy.com/Continuous_Integration/Visual_Studio_Team_Services.html)

[NetBeans](http://plugins.netbeans.org/plugin/52087/)

[Bamboo](http://docs.testfairy.com/Integrations/Bamboo.html)

[TeamCity](https://docs.testfairy.com/Continuous_Integration/TeamCity.html)

[GitLab](https://docs.testfairy.com/Continuous_Integration/GitLab.html)

### Method
`POST https://upload.testfairy.com/api/upload/`

### Parameters

| Name            |  Required?  | Description  |
|:----------------|:-----------:|:-------------|
| api_key         | Y           | Your API application key. See https://app.testfairy.com/settings for details. |
| file            | Y           | APK or IPA file data. |
| symbols_file    |             | Symbols mapping file. For iOS this should be a path to the **zipped** symbols file. For Android, this is the path to the mappings.txt file |
| testers_groups  |             | Either a comma-separated list of tester groups to be invited on the new build, or "all" to invite all testers. |
| notify          |             | Send emails to the notified tester groups. The default is "on". |
| comment         |             | Additional release notes for this upload. This text will be added to email notifications. |
| auto-update     |             | Allows an easy upgrade of all users to the current version. The default is "off", to enable set as "on". |

### Error Codes

In the case of an error, TestFairy will return a JSON with `status` => `fail` and `code` with one of the values
listed below. An additional human-readable error message is supplied to detail the cause of the specific error.

| Error Code | Reason |
|-----------:|:-------|
| 1          | Parameter 'xxx' is missing |
| 5          | Invalid API key |
| 105        | Invalid file |

### Example 1: (CURL)
```
curl https://upload.testfairy.com/api/upload -F api_key='your_api_key' -F file=@sample.apk 
```

### Example 2:
```
curl https://upload.testfairy.com/api/upload \
	-F api_key='your_api_key' \
	-F file=@sample.apk \
	-F symbols_file=@sample_mapping.txt \
	-F testers_groups='friends,beta' \
	-F notify='on'
```

### Example Response:
```
{
	"status": "ok",
	"app_name": "Jigsaw Puzzlers",
	"app_version": "0.9.5",
	"file_size": 9585610,
	"build_url": "https:\/\/app.testfairy.com\/projects\/100-jigsawpuzzlers\/builds\/1",
	"invite_testers_url": "https:\/\/app.testfairy.com\/projects\/100-jigsawpuzzlers\/builds\/1\/invite\/",
	"app_url": "https:\/\/app.testfairy.com\/download\/6CWKJCHD60PPVWYJHGM4AADJ26QWY63BTHAKQYA4SDR0\/filename_v1.1-testfairy.apk",
	"download_page_url": "https:\/\/tsfr.io\/3tajti",
	"icon_url": "https:\/\/s3.amazonaws.com\/testfairy\/icons\/4\/30040977a9f83070ac983cfb4f706d61472caf5c.png"
}
```

### Where can I find my API Key?

In order to get your API KEY, open your account preferences at https://app.testfairy.com/settings/ and click on "Upload API Key".

### How can I create a new API Key?

In order to create a new API KEY just click on "Regenerate API Key" in your account preferences page.

### Why is my API Key empty?

In cases where we identify that your API KEY was used by mistake to initialize the SDK instead of using your APP TOKEN, we automatically reset the API KEY in order to protect your privacy. In this case, please change the SDK initialization to use the APP TOKEN and create a new API KEY.


