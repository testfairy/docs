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

### Where to go from here?

* Follow the project on [GitHub](https://github.com/testfairy/nativescript-testfairy) for updates, reporting bugs, or contributing to the project!
