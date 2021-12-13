
Streamline your build process and upload APKs or IPAs directly to TestFairy.

### Usage
[Command line uploader](https://github.com/testfairy/command-line-uploader/blob/master/testfairy-uploader.sh)

[Jenkins](https://plugins.jenkins.io/TestFairy)

[Gradle](https://github.com/testfairy/testfairy-gradle-plugin)

[Android Studio](http://docs.testfairy.com/Android/Uploading_with_Android_Studio.html)

[fastlane](https://docs.fastlane.tools/actions/testfairy/)

[Travis CI](https://docs.testfairy.com/Continuous_Integration/Travis_CI.html)

[CircleCI](https://circleci.com/docs/2.0/deploying-ios/#uploading-to-testfairy)

[Bitrise](http://devcenter.bitrise.io/tutorials/deploy/deploy-to-testfairy-with-bitrise/)

[Visual Studio Team Services](https://docs.testfairy.com/Continuous_Integration/Visual_Studio_Team_Services.html)

[NetBeans](http://plugins.netbeans.org/plugin/52087/)

[Bamboo](https://docs.testfairy.com/Continuous_Integration/Bamboo.html)

[TeamCity](https://docs.testfairy.com/Continuous_Integration/TeamCity.html)

[GitLab](https://docs.testfairy.com/Continuous_Integration/GitLab.html)

[Lumberyard](https://docs.testfairy.com/Platforms/Lumberyard.html)

### Method
`POST https://upload.testfairy.com/api/upload/`

### Parameters

| Name            |  Required?  | Description  |
|:----------------|:-----------:|:-------------|
| api_key         | Required    | Your API application key. See https://app.testfairy.com/settings for details. |
| file            | Required    | APK (Android), IPA (iOS) or ZIP (MacOS) file data. |
| symbols_file    | Optional    | Symbols mapping file. For iOS this should be a path to the **zipped** symbols file. For Android, this is the path to the mappings.txt file |
| invitation_groups  | Optional    | Comma-separated list of tester groups to be invited on the new build. |
| notify          | Optional    | Send email to all users in invitation_groups. The default is "on". |
| release_notes   | Optional    | Release notes for this upload. This text will be added to emails and landing pages. |
| auto_update     | Optional    | Allows an easy upgrade of all users to the current version. The default is "off", to enable set as "on". |
| tags            | Optional    | Set of comma-separated tags to be displayed and search upon. |
| folder_name     | Optional    | Name of the dashboard folder that will contain this app. |
| app_permission_groups     | Optional    | Comma seperated tester groups that will be allowed to download this app. |
| landing_page_mode | Optional    | Landing page mode. Can be "open" or "closed". |
| upload_to_saucelabs | Optional    | Upload file directly to Sauce Labs. Can be "on" or "off". Default is "off". |


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
	-F invitation_groups='friends,beta' \
	-F notify='on' \
	-F release_notes='stabilitty fixes, improvedment in ui' \
	-F tags='production, english'
```

### Example Response:
```
{
	"status": "ok",
	"app_name": "Jigsaw Puzzlers",
	"app_version": "0.9.5",
	"app_url": "https://app.testfairy.com/download/6CWKJCHD60PPVWYJHGM4AADJQYA4SDR0/filename.apk",
	"landing_page_url": "https://tsfr.io/3tajti",
}
```

### Where can I find my API Key?

In order to get your API KEY, open your account preferences at https://app.testfairy.com/settings/ and click on "Upload API Key".

### How can I create a new API Key?

In order to create a new API KEY just click on "Regenerate API Key" in your account preferences page.

### Why is my API Key empty?

In cases where we identify that your API KEY was used by mistake to initialize the SDK instead of using your APP TOKEN, we automatically reset the API KEY in order to protect your privacy. In this case, please change the SDK initialization to use the APP TOKEN and create a new API KEY.

### Can I add custom metadata?

Yes. Any POST parameter that its name is prefixed with "metadata." will be considered custom data and stored along with the upload. For example, consider this command:

```
curl https://upload.testfairy.com/api/upload \
	-F api_key='your_api_key' \
	-F file=@sample.apk \
	-F metadata.branch=master \
	-F metadata.locale=us-en
```

Metadata is displayed and can be searched upon in App Versions page, by clicking on an app from the Dashboard. They can also be viewed in a single version's settings page.
