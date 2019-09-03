## Release Notes

There are several ways to update a builds release notes:

### 1. Upload

When [uploading a new app or version](https://docs.testfairy.com/Getting_Started/Upload_Apps.html) from the dashboard, after the app is uploaded, enter the release notes in the last dialog.

![TestFairy Release Notes](/img/upload-release-notes.png)

### 2. Change Build Settings 

After an app or new buils is uploaded, open the build settings, and under **App Distribution** change the release notes:

![TestFairy Release Notes](/img/settings-release-notes.png)

### 3. Upload API

The recommended way to upload apps is to use the [upload API](https://docs.testfairy.com/API/Upload_API.html). 

In order to add release notes, use the comment field.
Here is an example:

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

By default, The [TestFairy Jenkins plugin](https://wiki.jenkins.io/display/JENKINS/TestFairy+Plugin) will use the comments that were included in every commit, in a pretty standard way.
In order to add your own release notes, create a text file in the following location: 

```
$JENKINS_HOME/jobs/$JOB_NAME/builds/$BUILD_ID/testfairy_change_log
```

The content of this file will override the default changelog.

Read more about the [TestFairy Jenkins plugin](https://wiki.jenkins.io/display/JENKINS/TestFairy+Plugin)

### How to stylize the release notes

TestFairy builds can include the use of <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">Markdown</a> in the release notes and app description that will appear in [email invitations](), [landing pages](https://docs.testfairy.com/App_Distribution/Landing_Pages.html) and in the [testers dashboard]() tooltips.


