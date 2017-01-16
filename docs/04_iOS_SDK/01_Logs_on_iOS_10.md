## Sending your NSLog to TestFairy
The TestFairy SDK records your app being used so you can watch recorded sessions to solve problems faster. The SDK can record videos, screenshots, custom events, logs and device metrics.

This page explains how to setup your iOS 10.x app to send NSLog to TestFairy (this applies to iOS 10 and future versions).

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
4. From the Project Navigator, select your project and the corresponding target.

5. Project > Build Settings > Search: "Prefix Header".

6. Under "Apple LLVM 7.0" you will get the Prefix Header key.

7. Type the path of the file, eg.: "$(SRCROOT)/$(PROJECT_NAME)/ProjectName-Prefix.pch", however your file may be at a different location.

8. Make sure the option "Precompile Prefix Header" is set to YES.

9. Clean your project, and rebuild.

That’s it! Your app will be sending logs to TestFairy.

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

