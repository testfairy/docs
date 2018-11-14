In order to add the TestFairy plugin to a Neptune project, you need to do the following procedure.

## Enable the TestFairy plugin
Add the following to the config.xml file in the Neptune Cockpit under Run/Mobile Client/Device.
```
<plugin name="com.testfairy.cordova-plugin" source="npm"/>
```

## Initialize the TestFairy SDK:

Add the following code to your `init` script the App Designer:

```
document.addEventListener("deviceready", function() {
    TestFairy.begin("APP TOKEN");
});
```

Remember to replace **APP TOKEN** with your own app token as displayed in [User Preferences](https://app.testfairy.com/settings/)
