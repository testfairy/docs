TeamCity can automatically deploy your Android and iOS Apps to [TestFairy](https://www.testfairy.com/).

* On the TestFairy dashboard, navigate to the Preferences page.

![](https://docs.testfairy.com/img/continuous-integration/testfairy-open-preferences.png)

* On the Preferences page, go to the API Key section and copy the API key.

![](https://docs.testfairy.com/img/continuous-integration/testfairy_upload_key.png)

* In TeamCity, add a environment variable as a **New Parameter** in to the **Build Configuration**

![](https://docs.testfairy.com/img/continuous-integration/teamcity-configuration-4.png)

Name the parameter `env.TESTFAIRY_API_KEY` and give it the value you copied from the TestFairy preferences page, and Save.

![](https://docs.testfairy.com/img/continuous-integration/teamcity-configuration-5.png)

* Add a **Build Step** to the **Build Configuration** you wish to deploy from.

![](https://docs.testfairy.com/img/continuous-integration/teamcity-configuration-1.png)

* Make sure to select a **Command Line** build step.

![](https://docs.testfairy.com/img/continuous-integration/teamcity-configuration-2.png)

Copy the following command into **Custom script** text field

```
curl https://upload.testfairy.com/api/upload -F api_key=${env.TESTFAIRY_API_KEY}-F file=@android.apk
```

**Note** Be sure to replace the `-F file=@android.apk` argument with a path to your own APK or IPA.

For a complete list of available options, please visit the [TestFairy Upload API documentation](https://docs.testfairy.com/API/Upload_API.html)
