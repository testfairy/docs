### Adding TestFairy to your flutter project

If you are developing your app in flutter here are the instructions to add the TestFairy sdk.

#### Installing
Use this package as a library

### 1. Depend on it
Add this to your package's pubspec.yaml file:

```
dependencies:
  testfairy: any
```

### 2. Install it
You can install packages from the command line:
with Flutter:
```
$ flutter packages get
```
Alternatively, your editor might support flutter packages get. Check the docs for your editor to learn more.

### 3. Import it
Now in your Dart code, you can use:
```
import 'package:testfairy/testfairy.dart';
```

### Quick Start
Include the library and run your main app like this.
```
import 'package:testfairy/testfairy.dart';

void main() {
    HttpOverrides.runWithHttpOverrides(
         () async {
           try {
             // Enables widget error logging
             FlutterError.onError =
                 (details) => TestFairy.logError(details.exception);
   
             // Initializes a session
             await TestFairy.begin(TOKEN);
   
             // Runs your app
             runApp(TestfairyExampleApp());
           } catch (error) {
   
             // Logs synchronous errors
             TestFairy.logError(error);
   
           }
         },
   
         // Logs network events
         TestFairy.httpOverrides(),
   
         // Logs asynchronous errors
         onError: TestFairy.logError,
   
         // Logs console messages
         zoneSpecification: new ZoneSpecification(
           print: (self, parent, zone, message) {
             TestFairy.log(message);
           },
         )
     );
}
```

### How to update native SDKs?

This is done automatically for Android.

If you want to update the native iOS SDK used by this integration, run `pod install` in your *ios* directory. This will fix all the syntax errors in *TestFairyFlutterPlugin.m* file if there are any due to an update.

### API Reference
You can find a detailed documentation to latest Dart interface [here](https://pub.dartlang.org/documentation/testfairy/latest/).
