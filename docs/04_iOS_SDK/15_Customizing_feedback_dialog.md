In-app feedback works out of the box, allowing users to report bugs by shaking their device.

This feature is customizable and allows you to launch the feedback from from a button inside your UI or any other gesture, or change the way the feature works.

If you already called `[TestFairy begin]` and have a session, you can simply use `[TestFairy showFeedbackForm]` to launch the form yourself.

Otherwise, you can utilize `[TestFairy showFeedbackForm:(NSString *)appToken takeScreenshot:(BOOL)takeScreenshot]` anywhere in your app to launch the form without a session. The user will be presented with possible actions to take such as capturing a new screenshot or screen recording.

Here are a few methods that can help you customize the feedback behaviour:

- `setEmailFieldVisible()`: Whether or not email input text should be displayed.
- `setEmailMandatory()`: Whether or not people have to identify themselves when submitting feedback.
- `setDefaultText()`: Set the initial text content of the feedback form to standardize reported feedbacks with submission guidelines.

#### setEmailFieldVisible(boolean) / setEmailMandatory(boolean)

You can decide whether the email field is visible or not, and whether the email is mandatory or not.

```objc
[TestFairy setFeedbackOptions:@{
	@"isEmailMandatory":@NO,
	@"isEmailVisible": @NO
}];
```

#### setDefaultText(String)

In order to change the default text that users see in the feedback form textarea, please use the following:

```java
[TestFairy setFeedbackOptions:@{
	@"defaultText": @"Tested on the following device:\n\n\nSteps to reproduce:\n1.\n\n2.\n\n3.\n\nActual Result:\nExpected Result:\n"
}];
```
