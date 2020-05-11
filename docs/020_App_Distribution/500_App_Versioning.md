## App naming and versioning

When loading an app to Testfairy the service decodes the app name, version number and version name of the build and displays it in the dashboard.


### Displayed name in the dashboard

The app name used in the dashboard is the **Display Name** in your iOS xcode project or the Value of the `string name=”app_name”` in the **strings.xml** file in the `res/values` directory of your Android app in Android studio.

**In Android Studio:**
![](/img/app_distribution/android-studio-app-name.png)


**In Xcode:**
![](/img/app_distribution/xcode-ios-app-display-name.png)


### Android


These are the two fields identifying a build: 

- **versionCode** - A positive integer used as an internal version number.
- **versionName** — A string used as the version number shown to users. 


These fields will be translated and displayed in the following fields on the TestFairy Dashboard:

- Version = **versionName**
- Version code = **versionCode** - displayed in (brackets) after the version field.

![](/img/app_distribution/android-version-numbering.png)


### iOS:


These are 2 fields for identifying the app:

- **Bundle version** - a string composed of one to three period-separated integers. Can only contain numeric characters (0-9) and periods.
- **Bundle versions string, short** - a string.


These fields will be translated and displayed in the following fields on the TestFairy Dashboard:

- Version = **Bundle versions string, short** 
- Version code = **Bundle version** - displayed in (brackets) after the version field.

![](/img/app_distribution/ios-version-numbering.png)

Read more about app versioning for <a href="https://developer.android.com/studio/publish/versioning#appversioning" target="_blank">Android</a>, or <a href="https://developer.apple.com/library/archive/technotes/tn2420/_index.html" target="_blank">iOS</a>.

## Separating your apps and builds in the TestFairy dashboard

In case you upload an app with the same version and package name (or Bundle Identifier), and this app already exists in your account, the new app will override the old app.

If you want to keep the old app you can do one of the following:

1. Change the app version. Either increment the app version name or number, or add a numeric/textual suffix.

2. Change the app package name (or Bundle Identifier)

Please note that since TestFairy apps are grouped by package name, uploading an app with a new package name will create a new TestFairy project, so that apps with package name com.company.app will be grouped seperately than apps with package name com.company.app.debug

