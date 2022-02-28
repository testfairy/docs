You can update release notes:

* During upload
* In build settings
* Via Upload API
* Using Jenkins


## During Upload

When uploading a new app or version on the dashboard, after the app is uploaded, enter the release notes on the last screen.

![TestFairy Release Notes](/img/upload-release-notes.png)

## In Build Settings

After an app or new build is uploaded, open the build settings and, under **App Distribution**, modify the release notes.

![TestFairy Release Notes](/img/settings-release-notes.png)

## Via Upload API

The recommended way to upload apps is to use the upload API (see [Upload API](https://docs.testfairy.com/API/Upload_API.html) for more information).

To add release notes, use the `comment` field.
For example:

```
curl https://upload.testfairy.com/api/upload \
	-F api_key='your_api_key' \
	-F file=@sample.apk \
	-F symbols_file=@sample_mapping.txt \
	-F testers_groups='friends,beta' \
	-F notify='on'\
  -F comment='Put Release Notes Here'
```

## Using Jenkins

By default, the Jenkins plugin (see [TestFairy](https://wiki.jenkins.io/display/JENKINS/TestFairy+Plugin)) uses the comments that included in every commit, in a pretty standard way. To add your own release notes, create a text file in the following location:

```
$JENKINS_HOME/jobs/$JOB_NAME/builds/$BUILD_ID/testfairy_change_log
```

The content of this file will override the default changelog.

## Stylizing Release Notes

Builds can include Markdown in the release notes and in the app description that appears in email invitations, on landing pages, and in the testers dashboard tooltips.
