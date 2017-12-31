TestFairy for Nativescript is a bridge to the [TestFairy](https://www.testfairy.com) SDK. Integrating the TestFairy SDK into your app allows better understanding of how your app performs on real devices. It tells you when and how people are using your app, and provide you with any metric you need to optimize for better user experience and better code.

## Installation

```
tns plugin add nativescript-testfairy
```

## Usage
Once the native library has been added to your project, you can now enable session recording with TestFairy. You will need an app token, which you can get from your [preferences](http://app.testfairy.com/settings/) page on your TestFairy account.

Next, from your JavaScript file, (app.js or app.ts for example), import the TestFairy bridge into your project, and invoke `begin` passing in the app token. Best time to invoke `begin` is usually on `launchEvent`. 

Here's an example of starting your recording in TypeScript
```
import * as application from 'tns-core-modules/application';
import { TestFairySDK } from 'nativescript-testfairy';

application.on(application.launchEvent, (args) => {
    TestFairySDK.begin(<insert ios app token here>);
});

application.start({ moduleName: "main-page" });
```

Here's the same example of starting your recording in JavaScript
```

require("./bundle-config");
var application = require("application");
var TestFairySDK = require('nativescript-testfairy').TestFairySDK;

application.on(application.launchEvent, (args) => {
    TestFairySDK.begin(<insert ios app token here>);
});

application.start({ moduleName: "main-page" });
```

And that's it! You can now log into your [account](http://app.testfairy.com) and view your sessions. Also, feel free to refer to the [documentation](https://github.com/testfairy/react-native-testfairy/blob/master/index.js) for other available APIs.

### User ID and Session Attributes

TestFairy can automatically detect sessions recorded by the same user, however, in many cases there is some additional information that would help you generate better insights.

You have to invoke `setUserId` or `setAttribute`. With `setUserId`, you can pass in a string representing an association to your backend. It may be, for example, the ID of this user in your database or some random GUID. This value may not be null or empty, and is searchable via API and web search.

The second method, `setAttributes` uses predefined key/value attributes. These attributes are available later in the session recording page, is available via API, and is searchable.

```
// in Nativescript
import { TestFairySDK } from 'nativescript-testfairy';

// in Javascript
var TestFairySDK = require('nativescript-testfairy').TestFairySDK;

...

TestFairySDK.setUserId("johns@example.com");

TestFairySDK.setAttribute("name": "John Snow");
TestFairySDK.setAttribute("phone_number": "+672-14-5109");
TestFairySDK.setAttribute("session_id": "12345678");

TestFairySDK.begin(<insert ios app token here>);
```

For more information on identifying your users, head over [here](http://docs.testfairy.com/iOS_SDK/Identifying_Your_Users.html).

### Remote Logging

TestFairy provides a way of viewing your application's log statements along with your session. Note that this api does not also log to the console.

```
// in Nativescript
import { TestFairySDK } from 'nativescript-testfairy';

// in Javascript
var TestFairySDK = require('nativescript-testfairy').TestFairySDK;

...

TestFairySDK.log("Your log message here");
```

We recommend wrapping all log statements with a custom method, which will output to both the console and to TestFairy sessions. One suggestion we have is to add a method that looks as follows:

```
var _testfairyConsoleLog = console.log;
console.log = function(message) {
    _testfairyConsoleLog(message);
	TestFairySDK.log(message);
}
```

### Hiding views

TestFairy allows the developer to hide specific views from the recorded video. As the developer, you may choose to hide one or more views from video for security and privacy reasons. For example, you might want to remove all information related to credit card data from appearing in the session.

In order to hide views from your recorded session, you will need to pass a reference to a view to TestFairy. 

```
// in Nativescript
import { TestFairySDK } from 'nativescript-testfairy';

// in Javascript
var TestFairySDK = require('nativescript-testfairy').TestFairySDK;

...

TestFairySDK.hideView(view);
```

Both approaches are acceptable and the corresponding view will be hidden.

And that's it! You can now log into your [account](http://app.testfairy.com) and view your sessions. Also, feel free to refer to the [documentation](https://github.com/testfairy/react-native-testfairy/blob/master/index.js) for other available APIs.

### Where to go from here?

* Follow the project on [GitHub](https://github.com/testfairy/nativescript-testfairy) for updates, reporting bugs, or contributing to the project!
