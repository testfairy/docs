TestFairy displays all log messages written to the console output with each session. As a developer, you may choose to associate some log output for a given actions or around crashes without polluting your console. 

TestFairy automatically collects log output from both `NSLog`. However, some developers turn off logging in release mode. For those that don't disable output from `NSLog` in released apps, these log items can be read by any other developer. 

In order to get around some of these limitation, TestFairy offers a means to allow developers to log items with a session, without logging to the console output.

### Syntax

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

### iOS 10

Although TestFairy automatically collects the output of `NSLog`, if your project targets iOS 10, then you may notice that there are no logs that are collected. Unfortunately, Apple introduced breaking changes in the API that prevent TestFairy from collecting any logs. 

As a workaround, we suggest using the above remote logging service provided by TestFairy. You can replace calls to `NSLog` with calls to `TFLog`. However, if you'd like to also log output to your console, one suggestion might be to add a macro to a universally used header. The macro can be as follows:

```
#define NSLog( s, ... ) NSLog([NSString stringWithFormat:(s)], ##__VA_ARGS__); TFLog([NSString stringWithFormat:(s)], ##__VA_ARGS__)
```