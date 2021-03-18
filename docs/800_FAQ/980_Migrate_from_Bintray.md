Jfrog has recently announced the [sunset of JCenter and Bintray](https://jfrog.com/blog/into-the-sunset-bintray-jcenter-gocenter-and-chartcenter/), great services that we used to distribute our SDK.

As a result, starting from version [1.12.0](/Android/Changelog.html), the TestFairy Android SDK will be hosted under [maven.testfairy.com](https://maven.testfairy.com). 

In order to continue get updates, developers MUST update gradle to keep getting new TestFairy Android SDK versions.

Please follow the steps below to point your project to the new maven repository.

For Further reading on this subject you can go yo our blog: [JCenter and Bintray is shutting down, what to do?
](https://testfairy.com/blog/jcenter-and-bintray-is-shutting-down-what-to-do/)

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
        // Delete this line: `implementation 'testfairy:testfairy-android-sdk:1.+@aar'`

        // Add this line:
        implementation 'com.testfairy:testfairy-android-sdk:1.+@aar'
    }
```
