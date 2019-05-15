## Versioning your app builds

When loading an app to Testfairy the service decodes the version number and name of the build and displays it in the dashboard.


### Android


These are the two fields identifying a build: 

- **versionCode** - A positive integer used as an internal version number.
- **versionName** — A string used as the version number shown to users. 
These fields will be translated and displayed in the following fields on the TestFairy Dashboard:
Version = versionName
Version code = versionCode - displayed in (brackets) after the version field.


### iOS:


These are 2 fields for identifying the app:
Bundle version - a string composed of one to three period-separated integers. Can only contain numeric characters (0-9) and periods.
Bundle versions string, short - a string.
These fields will be translated and displayed in the following fields on the TestFairy Dashboard:
Version code = Bundle version
Version = Bundle versions string, short 
For more information on app versioning see documentation for android versioning here, and for iOS versioning here.
