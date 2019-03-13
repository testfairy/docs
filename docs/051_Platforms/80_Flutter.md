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
  runZoned(
    () async {
      try {
        FlutterError.onError = (details) => TestFairy.logError(details.exception);

        // Do any other SDK setup here
        await TestFairy.begin('TOKEN');

        runApp(TestfairyExampleApp());
      } catch (error) {
        TestFairy.logError(error);
      }
    },
    onError: TestFairy.logError,
    zoneSpecification: new ZoneSpecification(
      print: (self, parent, zone, message) => TestFairy.log(message)
    )
  );
}
```

### API Reference
You can find a detailed documentation to latest Dart interface [here](https://pub.dartlang.org/documentation/testfairy/latest/).
