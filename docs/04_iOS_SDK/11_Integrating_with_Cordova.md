Adding TestFairy plugin to your Cordova or Ionic project is simple. Cordova provides two workflows for development, either through the [command line](https://cordova.apache.org/docs/en/latest/guide/cli/index.html), or a [platform-centered workflow](https://cordova.apache.org/docs/en/latest/guide/platforms/index.html). If your current development leverages the platform-centered workflow, then please refer to the [iOS integration document](/iOS_SDK/Integrating_iOS_SDK.html) for adding TestFairy to your project. Here, we'll walkthrough adding TestFairy to a new project through the command-line workflow.

* Make sure you have `cordova` installed on your machine, you can follow instructions [here](https://cordova.apache.org/docs/en/latest/guide/overview/index.html) on getting started.

* Once installed, we'll start with creating an new project. If you already have an existing project, then please skip to the next step
```
$ cordova create TestFairyCordova com.testfairy.cordova
$ cd TestFairyCordova
```

* Make sure you're supporting iOS as a platform by running the following command. This may take a minute to complete.
```
$ cordova platform add ios
```

* Next, simply add the TestFairy plugin directly from (GitHub)[https://github.com/testfairy/testfairy-cordova-plugin] to your project. Make sure you're at the root of your project.
```
$ cordova plugin add https://github.com/testfairy/testfairy-cordova-plugin
```

* Once the plugin has been installed, edit your launch file. In this example, the launch file is found in `project-root/www/js/index.js`. Edit the `onDeviceReady` function to include the call to start TestFairy. Remember to use your own App Token found in your settings page http://app.testfairy.com/settings
```
onDeviceReady: function() {
    app.receivedEvent('deviceready');
    TestFairy.begin('<iOS SDK App Token from http://app.testfairy.com/settings>');
},
```

* Run your app by running the following `cordova` command
```
$ cordova run ios
```

* Check your console log, and you should see the following message
```
TestFairy: Session started successfully
```

Congratulations! You've successfully integrated TestFairy into your Cordova project! Visit your [dashboard](http://app.testfairy.com/), and you should see your app listed.

### Where to go from here?
* Have a look at the [API documentation](https://app.testfairy.com/reference/ios/) for other calls you can make to the TestFairy plugin

* Follow the project on [GitHub](https://github.com/testfairy/testfairy-cordova-plugin) for updates, reporting bugs, or contributing to the project!
