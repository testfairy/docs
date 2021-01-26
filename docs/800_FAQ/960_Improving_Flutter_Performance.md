Are you having performance issues with TestFairy Flutter Plugin?

Here are a few possible solutions:

# Network calls are slower than they are supposed to be

Try disabling network logging or update to TestFairy plugin 2.X.Y releases.

```dart
// Remove this line entirely to disable network logging
HttpOverrides.global = TestFairy.httpOverrides();
```

# Gestures are sometimes ignored

Try disabling `TestFairyGestureDetector` to see if it makes a difference.

```dart
// Change this
runApp(TestFairyGestureDetector(child: TestfairyExampleApp()));

// into this
runApp(TestfairyExampleApp());
```

# Devices with big screens suffer from frame drops

Get in touch with <a href="mailto:support@testfairy.com">support@testfairy.com</a> to discuss how we can improve this together.
