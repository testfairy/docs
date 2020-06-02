
# TestFairy's Circle CI ORB

You can use the TestFairy ORB from the Circle CI ORB registry to upload builds to TestFairy.

In order to use the ORB, add the following line to the `orbs` section of your `.circleci/config.yml`:

```yml
orbs:
 testfairy: testfairy/uploader@1.0.0
```

Then, in order to upload your IPA or APK, you'll have to call `testfairy/uploader` providing the path to the file and your API key. As an example of creating add the following command:

```yml
jobs:
  build:
    # ...
    steps:
      # ... steps to build IPA or APK
      - testfairy/uploader:
          api-key: 1234567890
          file: app.apk
```

To learn more, about the ORB, check out the ORB in the [Circle CI ORB repository](https://circleci.com/orbs/registry/orb/testfairy/uploader).

# Deploying an iOS app to the App Store
Page moved to [https://circleci.com/docs/2.0/deploying-ios/#uploading-to-testfairy](https://circleci.com/docs/2.0/deploying-ios/#uploading-to-testfairy)
