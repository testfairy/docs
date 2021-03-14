Starting from version 1.12.0, TestFairy Android SDK and its NDK support extension is hosted under [maven.testfairy.com](https://maven.testfairy.com). This change was made after Jfrog [announced](https://jfrog.com/blog/into-the-sunset-bintray-jcenter-gocenter-and-chartcenter/) that new packages will no longer be accepted starting April 2021.

Projects MUST update gradle to keep getting new TestFairy Android SDK versions.

If you are still using an SDK prior to version **1.12.0**, please follow the steps below to point your project to the new maven repository.

### 1. Add TestFairy maven repository to your project's **build.gradle** script

In *PROJECT_ROOT/build.gradle*:

```
    buildscript {
        repositories {
            maven { url 'https://maven.testfairy.com' }
        }
    }
```


### 2. Change TestFairy SDK dependency lines in your app's **build.gradle** script

In *PROJECT_ROOT/app/build.gradle*:

```
    dependencies {
        // Remove this line if it exists: `implementation 'testfairy:testfairy-android-sdk:1.+@aar'`
        // Remove this line if it exists: `implementation 'com.testfairy.ndk:testfairy-android-ndk:1.+@aar'`

        // Use these
        implementation 'com.testfairy:testfairy-android-sdk:1.+@aar'
        implementation 'com.testfairy:testfairy-android-ndk:1.+@aar' // Only for NDK projects
    }
```
