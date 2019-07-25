## Versioning your app builds

When loading an app to Testfairy the service decodes the version number and name of the build and displays it in the dashboard.


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

For more information on app versioning see documentation for android versioning <a href="https://developer.android.com/studio/publish/versioning#appversioning" target="_blank">here</a>, and for iOS versioning <a href="https://developer.apple.com/library/archive/technotes/tn2420/_index.html" target="_blank">here</a>.

## Separating your apps and builds in the TestFairy dashboard

Sometimes you may want to separate builds of apps according to stages of work in your release funnel.


Here are 2 common way of doing that:

- Change the **versionName** (in android) or the **Bundle versions string, short** (in iOS) to include a suffix to distinguish between builds (for example DEV, TEST and PROD). 
    - In this case the **versionName** will look something like 1.2.34-DEV (34). 
    - TestFairy will still group all the build under the same app since the **package name** is still the same.
    
    
- If you want to separate the build to **different** apps in the dashboard then you will need to change the **package name** (in Android) or **Bundle ID** (in iOS) and add the desired suffix.
    - For example: if your package name was **_com.myappname.mycompany_** then it would now change to **_com.myappname.mycompany.dev_** . 
    - In this case your apps will be displayed separately in the TestFairy dashboard since the separation is based on the package name.
