Adding TestFairy plugin to your Cordova or Phonegap project is simple. Cordova provides two workflows for development, either through the [command line](https://cordova.apache.org/docs/en/latest/guide/cli/index.html), or a [platform-centered workflow](https://cordova.apache.org/docs/en/latest/guide/platforms/index.html). If your current development leverages the platform-centered workflow, then please refer to the [iOS integration document](/iOS_SDK/Integrating_iOS_SDK.html) for adding TestFairy to your project. Here, we'll walkthrough adding TestFairy to a new project through the command-line workflow.

For Ionic and Ionic 2 application, please check out the [Ionic](https://docs.testfairy.com/Platforms/Ionic.html) documentation.

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

## Where to go from here?

Congratulations! You've successfully integrated TestFairy into your Cordova project! Visit your [dashboard](http://app.testfairy.com/), and you should see your app listed.

* Have a look at the [API documentation](https://github.com/testfairy/testfairy-cordova-plugin/blob/master/www/testfairy.js) for other calls you can make to the TestFairy plugin

* Follow the project on [GitHub](https://github.com/testfairy/testfairy-cordova-plugin) for updates, reporting bugs, or contributing to the project!
 

