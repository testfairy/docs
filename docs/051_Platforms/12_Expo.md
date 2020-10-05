<iframe width="560" height="315" src="https://www.youtube.com/embed/HpLOsNwd_FM" frameborder="0" allowfullscreen></iframe>

[TestFairy for React Native](https://www.npmjs.com/package/react-native-testfairy) is a bridge to the TestFairy SDK and it is also supported for Expo projects. Integrating the TestFairy SDK into your app enables you to better understand how your app performs on real devices. It tells you when and how people are using your app, and provides you with any metrics you may need to optimize your user experience and code.

# Requirements

You will have to eject your Expo project before installing TestFairy. This is a revertable process but reverting will also make you lose access to TestFairy features. Apps that require native components are expected to utilize the bare workflow as stated in the [Expo docs](https://docs.expo.io/expokit/eject/).

# Steps

From your project root, run the following commands:

```
expo eject
npm install --save react-native-testfairy

cd ios
pod install
```

# Notes

Since all Expo apps are React Native apps behind the scenes, all features introduced in [TestFairy for React Native](https://www.npmjs.com/package/react-native-testfairy) applies to Expo as well.
