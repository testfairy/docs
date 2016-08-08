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

