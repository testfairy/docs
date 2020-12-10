GitLab can automatically deploy your Android or iOS Apps to [TestFairy](https://www.testfairy.com/).

* On the TestFairy dashboard, navigate to the __Preferences --> [Upload API Key](https://app.testfairy.com/settings/api-key)__ page.
  ![](https://docs.testfairy.com/img/continuous-integration/testfairy_upload_key.png)


* Copy your API key and go to your application's project __Settings --> CI/CD -- Variables__ in GitLab. Add a variable called `TESTFAIRY_API_KEY` to the list with the value of your __Upload API key__.
  ![](https://docs.testfairy.com/img/continuous-integration/gitlab_secret_keys.png)


* To deploy, add a job to your `.gitlab-ci.yml` configuration using [fastlane](https://docs.fastlane.tools/getting-started/ios/beta-deployment/) or `curl` (example below).
``` yaml
stages:
  - deploy

deploy:
  stage: deploy
  only:
  - master
  script:
  - |
    curl \
      -A "GitLab CI" \
      -F api_key="${TESTFAIRY_API_KEY}" \
      -F comment="GitLab Pipeline build ${CI_COMMIT_SHA}" \
      -F file=@android.apk \
      https://upload.testfairy.com/api/upload/
```

**Note** Be sure to replace the `-F file=@android.apk` argument with a path to your own APK or IPA.

For a complete list of available options, please visit the [TestFairy Upload API documentation](https://docs.testfairy.com/API/Upload_API.html)
