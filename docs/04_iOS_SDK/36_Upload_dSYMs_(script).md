If you are not using Xcode, follow these instructions to upload your debug symbols:

1. Locate your dSYM directory as described [here](/iOS_SDK/Handling_Missing_dSYMs.html)
2. Download the upload dSYM script from [here]("https://s3.amazonaws.com/testfairy/sdk/upload-dsym.sh")
3. Login to TestFairy and open the preferences.
4. Click the 'Upload API Key' section and copy your key (make sure not to use your App-token, which is a different thing entirely).
4. Run this script:

	 ```
	./Upload-dsym.sh -f TESTFAIRY_UPLOAD_API_KEY -p DSYM_PATH
	 ```

The script will compress the symbols directory and upload the symbols to TestFairy.
