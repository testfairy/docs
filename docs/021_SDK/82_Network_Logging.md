### Network Loging

With TestFairy, you can log all your network requests. This gives you an easy way to monitor network access your app is doing.


![Log Network](/img/sdk/logHttp.png)


<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;" href="#android">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-ios-objc" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#ios-objc">
			<div>iOS - Objective C</div>
		</a>
		<a data-w-tab="tab-ios-swift" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#ios-swift">
			<div>iOS - Swift</div>
		</a>
	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
			<h3>Syntax</h3>
			<p>
				<b>TestFairy.addNetworkEvent(URI uri, String method, int code, long startTimeMillis, long endTimeMillis, long requestSize, long responseSize, String errorMessage);</b><br />
			</p>

			<h3>Code Example</h3>
			<p>If you are using <b>OkHttp</b> or <b>Retrofit</b> all you need to do is add CustomHttpInterceptor to your client:</p>
			<pre>
// Be sure to import TestFairy
import com.testfairy.TestFairy;

public class CustomHttpInterceptor implements Interceptor {
	@Override
	public Response intercept(@NonNull Chain chain) throws IOException {

		Request request = chain.request();
		long startTimeMillis = System.currentTimeMillis();
		Long requestSize = request.body() != null ? request.body().contentLength() : 0;
		Response response;
		try {
			response = chain.proceed(request);
		} catch (IOException e) {
			long endTimeMillis = System.currentTimeMillis();
			TestFairy.addNetworkEvent(request.url().uri(), request.method(), -1, startTimeMillis, endTimeMillis, requestSize, -1, e.getMessage());
			throw e;
		}

		long endTimeMillis = System.currentTimeMillis();
		long responseSize = response.body() != null ? response.body().contentLength() : 0;
		TestFairy.addNetworkEvent(request.url().uri(), request.method(), response.code(), startTimeMillis, endTimeMillis, requestSize, responseSize, null);
		return response;
	}
}


OkHttpClient client = new OkHttpClient.Builder()
	.addInterceptor(new CustomHttpInterceptor())
	.build();
			</pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>[TestFairy addNetwork:(NSURLSessionTask *)task error:(NSError *)error]</b><br />
			</p>

			<h3>Code Example</h3>
			<p>If you are using <b>NSURLConnection</b> all you need to do is add callback to your request at the beginning of the request and at the end.</p>
			<p>Note: If you have <b>AFNetworking</b> added to your project, network requests will be automatically captured when enabled in your build settings.</p>
			<pre>
// Be sure to import TestFairy
#import "TestFairy.h"

__block NSURLSessionTask *task = [[NSURLSession sharedSession] dataTaskWithURL:url completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
	// ...
	[TestFairy addNetwork:task error:error];
}];
[TestFairy addNetwork:task error:nil];
[task resume];
			</pre>
		</div>

		<div data-w-tab="tab-ios-swift" class="w-tab-pane">
			<h3>Syntax</h3>
			<p>
				<b>TestFairy.addNetwork(&lt;URLSessionTask&gt;, error:&lt;NSError&gt;)</b><br />
			</p>

			<h3>Code Example</h3>
			<p>If you are using <b>URLConnection</b> all you need to do is add callback to your request at the beginning of the request and at the end:</p>
			<pre>
var task: URLSessionTask? = nil
task = URLSession.shared.dataTask(with: URL(string:"")!) { (data, response, error) in
	TestFairy.addNetwork(task, error: error)
}
TestFairy.addNetwork(task, error: nil)
task?.resume()
			</pre>

			<p>With <b>Alamofire</b>, it's even easier:</p>
			<pre>
import Alamofire

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
</pre>
		</div>


	</div>
</div>
