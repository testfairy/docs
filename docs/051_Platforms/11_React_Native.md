<iframe width="560" height="315" src="https://www.youtube.com/embed/HpLOsNwd_FM" frameborder="0" allowfullscreen></iframe>

[TestFairy for React Native](https://www.npmjs.com/package/react-native-testfairy) is a bridge to the TestFairy SDK. Integrating the TestFairy SDK into your app enables you to better understand how your app performs on real devices. It tells you when and how people are using your app, and provides you with any metrics you may need to optimize your user experience and code.

# Automatic Installation

From your project root, run the following commands:

```
npm install --save react-native-testfairy
```

If you're using React Native > 0.60.0, you will need to run the following command in your `ios` directory

```
cd ios
pod install
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

- Have a look at the [API documentation](https://docs.testfairy.com/reference/ios/) for other calls you can make to the TestFairy plugin

- Follow the project on [GitHub](https://github.com/testfairy/react-native-testfairy) for updates, bug reports, or to contribute to the project!
