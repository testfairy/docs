
### Adding TestFairy to your flutter project


If you are developing your app in flutter here are the instructions to add the TestFairy sdk:
(here is a link to the document)

#### Installing
Use this package as a library

### 1. Depend on it

Add this to your package's pubspec.yaml file:

```javascript

dependencies:
  testfairy_flutter: ^1.0.1

```
### 2. Install it

You can install packages from the command line:
with Flutter:
```javascript
$ flutter packages get
```
Alternatively, your editor might support flutter packages get. Check the docs for your editor to learn more.
### 3. Import it

Now in your Dart code, you can use:
```javascript
import 'package:testfairy_flutter/testfairy_flutter.dart';
```
### Quick Start
Include the library and run your main app like this.
```javascript
import 'package:testfairy_flutter/testfairy_flutter.dart';
```

```javascript
void main() {
  runZoned(
    () async {
      try {
        FlutterError.onError = (details) => TestFairy.logError(details.exception);

        // Do any other SDK setup here
        TestFairy.begin('TOKEN');

        await runApp(TestfairyExampleApp());
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
