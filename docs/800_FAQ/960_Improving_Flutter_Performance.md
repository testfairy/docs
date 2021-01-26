Are you having performance issues with TestFairy Flutter Plugin?

Here are a few possible solutions:

## Gestures are sometimes ignored or app feels sluggish

Try disabling `TestFairyGestureDetector` to see if it makes a difference.

```dart
// Change this
runApp(TestFairyGestureDetector(child: TestfairyExampleApp()));

// into this
runApp(TestfairyExampleApp());
```

## Network calls are slower than they are supposed to be

Try disabling network logging or update to TestFairy plugin 2.X.Y releases.

```dart
// Remove this line entirely to disable network logging
HttpOverrides.global = TestFairy.httpOverrides();
```

## Devices with big screens suffer from frame drops or sessions have too little screenshots

Get in touch with <a href="mailto:support@testfairy.com">support@testfairy.com</a> to discuss how we can improve this together.
