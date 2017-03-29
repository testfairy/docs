
Streamline your build process and upload APKs or IPAs directly to TestFairy.

### Usage
[Gradle plugin](https://github.com/testfairy/testfairy-gradle-plugin)
[Jenkins plugin](https://wiki.jenkins-ci.org/display/JENKINS/TestFairy+Plugin)
[Bamboo plugin](http://docs.testfairy.com/Integrations/Bamboo.html)
[Command line uploader](https://github.com/testfairy/command-line-uploader/blob/master/testfairy-uploader.sh) 


### Method
`POST https://upload.testfairy.com/api/upload/`

### Parameters

| Name            |  Required?  | Description  |
|:----------------|:-----------:|:-------------|
| api_key         | Y           | Your API application key. See https://app.testfairy.com/settings for details. |
| file            | Y           | APK or IPA file data. |
| symbols_file    |             | Symbols mapping file. For iOS this should be a path to the **zipped** symbols file. For Android, this is the path to the mappings.txt file |
| testers_groups  |             | Comma-separated list of tester groups to be invited on the new build. Or "all" to invite all testers. |
| notify          |             | Send emails to the notified tester groups. Default is "on". |
| metrics         |             | Comma-separated list of metrics to record. View list below. |
| max-duration    |             | Maximum session recording length, eg 20m or 1h. Default is "10m". Maximum 24h. |
| video           |             | Video recording settings "on", "off" or "wifi" for recording video only when wifi is available. Default is "on". |
| video-quality   |             | Video quality settings, "high", "medium" or "low". Default is "high". |
| video-rate      |             | Video rate recording in frames per second, default is "1.0". |
| comment         |             | Additional release notes for this upload. This text will be added to email notifications. |
| auto-update     |             | Allows easy upgrade of all users to current version. Set to "on" to enable. Default is "off". |
| instrumentation |             | Allows disabling instrumentation of Android apps. Set to "off" to disable. Default is "on". |

### Available Metrics

Below is a list of available metrics for recording in a session. For use with `metrics` parameter (optional.)

 - `cpu` - user/kernel usage statistics.
 - `memory` - process private/shared memory statistics.
 - `network` - process network utilization.
 - `network-requests` - process network requests.
 - `phone-signal` - phone signal strength.
 - `logcat` - process logs from logcat (Adds *android.permission.READ_LOGS* permission.)
 - `gps` - raw GPS location data, if used by app.
 - `battery` - battery status and drainage (Adds *android.permission.BATTERY_STATS* permission.)
 - `mic` - keep microphone audio data, if used by app.
 - `wifi` - track WIFI signal strength and connectivity.

### Available Options

Below is a list of available advanced options for recording in a session. For use with `options` parameter (optional.)

 - `shake` - Use this option to let the tester to shake their device and fill in a bug report that openes up.
 - `anonymous` - When using this option, sessions are anonymous and account information is not collected from device.

### Error Codes

In case of an error, TestFairy will return a JSON with `status` => `fail` and `code` with one of the values
listed below. An additional human-readable error message is supplied, with regards to cause of the specific error.

| Error Code | Reason |
|-----------:|:-------|
| 1          | Parameter 'xxx' is missing |
| 5          | Invalid API key |
| 105        | Invalid file |

### Example 1: (CURL)
```
curl https://upload.testfairy.com/api/upload -F api_key='your_api_key' -F file=@sample.apk 
```

### Example 2:
```
curl https://upload.testfairy.com/api/upload \
	-F api_key='your_api_key' \
	-F file=@sample.apk \
	-F symbols_file=@sample_mapping.txt \
	-F metrics='cpu,network,logcat' \
	-F testers_groups='friends,beta' \
	-F notify='on'
```

### Example Response:
```
{
	"status": "ok",
	"app_name": "Jigsaw Puzzlers",
	"app_version": "0.9.5",
	"file_size": 9585610,
	"build_url": "https:\/\/app.testfairy.com\/projects\/100-jigsawpuzzlers\/builds\/1",
	"invite_testers_url": "https:\/\/app.testfairy.com\/projects\/100-jigsawpuzzlers\/builds\/1\/invite\/",
	"instrumented_url": "https:\/\/app.testfairy.com\/download\/6CWKJCHD60PPVWYJHGM4AADJ26QWY63BTHAKQYA4SDR0\/filename_v1.1-testfairy.apk",
	"icon_url": "https:\/\/s3.amazonaws.com\/testfairy\/icons\/4\/30040977a9f83070ac983cfb4f706d61472caf5c.png"
}
```

### Where can I find my API Key?

In order to get your API KEY open your account preferences at https://app.testfairy.com/settings/ and click on "Upload API Key".

### How can I create a new API Key?

In order to create a new API KEY just click on "Regenerate API Key".


