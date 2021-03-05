## Customizing the Feedback Dialog

See the [SDK Documentation](https://docs.testfairy.com/SDK/Customizing_feedback_dialog.html) for more information.

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

- `"com.testfairy.feedback.description"`
- `"com.testfairy.feedback.title"`
- `"com.testfairy.feedback.thankYouText"`
- `"com.testfairy.feedback.verifyErrorText"`
- `"com.testfairy.feedback.sendingProgressText"`
- `"com.testfairy.feedback.poweredByText"`
- `"com.testfairy.feedback.emailPlaceholder"`
- `"com.testfairy.feedback.feedbackDescriptionPlaceholder"`
- `"com.testfairy.feedback.editScreenshot"`
- `"com.testfairy.feedback.takeScreenshot"`
- `"com.testfairy.feedback.removeScreenshot"`
- `"com.testfairy.feedback.takeScreenRecord`"
- `"com.testfairy.feedback.screenRecorded"`

These keys will be used to override content description of icon buttons. We strongly suggest make use of these keys for better accessiblity in your apps.

- `"com.testfairy.feedback.sendButtonContent"`
- `"com.testfairy.feedback.cancelButtonContent"`
- `"com.testfairy.feedback.screenshotThumbnail"`

These keys will be used to override the consent dialog users are shown when a screen recording is going to be captured.

- `"com.testfairy.feedback.consentDialogTitle"`
- `"com.testfairy.feedback.consentDialogMessage"`
- `"com.testfairy.feedback.consentDialogOkButton"`
- `"com.testfairy.feedback.consentDialogCancelButton"`

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
