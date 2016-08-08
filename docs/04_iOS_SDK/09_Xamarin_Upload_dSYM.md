With TestFairy, symbolicating crash reports is easy as pie. A simple Build Phase script can automatically upload the compressed .dSYM file for future symbolicaton.

To enable automatic uploads of .dSYM file, please follow these steps:

#### Step 1:

Copy **upload_dsym.sh** to your project folder. [Download here](https://s3.amazonaws.com/testfairy/sdk/upload-dsym.sh).

#### Step 2:

In Xamarin Studio, click on your project in the left sidebar, then open settings and choose **Options**.

![alt](../../img/xamarin/project_options.png)

#### Step 3:

Click on **Custom Commands** on the left, press **Select a project operation**  and select **After Build**

![alt](../../img/xamarin/custom_command.png)

#### Step 4:

Add the following command to the command line

```sh
sh upload-dsym.sh UPLOAD_API_KEY -p DSYM_PATH
```

Make sure to replace **UPLOAD_API_KEY** with your upload api key which can be found in the [Settings](https://app.testfairy.com/settings/) page.  
Replace **DSYM_PATH** with the path of your build folder.

#### Step 5:

Set the *"Working Directory"* to the path of *upload-dsym.sh* file

![alt](../../img/xamarin/upload_dsym_command.png)



