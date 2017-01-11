TestFairy offers a means to allow developers to log items with a session, without logging to the console output.

## Syntax

```
// Remote logging. These logs will be sent to the server, but will not appear in the console.
TFLog(...);
```

### Code example

```
// Be sure to import the header anywhere you want to use remote logging
#import "TestFairy.h"

TFLog("There are %lu items", list.count);
```
