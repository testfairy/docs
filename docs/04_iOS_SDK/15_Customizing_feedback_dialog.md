In-app feedback works out of the box, allowing users to report bugs by shaking their device.

This feature is customizable and allows you to launch the feedback from from a button inside your UI or any other gesture, or change the way the feature works.

If you already called `[TestFairy begin]` and have a session, you can simply use `[TestFairy showFeedbackForm]` to launch the form yourself.

Otherwise, you can utilize `[TestFairy showFeedbackForm:(NSString *)appToken takeScreenshot:(BOOL)takeScreenshot]` anywhere in your app to launch the form without a session. The user will be presented with possible actions to take such as capturing a new screenshot or screen recording.

Here are a few methods that can help you customize the feedback behaviour:

- `isEmailVisible`: Whether or not email input text should be displayed.
- `isEmailMandatory`: Whether or not people have to identify themselves when submitting feedback.
- `defaultText`: Set the initial text content of the feedback form to standardize reported feedbacks with submission guidelines.

#### setEmailFieldVisible(boolean) / setEmailMandatory(boolean)

You can decide whether the email field is visible or not, and whether the email is mandatory or not.

```objc
[TestFairy setTestFairyFeedbackOptions:[TestFairyFeedbackOptions createWithBlock:^(TestFairyFeedbackOptionsBuilder *builder) {
	builder.isEmailMandatory = YES;
	builder.isEmailVisible = YES;
}]];
```

#### Setting Default Text

In order to change the default text that users see in the feedback form textarea, please use the following:

```objc
[TestFairy setTestFairyFeedbackOptions:[TestFairyFeedbackOptions createWithBlock:^(TestFairyFeedbackOptionsBuilder *builder) {
	builder.defaultText = @"Tested on the following device:\n" +
                        "\n\n" +
                        "Steps to reproduce:\n" +
                        "1.\n\n" +
                        "2.\n\n" +
                        "3.\n\n" +
                        "Actual Result:\n" +
                        "Expected Result:\n";
}]];
```

#### Intecepting Feedback Before Submission

Feedback provides mechanism for intercepting content before it is submitted to server. Using the `setTestFairyFeedbackOptions` method, you can set an `interceptor` callback block that receives a `TestFairyFeedbackContent` instance, and returns a new instance of that type.

Please closider the following code sample. It sets up an interceptor that will receive the feedback content, and what is actually submitted to the server, is the original feedback text, but uppercased.

```objc
[TestFairy setTestFairyFeedbackOptions: [TestFairyFeedbackOptions createWithBlock:^(TestFairyFeedbackOptionsBuilder *builder) {
	builder.interceptor = ^TestFairyFeedbackContent *(TestFairyFeedbackContent *content) {
		NSString *text = [content.text uppercaseString];
		NSString *email = content.email;
		long timestamp = content.timestamp;
		UIImage *bitmap = content.bitmap;
			
		return [[TestFairyFeedbackContent alloc] initWith:text email:email timestamp:timestamp bitmap:bitmap];
	};
}]];
```

### Automatic Email Detection

The feedback form uses following heuristics to determine how to fill its email field.

- If you provide an email address to `[TestFairy setUserId:(NString *)]`, it will be automatically detected by the form.
- If you set an attribute via `[TestFairy setAttribute:@"email" withValue:@"jane@example.com"]`, the form will make use of it.
- If the user sends a feedback with a valid email address, it will also be saved for later use in case rules above cannot detect any other addresses.

### Class Reference

For more information, please refer to the [iOS SDK class reference](https://app.testfairy.com/reference/ios/).
