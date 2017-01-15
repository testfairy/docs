Adding TestFairy plugin to your Ionic project is simple. 

## Install te TestFairy Ionic plugin

Run the following commands:

```
ionic plugin add com.testfairy.cordova-plugin
cordova plugin add cordoba-plugin-console
```
Alternatively, you could install it directly from GitHub:
```
ionic plugin add https://github.com/testfairy/testfairy-cordova-plugin
```

## Add TestFairy to your code

Initialize TestFairy with your [App Token](https://app.testfairy.com/settings/#apptoken) by calling `TestFairy.begin`. 
Your App Token is available at `https://app.testfairy.com/settings/#apptoken`.

1. Copy your app token from `https://app.testfairy.com/settings/#apptoken`.
2. Open your app.js file (located in your-project/www/js).
3. Initialize the TestFairy plugin in the `ready` method

```
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    TestFairy.begin("APP TOKEN"); //taken from https://app.testfairy.com/settings/#apptoken 
  });
})
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
 
