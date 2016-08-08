<iframe width="560" height="315" src="https://www.youtube.com/embed/DhRX5UukvPM" frameborder="0" allowfullscreen></iframe>

Integrating the TestFairy SDK into your app allows better understanding of how your app performs on real devices. It tells you
when and how people are using your app, and provide you with any metric you need to optimize for better user experience and better code.

You get:

* Track app use.
* Handle crashes and report to server.
* Record screen video and other metrics.
* Understand user flow using checkpoints.
* Grab NSLogs from client and report to server.
* Automatic update if a new build is available (Ad Hoc only.)

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
    
    * Add this line to your *imports* section:
    `#import "TestFairy.h"`
    
    * Locate `application:didFinishLaunchingWithOptions:` method and add a call using the *App Token* from your [Account Settings page](https://app.testfairy.com/settings#apptoken).
        ```
        [TestFairy begin:@"0000111122223333444455566667777788889999"];
        ```

    **Swift**
    
    * Open your **AppDelegate.swift** file.
    
    * Locate `application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool` and add a call using the *App Token* from your [Account Settings page](https://app.testfairy.com/settings#apptoken).
        ```
        TestFairy.begin("0000111122223333444455566667777788889999")	
        ```

### Class Reference

https://app.testfairy.com/reference/ios/Classes/TestFairy.html

### Troubleshooting

For more information about common problems when integrating the iOS SDK, please visit our [FAQ page](http://docs.testfairy.com/FAQ.html)

### Related documentation

* [Automatically upload dSYM files in post compilation](/iOS_SDK/Automatic_Upload_of_dSYM.html)



