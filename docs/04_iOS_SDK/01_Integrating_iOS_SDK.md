<iframe width="854" height="480" src="https://www.youtube.com/embed/DhRX5UukvPM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Integrating the TestFairy SDK into your app helps you better understand how your app performs on real devices. It tells you
when and how people are using your app, and provides you with any metrics you may need to optimize your user experience and code.

You get to:

* Track app use.
* Handle crashes and report to server.
* Record screen video and other metrics.
* Understand user flow, using checkpoints.
* Grab NSLogs from client and report to server.
* Automatically update if a new build is available (Ad Hoc only.)

### Manual Integration
1. Download the framework from our [Download page](https://app.testfairy.com/sdk/ios/).

2. Unzip files and drag them into your project tree.
> ![alt](https://app.testfairy.com/images/app/sdk/tutorial-unzip-files.png)

   Make sure **Copy items if needed** is checked when dragging files to your project.
> ![alt](http://docs.testfairy.com/img/ios/sdk/copy-items-if-needed.png)

3. Add the following frameworks:
    + ```CoreMedia.framework```
    + ```CoreMotion.framework```
    + ```AVFoundation.framework```
    + ```SystemConfiguration.framework```
    + ```OpenGLES.framework```

4. Initialize the TestFairy framework :

    **Objective-C**
    
    * Open your **AppDelegate.m** file.
    
    * Add this code to your app:
    
    <iframe frameBorder="0" width="100%" height="200" src="https://app.testfairy.com/sdk/ios/iframe"></iframe>

    
    **Swift**
    
    * Open your **AppDelegate.swift** file.
    
    * Locate `application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool` and add a call using the *App Token* from your [Account Settings page](https://app.testfairy.com/settings#apptoken).
        ```
        TestFairy.begin("0000111122223333444455566667777788889999")	
        ```
	
    * Create an Objective-C bridging header 
		
		Since this process only needs to be done once per project, if you have already done so, just update your bridging header file.

		* Right-click on your project, select `New File...`
		* Select `Header File.h`
		* Save as `Bridging.h` in your project
		* Click on `Bridging.h` to open it in editor
		* Add the following line to the code: 

	  ```
	   #import "TestFairy.h"
	   ```

		Update Build Settings with the new bridging header:

		* Click on your project
		* Select *Build Settings* tab
		* Select the "All" filter, in order to find *Swift Compiler - Code Generation*: *Objective-C Bridging Header*
		* Edit *Swift Compiler - Code Generation*: *Objective-C Bridging Header* (double-click to edit).
		* Drag "Bridging.h" from the source tree onto the edit box opened

## Sending NSLog to TestFairy (optional)

In order to send logs to TestFairy, please do the following:

1. Locate and access your Prefix Header (.pch): Click on the Project File > Build Settings > Apple LLVM-Language.
2. Add these two lines of code to the end of Prefix Header (.pch):

	```
	#import "TestFairy.h"
	#define NSLog(s, ...) do { NSLog(s, ##__VA_ARGS__); TFLog(s, ##__VA_ARGS__); } while (0)
	```    
    
For more logging options [read here](https://docs.testfairy.com/iOS_SDK/Logs_on_iOS_10.html)

### Class Reference

[https://app.testfairy.com/reference/ios/Classes/TestFairy.html](https://app.testfairy.com/reference/ios/Classes/TestFairy.html)

### Troubleshooting

For more information about common problems when integrating the iOS SDK, please visit our [FAQ page](http://docs.testfairy.com/FAQ.html)

### Related documentation

* [Automatically upload dSYM files in post compilation](/iOS_SDK/Automatic_Upload_of_dSYM.html)



