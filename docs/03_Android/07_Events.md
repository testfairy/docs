Events are used to provide insight regarding the way your testers use your apps.   
These can help you monitor when a tester has reached key points in your app, such as or visiting the in-app store.      

### Usage:

To add an event called "Purchase ok" please add the following line

**`TestFairy.addEvent("Purchase OK");`**

By adding the line above, a new column in your build coverage page will appear. It will be titled "Purchase OK", and will be turned only for sessions where this event was called.   

Please remember that events are rendered in a table, consider good names and keep them short.

### Code example

```
public class MyActivity extends Activity {
        private void onPurchaseComplete() {
                TestFairy.addEvent("Purchase OK");
        }
}
```

Consider the following flow: your tester has started the app, and visited the store in your app. You would like to track which sessions completed a successful purchase.   

![Screenshot without][1] 
[1]: https://app.testfairy.com/images/app/docs/example-checkpoints.png

