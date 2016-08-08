TestFairy's Android SDK allows customization of the way the in-app feedback module works. You can change behavior and modify requirements.

- `setBrowserUrl`: Open a web browser instead of built-in dialog (eg, a questionnaire)  
- `setEmailFieldVisible`: Should email input text be displayed? 
- `setEmailMandatory`: Do people have to identify when submitting feedback?
- `setCallback`: Get notified when a feedback has been sent

#### setBrowserUrl(String url)

You can setBrowserUrl, so Testfairy will open the yours url for the user feedbak.

```java
FeedbackOptions feedbackOptions = new FeedbackOptions.Builder()
	.setBrowserUrl("https://www.myfeedbackform.com")
	.build();
TestFairy.setFeedbackOptions(feedbackOptions);
```

#### setEmailFieldVisible(boolean) / setEmailMandatory(boolean)

You can decide if the email field is visible or not, and if the email is mandatory or not. 

```java
FeedbackOptions feedbackOptions = new FeedbackOptions.Builder()
	.setEmailFieldVisible(true)
	.setEmailMandatory(true)
	.build();
TestFairy.setFeedbackOptions(feedbackOptions);
```

#### setCallback(FeedbackOptions.Callback)

You can get callback to your application if the feedback was sent, cancelled or failed.

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

For more information please referer to the Android SDK [class reference](https://app.testfairy.com/reference/android/).

