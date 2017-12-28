If you are not using Xcode, follow these instructions to upload your debug symbols:

1. Locate your dSYM directory as described [here](/iOS_SDK/Handling_Missing_dSYMs.html)
2. Download the upload dSYM script from [here]("https://s3.amazonaws.com/testfairy/sdk/upload-dsym.sh")
3. Go to (https://app.testfairy.com/settings/#apikey) and copy your Upload API key (you will pass it as parameter to the script).
4. Run this script:

	 ```
	./upload-dsym.sh -f TESTFAIRY_UPLOAD_API_KEY -p DSYM_PATH
	 ```

The script will compress the symbols directory and upload the symbols to TestFairy.
