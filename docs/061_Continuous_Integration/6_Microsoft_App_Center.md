### Microsoft App Center Integration


If you use the Microsoft App center to build you application it is possible to upload your .apk/.ipa file directly to  TeatFairy using a post build script.

#### How to add the script


The post build script will be named `appcenter-post-build.sh`.

In order to run it, add the file next to the project file in the repository.

You will need your ##API Key## in order to upload the file.


Here is an example of an `appcenter-post-build.sh` file:

```
#!/usr/bin/env bash
if [[ "$APPCENTER_XCODE_PROJECT" ]]; then
  curl https://upload.testfairy.com/api/upload \
    -F "api_key=$TESTFAIRY_UPLOAD_API_KEY" \
    -F "file=@$APPCENTER_OUTPUT_DIRECTORY/Example.ipa" 
fi

if [[ -z "$APPCENTER_XCODE_PROJECT" ]]; then
  curl https://upload.testfairy.com/api/upload \
    -F "api_key=$TESTFAIRY_UPLOAD_API_KEY" \
    -F "file=@$APPCENTER_OUTPUT_DIRECTORY/example.apk"
fi
```

After placing the `appcenter-post-build.sh` file in your repository make sure its located and connected by App center as a post build script (this should happen automatically):


![](/img/continuous-integration/appcntr-1.png)


You will need to add your API KEY to the __Environment variables__ In the __Build configuration__ of the app:


![](/img/continuous-integration/appcntr-2.png)

- Make sure to "lock" the API KEY you entered using the lock icon next to the variable.


Now you can run the build.
