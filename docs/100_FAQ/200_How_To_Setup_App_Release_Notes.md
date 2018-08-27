Every TestFairy build can include release notes that will be sent in the email.

There are 3 ways to update your app release notes.

# 1. Upload

On Upload, after the app is uploaded, enter the release notes in the last dialog.

![TestFairy Release Notes](/img/upload-release-notes.png)

# 2. Change Build Settings 

After the app was uploaded, open build settings, and under App Distribution change the release notes.

![TestFairy Release Notes](/img/upload-release-notes.png)

# 3. Upload API

The recommended way to upload apps is to use the upload API. In order to add release notes, use the comment field.

#### Example:
```
curl https://upload.testfairy.com/api/upload \
	-F api_key='your_api_key' \
	-F file=@sample.apk \
	-F symbols_file=@sample_mapping.txt \
	-F testers_groups='friends,beta' \
	-F notify='on'\
  -F comment='Put Release Notes Here'
```

