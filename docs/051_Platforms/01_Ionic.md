Adding TestFairy plugin to your Ionic or Ionic 2 project is simple. 

## Install te TestFairy Ionic plugin

Run the following commands from your application root folder:

```
ionic plugin add com.testfairy.cordova-plugin
```

Alternatively, you could install it directly from GitHub:

```
ionic plugin add https://github.com/testfairy/testfairy-cordova-plugin
```

In order to support [remote logging](https://docs.testfairy.com/iOS_SDK/Remote_Logging.html) for iOS 10 devices, you'll need to install the console plugin

```
ionic plugin add cordova-plugin-console
```

## Add TestFairy to your code

Initialize TestFairy with your [App Token](https://app.testfairy.com/settings/#apptoken) by calling `TestFairy.begin`. 
Your App Token is available at `https://app.testfairy.com/settings/#apptoken`.

1. Copy your app token from `https://app.testfairy.com/settings/#apptoken`.
2. Open your app.js file (located in your-project/www/js).
3. Initialize the TestFairy plugin in the `ready` method

### Ionic 1.x

```
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    TestFairy.begin("APP TOKEN"); //taken from https://app.testfairy.com/settings/#apptoken 
  });
})
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

## Validate the TestFairy integration
1. Run your app to create a new TestFairy session.
2. Visit your [dashboard](http://app.testfairy.com/), and you should see your app listed. Click on your app to the sessions for your app.
3. Click on a session to see the session video, logs and the metrics.

## Upgrading

To upgrade your plugin, please run:

```
ionic plugin update com.testfairy.cordova-plugin
```

## Where to go from here?

Congratulations! You've successfully integrated TestFairy into your Ionic project! Visit your [dashboard](http://app.testfairy.com/), and you should see your app listed.

* Have a look at the [API documentation](https://github.com/testfairy/testfairy-cordova-plugin/blob/master/www/testfairy.js) for other calls you can make to the TestFairy plugin

* Follow the project on [GitHub](https://github.com/testfairy/testfairy-cordova-plugin) for updates, reporting bugs, or contributing to the project!
 
