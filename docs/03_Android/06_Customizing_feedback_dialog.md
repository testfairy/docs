In-app feedback works out of the box, allowing users to report bugs by shaking their device.

This feature is customizable and allows you to launch the feedback from from a button inside your UI or any other gesture, or change the way the feature works.

If you already called `TestFairy.begin()` and have a session, you can simply use `TestFairy.showFeedbackForm()` to launch the form yourself.

Otherwise, you can utilize `TestFairy.showFeedbackForm(Context context, String appToken, boolean captureScreenshot)` anywhere in your app to launch the form without a session. The user will be presented with possible actions to take such as capturing a new screenshot or screen recording.

Here are a few methods that can help you customize the feedback behaviour:

- `setBrowserUrl()`: Open a web browser instead of a built-in dialog (eg, a questionnaire).
- `setEmailFieldVisible()`: Whether or not email input text should be displayed.
- `setEmailMandatory()`: Whether or not people have to identify themselves when submitting feedback.
- `setCallback()`: Get notified when a feedback has been sent.
- `setDefaultText()`: Set the initial text content of the feedback form to standardize reported feedbacks with submission guidelines.

#### setBrowserUrl(String url)

You can setBrowserUrl, so Testfairy will open your own url for user feedback (or a questionnaire etc. ).

```java
FeedbackOptions feedbackOptions = new FeedbackOptions.Builder()
	.setBrowserUrl("https://www.myfeedbackform.com")
	.build();
TestFairy.setFeedbackOptions(feedbackOptions);
```

#### setEmailFieldVisible(boolean) / setEmailMandatory(boolean)

You can decide whether the email field is visible or not, and whether the email is mandatory or not.

```java
FeedbackOptions feedbackOptions = new FeedbackOptions.Builder()
	.setEmailFieldVisible(true)
	.setEmailMandatory(true)
	.build();
TestFairy.setFeedbackOptions(feedbackOptions);
```

#### setDefaultText(String)

In order to change the default text that users see in the feedback form textarea, please use the following:

```java
FeedbackOptions feedbackOptions = new FeedbackOptions.Builder()
	.setDefaultText("Tested on the following device:\n" +
                        "\n\n" +
                        "Steps to reproduce:\n" +
                        "1.\n\n" +
                        "2.\n\n" +
                        "3.\n\n" +
                        "Actual Result:\n" +
                        "Expected Result:\n")
	.build();
TestFairy.setFeedbackOptions(feedbackOptions);
```

#### setCallback(FeedbackOptions.Callback)

You can get a callback to your application if a feedback was sent, cancelled or failed.

```java
FeedbackOptions feedbackOptions = new FeedbackOptions.Builder()
	.setEmailFieldVisible(true)
	.setEmailMandatory(true)
	.setCallback(new FeedbackOptions.Callback() {
		@Override
		public void onFeedbackSent(FeedbackContent content) {
			Toast.makeText(MyActivity.this, "onFeedbackSent text = " + content.getEmail() + ", " + content.getText() , Toast.LENGTH_LONG).show();
		}

		@Override
		public void onFeedbackCancelled() {
			Toast.makeText(MyActivity.this, "onFeedbackCancelled", Toast.LENGTH_LONG).show();
		}

		@Override
		public void onFeedbackFailed(int reason, FeedbackContent content) {
			Toast.makeText(MyActivity.this, "onFeedbackFailed text = " + content.getEmail() + ", " + content.getText() , Toast.LENGTH_LONG).show();
		}
	})
	.build();

	TestFairy.setFeedbackOptions(feedbackOptions);
```

#### setFeedbackInterceptor(FeedbackOptions.FeedbackInterceptor)

A submitted feedback's content can be inspected with custom interceptors. Intereptors can modify the inspected feedback's message, user email or attached bitmap. This way, it is possible to add extra text to the submitted message such as ids from issue trackers and meta data relevant to current context the feedback is submitted from.

```java
FeedbackOptions feedbackOptions = new FeedbackOptions.Builder()
	.setFeedbackInterceptor(new FeedbackOptions.FeedbackInterceptor() {
		@Override
		public FeedbackContent intercept(FeedbackContent feedbackContent) {
			String exampleText = "Issue: " + generateIssueId() + "\n";

			return new FeedbackContent(
				exampleText + feedbackContent.getText(),
				feedbackContent.getEmail(),
				feedbackContent.getTimestamp(),
				feedbackContent.getBitmap()
			);
		}
	})
	.build();

TestFairy.setFeedbackOptions(feedbackOptions);
```

