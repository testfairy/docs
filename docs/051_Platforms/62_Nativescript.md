TestFairy for Nativescript is a bridge to the [TestFairy](https://www.testfairy.com) SDK. Integrating the TestFairy SDK into your app enables you to better understand how your app performs on real devices. It tells you when and how people are using your app, and provides you with any metrics you may need to optimize your user experience and code.

## Installation

```
tns plugin add nativescript-testfairy
```

## Usage
Once the native library is added to your project, you can now enable session recording with TestFairy. You will need an app token, which can be found in your [Preferences](http://app.testfairy.com/settings/) page on your TestFairy account.

Next, from your JavaScript file, (app.js or app.ts for example), import the TestFairy bridge into your project, and invoke `begin` passing in the app token. The best time to invoke `begin` is usually on `launchEvent`.

Here's an example of how to start your recording in TypeScript:
```
import * as application from 'tns-core-modules/application';
import { TestFairySDK } from 'nativescript-testfairy';

application.on(application.launchEvent, (args) => {
    TestFairySDK.begin(<insert ios app token here>);
});

application.start({ moduleName: "main-page" });
```

Here's the same example of starting your recording in JavaScript:
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

See the [SDK Documentation](https://docs.testfairy.com/SDK/Identifying_Your_Users.html#nativescript) for more information.

### Remote Logging

See the [SDK Documentation](https://docs.testfairy.com/SDK/Identifying_Your_Users.html#nativescript) for more information.

### Hiding views

See the [SDK Documentation](https://docs.testfairy.com/SDK/Identifying_Your_Users.html#nativescript) for more information.

### Where to go from here?

* Follow the project on [GitHub](https://github.com/testfairy/nativescript-testfairy) for updates, bug reports, or to contribute to the project!
