
Set up Bitbucket Pipelines to upload your build artifacts (IPA or APK) directly to TestFairy for distribution.

## Setting up

1. Open your Bitbucket repository, and select *Settings* -> *Pipelines* -> *Environment Variables*

  ![Screenshot of Bitbucket Pipelines](http://docs.testfairy.com/img/integrations/pipelines/bitbucket-pipelines-0.png)

2. Fill in variable, value fields:

  - **Variable**: TESTFAIRY_API_KEY
  - **Value**: *Your API application key. See https://app.testfairy.com/settings for details.*
  - **Secured**: Y
  
  When done, click the *Add* button.

  ![Screenshot of Bitbucket Pipelines](http://docs.testfairy.com/img/integrations/pipelines/bitbucket-pipelines-1.png)

3. Edit your `bitbucket-pipelines.yml` and add this command to your `script` section:

  ```
  curl https://app.testfairy.com/api/upload -F api_key=${TESTFAIRY_API_KEY} -F file=@MyApplicationFile.apk -F format=readable
  ```

  **NOTE:** Do not forget to replace `MyApplicationFile.apk` with path to your APK or IPA files.
  
  Additional optional parameters such as `testers-groups`, `notify` and `comment` can be added to this line. Please refer to the [TestFairy Upload API reference guide](http://docs.testfairy.com/API/Upload_API.html) for more information and examples.
  
  Here, for example, is a screenshot of a sample `bitbucket-pipelines.yml` file:
  
  ![Screenshot of Bitbucket Pipelines](http://docs.testfairy.com/img/integrations/pipelines/bitbucket-pipelines-2.png)
