Events are used to provide insights on the how testers use your apps.   
These can help you keep track of when a tester reaches key points in your app, such as visiting the in-app store.      

### Usage:

To add an event, for instance one called "Purchase ok", please add the following line

**`TestFairy.addEvent("Purchase OK");`**

By adding the line above, a new column in your [Build Coverage Report](http://docs.testfairy.com/Getting_Started/Testing_Reports.html) page will appear, titled according to the event (in this case "Purchase OK").   

Please remember that events are rendered in a table, consider using indicative names and keep them short.

### Code example

```
public class MyActivity extends Activity {
        private void onPurchaseComplete() {
                TestFairy.addEvent("Purchase OK");
        }
}
```

