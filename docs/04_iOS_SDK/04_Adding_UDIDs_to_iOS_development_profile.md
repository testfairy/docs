<iframe width="560" height="315" src="https://www.youtube.com/embed/omYf_-KjPE0" frameborder="0" allowfullscreen></iframe>

There are two ways to sign iOS apps. 

There is the enterprise certificate that technically allows you to send your app to any iOS device, and there is the Ad-Hoc certificate that requires you to get the user's device ID before sending them an ipa file.

This document refers to ad-hoc certificates and explains how to add a tester's UDID to your app development profile in the Apple developer portal.

We would warmly recommend any company to apply to Apple's [iOS Developer Enterprise Program](https://developer.apple.com/programs/ios/enterprise/), and sign iOS apps for internal use with an Enterprise certificate. Please note that this is not a legal document, please refer to Apple's website for the exact terms of service for any Apple service.

In order to add a UDID to your Ad-Hoc certificate please follow the following instructions.

1. Open your TestFairy [testers page](https://app.testfairy.com/testers) and invite new testers. You can add multiple addresses, one per line.
Your testers will get an email asking them to register their device. Once they register, you will get an email with your tester's UDID and their device details will be listed in https://app.testfairy.com/testers

2. Once you have all your testers' UDIDs [export their details](https://app.testfairy.com/testers/export/).

3. Log in to the Apple Developer Portal and go to the [Devices area](https://developer.apple.com/account/ios/device/deviceList.action).

4. Click on the + icon 
![alt](/img/apple-dev-plus.png)

5. Click on 'Register multiple devices', choose your file and continue.
![alt](/img/apple-dev-import.png)

6. Review the new UDIDs and click done.

7. Open the provisioning profile [distribution section](https://developer.apple.com/account/ios/profile/profileList.action?type=production)

8. Choose your ad-hoc profile and click 'edit'

9. Scroll down to devices, and choose the new devices that should be added to the profile.

10. Generate the new profile and download the file.

11. Make sure to delete the previous profile files.







