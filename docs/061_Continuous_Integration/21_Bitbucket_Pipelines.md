
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

## Linking Stack Traces with Bitbucket

TestFairy made it possible to link crash stack traces directly to Bitbucket. What this means, is that when your app crashes, instead of being displayed with a flat stack trace, the lines that refer to your package will be highlighted and hyperlinked to your source code on Bitbucket. 

To enable this, you will need to provide TestFairy with a field called `custom` and additional information about the CI you are using.

In the snippet below, you can see that *git* most of the information we need: repository url, owner, current branch and git commit sha. 

Copy paste the snippet below to your `bitbucket-pipelines.yml` file, just above the `curl` command that uploads to TestFairy.

  ```
  - BITBUCKET_SRC_PREFIX='src'
  - CUSTOM=ci=bitbucket,repoOwner=${BITBUCKET_REPO_OWNER},repoName=${BITBUCKET_REPO_SLUG},branch=${BITBUCKET_BRANCH},filePrefix=${BITBUCKET_SRC_PREFIX},commitHash=${BITBUCKET_COMMIT}
  
  - curl https://app.testfairy.com/api/upload -F api_key=${TESTFAIRY_API_KEY} -F file=@MyApplicationFile.apk -F custom=${CUSTOM} -F format=readable
  ```
  
  As you can see, we just added the `-F custom=${CUSTOM}` to the command we had set up before. 
  
  **NOTE:** You will have to set up BITBUCKET_SRC_PREFIX once; this is the prefix from the root of your git, to the source files. For example, say I have a file called `src/java/main/com/example/Main.java`, and the package for `Main` is `com.example`, then by BITBUCKET_SRC_PREFIX is "src/java/main".
  
  Here is a screenshot of how our sample project now looks:
  
  ![Screenshot of Bitbucket Pipelines](http://docs.testfairy.com/img/integrations/pipelines/bitbucket-pipelines-3.png)
