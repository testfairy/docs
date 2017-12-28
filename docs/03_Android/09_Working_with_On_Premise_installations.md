
TestFairy can be installed on a private cloud, or as an on-premise installation within your organization. With this installation, all the data is stored privately using your own resources.

TestFairy's Android SDK can be ordered to use other servers than the default public installation. For example, an organization that has TestFairy installed on the domain `dev.myorg.com` has to add a single call when initializing the SDK:

```java
@Override
public void onCreate() {
	TestFairy.setServerEndpoint("https://dev.myorg.com/services/"); 
	TestFairy.begin(this, YOUR_APP_TOKEN); // e.g "0000111122223333444455566667777788889999";
}
```

Please note that we added a call to *setServerEndpoint*, telling the SDK where to find the REST API endpoint.

