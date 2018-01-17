Adding the TestFairy plugin to your Cordova or Phonegap project is simple.
Cordova provides two workflows for development, either through the [command line](https://cordova.apache.org/docs/en/latest/guide/cli/index.html), or a [platform-centered workflow](https://cordova.apache.org/docs/en/latest/guide/platforms/index.html). If your current development leverages the platform-centered workflow, please refer to the [iOS integration document](/iOS_SDK/Integrating_iOS_SDK.html) for adding TestFairy to your project.
In this article we'll walk you through adding TestFairy to a new project through the command-line workflow.

For Ionic and Ionic 2 applications, please check out the [Ionic](https://docs.testfairy.com/Platforms/Ionic.html) documentation.

## Installation

### Cordova

First, make sure you have `cordova` installed on your machine. To do so you can follow the [instructions](https://cordova.apache.org/docs/en/latest/guide/overview/index.html) on getting started.

Once installed, we'll start with creating a new project. If you already have an existing project, please skip to the next step.

To add the plugin to your project via [npm](https://www.npmjs.com/package/com.testfairy.cordova-plugin), simply run the following command from Terminal:

```
cordova plugin add com.testfairy.cordova-plugin
```

Alternatively, you can install it directly from GitHub:

```
cordova plugin add https://github.com/testfairy/testfairy-cordova-plugin
```

## Upgrading

To upgrade your plugin, please run:

```
cordova plugin update com.testfairy.cordova-plugin
```

## Usage

Initialize TestFairy with your [App Token](https://app.testfairy.com/settings/#apptoken) by calling `TestFairy.begin`. Your **APP TOKEN** is available at `https://app.testfairy.com/settings/#apptoken`.

It's recommended to invoke `TestFairy.begin` from `onDeviceReady`. For example, here's *onDeviceReady* from `index.js`:

```
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
    TestFairy.begin("APP TOKEN");
  }
```

## Remote Logging

TestFairy provides a way to view your application's log statements along with your session. Please note that this API does not log to the console, as well.

```
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

## Identifying Users

TestFairy can automatically detect sessions recorded by the same user, however, in many cases there is some additional information that can help you generate better insights.

```
TestFairy.begin("APP TOKEN");
TestFairy.setUserId("USER ID");
```

Where `USER ID` is a string representing an association to your backend. It may be, for example, the ID of this user in your database or some random GUID. This value may not be null, and is searchable via API and web search.

# Session Attributes

TestFairy can collect additional information from your session, which can help you generate better insights.

```
TestFairy.setAttribute("key", "value");
```

The first value is a string `key` to help you search for the attribute in your session. The second paramter `value` is any string value for the attribute associated with the session. Neither value can be null. These attributes are available later in the session recording page, are available via API, and are searchable.

## Where to go from here?

Congratulations! You've successfully integrated TestFairy into your Cordova project! Visit your [dashboard](http://app.testfairy.com/), where you should see your app listed.

* Have a look at the [API documentation](https://github.com/testfairy/testfairy-cordova-plugin/blob/master/www/testfairy.js) for other calls you can make to the TestFairy plugin

* Follow the project on [GitHub](https://github.com/testfairy/testfairy-cordova-plugin) for updates, bug reports, or to contribute to the project!
