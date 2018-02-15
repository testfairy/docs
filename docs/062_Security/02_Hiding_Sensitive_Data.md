TestFairy allows developers to hide specific views from the recorded video. As a developer, you may choose to hide one or more views from the video for security and privacy reasons.

For example, you might want to prevent all information related to credit card data from appearing in the session.

### Sample of a video recording

Below is a sample screen taken from a demo video. On the left, you can see what the app normally looks like. On the right, there is a screenshot taken with the "Card Number" EditText hidden by testfairy-secure-viewid.

<div>
	<img style="float:left; border: none; box-shadow: none;" src="../../img/ios/hidden_views/iphone-with-fields.png" width="400" />
	<img style="float:left; border: none; box-shadow: none;" src="../../img/ios/hidden_views/iphone-no-fields.png" width="400" />
</div>

<br clear="both"/>

### Notes

* Hidden views are removed **before** sending video.
* You may hide multiple views.
* You may add the same view multiple times, no checks needed.

### Learn more: 
To review code examples for implementing this feature go to [this page](https://docs.testfairy.com/SDK/Hiding_Sensitive_Data.html)
