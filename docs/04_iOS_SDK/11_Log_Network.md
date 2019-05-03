With TestFairy, you can log all your network requests. This gives you an easy way to monitor network access your app is doing.

A common issue our users discovered while monitoring their apps, is **slow** requests or **404** error code. These problems are usually hard to discover manually. TestFairy will list all network requests in the session page. Fixing these issues will greatly improve the experience for your users.

![see example](https://raw.githubusercontent.com/testfairy/docs/master/img/app/logHttp.png)


### Usage:
```[TestFairy addNetwork:(NSURLSessionTask *)task error:(NSError *)error]```

**Note**: You must enable recording of network requests in your build settings

![see example](/img/enable_network_recording.png)

### Example:
If you are using **NSURLConnection**, **AFNetworking** or **Alamofire** all you need to do is add callback to your request at the beginning of the request and at the end:

```
__block NSURLSessionTask *task = [[NSURLSession sharedSession] dataTaskWithURL:url
		   completionHandler:^(NSData *data,
							   NSURLResponse *response,
							   NSError *error) {
				// ...
				[TestFairy addNetwork:task error:error];
		   }];
	[TestFairy addNetwork:task error:nil];
	[task resume];
```

With **Alamofire**, it's even easier:

```
import Alamofire
...
NotificationCenter.default.addObserver(forName: Request.didResume, object: nil, queue: nil) { (notification) in
	let info = notification.userInfo
	let request = info?["org.alamofire.notification.key.request"] as! Request
	request.tasks.forEach { TestFairy.addNetwork($0, error: nil) }
}

NotificationCenter.default.addObserver(forName: Request.didComplete, object: nil, queue: nil) { (notification) in
	let info = notification.userInfo
	let request = info?["org.alamofire.notification.key.request"] as! Request
	request.tasks.forEach { TestFairy.addNetwork($0, error: nil) }
}
```
