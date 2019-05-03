With TestFairy, you can log all your network requests. This gives you an easy way to monitor network access your app is doing.

A common issue our users discovered while monitoring their apps, is **slow** requests or **404** error code. These problems are usually hard to discover manually. TestFairy will list all network requests in the session page. Fixing these issues will greatly improve the experience for your users.

![see example](https://raw.githubusercontent.com/testfairy/docs/master/img/app/logHttp.png)


### Usage:
```TestFairy.addNetworkEvent(URI uri, String method, int code, long startTimeMillis, long endTimeMillis, long requestSize, long responseSize, String errorMessage)```

**Note**: You must enable recording of network requests in your build settings

![see example](/img/enable_network_recording.png)

### Example:
If you are using **OkHttp** or **Retrofit** all you need to do is add CustomHttpInterceptor to your client:

```
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
```
