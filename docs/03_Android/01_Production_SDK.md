TestFairy has 2 types of SDKs: Testing and Production.

The difference is auto-update. Testing SDK includes auto update functionality and Production does not.

It is **critical** for Play Store builds not to include auto-update functionality.



Both Java and Kotlin apps are supported.
<!--
[ ![Download](https://api.bintray.com/packages/testfairy/testfairy/testfairy-production/images/download.svg) ](https://bintray.com/testfairy/testfairy/testfairy-production/_latestVersion)
-->

## Debug (Testing only)

In case your app uses TestFairy only in debug builds use the following Gradle configuration:

```
    dependencies {
        implementation 'com.testfairy.production.sdk:testfairy-android-sdk:1.+@aar'
    }
```

## Release (Play Store)

In case your app uses TestFairy only in debug builds use the following Gradle configuration:

```
    dependencies {
        implementation 'com.testfairy.production.sdk:testfairy-android-production-sdk:1.+@aar'
    }
```


## Debug and Release

For projects that use TestFairy both in debug and release, use build variants in gradle to selectively depend on the proper SDK.

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
