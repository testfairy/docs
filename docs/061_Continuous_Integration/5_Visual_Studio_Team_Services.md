###Visual Studio Team Services + TestFairy

This doc will help VSTS users to upload apps (*.apk/*.ipa) to TestFairy.

Adding UploadToTestFairy (or any other task name) to your existing build:

* Go to "Edit Build Definitions"
  ![](https://docs.testfairy.com/img/integrations/vsts/Edit%20Build%20Definitions.png)

* Add Commmand Line tool task
  ![](https://docs.testfairy.com/img/integrations/vsts/add%20command%20line%20task.png)

* Configure the task and add the following line to arguments:

```
https://upload.testfairy.com/api/upload -F api_key=abcdabcdgfdsgfds56 -F file=@sample.apk
```

**Note** Make sure you replace the api_key to yours

![](https://docs.testfairy.com/img/integrations/vsts/Configure%20the%20task.png?raw=true)
