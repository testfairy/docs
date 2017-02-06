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
  
## Identifying user address (optional)

In order to identify users by their email address please use the following example:

```
[TestFairy identify:@"" traits:@{
    TFSDKIdentityTraitEmailAddressKey: @"johns@wall.gov",
}];
```
For more identification options [https://docs.testfairy.com/iOS_SDK/Identifying_Your_Users.html](read here)

## Sending NSLog to TestFairy (optional)
TestFairy shows you a video recording and screenshots of your app, paired with a full app log. This combination allows you to understand what happens in your app at any given moment.

### Objective-C

**Changing your Prefix Header** 

To enable the app sending logs to TestFairy,  you will update your projects Prefix Header (.pch):

1. First, locate and access your Prefix Header (.pch): Click on the Project File > Build Settings > Apple LLVM-Language.
2. Add these two lines of code to the end of Prefix Header (.pch):
	```
	#import "TestFairy.h"
	#define NSLog(s, ...) do { NSLog(s, ##__VA_ARGS__); TFLog(s, ##__VA_ARGS__); } while (0)
	```    
    
	(This macro allows you to continue using NSLog in your code, while also adding the logs to the  matching session in TestFairy.)
   
    
**Creating a new Prefix Header**

If your project doesn’t already include a Prefix Header (.pch), follow these steps to add it:

1. Create a new file under iOS > Other > PCH File.
2. Name your file “PCH file”.
3. Add these two lines of code to the file:
	```
	#import "TestFairy.h"
	#define NSLog(s, ...) do { NSLog(s, ##__VA_ARGS__); TFLog(s, ##__VA_ARGS__); } while (0) 
	```

### Swift

1. Once you've included the TestFairy SDK into your Swift application, in order to automatically gather logs from your app, create a new file named `NSLog.swift`, and add the following to the contents of the file

```
//
//  NSLog.swift
//
//  Copyright © 2016 TestFairy. All rights reserved.
//

import Foundation

public func NSLog(_ format: String, _ args: CVarArg...) {
    let message = String(format: format, arguments:args)
    print(message);
    TFLogv(message, getVaList([]))
}
```
This will print any output to `NSLog` to both the console, and to the active session on TestFairy.

4. From the Project Navigator, select your project and the corresponding target.

5. Project > Build Settings > Search: "Prefix Header".

6. Under "Apple LLVM 7.0" you will get the Prefix Header key.

7. Type the path of the file, eg.: "$(SRCROOT)/$(PROJECT_NAME)/ProjectName-Prefix.pch", however your file may be at a different location.

8. Make sure the option "Precompile Prefix Header" is set to YES.

9. Clean your project, and rebuild.

That’s it! Your app will be sending logs to TestFairy.

### Class Reference

[https://app.testfairy.com/reference/ios/Classes/TestFairy.html](https://app.testfairy.com/reference/ios/Classes/TestFairy.html)

### Troubleshooting

For more information about common problems when integrating the iOS SDK, please visit our [FAQ page](http://docs.testfairy.com/FAQ.html)

### Related documentation

* [Automatically upload dSYM files in post compilation](/iOS_SDK/Automatic_Upload_of_dSYM.html)



