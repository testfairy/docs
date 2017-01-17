Xamarin Component is available [here](https://docs.testfairy.com/Platforms/Xamarin_Component.html)

TestFairy is available for both Android and iOS. You can install the bindings by 1 of 3 ways

1. Download the latest binding dll directly from [GitHub](https://github.com/testfairy/testfairy-xamarin/releases) for your specific platform
1. Install the bindings through NuGet
1. Install the bindings trhough the Xamarin Component Store

You will need an app token (TESTFAIRY_APP_TOKEN) which can be found in your [settings page](http://app.testfairy.com/settings/)

## iOS

Open `AppDelegate.cs` in your solution, and override or add the following code to `FinishedLaunching`.

```
using TestFairyLib;
...

public override bool FinishedLaunching (UIApplication app, NSDictionary options)
{
	TestFairy.Begin (TESTFAIRY_APP_TOKEN);

	// Rest of the method here
	// ...
}
```

### Remote Logging

Prior to iOS 10, TestFairy would automatically capture any device logs. However, with the introduction of a new logging system by Apple in iOS 10, in order to capture logging information along with your session, some extra steps are required. We recommend wrapping all log statements with a custom method, which will output to both the console and to TestFairy sessions. One suggestion we have is to add a method that looks as follows:

```
using TestFairyLib;
...
public static void Log(string format, params object[] arg)
{
    using (var nsFormat = new NSString(string.Format(format, arg)))
    {
        CFunctions.TFLog(nsFormat.Handle, "");
        Console.WriteLine(string.Format(format, arg));
    }
}
```

Now, you can log statements using the call

```
Log("Hello {0}", "World");
```

Note: This requires Xamarin plugin version 2.1.0 and above.

### Upload dSYM

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

### Xamarin Insights Integration

With Insights, Xamarin developers can review their app usage using Xamarin.Insights component. TestFairy fills in the gap and will provide additional metrics such as cpu usage and memory allocation and even video capture from the device. Any question you as a developer may have, will be answered in the TestFairy session report.

![alt](../../img/ios/xamarin-insights/xamarin-insights-integration.png)

In Insight's left sidebar, you will now see a link to the session recorded by TestFairy.

## Integration

By simply adding the following code, the session recorded by TestFairy will be associated in Xamarin Insights as well (as seen in the screenshot above.) Place this snippet right after initializing Xamarin.Insights and TestFairy. 

```csharp
NSNotificationCenter.DefaultCenter.AddObserver (TestFairy.SessionStartedNotification, delegate (NSNotification n) {
	  NSString sessionUrl = (NSString)n.UserInfo.ObjectForKey(TestFairy.SessionStartedUrlKey);
	  Insights.Track ("TestFairy", new Dictionary<string, string> {{ "URL", sessionUrl }});
});
```

## Android
Either in your custom Android Application class, or in any Activity class, simply make a call to Com.TestFairy.TestFairy.Begin(<TESTFAIRY_APP_TOKEN>). Below, we show an example of invoking begin from the Main Activity.

```
using Com.Testfairy;
...

public class MainActivity : Activity {
	protected override void OnCreate (Bundle savedInstanceState)
    {
		base.OnCreate (savedInstanceState);

		TestFairy.Begin (this, TESTFAIRY_APP_TOKEN);
		SetContentView (Resource.Layout.Main);
        ...
    }
}

```

## Telling TestFairy what to record

TestFairy can record screen cast directly from the device, it can monitor CPU consumption and memory allocations. It grabs
logs and even lets your users provide feedback upon device shake. 

To configure how and what TestFairy records, visit your build settings. You will see the build after calling Begin () at
least once.

## Mixing with other crash handlers

TestFairy plays nice. There is no problem using the crash handler with another reporter. 

