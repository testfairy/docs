<iframe width="560" height="315" src="https://www.youtube.com/embed/HpLOsNwd_FM" frameborder="0" allowfullscreen></iframe>


TestFairy for React native is a bridge to the [TestFairy](https://www.testfairy.com) SDK. Integrating the TestFairy SDK into your app enables you to better understand how your app performs on real devices. It tells you when and how people are using your app, and provides you with any metrics you may need to optimize your user experience and code.

# Automatic Installation

If you are using version 0.36 or later of React-Native, this is the recommended approach to adding the TestFairy SDK to your app.
From your project root, run the following commands:

```
npm install --save react-native-testfairy
react-native link
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

TestFairy provides a way to view your application's log statements along with your session. Please note that this API does not log to the console, as well.

```
const TestFairy = require('react-native-testfairy');
...

TestFairy.log("Your log message here");
```

We recommend wrapping all log statements with a custom method, which will output to both the console and to TestFairy sessions. One suggestion we have is to add a method that looks like this:

```
var _testfairyConsoleLog = console.log;
console.log = function(message) {
    _testfairyConsoleLog(message);
  TestFairy.log(message);
}
```

### User ID and Session Attributes

TestFairy can automatically detect sessions recorded by the same user, however, in many cases there is some additional information that can help you generate better insights.

You have to invoke `setUserId` or `setAttribute`. With `setUserId`, you can pass in a string representing an association to your backend. It may be, for example, the ID of this user in your database or some random GUID. This value may not be null or empty, and is searchable via API and web search.

The second method, `setAttributes` uses predefined key/value attributes. These attributes are later available in the session recording page, are available via API, and are searchable.

```
const TestFairy = require('react-native-testfairy');
...
componentWillMount: function() {
  TestFairy.setUserId("joe@example.com");
  TestFairy.setAttribute("phone_number": "+672-14-5109");
  TestFairy.setAttribute("internal_id": 1454325432543253);
  TestFairy.setAttribute("custom.wears": "black");

  TestFairy.begin(<insert ios app token here>);
}
```

For more information on identifying your users, head over [here](http://docs.testfairy.com/iOS_SDK/Identifying_Your_Users.html).

### Hiding views

TestFairy enables developers to hide specific views from the recorded video, for security and privacy reasons. For example, you might want to conceal any information related to credit card data from appearing in the session recording.

In order to hide views from your recorded session, you will need to pass a reference to a view to TestFairy.
First, give the element to be hidden a `ref` attribute. For example:

```
<Text ref="instructions">This will be hidden</Text>
```

Next, in a component callback, such as `componentDidMount`, pass the reference ID back to TestFairy by invoking `hideView`.

```
const TestFairy = require('react-native-testfairy');
...
var MyComponent = React.createClass({
  ...
  componentWillMount: function() {
    TestFairy.begin('<insert ios app token here>');
  },

  componentDidMount: function() {
    TestFairyBridge.hideView(this.refs.instructions);
  },
  ...
  render: function() {
    return (<Text ref="instructions">This will be hidden</Text>);
  }
});
```

Now your Views will be hidden before any video is uploaded to TestFairy.

And that's it! You can now log into your [account](http://app.testfairy.com) and view your sessions. In addition, feel free to refer to the [documentation](https://github.com/testfairy/react-native-testfairy/blob/master/index.js) for other available APIs.

### Where to go from here?
* Have a look at the [API documentation](https://app.testfairy.com/reference/ios/) for other calls you can make to the TestFairy plugin

* Follow the project on [GitHub](https://github.com/testfairy/react-native-testfairy) for updates, bug reports, or to contribute to the project!
