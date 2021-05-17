Starting from Dart SDK 2.12, Flutter apps automatically opt-in for [null safety](https://dart.dev/null-safety/understanding-null-safety) in Dart code. TestFairy Flutter plugin is developed to support this shift. However not all apps are ready to make the transition to null-safe Dart. When you compile your app, if your errors look similar to this, it means your app has null-safe code mixed with the old Dart type system.

```
Error: This requires the null safety language feature, which is experimental.
    You can enable the experiment using the '--enable-experiment=non-nullable' command line option.
```

To be able to utilize these new features, apps can either [migrate](https://dart.dev/null-safety/migration-guide) to null-safe Dart or [run in mixed mode](https://dart.dev/null-safety/unsound-null-safety).

Due to the nature of how null-safety implemented and what kind of guarentees it allows during compile time checks, this type of mixed mode programs require [extra attention](https://dart.dev/null-safety/unsound-null-safety#testing-or-running-mixed-version-programs) to build.

We advocate for the full migration in general but if that is not possible, here is a few steps to get started with null safety.

* Use latest Flutter and Dart SDK.

```yaml
# pubspec.yaml

environment:
  sdk: '>=2.12.0 <3.0.0'
  flutter: ">=1.22.0"
```

* Run `dart pub get` to update dependencies.

* You'll start seeing lots of Dart analysis errors, that's alright.

* Add `// @dart=2.9` to beginning of every file that is still using the old Dart to let the compiler know which files should skip compile time checks for null safety.

If you are still having analysis error, it means some of your dependencies doesn't have the `// @dart=2.9` annotation properly placed in their source code. Try checking if those libraries has null-safe (named usually as `libname-nullsafe`) versions in `pub`.
