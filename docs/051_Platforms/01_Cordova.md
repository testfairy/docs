
TestFairy SDK for PhoneGap/Cordova/Ionic is currently available for iOS and Android apps.

Adding TestFairy plugin to your Cordova or Ionic project is simple. Cordova provides two workflows for development, either through the [command line](https://cordova.apache.org/docs/en/latest/guide/cli/index.html), or a [platform-centered workflow](https://cordova.apache.org/docs/en/latest/guide/platforms/index.html). If your current development leverages the platform-centered workflow, then please refer to the [iOS integration document](/iOS_SDK/Integrating_iOS_SDK.html) for adding TestFairy to your project. Here, we'll walkthrough adding TestFairy to a new project through the command-line workflow.

## Installation

### Cordova

Make sure you have `cordova` installed on your machine, you can follow instructions [here](https://cordova.apache.org/docs/en/latest/guide/overview/index.html) on getting started.

Once installed, we'll start with creating an new project. If you already have an existing project, then please skip to the next step

To add the plugin to your project via [npm](https://www.npmjs.com/package/com.testfairy.cordova-plugin), simply run the following command from Terminal:

```
cordova plugin add com.testfairy.cordova-plugin
```

Alternatively, you could install it directly from GitHub:

```
cordova plugin add https://github.com/testfairy/testfairy-cordova-plugin
```

### Ionic and Ionic 2

The same plugin can be used for ionic by installing the plugin using the following command

```
ionic plugin add com.testfairy.cordova-plugin
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

Check your console log, and you should see the following message
```
TestFairy: Session started successfully
```

### Ionic

On Ionic, you can initialize the TestFairy plugin in the `ready` method. Your **APP TOKEN** is available at `https://app.testfairy.com/settings/#apptoken`.

```
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    TestFairy.begin("APP TOKEN");
  });
})
```

Check your console log, and you should see the following message
```
TestFairy: Session started successfully
```

### Ionic 2
With Ionic 2, after adding the plugin to your project, you must first add a path to the plugin typescript definition. Modify your `typings/index.d.ts` by adding the line

```
/// <reference path="../plugins/com.testfairy.cordova-plugin/www/testfairy.d.ts" />
```

Next, in your `app.ts` file, right after the imports, add the following line to import TestFairy

```
declare var TestFairy: TestFairy;
```

Finally, invoke `begin` passing in your **APP TOKEN** which is available at `https://app.testfairy.com/settings/#apptoken`. We recommend invoking the `begin` method once `platform.ready()` is invoked as given in the example below:

```
platform.ready().then(() => {
  TestFairy.begin(APP TOKEN);
  ...
});
```

## Where to go from here?

Congratulations! You've successfully integrated TestFairy into your Cordova project! Visit your [dashboard](http://app.testfairy.com/), and you should see your app listed.

* Have a look at the [API documentation](https://github.com/testfairy/testfairy-cordova-plugin/blob/master/www/testfairy.js) for other calls you can make to the TestFairy plugin

* Follow the project on [GitHub](https://github.com/testfairy/testfairy-cordova-plugin) for updates, reporting bugs, or contributing to the project!
 

