###Visual Studio Team Services + TestFairy

This doc will help VSTS users to upload apps (*.apk/*.ipa) to TestFairy.


Adding UploadToTestFairy (or any other task name) to your existing build:

1. Go to "Edit Build Definitions"
  ![Alt](https://github.com/testfairy/docs/blob/feat-vsts/img/integrations/vsts/Edit%20Build%20Definitions.png?raw=true)
  
2. Add Commmand Line tool task
  ![Alt](https://github.com/testfairy/docs/blob/feat-vsts/img/integrations/vsts/add%20command%20line%20task.png?raw=true)

3. Configure the task and add the following line to arguments:

```https://upload.testfairy.com/api/upload -F api_key=abcdabcdgfdsgfds56 -F file=@sample.apk```
(make sure you replace the api_key to yours)
  ![Alt](https://github.com/testfairy/docs/blob/feat-vsts/img/integrations/vsts/Configure%20the%20task.png?raw=true)
  

