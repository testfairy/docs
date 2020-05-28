TestFairy SDK also ships a sister Production SDK which excludes app distribution capabilities to be able to comply with app store publishing policies. It is strongly advised to use TestFairy Production SDK if you are going to release your app on Google Play. See [Play Store Developer Distribution Agreement Article 4.5](https://play.google.com/about/developer-distribution-agreement.html) for learn more about the policies.

Integrating the Production SDK into your app can help you better understand how your app performs on real devices. It tells you when and how people are using your app, and provides you with any metrics you may need in order to optimize your user experience and code.

Both Java and Kotlin apps are supported.
<!--
[ ![Download](https://api.bintray.com/packages/testfairy/testfairy/testfairy-production/images/download.svg) ](https://bintray.com/testfairy/testfairy/testfairy-production/_latestVersion)
-->

## Installation

1. Add the SDK to your build.gradle app module (eg. `app/build.gradle`)
```
    dependencies {
        implementation 'com.testfairy.production.sdk:testfairy-android-production-sdk:1.+@aar'
    }
```
   Make sure you have the jcenter() repository included.
