<iframe width="560" height="315" src="https://www.youtube.com/embed/HpLOsNwd_FM" frameborder="0" allowfullscreen></iframe>


TestFairy for React native is a bridge to the [TestFairy](https://www.testfairy.com) SDK. Integrating the TestFairy SDK into your app enables you to better understand how your app performs on real devices. It tells you when and how people are using your app, and provides you with any metrics you may need to optimize your user experience and code.

# Automatic Installation

If you are using version 0.36 or later of React-Native, this is the recommended approach to adding the TestFairy SDK to your app.
From your project root, run the following commands:

```
npm install --save react-native-testfairy
react-native link react-native-testfairy
```

If the above steps don't seem to work out, try to use the manual steps described below:

# Manual Installation

The manual installation is recommended for running React Native verions 0.36 and below. The manual steps below are vary, based on the platform you're targeting. If you are targetting both Android and iOS, you will need to complete both sections.

## iOS

1. `npm install --save react-native-testfairy`
1. In XCode, in the project navigator, right click `Libraries` -> `Add Files to [your project's name]`
1. In the finder window, go to `node_modules` -> `react-native-testfairy` and add `ReactNativeTestFairy.xcodeproj`
4. Run your project (`Cmd+R`)

## Android

1. `npm install --save react-native-testfairy`
1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.testfairy.react.TestFairyPackage;` to the imports at the top of the file
  - Add `new TestFairyPackage()` to the list returned by the `getPackages()` method
1. Append the following lines to `android/settings.gradle`:
  	```
    include ':react-native-testfairy'
    project(':react-native-testfairy').projectDir = new File(settingsDir, '../node_modules/react-native-testfairy/android')
  	```
1. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-testfairy')
  	```

# Usage

Once the native library has been added to your project, you can now enable session recording with TestFairy. You will need your app token, which you can get from your [preferences](http://app.testfairy.com/settings/) page on your TestFairy account.

Next, from your JavaScript file, (`index.ios.js`, `index.android.js` or `App.js` for example), import the TestFairy bridge into your project, and invoke `begin` passing in the app token. The best time to invoke `begin` is usually in `componentWillMount` or right before you register your application.

```
const TestFairy = require('react-native-testfairy');
...
componentWillMount: function() {
  TestFairy.begin(<insert ios app token here>);
}
```

And that's it! You can now log into your [account](http://app.testfairy.com) and view your sessions. Also, feel free to refer to the [documentation](https://github.com/testfairy/react-native-testfairy/blob/master/index.js) for other available APIs.

### Remote Logging

See the [SDK Documentation](https://docs.testfairy.com/SDK/Remote_Logging.html#react-native) for more information.

### Identifying your Users

See the [SDK Documentation](https://docs.testfairy.com/SDK/Identifying_Your_Users.html#react-native) for more information.

### Session Attributes

See the [SDK Documentation](https://docs.testfairy.com/SDK/Session_Attributes.html#react-native) for more information.

### Hiding views

See the [SDK Documentation](https://docs.testfairy.com/SDK/Hiding_Sensitive_Data.html#react-native) for more information.

### Where to go from here?

* Have a look at the [API documentation](https://app.testfairy.com/reference/ios/) for other calls you can make to the TestFairy plugin

* Follow the project on [GitHub](https://github.com/testfairy/react-native-testfairy) for updates, bug reports, or to contribute to the project!
