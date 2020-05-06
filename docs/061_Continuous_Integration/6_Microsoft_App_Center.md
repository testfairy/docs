### Microsoft App Center Integration


In order to upload apps from Microsoft App Center to TestFairy, please do the following:

## 1. Create an upload script.

Create a new file, call it `appcenter-post-build.sh` and add it next to the project file in your repository.

```
#!/usr/bin/env bash

TESTFAIRY_UPLOAD_API_KEY=1234356

if [[ "$APPCENTER_XCODE_PROJECT" ]]; then
  curl https://upload.testfairy.com/api/upload \
  -F "api_key=$TESTFAIRY_UPLOAD_API_KEY" \
  -F "file=@$APPCENTER_OUTPUT_DIRECTORY/example.ipa" 
fi

if [[ -z "$APPCENTER_XCODE_PROJECT" ]]; then
  curl https://upload.testfairy.com/api/upload \
  -F "api_key=$TESTFAIRY_UPLOAD_API_KEY" \
  -F "file=@$APPCENTER_OUTPUT_DIRECTORY/example.apk"
fi

```


## 2. Verify a Post Build Step exists. 


App-center will use this file as a `post build script` for your project, so your app gets uploaded aytomatically.


![](/img/continuous-integration/appcntr-1.png)



