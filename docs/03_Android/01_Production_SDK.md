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

## Use Production SDK only for store releases

Although Production SDK is enough for your production needs, you may want to still enjoy app distribution capabilities during your internal testing process. For such projects, we suggest utilizing build variants in gradle to selectively depend on the proper SDK.

The default Android app project comes with two build types, namely **debug** and **release**. We want to add a new type to represent internal testing. We will call that **staging**. The code below showcases how to use Production SDK for only release builds.

```
android {
    ...

    buildTypes {
        debug {
            // Configure for debug release, can be kept empty to use defaults
        }

        staging {
            // Configure for debug release, can be kept empty to use defaults
        }

        release {
            // Configure for debug release, can be kept empty to use defaults
        }
    }

    defaultConfig {
        ...
    }
}

configurations {
    debugImplementation
    stagingImplementation
    releaseImplementation
}

dependencies {
    debugImplementation 'testfairy:testfairy-android-sdk:1.+@aar'
    stagingImplementation 'testfairy:testfairy-android-sdk:1.+@aar'
    releaseImplementation 'com.testfairy.production.sdk:testfairy-android-production-sdk:1.+@aar'
}
```
