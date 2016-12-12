TestFairy displays all log messages written to the console output with each session. As a developer, you may choose to associate some log output for a given actions or around crashes without polluting your console. 

TestFairy automatically collects log output from both `NSLog`. However, some developers turn off logging in release mode. For those that don't disable output from `NSLog` in released apps, these log items can be read by any other developer. 

In order to get around some of these limitation, TestFairy offers a means to allow developers to log items with a session, without logging to the console output.

## Syntax

```
// Remote logging. These logs will be sent to the server, but will not appear in the console.
TFLog(...);
```

### Code example

```
// Be sure to import the header anywhere you want to use remote logging
#import "TestFairy.h"

TFLog("There are %lu items", list.count);
```

## iOS 10

Although TestFairy automatically collects the output of `NSLog`, if your project targets iOS 10, then you may notice that there are no logs that are collected. Unfortunately, Apple introduced breaking changes in the API that prevent TestFairy from collecting any logs. 

As a workaround, we suggest using the above remote logging service provided by TestFairy. You can replace all calls to `NSLog` with calls to `TFLog`. However, if you'd like to also log output to your console, consider one of the solutions below to help override calls to NSLog:

#### Objective-C

One suggestion might be to add a macro to a universally used header. The macro can be as follows:

```
#import "TestFairy.h"
#define NSLog(s, ...) do { NSLog(s, ##__VA_ARGS__); TFLog(s, ##__VA_ARGS__); } while (0)
```

#### Swift

In Swift, you can override calls to NSLog by creating a new swift file, and replacing the contents of the file with the snippet below. This will override all calls to NSLog with a call to `print` and `TFLogv`, which will output to your console, and to your TestFairy session (make sure you've already follow the steps to adding the TestFairy sdk to your [Swift projects](https://docs.testfairy.com/iOS_SDK/Adding_to_Swift_Projects.html))

```
//
// NSLog.swift
//
// Copyright © 2016 TestFairy. All rights reserved.
//

import Foundation

public func NSLog( format: String, args: CVarArg...) {
	let message = String(format: format, arguments:args)
	print(message)
	TFLogv(message, getVaList([]))
}
```
