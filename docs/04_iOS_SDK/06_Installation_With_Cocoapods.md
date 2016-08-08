## Adding TestFairy to your Podfile
Add the *TestFairy* pod to your Podfile by inserting the following line where applicable: 
```
pod 'TestFairy'
```

## Automatically uploading dSYMs

With TestFairy, symbolicating crash reports is easy as pie. A simple Build Phase script can automatically upload the compressed .dSYM file for future symbolicaton.

In your project, navigate to your project's `Build Phases`

![](../../img/ios/cocoapods/cocoapod1.png)

Add a `New Run Script Phase`

![](../../img/ios/cocoapods/cocoapod2.png)

Paste the following script into the created space

![](../../img/ios/cocoapods/cocoapods3.png)

```
sh ${SRCROOT}/Pods/TestFairy/upload-dsym.sh <Upload API Key from https://app.testfairy.com/settings/>
```

And you're done!