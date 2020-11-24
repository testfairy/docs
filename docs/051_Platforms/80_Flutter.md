### Adding TestFairy to your flutter project

If you are developing your app in flutter here are the instructions to add the TestFairy sdk.

#### Installing
Use this package as a library

### 1. Depend on it
Add this to your package's pubspec.yaml file for Dart 2 projects:

```
dependencies:
  testfairy: any
```

*If you still use Dart 1, please choose this instead:

dependencies:

  testfairy: ^1.0.28 # for Dart 1 projects


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

Make sure your project is [AndroidX](https://flutter.dev/docs/development/androidx-migration) compatible.

Minimum supported iOS target is 9.0.

* Make sure you have a ```TestFairy.begin[SDK_APP_TOKEN]``` statement in your code.

```dart
// inside your main.dart
import 'dart:async';
import 'dart:io';
import 'package:testfairy/testfairy.dart';

void main() {
  HttpOverrides.global = TestFairy.httpOverrides();

  runZonedGuarded(
    () async {
      try {
        FlutterError.onError =
            (details) => TestFairy.logError(details.exception);

        // Call `await TestFairy.begin()` or any other setup code here.

        runApp(TestFairyGestureDetector(child: TestfairyExampleApp()));
      } catch (error) {
        TestFairy.logError(error);
      }
    },
    (e, s) {
      TestFairy.logError(e);
    },
    zoneSpecification: new ZoneSpecification(
      print: (self, parent, zone, message) {
        TestFairy.log(message);
      },
    )
  );
}
```

### How to update native SDKs?

Run `pod repo update` and update the plugin in pubspec.yaml. Then run `cd ios; pod update TestFairy; cd...` to update the iOS SDK.

### Dart 2 Support
To be able to use TestFairy Flutter Plugin 2.+, you must have the environment specified below and upgrade your project code base to Dart 2 using [this guide](https://dart.dev/dart-2). 

```
environment:
  sdk: ">=2.10.0 <3.0.0"
  flutter: ">=1.22.0 <2.0.0"
```

Make sure your project root has an *analysis_options.yaml* that looks similar to [this](https://github.com/testfairy/testfairy-flutter/blob/master/analysis_options.yaml). The important part is the enabled experiment in the top declaration.

You also have to enable the same experiment in your run and test commands:

```
flutter run --enable-experiment=non-nullable --no-sound-null-safety

flutter drive --enable-experiment=non-nullable --no-sound-null-safety -v --target=test_driver/app.dart
```

If this transition is not suitable for your project, you can stay in TestFairy plugin *1.0.28*.

Projects that don't make the migration will otherwise get this error:
```
Error: This requires the null safety language feature, which is experimental.
    You can enable the experiment using the '--enable-experiment=non-nullable' command line option.
```

### How to opt-out from Dart 2?
Starting from 2.0.0, *testfairy* will only work with projects that use Dart 2 as the development language. If this transition is not suitable for your project, you can stay in TestFairy plugin 1.0.27.

```
dependencies:
  testfairy: ^1.0.28
```

### How to compile with latest unreleased Flutter?

Flutter's master channel introduces new Dart syntax and has breaking changes in its SDK classes. These changes will show up similar to the following error when you compile your project.

```
../pub.dartlang.org/testfairy-1.x.y/lib/src/network_logging.dart:253:7: 
            Error: The non-abstract class '_TestFairyClientHttpRequest' is missing implementations for these members:

     - HttpClientRequest.abort

    Try to either
     - provide an implementation,
     - inherit an implementation from a superclass or mixin,
     - mark the class as abstract, or
     - provide a 'noSuchMethod' implementation.

    class _TestFairyClientHttpRequest implements HttpClientRequest {
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    org-dartlang-sdk:///third_party/dart/sdk/lib/_http/http.dart:2045:8: Context: 'HttpClientRequest.abort' is defined here.
      void abort([Object? exception, StackTrace? stackTrace]);
           ^^^^^
```

In order to use TestFairy with the latest unstable Flutter, you must clone this repo and use it as an offline dependency instead of the published version in pub.

* Clone this [repo](https://github.com/testfairy/testfairy-flutter).

* Use the following code to include the clone as an offline dependency (assuming both projects reside in the same directory as siblings).

```yaml
dependencies:
  testfairy:
    path: ../testfairy-flutter # or "./testfairy-flutter" if you cloned it inside your main project as a child directory 
```

* Launch a terminal and run the following commands.

```bash
cd path/to/testfairy-flutter
sed  "s/Modern Flutter \*\*/\//" lib/src/network_logging.dart > lib/src/network_logging.temp
sed  "s/\*\* Modern Flutter/\//" lib/src/network_logging.temp > lib/src/network_logging.dart
rm -rf lib/src/network_logging.temp
```

* Checkout **testfairy-flutter** to your VCS without including its **.git** directory.

* When there is a new update in this repo, delete **testfairy-flutter** and retry the steps.

### Troubleshooting

* I see **Specs satisfying the TestFairy dependency were found, but they required a higher minimum deployment target** when I build and iOS app.

You have to update the native SDK alongside with CocoaPods repository.

Run `pod repo update` and update the plugin in *pubspec.yaml*. Then run `cd ios; pod update TestFairy; cd..`.

* I have my own `HttpOverrides.global` setup. How can I make it work with TestFairy?

Copy [this](https://github.com/testfairy/testfairy-flutter/blob/master/lib/src/network_logging.dart) file to your project. Add the necessary functionality and assign to `HttpOverrides.global` an instance from your new implementation.

* I see **Errno::ENOENT - No such file or directory @ rb_sysopen - ./ios/Pods/Local Podspecs/testfairy.podspec.json** when I build an iOS app.

This happens due to a pod misconfiguration bug on the Flutter side. We have [blog post](https://blog.testfairy.com/errnoenoent-fix-for-flutter-ios/) explaining the issue if you are interested.

Clean your project, remove *ios/Podfile* and Xcode workspace file entirely. (make sure you have backups just in case)
```
flutter clean
rm -rf ios/Podfile ios/Podfile.lock pubspec.lock ios/Pods ios/Runner.xcworkspace
```

Revert to **cocoapods 1.7.5** temporarily.
```
gem uninstall cocoapods
gem install cocoapods -v 1.7.5
```

Add the following line to the beginning of your iOS project's generated Podfile.
```
# Beginning of file
use_frameworks!

# The rest of the file contents
# ...
```

Install pods.
```
pod repo update
cd ios
pod install
cd ..
```

Retry your build.

Once your build is successful, you can update cocoapods back to its latest version.

* I see **Looks like TestFairy has an upgrade to do... 1.X.Y+hotfixZ is the latest stable branch** or errors related to Jetifier in the logs when I call an SDK method. --> Migrate your Android project to AndroidX by following [this](https://flutter.dev/docs/development/androidx-migration) guide.

* I see **Undefined symbols for architecture** error during compilation. --> You must use frameworks and specify a platform version of at least `9.0` in your generated iOS project's Podfile. Please make the following changes in *ios/Podfile* and rebuild:

  ```
  target 'Runner' do
   platform :ios, '9.0'   ####### <--- add this and specify at least 9.0

    use_frameworks!        ####### <--- add this, and try building if there is 
                           #######      no Swift code or plugin in the project.
                           #######      If there is Swift code, please also add 
                           #######      the marked line below
  
    ...
  end

  post_install do |installer|
   installer.pods_project.targets.each do |target|
      target.build_configurations.each do |config|
       config.build_settings['ENABLE_BITCODE'] = 'NO'
        config.build_settings['SWIFT_VERSION'] = '3.2'  ### <--- add this, change the 
                                                        ### version to what's being
                                                        ### used in the project, 
                                                        ### remove if there is none
     end
    end
  end
  ```

* CocoaPods could not find compatible versions for pod "TestFairy".

  This is an old bug in the plugin pubspec file. 
  
  - First, run `flutter clean` in your root directory. 

  - Please move *ios/Podfile.lock* into a temporary place before running `pod repo update; pod install` in your *ios* directory. 

  - If some of the libraries you use need to be at specific versions, copy the necessary lines from your backed up *Podfile.lock* into the newly created one. Please keep the lines related to TestFairy (note the title case in the name) untouched.

  - Finally, run `pod repo update; pod install` again to re-download libraries from the replaced lines.
   
   If everything went smoothly, this issue should never happen again.

* There are syntax errors in `TestFairyFlutterPlugin.java` or `TestFairyFlutterPlugin.m` file.

  In your project root, run `flutter clean; cd ios; pod repo update; pod install; cd ..` and test again

### API Reference
You can find a detailed documentation of the latest Dart interface [here](https://pub.dartlang.org/documentation/testfairy/latest/).