#### setFeedbackVerifier(FeedbackVerifier)

It is also possible to define custom feedback verification logic by providing a verifier implementation.

First, implement the following interface with your custom logic. We provide an example but you can choose your own rules for the allowed feedbacks.

```java
public class MyFeedbackVerifier implements FeedbackVerifier {
	private String lastError = null;

	@Override
	public boolean verifyFeedback(FeedbackContent content) {
		lastError = null;

		if (content.getEmail() == null || content.getEmail().equals("")) {
			lastError = "Missing email address";
			return false;
		}

		if (content.getEmail().endsWith("@example.com") || content.getEmail().endsWith("@gmail.com")) {
			lastError = "Email address cannot end with @example.com or @gmail.com";
			return false;
		}

		if (content.getText().trim().length() < 10) {
			lastError = "Feedback body must be at least 10 characters long, please write something..";
			return false;
		}

		return true;
	}

	@Override
	public String getVerificationFailedMessage() {
		return lastError;
	}
}
```

Then call the SDK with your verifier.

```java
TestFairy.setFeedbackVerifier(new MyFeedbackVerifier());
```

### Automatic Email Detection

The feedback form uses following heuristics to determine how to fill its email field.

* If you provide an email address to `TestFairy.setUserId(String)`, it will be automatically detected by the form.
* If you set an attribute via `TestFairy.setAttribute("email", "jane@example.com")`, the form will make use of it.
* If the user sends a feedback with a valid email address, it will also be saved for later use in case rules above cannot detect any other addresses.

### Feedback Form UI Customization

TestFairy SDK takes a look at a bunch of special fields in `SharedPreferences` to paint the feedback form. You can use the following utility method to override these values.

```java
public static void putString(Activity activity, String key, String value) {
	SharedPreferences prefs = activity.getPreferences(Activity.MODE_PRIVATE);
	SharedPreferences.Editor editor = prefs.edit();
	editor.putString(key, value);
	editor.apply();
}
```

Here is a list of fields you can override in your app.

These keys will be used to override text contents of the form.
* `"com.testfairy.feedback.description"`
* `"com.testfairy.feedback.title"`
* `"com.testfairy.feedback.thankYouText"`
* `"com.testfairy.feedback.verifyErrorText"`
* `"com.testfairy.feedback.sendingProgressText"`
* `"com.testfairy.feedback.poweredByText"`
* `"com.testfairy.feedback.emailPlaceholder"`
* `"com.testfairy.feedback.feedbackDescriptionPlaceholder"`
* `"com.testfairy.feedback.editScreenshot"`
* `"com.testfairy.feedback.takeScreenshot"`
* `"com.testfairy.feedback.removeScreenshot"`
* `"com.testfairy.feedback.takeScreenRecord`"
* `"com.testfairy.feedback.screenRecorded"`

These keys will be used to override content description of icon buttons. We strongly suggest make use of these keys for better accessiblity in your apps.
* `"com.testfairy.feedback.sendButtonContent"`
* `"com.testfairy.feedback.cancelButtonContent"`
* `"com.testfairy.feedback.screenshotThumbnail"`

These keys will be used to override the consent dialog users are shown when a screen recording is going to be captured.
* `"com.testfairy.feedback.consentDialogTitle"`
* `"com.testfairy.feedback.consentDialogMessage"`
* `"com.testfairy.feedback.consentDialogOkButton"`
* `"com.testfairy.feedback.consentDialogCancelButton"`

In Europe, GDPR mandates that you must clearly explain why you are collecting user data and how you are utilizing this data for your business needs. It is strongly suggested that these reasons should be stated in the consent dialog in a clear way. This kind of practice is being adopted by many countries/states and is really important to protect the privacy of your users.

Example:

```java
putString(
    myActivity,
    "com.testfairy.feedback.thankYouText",
    "Thank you for the feedback. We'll take a look at it and notify you shortly."
);
```

### Feedback Prompt Dialog Customization

The SDK recognizes shake gestures and automatically prompts a pop up dialog, asking for confirmation to show the feedback form. It is possible to customize colors in this dialog with the following code.

```java
getSharedPreferences("testfairy.prefs.dialog", MODE_PRIVATE).edit()
    .putInt("textColor", Color.GREEN)
    .putInt("backgroundColor", Color.BLUE)
    .putInt("titleColor", Color.RED)
    .commit();
```

### Class Reference

For more information, please refer to the Android SDK [class reference](https://app.testfairy.com/reference/android/).
