
# CircleCI

[circleCI](https://circleci.com) is a cloud based CI/CD service that helps developers automate their development process with CI hosted in the cloud or on a private server.

TestFairy has a CircleCI "ORB" that allows you to easily upload builds to TestFairy.

In order to use the ORB, add the following line to the `orbs` section of your `.circleci/config.yml`:

```yml
orbs:
 testfairy: testfairy/uploader@2.0.1
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

You can see the full list of supported commands by visiting the [CircleCI TestFairy ORB Repository](https://circleci.com/orbs/registry/orb/testfairy/uploader).

