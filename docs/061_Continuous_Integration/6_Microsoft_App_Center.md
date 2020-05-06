### Microsoft App Center Integration


In order to upload apps from Microsoft App Center to TestFairy, please do the following:

1. Create an upload script, call it `testfairy-upload.sh` and add it next to the project file in your repository.


```
#!/usr/bin/env bash

TESTFAIRY_API_KEY=1234356

FILE_NAME=file.apk

curl https://upload.testfairy.com/api/upload \
-F "api_key=$TESTFAIRY_API_KEY" \
-F "file=@$APPCENTER_OUTPUT_DIRECTORY/$FILE_NAME" 

```

2. Use this file as a `post build script` for your project, so your app gets uploaded aytomatically.


![](/img/continuous-integration/appcntr-1.png)



