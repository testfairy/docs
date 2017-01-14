
#How to upload .dSYM
<hr>
## Upload API

The best and the easiest way to upload .dSYM is to use the Upload API, as shown [here](https://docs.testfairy.com/API/Upload_API.html)

#### Example:
```
curl https://app.testfairy.com/api/upload \
	-F api_key='your_api_key' \
	-F file=@sample.ipa \
	-F symbols_file=@dSYM.zip \
	-F metrics='cpu,network,logcat' \
	-F testers_groups='friends,beta' \
	-F notify='on'
```
For more details, please checkout the [Upload API Documentation](https://docs.testfairy.com/API/Upload_API.html)
<hr>
## Automatic Upload of dSYM

To enable automatic uploads of .dSYM file, please follow [these steps](https://docs.testfairy.com/iOS_SDK/Automatic_Upload_of_dSYM.html)

## Automatic Upload of dSYM

In order to upload .dSYM for Xamarin projects please follow [these steps](https://docs.testfairy.com/Platforms/Xamarin.html)

## dSYM Upload script

In order to automatically upload .dSYM please use [this script](https://github.com/testfairy/command-line-uploader/blob/master/upload-dsym.sh)

## upload dSYM file manually

TBD



