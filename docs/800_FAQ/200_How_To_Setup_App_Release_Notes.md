TestFairy builds can include [Markdown](https://guides.github.com/features/mastering-markdown/) release notes that will show up in email invitations, landing pages and in the testers dashboard.

There are several ways to update a build release notes.

### 1. Upload

On Upload, after the app is uploaded, enter the release notes in the last dialog.

![TestFairy Release Notes](/img/upload-release-notes.png)

### 2. Change Build Settings 

After the app was uploaded, open build settings, and under App Distribution change the release notes.

![TestFairy Release Notes](/img/settings-release-notes.png)

### 3. Upload API

The recommended way to upload apps is to use the upload API. In order to add release notes, use the comment field.

Example:

```
curl https://upload.testfairy.com/api/upload \
	-F api_key='your_api_key' \
	-F file=@sample.apk \
	-F symbols_file=@sample_mapping.txt \
	-F testers_groups='friends,beta' \
	-F notify='on'\
  -F comment='Put Release Notes Here'
```

### 4. Jenkins

By default, The TestFairy Jenkins plugin will use the comments that were included in every commit, in a pretty standard way.
In order to add your own release notes, create a text file in the following location: 
```
$JENKINS_HOME/jobs/$JOB_NAME/builds/$BUILD_ID/testfairy_change_log
```
The content of this file will override the default changelog.

Read more about the [TestFairy Jenkins plugin](https://wiki.jenkins.io/display/JENKINS/TestFairy+Plugin)
