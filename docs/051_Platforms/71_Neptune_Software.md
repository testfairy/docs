In order to add the TestFairy plugin to a Neptune project, you need to do the following procedure.

## Enable the TestFairy plugin
Add the following to the config.xml file. In *Neptune Application Management* this is available under `Header` section.

```
<plugin name="com.testfairy.cordova-plugin" source="npm"/>
```

## Initialize the TestFairy SDK:

Add the following code to your `init` script:

```
document.addEventListener("deviceready", function() {
    TestFairy.begin("APP TOKEN");
}
```

Remember to replace **APP TOKEN** with your own app token as displayed in User Preferences page.
