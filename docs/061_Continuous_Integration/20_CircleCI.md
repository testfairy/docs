
# TestFairy's Circle CI ORB

You can use the TestFairy ORB from the Circle CI ORB registry to upload builds to TestFairy.

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

You can see the full list of supported commands by visiting the [Circle CI ORB Repository](https://circleci.com/orbs/registry/orb/testfairy/uploader).

