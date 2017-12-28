TestFairy's Android SDK enables customization of how the in-app feedback module works. You can change behavior and modify requirements.

- `setBrowserUrl`: Open a web browser instead of a built-in dialog (eg, a questionnaire). 
- `setEmailFieldVisible`: Whether or not email input text should be displayed.
- `setEmailMandatory`: Whether or not people have to identify themselves when submitting feedback.
- `setCallback`: Get notified when a feedback has been sent.

#### setBrowserUrl(String url)

You can setBrowserUrl, so Testfairy will open the yours url for the user feedback.

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

#### setCallback(FeedbackOptions.Callback)

You can get callback to your application if feedback was sent, cancelled or failed.

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

For more information, please refer to the Android SDK [class reference](https://app.testfairy.com/reference/android/).

